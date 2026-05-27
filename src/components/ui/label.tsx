import * as React from 'react'
import { cn } from '@/lib/utils'

function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        'text-[0.73rem] font-semibold uppercase tracking-[0.12em] text-[#b7c4d0]',
        className,
      )}
      {...props}
    />
  )
}

export { Label }
