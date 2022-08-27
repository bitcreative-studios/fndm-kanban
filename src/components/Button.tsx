import React, { ReactNode } from 'react'
import clsx from 'clsx'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'large' | 'default'
  // Use submit if button is intended for form submission
  type?: 'button' | 'submit'
  // span width of container
  fluid?: boolean
  // Is the button inactive
  disabled?: boolean
  // Button content
  children: ReactNode
}

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  fluid,
  size = 'default',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = [
    'inline-flex items-center justify-center rounded-full border border-transparent px-5 transition duration-150 select-none',
  ]
  return (
    <button
      type={type}
      className={clsx(
        baseStyles,
        {
          'heading-md bg-brand text-white hover:bg-brand-100': variant === 'primary',
          'heading-md bg-grey-50 text-brand hover:bg-[#D8D7F1]': variant === 'secondary',
          'bg-danger text-white hover:bg-danger-100': variant === 'danger',
          'w-full': fluid,
          'leading-loose': size !== 'large',
          'pointer-events-none bg-brand-100 opacity-50': disabled,
        },
        size === 'large' && variant === 'primary' ? 'py-3' : 'py-2',
        size === 'large' ? 'heading-md' : 'text-xs font-bold tracking-wider'
      )}
    >
      {children}
    </button>
  )
}

export default Button
