// src/components/common/Badge.tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'light' | 'dark' | 'outline' | 'neutral' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs font-semibold',
    md: 'px-3.5 py-1 text-xs font-bold tracking-wide uppercase',
  };

  const variantStyles = {
    teal: 'bg-[#EBF3F5] text-[#507D88] border border-[#507D88]/20',
    light: 'bg-white text-[#475569] border border-slate-200 shadow-sm',
    dark: 'bg-[#0F172A] text-white',
    outline: 'bg-transparent text-[#507D88] border border-[#507D88]',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  };

  return (
    <span className={`inline-flex items-center rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
