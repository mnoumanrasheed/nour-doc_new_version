// src/components/common/Card.tsx
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
  border?: boolean;
  revealDelay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  dark = false,
  hover = true,
  border = true,
  revealDelay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const baseStyles = 'rounded-2xl p-6 md:p-8 transition-all duration-300 relative group';
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
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={hover && !shouldReduceMotion ? { y: -4 } : undefined}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay: revealDelay, ease: 'easeOut' }}
      className={`${baseStyles} ${colorStyles} ${borderStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};
