import React from "react";

export function Button({ children, className = "", variant = "default", onClick, ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}