import { Reveal } from '@/components/common/reveal'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'mb-12 flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <Badge variant="muted">{eyebrow}</Badge>
      <h2 className="font-heading text-balance text-3xl font-semibold leading-tight text-[#edf4fa] md:text-5xl">
        {title}
      </h2>
      <p className="max-w-3xl text-pretty text-[1rem] text-[#a8b6c4] md:text-[1.06rem]">
        {description}
      </p>
    </Reveal>
  )
}
