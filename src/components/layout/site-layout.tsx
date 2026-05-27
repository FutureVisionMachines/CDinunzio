import { useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { SiteFooter } from '@/components/layout/site-footer'
import { Button } from '@/components/ui/button'
import { navItems } from '@/content/site-content'
import { cn } from '@/lib/utils'

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <motion.div
        className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-[linear-gradient(90deg,#5f8aaf,#d89f52)]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="data-grid pointer-events-none fixed inset-0 -z-20 opacity-35 mask-[radial-gradient(circle_at_center,rgba(255,255,255,0.72),transparent_78%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(40,61,82,0.23),transparent_55%)]" />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#f5fbff] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#111a24]"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-[rgba(141,160,179,0.22)] bg-[rgba(8,12,17,0.8)] backdrop-blur-md">
        <div className="section-shell flex h-20 items-center justify-between">
          <NavLink to="/" className="group flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Christopher Dinunzio logo"
              className="h-9 w-9 rounded-sm border border-[rgba(149,167,185,0.3)] bg-[rgba(10,16,22,0.62)] p-1 object-contain md:h-10 md:w-10"
              loading="eager"
              decoding="async"
            />
            <div>
              <p className="font-heading text-sm uppercase tracking-[0.18em] text-[#e8f1fa] md:text-base">
                CDN Security Consultant
              </p>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#93a6ba] transition group-hover:text-[#d6a869] md:text-[0.72rem]">
                Christopher Dinunzio
              </p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em] transition',
                    isActive
                      ? 'bg-[rgba(92,131,165,0.24)] text-[#f2f8ff]'
                      : 'text-[#9baaba] hover:bg-[rgba(93,134,168,0.14)] hover:text-[#e6eff8]',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden md:inline-flex">
              <NavLink to="/contact">Book Consult</NavLink>
            </Button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(130,151,172,0.36)] text-[#dce8f4] transition hover:bg-[rgba(93,134,168,0.16)] md:hidden"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="section-shell sticky top-20 z-30 block border-b border-[rgba(141,160,179,0.2)] bg-[rgba(8,13,18,0.95)] py-4 backdrop-blur md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition',
                    isActive
                      ? 'bg-[rgba(92,131,165,0.24)] text-[#f2f8ff]'
                      : 'text-[#9baaba] hover:bg-[rgba(93,134,168,0.14)] hover:text-[#e6eff8]',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild variant="amber" className="mt-2">
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Request Consultation
              </NavLink>
            </Button>
          </div>
        </motion.nav>
      ) : null}

      <main id="main-content" className="pb-20 pt-6 md:pt-10">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  )
}
