import type { ComponentProps } from 'react'
import React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export type ButtonProps = ComponentProps<'button'> &
  // eslint-disable-next-line no-use-before-define
  VariantProps<typeof button> & {
    icon?: JSX.Element
    children: React.ReactNode
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
const button = tv({
  base: 'bg-black font-bold border-black hover:bg-transparent hover:border-[1px] border-[1px] hover:border-white    text-base text-white  sm:text-xl py-3 rounded-[10px]',
  variants: {
    size: {
      xs: 'w-[300px]',
      xl: 'px-0 sm:px-20',
    },
    color: {
      green:
        'hover:bg-transparent  hover:border-white border-[#4BAE51] border-[1px] bg-[#4BAE51]',
      gradient:
        'hover:bg-gradient-to-l hover:from-[#8A21BB] hover:to-[#2C0F55] bg-gradient-to-r from-[#8A21BB] transition-all via-[#4F3FA1]  to-[#2C0F55]',
      gradientsecondary:
        ' hover:bg-gradient-to-l hover:from-[#4F3FA1] hover:to-[#2C0F55] bg-gradient-to-r from-[#4F3FA1] to-[#2C0F55]',
    },
  },
})
const Button = ({ color, size, icon, children, type }: ButtonProps) => {
  return (
    <button type={type} className={button({ color, size })}>
      <div className="mx-3 flex items-center font-sans">
        {icon && (
          <div className="ml-1 " data-testid="button-icon">
            {icon}
          </div>
        )}
        {children}
      </div>
    </button>
  )
}

export default Button
