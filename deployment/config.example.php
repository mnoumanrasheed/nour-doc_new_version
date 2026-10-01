<?php

// Copy this template to /home/nourdoc/nourdoc-config.php.
// Keep that private file outside public_html, Git, and dist.
return [
    // Resend settings. Required for live delivery.
    'resend_api_key' => 're_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'from_email' => 'website@nour-doc.com',
    'from_name' => 'NourDoc Website',
    'to_email' => 'hello@nour-doc.com',

    // Google Cloud reCAPTCHA Enterprise settings.
    'recaptcha_project_id' => 'your-google-cloud-project-id',
    'recaptcha_api_key' => 'AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    'recaptcha_site_key' => '6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    'recaptcha_expected_action' => 'contact_submit',
    'recaptcha_min_score' => 0.5,

    // Only these website hostnames may submit and pass assessment validation.
    'allowed_hostnames' => [
        'nour-doc.com',
        'www.nour-doc.com',
    ],

    // Basic server-side abuse controls.
    'rate_limit_max_requests' => 5,
    'rate_limit_window_seconds' => 60,
];
