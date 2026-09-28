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
    ? 'bg-nourdoc-dark-card text-white'
    : 'bg-white text-slate-900 shadow-sm';
  const borderStyles = border
    ? dark
      ? 'border border-white/10'
      : 'border border-slate-200/80'
    : '';
  const hoverStyles = hover
    ? dark
      ? 'hover:border-white/25 hover:shadow-xl hover:shadow-nourdoc-primary-dark'
      : 'hover:border-nourdoc-primary/30 hover:shadow-lg hover:shadow-nourdoc-primary/5 hover:-translate-y-1'
    : '';

  return (
    <div className={`${baseStyles} ${colorStyles} ${borderStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
