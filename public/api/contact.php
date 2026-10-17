<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

// Keep credentials outside public_html. With /home/nourdoc/public_html/api/contact.php,
// the default is /home/nourdoc/nourdoc-config.php.
$configPath = getenv('NOURDOC_CONFIG_PATH') ?: dirname(__DIR__, 2) . '/nourdoc-config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode(['message' => 'Form delivery is not configured on this server.']);
    exit;
}

try {
    $config = require $configPath;
} catch (Throwable) {
    http_response_code(500);
    echo json_encode(['message' => 'Form delivery is not configured on this server.']);
    exit;
}

if (!is_array($config)) {
    http_response_code(500);
    echo json_encode(['message' => 'Form delivery is not configured on this server.']);
    exit;
}

$requiredConfigKeys = [
    'resend_api_key', 'from_email', 'from_name', 'to_email',
    'recaptcha_secret_key', 'allowed_hostnames',
];
foreach ($requiredConfigKeys as $requiredConfigKey) {
    if (!array_key_exists($requiredConfigKey, $config) || $config[$requiredConfigKey] === '' || $config[$requiredConfigKey] === null) {
        http_response_code(500);
        echo json_encode(['message' => 'Form delivery is not configured on this server.']);
        exit;
    }
}

$allowedHostnames = is_array($config['allowed_hostnames'])
    ? array_values(array_filter(array_map(
        static fn($hostname): string => strtolower(rtrim(trim((string)$hostname), '.')),
        $config['allowed_hostnames']
    )))
    : [];
if ($allowedHostnames === []) {
    http_response_code(500);
    echo json_encode(['message' => 'Form delivery is not configured on this server.']);
    exit;
}
$requestOrigin = $_SERVER['HTTP_ORIGIN'] ?? '';
$requestOriginHost = strtolower((string)(parse_url($requestOrigin, PHP_URL_HOST) ?? ''));

if ($requestOrigin !== '') {
    if (!in_array($requestOriginHost, $allowedHostnames, true) || parse_url($requestOrigin, PHP_URL_SCHEME) !== 'https') {
        http_response_code(403);
        echo json_encode(['message' => 'Origin is not allowed.']);
        exit;
    }
    header('Access-Control-Allow-Origin: ' . $requestOrigin);
    header('Vary: Origin');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST, OPTIONS');
    echo json_encode(['message' => 'Method not allowed.']);
    exit;
}

// Basic IP rate limiting before provider calls.
$rateLimitWindow = max(1, (int)($config['rate_limit_window_seconds'] ?? 60));
$rateLimitMax = max(1, (int)($config['rate_limit_max_requests'] ?? 5));
$rateLimitFile = sys_get_temp_dir() . '/nourdoc-contact-' . hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? 'unknown')) . '.json';
$rateHandle = fopen($rateLimitFile, 'c+');
if ($rateHandle !== false) {
    flock($rateHandle, LOCK_EX);
    $rateContents = stream_get_contents($rateHandle);
    $timestamps = json_decode($rateContents ?: '[]', true);
    $timestamps = is_array($timestamps) ? array_values(array_filter($timestamps, static fn($time): bool => is_int($time) && $time > time() - $rateLimitWindow)) : [];
    if (count($timestamps) >= $rateLimitMax) {
        flock($rateHandle, LOCK_UN);
        fclose($rateHandle);
        http_response_code(429);
        echo json_encode(['message' => 'Too many requests. Please try again later.']);
        exit;
    }
    $timestamps[] = time();
    ftruncate($rateHandle, 0);
    rewind($rateHandle);
    fwrite($rateHandle, json_encode($timestamps));
    fflush($rateHandle);
    flock($rateHandle, LOCK_UN);
    fclose($rateHandle);
}

$payload = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid request payload.']);
    exit;
}

// Honeypot: real users never see or fill this field.
if (trim((string)($payload['website'] ?? '')) !== '') {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid request.']);
    exit;
}

$fields = [
    'name' => trim((string)($payload['name'] ?? '')),
    'organization' => trim((string)($payload['organization'] ?? '')),
    'role' => trim((string)($payload['role'] ?? '')),
    'country' => trim((string)($payload['country'] ?? '')),
    'email' => trim((string)($payload['email'] ?? '')),
    'phone' => trim((string)($payload['phone'] ?? '')),
    'topic' => trim((string)($payload['topic'] ?? '')),
    'message' => trim((string)($payload['message'] ?? '')),
];

$required = ['name', 'organization', 'role', 'country', 'email', 'topic', 'message'];
foreach ($required as $field) {
    if ($fields[$field] === '') {
        http_response_code(422);
        echo json_encode(['message' => 'Please complete all required fields.']);
        exit;
    }
}

