import * as React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-32 w-full rounded-md border border-[rgba(157,172,188,0.28)] bg-[rgba(10,16,22,0.7)] px-3 py-2 text-sm text-[#ecf3fb] placeholder:text-[#8d9aa8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(93,134,168,0.55)] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
