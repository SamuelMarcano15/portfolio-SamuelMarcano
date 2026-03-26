import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

/**
 * Dark card — bg-secondary, rounded-3xl
 * Use for most content panels in the dark theme.
 */
export default function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-transparent border border-secondary rounded-3xl p-6 overflow-hidden relative',
        hover && 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
