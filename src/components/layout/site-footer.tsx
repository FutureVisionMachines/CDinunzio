import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { navItems } from '@/content/site-content'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(140,159,178,0.2)] bg-[rgba(6,9,12,0.8)]">
      <div className="section-shell py-10 md:py-12">
        <div className="surface-panel rounded-2xl p-6 md:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="font-heading text-2xl font-semibold text-[#f0f6fd] md:text-3xl">
                Security fails quietly until it does not.
              </p>
              <p className="mt-3 text-sm text-[#aebbc8] md:text-base">
                Operational consulting for organizations where leadership, resilience,
                and systems discipline cannot be optional.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#d9a864] transition hover:text-[#efc88f]"
            >
              Request Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-5 border-t border-[rgba(162,177,193,0.18)] pt-6 text-sm text-[#91a0ae] md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-4">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="transition hover:text-[#d7e2ed]">
                  {item.label}
                </Link>
              ))}
            </div>
            <p>Copyright {year} Christopher Dinunzio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