if (!filter_var($fields['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['message' => 'Please enter a valid email address.']);
    exit;
}

if (strlen($fields['message']) > 2000 || strlen($fields['name']) > 100 || strlen($fields['organization']) > 120
    || strlen($fields['role']) > 100 || strlen($fields['country']) > 80 || strlen($fields['email']) > 120
    || strlen($fields['phone']) > 30) {
    http_response_code(422);
    echo json_encode(['message' => 'One or more fields exceed the allowed length.']);
    exit;
}

$recaptchaToken = trim((string)($payload['recaptchaToken'] ?? ''));
$recaptchaSecretKey = (string)($config['recaptcha_secret_key'] ?? '');

if ($recaptchaToken === '' || $recaptchaSecretKey === '' || str_contains($recaptchaSecretKey, 'XXXX')) {
    http_response_code(500);
    echo json_encode(['message' => 'Form protection is not configured on this server.']);
    exit;
}

// The browser uses the visible reCAPTCHA v2 checkbox (react-google-recaptcha),
// so verify its token using Google's v2 siteverify endpoint. Do not add a v3
// action check here: v2 checkbox tokens do not contain an action.
if (!function_exists('curl_init')) {
    http_response_code(500);
    echo json_encode(['message' => 'Form delivery is unavailable on this server.']);
    exit;
}

$verificationPayload = [
    'secret' => $recaptchaSecretKey,
    'response' => $recaptchaToken,
    'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
];
$verificationCurl = curl_init('https://www.google.com/recaptcha/api/siteverify');
curl_setopt_array($verificationCurl, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query($verificationPayload, '', '&'),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
    CURLOPT_TIMEOUT => 15,
]);
$verificationResponse = curl_exec($verificationCurl);
$verificationStatus = (int)curl_getinfo($verificationCurl, CURLINFO_HTTP_CODE);
$verificationError = curl_error($verificationCurl);
curl_close($verificationCurl);

if ($verificationResponse === false || $verificationError !== '' || $verificationStatus < 200 || $verificationStatus >= 300) {
    http_response_code(502);
    echo json_encode(['message' => 'Security verification provider is unavailable. Please try again later.']);
    exit;
}

$verification = json_decode($verificationResponse, true);
if (!is_array($verification)) {
    http_response_code(502);
    echo json_encode(['message' => 'Security verification provider returned an invalid response.']);
    exit;
}

$verificationHostname = strtolower(rtrim((string)($verification['hostname'] ?? ''), '.'));

if (($verification['success'] ?? false) !== true || !in_array($verificationHostname, $allowedHostnames, true)) {
    http_response_code(403);
    echo json_encode(['message' => 'Security verification failed. Please try again.']);
    exit;
}

$apiKey = (string)($config['resend_api_key'] ?? '');
if ($apiKey === '' || str_contains($apiKey, 'xxxxxxxx')) {
    http_response_code(500);
    echo json_encode(['message' => 'Form delivery is not configured on this server.']);
    exit;
}

$safe = static fn(string $value): string => htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$isDemoSubmission = ($payload['intent'] ?? '') === 'bookDemo' || ($payload['formType'] ?? '') === 'bookDemo';
$subject = $isDemoSubmission ? 'Live Platform Demo Inquiry' : 'NourDoc website inquiry: ' . $fields['topic'];
$phoneHtml = $fields['phone'] !== ''
    ? '<p><strong>Phone:</strong> ' . $safe($fields['phone']) . '</p>'
    : '<p><strong>Phone:</strong> Not provided</p>';
$html = '<h2>New NourDoc website inquiry</h2>'
    . '<p><strong>Name:</strong> ' . $safe($fields['name']) . '</p>'
    . '<p><strong>Organization:</strong> ' . $safe($fields['organization']) . '</p>'
    . '<p><strong>Role:</strong> ' . $safe($fields['role']) . '</p>'
    . '<p><strong>Country:</strong> ' . $safe($fields['country']) . '</p>'
    . '<p><strong>Email:</strong> ' . $safe($fields['email']) . '</p>'
    . $phoneHtml
    . '<p><strong>Topic:</strong> ' . $safe($fields['topic']) . '</p>'
    . '<p><strong>Message:</strong><br>' . nl2br($safe($fields['message'])) . '</p>';

$request = json_encode([
    'from' => ($config['from_name'] ?? 'NourDoc Website') . ' <' . $config['from_email'] . '>',
    'to' => [$config['to_email']],
    'reply_to' => $fields['email'],
    'subject' => $subject,
    'html' => $html,
]);

$curl = curl_init('https://api.resend.com/emails');
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $request,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_TIMEOUT => 15,
]);
$response = curl_exec($curl);
$status = (int)curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

if ($response === false || $status < 200 || $status >= 300) {
    http_response_code(502);
    echo json_encode(['message' => 'We could not send your message right now. Please email hello@nour-doc.com.']);
    exit;
}

echo json_encode(['message' => 'Your message has been sent. Our team will reply shortly.']);
