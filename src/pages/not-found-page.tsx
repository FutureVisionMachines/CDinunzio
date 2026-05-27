import { Link } from 'react-router-dom'
import { PageTransition } from '@/components/common/page-transition'
import { Reveal } from '@/components/common/reveal'
import { Button } from '@/components/ui/button'
import { usePageMeta } from '@/hooks/use-page-meta'

export function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found | CDN Security Consultant',
    description: 'The page you requested could not be found.',
  })

  return (
    <PageTransition>
      <section className="section-shell py-28 md:py-36">
        <Reveal className="surface-panel rounded-2xl px-6 py-14 text-center md:px-12">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#d8a45f]">
            404
          </p>
          <h1 className="font-heading mt-4 text-4xl font-semibold text-[#edf6ff] md:text-6xl">
            This route is off the operational map.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#aebccc]">
            The page you requested is unavailable. Return to the main platform and
            continue from there.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="amber" size="lg">
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  )
}
