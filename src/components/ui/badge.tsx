import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-[rgba(93,134,168,0.46)] bg-[rgba(24,40,56,0.45)] text-[#dce7f1]',
        amber:
          'border-[rgba(216,159,82,0.54)] bg-[rgba(76,50,20,0.35)] text-[#efc88f]',
        muted:
          'border-[rgba(160,174,188,0.32)] bg-[rgba(16,23,31,0.5)] text-[#aeb9c4]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge }
