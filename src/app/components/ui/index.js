/**
 * UI Components Library
 * 
 * This file exports reusable UI components that maintain consistent styling
 * across the Monster Hunter Wilds Wiki application.
 */

import React from 'react';
import Link from 'next/link';

// Button component with variants
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  href = null,
  ...props 
}) {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded transition-colors';
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white',
    secondary: 'bg-white hover:bg-primary-50 text-primary-500 border border-primary-500',
    outline: 'bg-transparent hover:bg-primary-50 text-primary-500 border border-primary-500',
    text: 'bg-transparent hover:bg-primary-50 text-primary-500',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white',
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

// Card component
export function Card({ 
  children, 
  className = '',
  hover = true,
  ...props 
}) {
  return (
    <div 
      className={`bg-white dark:bg-card-background border border-border-light dark:border-border-dark rounded-lg shadow-card ${hover ? 'hover:shadow-card-hover hover:-translate-y-1 transition-all' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Card sections
export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`p-4 border-b border-border-light dark:border-border-dark ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={`p-4 border-t border-border-light dark:border-border-dark ${className}`} {...props}>
      {children}
    </div>
  );
}

// Section container
export function Section({ children, className = '', ...props }) {
  return (
    <section className={`py-8 ${className}`} {...props}>
      {children}
    </section>
  );
}

// Page container with consistent max width and padding
export function PageContainer({ children, className = '', ...props }) {
  return (
    <div className={`container mx-auto px-4 max-w-7xl ${className}`} {...props}>
      {children}
    </div>
  );
}

// Page header with title and optional subtitle
export function PageHeader({ 
  title, 
  subtitle = null,
  className = '',
  ...props 
}) {
  return (
    <div className={`py-6 mb-8 ${className}`} {...props}>
      <h1 className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">{title}</h1>
      {subtitle && <p className="mt-2 text-text-secondary dark:text-text-light/70">{subtitle}</p>}
    </div>
  );
}

// Badge component for status, categories, etc.
export function Badge({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) {
  const variantClasses = {
    default: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    info: 'bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200',
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}

// Grid layout component with responsive columns
export function Grid({ 
  children, 
  cols = 1,
  md = null,
  lg = null,
  xl = null,
  gap = 6,
  className = '',
  ...props 
}) {
  const colsClass = `grid-cols-${cols}`;
  const mdClass = md ? `md:grid-cols-${md}` : '';
  const lgClass = lg ? `lg:grid-cols-${lg}` : '';
  const xlClass = xl ? `xl:grid-cols-${xl}` : '';
  const gapClass = `gap-${gap}`;
  
  return (
    <div className={`grid ${colsClass} ${mdClass} ${lgClass} ${xlClass} ${gapClass} ${className}`} {...props}>
      {children}
    </div>
  );
}

// Alert component for notifications
export function Alert({ 
  children, 
  variant = 'info',
  className = '',
  ...props 
}) {
  const variantClasses = {
    info: 'bg-accent-50 text-accent-800 dark:bg-accent-900/50 dark:text-accent-300',
    success: 'bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    warning: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    error: 'bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-300',
  };
  
  return (
    <div className={`p-4 rounded-lg ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}

// Divider
export function Divider({ className = '', ...props }) {
  return (
    <hr className={`border-border-light dark:border-border-dark my-4 ${className}`} {...props} />
  );
}