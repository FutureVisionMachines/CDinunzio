import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Download } from 'lucide-react'
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
import { insights } from '@/content/site-content'
import { usePageMeta } from '@/hooks/use-page-meta'
import chrisBook from '@/assets/chris-book.jpg'

export function InsightsPage() {
  usePageMeta({
    title: 'Insights | CDN Security Consultant',
    description:
      'Leadership insights and publications from Christopher Dinunzio on operational readiness, crisis decision-making, and strategic risk intelligence.',
  })

  const [featured, ...rest] = insights

  return (
    <PageTransition>
      <PageHero
        eyebrow="Publications & Insights"
        title="Strategic Briefings For Leaders Operating Under Consequence"
        description="A publication platform focused on practical doctrine, executive decision clarity, and systems-level operational intelligence."
        actions={[
          { label: 'Request Strategic Briefing', to: '/contact', variant: 'amber' },
          { label: 'View Service Architecture', to: '/services', variant: 'outline' },
        ]}
      />

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Featured Essay"
          title={featured.title}
          description={featured.excerpt}
        />

        <Reveal>
          <Card>
            <CardContent className="grid gap-6 py-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <Badge variant="amber" className="w-fit">
                  {featured.category}
                </Badge>
                <p className="mt-4 text-lg text-[#b4c1ce]">
                  {featured.published} - {featured.readTime}
                </p>
                <p className="mt-5 max-w-2xl text-[#aebccb]">
                  This piece outlines a structured model for improving decision
                  quality when operational visibility degrades and response windows
                  tighten.
                </p>
              </div>
              <div className="rounded-xl border border-[rgba(149,167,185,0.24)] bg-[rgba(11,17,23,0.62)] p-5">
                <div className="mx-auto mb-4 w-36 overflow-hidden rounded-md border border-[rgba(161,178,194,0.3)] shadow-[0_12px_26px_rgba(0,0,0,0.35)]">
                  <img
                    src={chrisBook}
                    alt="Front and back cover of Christopher Dinunzio's book"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#d8a45f]">
                  Editorial Positioning
                </p>
                <p className="mt-3 text-sm text-[#a8b6c5]">
                  Thought leadership rooted in operational reality, not abstract
                  commentary.
                </p>
                <Button className="mt-5" asChild variant="outline">
                  <Link to="/contact">Request Full Article</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Recent Briefings"
          title="Operational Intelligence For Leadership Teams"
          description="Editorial assets developed to support better planning, stronger communication, and improved incident readiness outcomes."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((insight, index) => (
            <Reveal key={insight.id} delay={index * 0.06}>
              <Card className="h-full">
                <CardHeader>
                  <Badge variant="muted" className="w-fit">
                    {insight.category}
                  </Badge>
                  <CardTitle className="text-2xl">{insight.title}</CardTitle>
                  <CardDescription>{insight.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#94a6b5]">
                    {insight.published} - {insight.readTime}
                  </p>
                  <Button asChild variant="ghost" className="mt-4 p-0 text-[#d9a864]">
                    <Link to="/contact" className="inline-flex items-center gap-2">
                      Request Publication
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
          eyebrow="Whitepaper Assets"
          title="Downloadable Briefing Material For Internal Leadership Teams"
          description="Structured resources designed for board reviews, risk councils, and executive planning sessions."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <CardHeader>
                <FileText className="h-5 w-5 text-[#d7a361]" />
                <CardTitle>Operational Readiness Scorecard</CardTitle>
                <CardDescription>
                  A practical scoring framework to benchmark preparedness maturity by
                  function, site, and leadership layer.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center gap-3 rounded-lg border border-[rgba(154,170,186,0.24)] bg-[rgba(10,15,21,0.6)] p-3">
                  <img
                    src={chrisBook}
                    alt="Christopher Dinunzio book cover"
                    className="h-14 w-11 rounded-sm object-cover"
                    loading="lazy"
                  />
                  <p className="text-xs text-[#98abbb]">
                    Includes companion publication material from Christopher&apos;s
                    leadership doctrine series.
                  </p>
                </div>
                <Button asChild variant="outline">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Request Whitepaper
                    <Download className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full">
              <CardHeader>
                <FileText className="h-5 w-5 text-[#d7a361]" />
                <CardTitle>Crisis Decision Velocity Framework</CardTitle>
                <CardDescription>
                  Leadership guidance for reducing decision drag and ambiguity during
                  active disruptions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Request Whitepaper
                    <Download className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
