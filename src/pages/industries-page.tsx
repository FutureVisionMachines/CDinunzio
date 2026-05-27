import { Link } from 'react-router-dom'
import { Building2, Factory, HeartPulse, Landmark, Users } from 'lucide-react'
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
import { industries } from '@/content/site-content'
import { usePageMeta } from '@/hooks/use-page-meta'

const industryIcons = [Factory, HeartPulse, Users, Landmark, Building2]

export function IndustriesPage() {
  usePageMeta({
    title: 'Industries | CDN Security Consultant',
    description:
      'Industry-specific operational risk consulting for oil and gas, healthcare, hospitality, municipal infrastructure, and commercial organizations.',
  })

  return (
    <PageTransition>
      <PageHero
        eyebrow="Industries Served"
        title="Risk Models Tailored To Sector-Specific Operational Reality"
        description="Every sector carries different pressure points. Engagements are adapted to the exact decision cycles, risk exposure, and continuity demands of your operating environment."
        actions={[
          { label: 'Discuss Your Sector', to: '/contact', variant: 'amber' },
          { label: 'Review Services', to: '/services', variant: 'outline' },
        ]}
      />

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Sector Models"
          title="Operational Strategy Built Around Real Industry Constraints"
          description="No generic playbooks. Each engagement anchors strategic decisions to sector-specific consequence patterns."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industryIcons[index % industryIcons.length]
            return (
              <Reveal key={industry.id} delay={index * 0.06}>
                <Card className="h-full">
                  <CardHeader>
                    <Icon className="h-5 w-5 text-[#d9a864]" />
                    <CardTitle className="text-2xl">{industry.name}</CardTitle>
                    <CardDescription>{industry.riskLens}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#d8a460]">
                      Strategic Focus
                    </p>
                    <div className="mt-3 space-y-2">
                      {industry.strategicFocus.map((focus) => (
                        <Badge key={focus} variant="muted" className="mr-2 mt-1 inline-flex">
                          {focus}
                        </Badge>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-[#9eb0bf]">{industry.signal}</p>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Cross-Sector Capabilities"
          title="Consistent Strategic Advantages Across Complex Environments"
          description="While sector context changes, these capabilities repeatedly drive stronger outcomes."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Systems-Level Risk Visibility</CardTitle>
                <CardDescription>
                  Integrated views of people, process, asset, and leadership risk.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-[#aebccc]">
                <p>- Cascading-failure mapping before disruption events</p>
                <p>- Prioritization models aligned to consequence exposure</p>
                <p>- Leadership-ready decision frameworks</p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Execution Discipline Under Pressure</CardTitle>
                <CardDescription>
                  Architecture and rehearsal systems that improve incident performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-[#aebccc]">
                <p>- Escalation role clarity across teams</p>
                <p>- Procedural playbooks built for field usability</p>
                <p>- Leadership confidence reinforced through scenario rehearsal</p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <Reveal className="surface-panel rounded-2xl px-6 py-10 text-center md:px-12 md:py-14">
          <p className="font-heading text-balance text-3xl font-semibold text-[#eef6ff] md:text-5xl">
            Operational strategy should reflect the realities of your sector, not a generic template.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-[#adbbc8]">
            Discuss your organization and build a readiness model tailored to your
            specific risk landscape.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="amber" size="lg">
              <Link to="/contact">Book Sector Consultation</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  )
}
