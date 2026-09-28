// src/theme.d.ts
export interface ThemeColors {
  primary: string;
  primaryHover: string;
    primaryDark: string;
  primaryMedium: string;
  accentLight: string;
  accentHover: string;
  primaryLight: string;
  primarySurface: string;
  secondary: string;
  secondaryHover: string;
  secondaryLight: string;
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
  textPrimaryBrand: string;
  textWhite: string;
  borderLight: string;
  borderPrimary: string;
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
