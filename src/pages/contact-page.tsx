import { useState, type FormEvent } from 'react'
import { Clock3, Mail, PhoneCall } from 'lucide-react'
import { PageHero } from '@/components/common/page-hero'
import { PageTransition } from '@/components/common/page-transition'
import { Reveal } from '@/components/common/reveal'
import { SectionHeading } from '@/components/common/section-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { usePageMeta } from '@/hooks/use-page-meta'

export function ContactPage() {
  usePageMeta({
    title: 'Contact | CDN Security Consultant',
    description:
      'Request a strategic operational consultation with Christopher Dinunzio for readiness diagnostics, risk analysis, and leadership advisory.',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <PageTransition>
      <PageHero
        eyebrow="Consultation Request"
        title="Start A Strategic Conversation About Your Operational Readiness"
        description="Share your context and priorities. Every inquiry receives a disciplined review with clear next-step guidance."
      />

      <section className="section-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Inquiry Intake"
          title="Enterprise Consultation Funnel"
          description="Designed for leaders responsible for safety, continuity, and organizational resilience in high-stakes environments."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="rounded-lg border border-[rgba(124,162,191,0.36)] bg-[rgba(15,29,41,0.55)] p-5 text-[#d7e7f4]">
                    Thank you for the inquiry. Your consultation request has been
                    received. You can expect a strategic response within one business
                    day.
                  </div>
                ) : null}
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        autoComplete="name"
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        name="organization"
                        autoComplete="organization"
                        required
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sector">Primary Sector</Label>
                    <select
                      id="sector"
                      name="sector"
                      className="flex h-11 w-full rounded-md border border-[rgba(157,172,188,0.28)] bg-[rgba(10,16,22,0.7)] px-3 py-2 text-sm text-[#ecf3fb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(93,134,168,0.55)]"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option>Oil & Gas</option>
                      <option>Healthcare</option>
                      <option>Hospitality & Events</option>
                      <option>Municipal & Public Infrastructure</option>
                      <option>Commercial Operations</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Operational Context</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Briefly describe your current challenge, objective, or pressure scenario."
                    />
                  </div>

                  <Button type="submit" variant="amber" size="lg" className="w-full md:w-auto">
                    Submit Consultation Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">What To Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-[#aebccb]">
                <div className="rounded-lg border border-[rgba(154,170,186,0.24)] bg-[rgba(10,15,21,0.58)] p-4">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-[#d7a360]">
                    Response Standards
                  </p>
                  <p className="mt-2 text-sm">
                    Inquiries are reviewed within one business day with strategic next
                    steps and recommended consultation scope.
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <p className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-[#8fb0ca]" />
                    Typical first consultation window: 45-60 minutes
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#8fb0ca]" />
                    Inquiries: contact@cdnsecurityconsultant.com
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <PhoneCall className="h-4 w-4 text-[#8fb0ca]" />
                    Priority advisory available for active incidents
                  </p>
                </div>

                <div className="rounded-lg border border-[rgba(154,170,186,0.24)] bg-[rgba(10,15,21,0.58)] p-4">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-[#d7a360]">
                    Engagement Fit
                  </p>
                  <p className="mt-2 text-sm">
                    Ideal for organizations facing high-consequence operational risk,
                    complex leadership coordination, or readiness transformation goals.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
