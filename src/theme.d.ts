// src/theme.d.ts
export interface ThemeColors {
  primaryTeal: string;
  primaryTealHover: string;
  primaryTealDark: string;
  primaryTealLight: string;
  primaryTealSurface: string;
  secondaryTeal: string;
  secondaryTealHover: string;
  secondaryTealLight: string;
  bgWhite: string;
  bgSlateLight: string;
  bgSlateSubtle: string;
  bgCard: string;
  bgCardHover: string;
  bgDark: string;
  bgDarkCard: string;
  bgDarkCardHover: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textTeal: string;
  textWhite: string;
  borderLight: string;
  borderTeal: string;
  borderFocus: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface Theme {
  colors: ThemeColors;
  typography: {
    fontFamilySans: string[];
    fontFamilyMono: string[];
    fontWeights: Record<string, string>;
    lineHeights: Record<string, string>;
  };
  spacing: Record<string, string>;
  shadows: Record<string, string>;
  radii: Record<string, string>;
  breakpoints: Record<string, string>;
  motion: {
    duration: Record<string, string>;
    ease: Record<string, number[]>;
    spring: Record<string, { damping: number; stiffness: number }>;
  };
}

export declare const theme: Theme;
export default theme;
