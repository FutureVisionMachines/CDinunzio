import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold tracking-[0.06em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(93,134,168,0.6)] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-[linear-gradient(135deg,#355a79,#274560)] text-[#edf4fa] shadow-[0_10px_28px_rgba(8,17,24,0.45)] hover:-translate-y-0.5 hover:brightness-110',
        outline:
          'border border-[rgba(173,189,206,0.36)] bg-[rgba(10,16,22,0.45)] text-[#dce6ef] hover:border-[rgba(216,159,82,0.62)] hover:bg-[rgba(15,23,31,0.7)]',
        ghost:
          'text-[#c4cfda] hover:bg-[rgba(93,134,168,0.15)] hover:text-[#eff6fd]',
        amber:
          'bg-[linear-gradient(135deg,#cb9044,#a67231)] text-[#0e0a04] shadow-[0_12px_28px_rgba(32,22,9,0.45)] hover:-translate-y-0.5 hover:brightness-105',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8 text-sm',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button }
