import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Radar, ShieldCheck, Waypoints } from 'lucide-react'
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
import {
  authorityMetrics,
  engagementSteps,
  insights,
  services,
  testimonialHighlights,
} from '@/content/site-content'
import { usePageMeta } from '@/hooks/use-page-meta'
import chrisProfessional from '@/assets/chris-professional.jpg'

const spotlightIcons = [ShieldCheck, Radar, Waypoints]

export function HomePage() {
  usePageMeta({
    title: 'CDN Security Consultant | Operational Strategy Under Pressure',
    description:
      'Strategic operational security consulting by Christopher Dinunzio for organizations where failure carries real consequences.',
  })

  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  })
  const glowY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <PageTransition>
      <section ref={heroRef} className="section-shell relative py-16 md:py-20">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-16 top-2 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(92,131,165,0.28),transparent_64%)] blur-3xl"
          style={{ y: glowY }}
        />
        <Reveal className="surface-panel tactical-border rounded-2xl px-6 py-10 md:px-12 md:py-14">
          <Badge>Canada&apos;s Operational Security Strategist</Badge>
          <h1 className="font-heading mt-6 max-w-5xl text-balance text-4xl font-semibold leading-[1.03] text-[#f1f8ff] md:text-7xl">
            Security fails quietly until it does not.
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-[1.06rem] text-[#b2bfcc] md:text-[1.18rem]">
            Operational consulting for organizations where leadership decisions,
            procedural discipline, and response quality determine whether disruption
            is contained or escalates.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="amber" size="lg">
              <Link to="/contact">Request Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_320px] lg:items-end">
            <div className="rounded-xl border border-[rgba(141,160,179,0.22)] bg-[rgba(9,14,20,0.62)] p-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#d8a45f]">
                Operational Authority
              </p>
              <p className="mt-3 max-w-2xl text-[#b7c3cf]">
                Strategic advisory shaped by real-world operational consequence and
                refined for executive decision environments.
              </p>
              <p className="mt-4 rounded-lg border border-[rgba(143,161,179,0.22)] bg-[rgba(10,16,23,0.55)] p-3 text-sm text-[#9caebe]">
                Built for organizations that need disciplined readiness, clearer
                command decisions, and resilient operating systems under pressure.
              </p>
            </div>
            <div className="surface-panel edge-fade rounded-xl p-3">
              <div className="overflow-hidden rounded-lg border border-[rgba(149,167,185,0.24)] bg-[radial-gradient(circle_at_30%_18%,rgba(68,95,122,0.35),rgba(12,18,24,0.9))]">
                <img
                  src={chrisProfessional}
                  alt="Christopher Dinunzio in a professional suit outdoors"
                  className="mx-auto h-auto max-h-96 w-full object-contain object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-1 pb-1 pt-3">
                <p className="font-heading text-lg text-[#ecf4fb]">
                  Christopher Dinunzio
                </p>
                <p className="text-xs uppercase tracking-[0.12em] text-[#b0bfcd]">
                  Operational Security Strategist
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {authorityMetrics.map((metric, index) => {
              const Icon = spotlightIcons[index % spotlightIcons.length]
              return (
                <div
                  key={metric.label}
                  className="rounded-xl border border-[rgba(141,160,179,0.22)] bg-[rgba(9,14,20,0.62)] p-5"
                >
                  <Icon className="h-5 w-5 text-[#d6a15d]" />
                  <p className="font-heading mt-4 text-3xl font-semibold text-[#edf5fc]">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#aebbc9]">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-sm text-[#8f9eac]">{metric.detail}</p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </section>

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Service Pillars"
          title="Strategic Security Systems Built For Operational Reality"
          description="Every engagement is structured around one objective: make your organization measurably more stable when pressure rises."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <Reveal key={service.id} delay={index * 0.06}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#9eafbe]">{service.impact}</p>
                  <Button asChild variant="ghost" className="mt-5 p-0 text-[#d9a864]">
                    <Link to="/services" className="inline-flex items-center gap-2">
                      View Methodology
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Engagement Model"
          title="A Consultation Process Designed For High-Consequence Environments"
          description="Structured discovery, forensic diagnosis, and implementation support that turns strategic intent into operating discipline."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {engagementSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08}>
              <Card className="h-full rounded-2xl">
                <CardHeader>
                  <p className="font-heading text-sm tracking-[0.2em] text-[#d49d5a]">
                    {step.step}
                  </p>
                  <CardTitle className="text-2xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[0.96rem] text-[#aab8c6]">{step.detail}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Client Impact"
          title="Trusted By Leaders Who Cannot Afford Operational Drift"
          description="Each mandate is built to improve control, reduce ambiguity, and elevate leadership confidence under pressure."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {testimonialHighlights.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.08}>
              <Card className="h-full">
                <CardContent className="pt-7">
                  <p className="font-heading text-2xl leading-snug text-[#ecf4fb]">
                    &quot;{item.quote}&quot;
                  </p>
                  <p className="mt-5 text-sm uppercase tracking-[0.12em] text-[#d4a261]">
                    {item.role}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Latest Insights"
          title="Leadership Briefings On Readiness, Risk, And Response"
          description="Strategic writing designed to sharpen executive judgment and improve organizational resilience."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {insights.slice(0, 2).map((insight, index) => (
            <Reveal key={insight.id} delay={index * 0.08}>
              <Card className="h-full">
                <CardHeader>
                  <Badge variant="amber" className="w-fit">
                    {insight.category}
                  </Badge>
                  <CardTitle className="text-2xl">{insight.title}</CardTitle>
                  <CardDescription>{insight.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between gap-3">
                  <p className="text-sm text-[#95a4b3]">
                    {insight.published} - {insight.readTime}
                  </p>
                  <Button asChild variant="ghost" className="p-0 text-[#d9a864]">
                    <Link to="/insights">Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <Reveal className="surface-panel rounded-2xl px-6 py-10 text-center md:px-12 md:py-14">
          <p className="font-heading text-balance text-3xl font-semibold leading-tight text-[#edf6ff] md:text-5xl">
            Preparedness is not optics. It is operational discipline under pressure.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-[#adbac8]">
            If your organization is operating in a high-stakes environment, the next
            incident should not be the first real test of your systems.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="amber" size="lg">
              <Link to="/contact">Schedule Operational Review</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Review Leadership Background</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  )
}
