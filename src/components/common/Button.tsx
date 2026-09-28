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
    primary: 'bg-nourdoc-primary text-white hover:bg-nourdoc-primary-hover shadow-sm hover:shadow-nourdoc-primary/20 focus-visible:outline-nourdoc-primary',
    secondary: 'bg-nourdoc-primary-light text-nourdoc-primary hover:bg-nourdoc-secondary-light font-bold focus-visible:outline-nourdoc-primary',
    outline: 'border border-nourdoc-primary text-nourdoc-primary bg-transparent hover:bg-nourdoc-primary-light focus-visible:outline-nourdoc-primary',
    ghost: 'text-[#475569] hover:text-nourdoc-primary hover:bg-[#F8FAFC] focus-visible:outline-nourdoc-primary',
    dark: 'bg-nourdoc-primary-dark text-white hover:bg-nourdoc-primary-hover shadow-md focus-visible:outline-nourdoc-primary',
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
