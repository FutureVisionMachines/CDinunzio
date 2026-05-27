import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const DIST_DIR = path.resolve(process.cwd(), 'dist')
const FALLBACK_ROUTES = ['about', 'services', 'industries', 'insights', 'contact']

async function generateRouteFallbacks() {
  const indexPath = path.join(DIST_DIR, 'index.html')
  const indexHtml = await readFile(indexPath, 'utf8')

  await Promise.all(
    FALLBACK_ROUTES.map(async (route) => {
      const routeDir = path.join(DIST_DIR, route)
      await mkdir(routeDir, { recursive: true })
      await writeFile(path.join(routeDir, 'index.html'), indexHtml, 'utf8')
    }),
  )

  console.log(`Generated static fallback pages for: ${FALLBACK_ROUTES.join(', ')}`)
}

generateRouteFallbacks().catch((error) => {
  console.error('Failed to generate route fallback pages', error)
  process.exit(1)
})
