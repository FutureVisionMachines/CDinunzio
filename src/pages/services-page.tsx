import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/common/page-hero'
import { PageTransition } from '@/components/common/page-transition'
import { Reveal } from '@/components/common/reveal'
import { SectionHeading } from '@/components/common/section-heading'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { engagementSteps, services } from '@/content/site-content'
import { usePageMeta } from '@/hooks/use-page-meta'

export function ServicesPage() {
  usePageMeta({
    title: 'Services | CDN Security Consultant',
    description:
      'Explore operational security consulting services by Christopher Dinunzio: audits, crisis readiness, SOP architecture, and strategic advisory.',
  })

  return (
    <PageTransition>
      <PageHero
        eyebrow="Consulting Services"
        title="Operational Readiness Services Built For Real Pressure Environments"
        description="Each service combines strategic analysis with practical implementation so organizations can operate with discipline, clarity, and confidence under stress."
        actions={[
          { label: 'Request Consultation', to: '/contact', variant: 'amber' },
          { label: 'View Industries', to: '/industries', variant: 'outline' },
        ]}
      />

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Service Architecture"
          title="From Risk Diagnosis To Leadership Activation"
          description="The service model is modular by design, allowing focused interventions or full-stack operational transformation."
        />

        <div className="space-y-5">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl">{service.name}</CardTitle>
                  <CardDescription>{service.summary}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#d9a864]">
                        Challenge Framing
                      </p>
                      <p className="mt-2 text-[#aebccb]">{service.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#d9a864]">
                        Methodology
                      </p>
                      <p className="mt-2 text-[#aebccb]">{service.approach}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#d9a864]">
                      Deliverables
                    </p>
                    <div className="mt-3 space-y-2">
                      {service.deliverables.map((deliverable) => (
                        <p key={deliverable} className="flex items-start gap-2 text-[#c2d0dc]">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#8fb0ca]" />
                          {deliverable}
                        </p>
                      ))}
                    </div>
                    <p className="mt-5 rounded-lg border border-[rgba(150,167,183,0.25)] bg-[rgba(10,15,21,0.62)] p-3 text-sm text-[#9eafbe]">
                      {service.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Engagement Sequence"
          title="How Strategic Engagements Are Structured"
          description="Clear sequencing ensures every mandate starts with disciplined diagnosis and ends with real implementation momentum."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {engagementSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08}>
              <Card className="h-full">
                <CardHeader>
                  <p className="font-heading text-sm tracking-[0.18em] text-[#d8a360]">
                    STEP {step.step}
                  </p>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#aebcca]">{step.detail}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <Reveal className="surface-panel rounded-2xl px-6 py-10 md:px-12 md:py-14">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-heading text-balance text-3xl font-semibold text-[#edf6ff] md:text-5xl">
                Move from reactive security activity to engineered operational readiness.
              </p>
              <p className="mt-4 text-[#aebcca]">
                Book a strategic consultation to determine the right engagement scope
                for your organization.
              </p>
            </div>
            <Button asChild variant="amber" size="lg">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Start Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  )
}
