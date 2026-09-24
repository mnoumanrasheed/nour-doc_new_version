// src/types/content.ts
// Type definitions for NourDoc content schemas

export interface CtaConfig {
  label: string;
  type: 'app' | 'demo' | 'route' | 'formSelect';
  target?: string;
  topic?: string;
}

export interface HierarchyLevel {
  title: string;
  role: string;
  path: string;
  description: string;
}

export interface BrandData {
  name: string;
  tagline: string;
  masterBrandStatement: string;
  subTagline: string;
  appStoreUrl: string;
  emails: {
    sales: string;
    support: string;
    partnerships: string;
    investors: string;
  };
  hierarchy: {
    level1: HierarchyLevel;
    level2: HierarchyLevel;
    level3: HierarchyLevel;
  };
}

export interface NavigationItem {
  title: string;
  path: string;
}

export interface FormFieldConfig {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

export interface FooterLink {
  label: string;
  path: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  brand: {
    name: string;
    tagline: string;
    summary: string;
    masterStatement: string;
  };
  columns: FooterColumn[];
}
