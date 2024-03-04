import type { ComponentProps } from 'react';
import React from 'react';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    icon?: JSX.Element;
    children: React.ReactNode;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;
const button = tv({
  base: 'bg-black font-extrabold  text-xl py-3 rounded-[10px]',
  variants: {
    size: {
      xs: 'w-[300px]',
      xl: 'max-w-[700px]'
    },
    color: {
        gradient: 'bg-gradient-to-r from-[#8A21BB] via-[#4F3FA1]  to-[#2C0F55]'
    } 
  }

  
});
const Button = ({
  color,
  size,
  icon,
  children,
  type,
}: ButtonProps) => {
  return (
    <button type={type} className={button({ color, size })}>
      <div className="flex items-center   font-serif">
        {children}
        {icon && (
          <div className="ml-1" data-testid="button-icon">
            {icon}
          </div>
        )}
      </div>
    </button>
  );
};

export default Button;