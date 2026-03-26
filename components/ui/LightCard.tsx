import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface LightCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

/**
 * Light card — bg-foreground (#F0F1EE), text-background (#031522)
 * Use for the biography card and other high-contrast light panels.
 */
export default function LightCard({ className, hover = false, children, ...props }: LightCardProps) {
  return (
    <div
      className={cn(
        'bg-foreground text-background rounded-3xl p-6 overflow-hidden relative',
        hover && 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
