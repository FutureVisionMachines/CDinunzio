import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/common/reveal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface HeroAction {
  label: string
  to: string
  variant?: 'default' | 'outline' | 'amber'
}

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  actions?: HeroAction[]
  children?: ReactNode
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  children,
}: PageHeroProps) {
  return (
    <section className="section-shell relative py-14 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-6 -z-10 h-64 rounded-full bg-[radial-gradient(circle,rgba(101,139,171,0.24),transparent_65%)] blur-3xl" />
      <Reveal className="tactical-border surface-panel rounded-2xl px-6 py-10 md:px-10 md:py-14">
        <div className="max-w-4xl">
          <Badge>{eyebrow}</Badge>
          <h1 className="font-heading mt-6 text-balance text-4xl font-semibold leading-[1.06] text-[#f2f8ff] md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-[1.05rem] text-[#afbcc9] md:text-[1.15rem]">
            {description}
          </p>
          {actions && actions.length > 0 ? (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {actions.map((action) => (
                <Button asChild key={action.to + action.label} variant={action.variant ?? 'default'}>
                  <Link to={action.to}>{action.label}</Link>
                </Button>
              ))}
            </div>
          ) : null}
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </Reveal>
    </section>
  )
}
