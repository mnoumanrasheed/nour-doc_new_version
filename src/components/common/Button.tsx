// src/components/common/Button.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = false,
  external = false,
  type = 'button',
  className = '',
  disabled = false,
  'aria-label': ariaLabel,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wide',
    md: 'px-5 py-2.5 text-sm tracking-wide',
    lg: 'px-7 py-3.5 text-base font-bold tracking-wide',
  };

  const variantStyles = {
    primary: 'bg-[#507D88] text-white hover:bg-[#3F646D] shadow-sm hover:shadow-[#507D88]/20 focus-visible:outline-[#507D88]',
    secondary: 'bg-[#EBF3F5] text-[#507D88] hover:bg-[#d8eaee] font-bold focus-visible:outline-[#507D88]',
    outline: 'border border-[#507D88] text-[#507D88] bg-transparent hover:bg-[#EBF3F5] focus-visible:outline-[#507D88]',
    ghost: 'text-[#475569] hover:text-[#507D88] hover:bg-[#F8FAFC] focus-visible:outline-[#507D88]',
    dark: 'bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-md focus-visible:outline-[#0F172A]',
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      };

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        external ? (
          <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
        ) : (
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        )
      )}
    </>
  );

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={`group ${classes}`} aria-label={ariaLabel}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={`group ${classes}`}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${classes}`}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
};
