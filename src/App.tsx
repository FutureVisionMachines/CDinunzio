import { Route, Routes } from 'react-router-dom'
import { ScrollToTop } from '@/components/common/scroll-to-top'
import { SiteLayout } from '@/components/layout/site-layout'
import { HomePage } from '@/pages/home-page'
import { AboutPage } from '@/pages/about-page'
import { ServicesPage } from '@/pages/services-page'
import { IndustriesPage } from '@/pages/industries-page'
import { InsightsPage } from '@/pages/insights-page'
import { ContactPage } from '@/pages/contact-page'
import { NotFoundPage } from '@/pages/not-found-page'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
