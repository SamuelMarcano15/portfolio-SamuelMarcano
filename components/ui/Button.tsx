import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base
          'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest rounded-full transition-all duration-200 cursor-pointer',
          // Sizes
          size === 'sm' && 'px-5 py-2 text-xs',
          size === 'md' && 'px-7 py-3 text-sm',
          size === 'lg' && 'px-10 py-4 text-base',
          // Variants
          variant === 'primary' && 'bg-primary text-background hover:brightness-110 hover:scale-105 active:scale-95',
          variant === 'secondary' && 'bg-secondary text-foreground hover:bg-secondary/80 hover:scale-105 active:scale-95',
          variant === 'outline' && 'border border-primary/60 text-foreground hover:bg-primary/10 hover:scale-105 active:scale-95',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
