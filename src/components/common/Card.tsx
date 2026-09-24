// src/components/common/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
  border?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  dark = false,
  hover = true,
  border = true,
}) => {
  const baseStyles = 'rounded-2xl p-6 md:p-8 transition-all duration-300 relative';
  const colorStyles = dark
    ? 'bg-[#1E293B] text-white'
    : 'bg-white text-slate-900 shadow-sm';
  const borderStyles = border
    ? dark
      ? 'border border-slate-700/60'
      : 'border border-slate-200/80'
    : '';
  const hoverStyles = hover
    ? dark
      ? 'hover:border-[#7AB1BF]/40 hover:shadow-xl hover:shadow-[#0F172A]'
      : 'hover:border-[#507D88]/30 hover:shadow-lg hover:shadow-[#507D88]/5 hover:-translate-y-1'
    : '';

  return (
    <div className={`${baseStyles} ${colorStyles} ${borderStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
