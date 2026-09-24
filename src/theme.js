// src/theme.js
// NourDoc Design System Tokens & Brand Variables

/**
 * @typedef {Object} ThemeColors
 * @property {string} primaryTeal
 * @property {string} primaryTealHover
 * @property {string} primaryTealDark
 * @property {string} primaryTealLight
 * @property {string} primaryTealSurface
 * @property {string} secondaryTeal
 * @property {string} secondaryTealHover
 * @property {string} secondaryTealLight
 * @property {string} bgWhite
 * @property {string} bgSlateLight
 * @property {string} bgSlateSubtle
 * @property {string} bgCard
 * @property {string} bgCardHover
 * @property {string} bgDark
 * @property {string} bgDarkCard
 * @property {string} bgDarkCardHover
 * @property {string} textPrimary
 * @property {string} textSecondary
 * @property {string} textMuted
 * @property {string} textTeal
 * @property {string} textWhite
 * @property {string} borderLight
 * @property {string} borderTeal
 * @property {string} borderFocus
 * @property {string} success
 * @property {string} warning
 * @property {string} error
 * @property {string} info
 */

/**
 * @typedef {Object} ThemeMotion
 * @property {Object.<string, string>} duration
 * @property {Object.<string, number[]>} ease
 * @property {Object.<string, { damping: number, stiffness: number }>} spring
 */

/**
 * @typedef {Object} Theme
 * @property {ThemeColors} colors
 * @property {Object} typography
 * @property {Object.<string, string>} spacing
 * @property {Object.<string, string>} shadows
 * @property {Object.<string, string>} radii
 * @property {Object.<string, string>} breakpoints
 * @property {ThemeMotion} motion
 */

/** @type {Theme} */
export const theme = {
  colors: {
    // Brand Primary Teal (Visual PDF pp. 1, 16-17)
    primaryTeal: '#507D88',
    primaryTealHover: '#3F646D',
    primaryTealDark: '#2C4950',
    primaryTealLight: '#EBF3F5',
    primaryTealSurface: '#F4F9FA',
    
    // Brand Secondary Light Teal
    secondaryTeal: '#7AB1BF',
    secondaryTealHover: '#649CA9',
    secondaryTealLight: '#F0F7F9',
    
    // Neutral Backgrounds
    bgWhite: '#FFFFFF',
    bgSlateLight: '#F8FAFC',
    bgSlateSubtle: '#F1F5F9',
    bgCard: '#FFFFFF',
    bgCardHover: '#FAFCFD',
    
    // Dark Contrast Backgrounds (Footer, Technical diagrams)
    bgDark: '#0F172A',
    bgDarkCard: '#1E293B',
    bgDarkCardHover: '#334155',
    
    // Text Hierarchy
    textPrimary: '#0F172A',
    textSecondary: '#475569',
    textMuted: '#64748B',
    textTeal: '#507D88',
    textWhite: '#FFFFFF',
    
    // Borders & UI
    borderLight: '#E2E8F0',
    borderTeal: 'rgba(80, 125, 136, 0.25)',
    borderFocus: '#507D88',
    
    // Status & Feedback
    success: '#10B981',
    warning: '#F59E0B',
    error: '#DC2626',
    info: '#0284C7',
  },
  typography: {
    fontFamilySans: ['"Plus Jakarta Sans"', '"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
    fontFamilyMono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
    fontWeights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeights: {
      tight: '1.15',
      normal: '1.5',
      relaxed: '1.7',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
    md: '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
    lg: '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
    xl: '0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
    tealGlow: '0 10px 25px -5px rgba(80, 125, 136, 0.25)',
    cardHover: '0 12px 30px -4px rgba(80, 125, 136, 0.12)',
  },
  radii: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  motion: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.5s',
      deliberate: '0.8s',
    },
    ease: {
      standard: [0.16, 1, 0.3, 1],
      inOut: [0.4, 0, 0.2, 1],
    },
    spring: {
      snappy: { damping: 25, stiffness: 300 },
      gentle: { damping: 30, stiffness: 200 },
    },
  },
};

export default theme;
