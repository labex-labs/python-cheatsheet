import fs from 'fs-extra'
import path from 'path'

const SUPPORTED_LOCALES = ['en', 'zh', 'es', 'fr', 'de', 'ja', 'ru', 'ko', 'pt']
const LOCALE_MAP: Record<string, string> = {
  en: 'en',
  zh: 'zh',
  es: 'es',
  fr: 'fr',
  de: 'de',
  ja: 'ja',
  ru: 'ru',
  ko: 'ko',
  pt: 'pt',
}

interface RouteInfo {
  path: string
  locale: string
  basePath: string
}

function normalizePath(filePath: string, distDir: string): string {
  let relativePath = path.relative(distDir, filePath)
  relativePath = relativePath.replace(/\\/g, '/')

  if (relativePath === 'index.html') {
    return '/'
  }

  if (relativePath.endsWith('/index.html')) {
    relativePath = relativePath.slice(0, -10)
  } else if (relativePath.endsWith('.html')) {
    relativePath = relativePath.slice(0, -5)
  }

  return relativePath.startsWith('/') ? relativePath : `/${relativePath}`
}

function extractLocaleAndBasePath(routePath: string): { locale: string; basePath: string } {
  const segments = routePath.split('/').filter(Boolean)

  if (segments.length === 0) {
    return { locale: 'en', basePath: '/' }
  }

  const firstSegment = segments[0]

  if (SUPPORTED_LOCALES.includes(firstSegment) && firstSegment !== 'en') {
    if (segments.length === 1) {
      return { locale: firstSegment, basePath: '/' }
    }
    const basePath = '/' + segments.slice(1).join('/')
    return { locale: firstSegment, basePath }
  }

  return { locale: 'en', basePath: routePath }
}

function groupRoutesByBasePath(routes: RouteInfo[]): Map<string, RouteInfo[]> {
  const grouped = new Map<string, RouteInfo[]>()

  for (const route of routes) {
    const key = route.basePath
    if (!grouped.has(key)) {
      grouped.set(key, [])
    }
    grouped.get(key)!.push(route)
  }

  return grouped
}

function generateSitemapXml(
  routes: RouteInfo[],
  hostname: string,
  groupedRoutes: Map<string, RouteInfo[]>
): string {
  const urls: string[] = []

  for (const route of routes) {
    const alternateRoutes = groupedRoutes.get(route.basePath) || []

    urls.push('  <url>')
    urls.push(`    <loc>${hostname}${route.path}</loc>`)

    for (const altRoute of alternateRoutes) {
      const hreflang = LOCALE_MAP[altRoute.locale] || altRoute.locale
      urls.push(`    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${hostname}${altRoute.path}" />`)
    }

    urls.push('    <changefreq>daily</changefreq>')
    urls.push('    <priority>1.0</priority>')
    urls.push('  </url>')
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`
}

async function findHtmlFiles(dir: string, fileList: string[] = []): Promise<string[]> {
  const files = await fs.readdir(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = await fs.stat(filePath)

    if (stat.isDirectory()) {
      await findHtmlFiles(filePath, fileList)
    } else if (file.endsWith('.html') && file !== '404.html') {
      fileList.push(filePath)
    }
  }

  return fileList
}

export async function generateI18nSitemap(
  hostname: string,
  outDir: string = 'dist'
): Promise<void> {
  const distPath = path.resolve(process.cwd(), outDir)

  if (!(await fs.pathExists(distPath))) {
    console.warn(`Dist directory ${distPath} does not exist. Skipping sitemap generation.`)
    return
  }

  const htmlFiles = await findHtmlFiles(distPath)

  const routes: RouteInfo[] = []

  for (const filePath of htmlFiles) {
    const routePath = normalizePath(filePath, distPath)
    const { locale, basePath } = extractLocaleAndBasePath(routePath)

    routes.push({
      path: routePath,
      locale,
      basePath,
    })
  }

  const groupedRoutes = groupRoutesByBasePath(routes)

  const sitemapXml = generateSitemapXml(routes, hostname, groupedRoutes)
  const sitemapPath = path.join(distPath, 'sitemap.xml')

  await fs.writeFile(sitemapPath, sitemapXml, 'utf-8')
  console.log(`Generated i18n sitemap with ${routes.length} URLs at ${sitemapPath}`)
}

