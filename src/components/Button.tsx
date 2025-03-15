import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  to?: string;
  onClick?: () => void;
};

export const Button = ({ 
  children, 
  variant = 'primary',
  className = '',
  to,
  onClick
}: ButtonProps) => {
  const baseStyles = "font-semibold rounded-full transform transition-all duration-300 flex items-center gap-2";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 hover:scale-105 shadow-lg",
    secondary: "text-gray-600 hover:text-indigo-600 px-4 py-2"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};