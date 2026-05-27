import { Link } from 'react-router-dom'
import { Award, Shield, Target } from 'lucide-react'
import { PageHero } from '@/components/common/page-hero'
import { PageTransition } from '@/components/common/page-transition'
import { Reveal } from '@/components/common/reveal'
import { SectionHeading } from '@/components/common/section-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { operatingPrinciples, timelineMilestones } from '@/content/site-content'
import { usePageMeta } from '@/hooks/use-page-meta'
import chrisProfessional from '@/assets/chris-professional.jpg'

const principleIcons = [Shield, Target, Award]

export function AboutPage() {
  usePageMeta({
    title: 'About | Christopher Dinunzio',
    description:
      'Learn about Christopher Dinunzio, Canada\'s Operational Security Strategist, and the leadership philosophy behind his consulting approach.',
  })

  return (
    <PageTransition>
      <PageHero
        eyebrow="About Christopher Dinunzio"
        title="Operational Leadership Grounded In Real-World Consequence"
        description="Christopher advises organizations that operate where risk, leadership pressure, and systems reliability intersect. His approach combines frontline context with executive-level procedural architecture."
        actions={[
          { label: 'View Services', to: '/services', variant: 'outline' },
          { label: 'Request Consultation', to: '/contact', variant: 'amber' },
        ]}
      />

      <section className="section-shell py-14 md:py-20">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Card className="h-full">
              <CardHeader>
                <Badge variant="muted" className="w-fit">
                  Strategic Biography
                </Badge>
                <CardTitle className="text-3xl">
                  Built In Operations. Refined For Executive Readiness.
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-[1rem] text-[#aab7c5]">
                <p>
                  Christopher Dinunzio has spent his career where operational
                  reliability is tested by real-world pressure, uncertain conditions,
                  and high-consequence decision windows.
                </p>
                <p>
                  His consulting model is designed to move organizations beyond
                  surface-level security activity toward disciplined readiness systems,
                  resilient leadership behavior, and procedurally clear execution.
                </p>
                <p>
                  The result is not a static binder of policies. It is an integrated
                  operational doctrine that can hold when stress rises and ambiguity
                  increases.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="h-full overflow-hidden">
              <div className="border-b border-[rgba(147,165,183,0.22)] p-5">
                <div className="overflow-hidden rounded-lg border border-[rgba(153,170,187,0.24)] bg-[radial-gradient(circle_at_25%_14%,rgba(64,92,118,0.35),rgba(11,16,22,0.92))]">
                  <img
                    src={chrisProfessional}
                    alt="Christopher Dinunzio wearing a suit in an outdoor setting"
                    className="mx-auto h-auto max-h-96 w-full object-contain object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#cf9d5d]">
                  Field Experience. Strategic Doctrine.
                </p>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Authority Snapshot</CardTitle>
                <CardDescription>
                  The consulting posture is grounded in systems thinking, command
                  clarity, and practical implementation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-[#afbdcb]">
                <p>- Operational audits across multi-site organizations</p>
                <p>- Incident readiness architecture and rehearsal systems</p>
                <p>- SOP doctrine design for field and leadership alignment</p>
                <p>- Executive advisory support during high-pressure cycles</p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Leadership Timeline"
          title="From Field Execution To Strategic Operational Advisory"
          description="Each stage of Christopher's background informs a methodology designed to hold under pressure."
        />
        <div className="space-y-4">
          {timelineMilestones.map((item, index) => (
            <Reveal key={item.year + item.title} delay={index * 0.06}>
              <Card>
                <CardContent className="grid gap-4 py-7 md:grid-cols-[120px_1fr] md:items-start">
                  <p className="font-heading text-xl font-semibold text-[#d5a162] md:text-2xl">
                    {item.year}
                  </p>
                  <div>
                    <h3 className="font-heading text-2xl text-[#ecf4fb]">{item.title}</h3>
                    <p className="mt-2 text-[0.98rem] text-[#a9b8c6]">{item.detail}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Operating Principles"
          title="Doctrine That Shapes Every Engagement"
          description="These principles guide diagnostics, solution design, and leadership advisory decisions across sectors."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {operatingPrinciples.map((principle, index) => {
            const Icon = principleIcons[index % principleIcons.length]
            return (
              <Reveal key={principle} delay={index * 0.06}>
                <Card className="h-full">
                  <CardContent className="pt-7">
                    <Icon className="h-5 w-5 text-[#d59f5a]" />
                    <p className="mt-4 text-lg text-[#e7eff7]">{principle}</p>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <Reveal className="surface-panel rounded-2xl px-6 py-10 text-center md:px-12 md:py-14">
          <p className="font-heading text-3xl font-semibold text-[#edf6ff] md:text-5xl">
            Leadership confidence is built before disruption, not during it.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-[#afbcc9]">
            Engage Christopher to design a readiness posture your teams can trust
            when stakes are highest.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="amber" size="lg">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/insights">Read Leadership Insights</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  )
}
