import { SUPPORTED_LOCALES } from './useI18n'

export function useMeta() {
  const route = useRoute()
  const base_url = import.meta.env.VITE_BASE_URL || 'localhost:3000'

  const description =
    'Anyone can forget how to make character classes for a regex, slice a list or do a for loop. This cheat sheet tries to provide a basic reference for beginner and advanced developers, lower the entry barrier for newcomers and help veterans refresh the old tricks. Available as a free PDF download.'
  const cardImage =
    'https://raw.githubusercontent.com/wilfredinni/python-cheatsheet/master/public/screenshots/dark.png'
  const themeColor = computed(() => (isDark.value ? '#1f2937' : '#ffffff'))
  const url = computed(() => `https://${base_url}${route.path}`)

  // Get base path (remove locale prefix)
  const getBasePath = (path: string): string => {
    const segments = path.split('/').filter(Boolean)
    if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0] as typeof SUPPORTED_LOCALES[number])) {
      segments.shift()
      return segments.length > 0 ? '/' + segments.join('/') : '/'
    }
    return path
  }

  // Generate hreflang links
  const generateHreflangLinks = computed(() => {
    const basePath = getBasePath(route.path)
    const links = []

    // Generate hreflang link for each supported locale
    for (const locale of SUPPORTED_LOCALES) {
      const localePath = locale === 'en' ? basePath : `/${locale}${basePath}`
      const localeUrl = `https://${base_url}${localePath}`
      links.push({
        rel: 'alternate',
        hreflang: locale,
        href: localeUrl,
      })
    }

    // Add x-default (points to default language version)
    const defaultPath = basePath
    const defaultUrl = `https://${base_url}${defaultPath}`
    links.push({
      rel: 'alternate',
      hreflang: 'x-default',
      href: defaultUrl,
    })

    return links
  })

  const keywords = [
    'python',
    'cheatsheet',
    'cheat',
    'sheet',
    'functions',
    'args',
    'kwargs',
    'sets',
    'dictionary',
    'list',
    'string',
    'regular',
    'expression',
    'formatting',
    'file',
    'path',
    'json',
    'test',
    'vscode',
    'comprehension',
    'exception',
    'debugging',
    'dataclasses',
    'environments',
    'flow control',
    'itertools',
    'pdf',
    'download pdf',
    'python pdf',
    'python cheatsheet pdf',
    'python reference pdf',
    'python guide pdf',
    'python quick reference',
  ]

  const meta = {
    title: 'Python Cheatsheet - Python Cheatsheet PDF Download',
    description,
    meta: [
      { name: 'theme-color', content: themeColor },
      { name: 'description', content: description },
      { name: 'author', content: 'Python Cheatsheet' },
      { name: 'keywords', content: keywords.join(', ') },
      { property: 'og:title', content: 'Python Cheatsheet - Python Cheatsheet PDF Download' },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'article' },
      { property: 'og:image', content: cardImage },
      { name: 'twitter:title', content: 'Python Cheatsheet - Python Cheatsheet PDF Download' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: cardImage },
      { name: 'twitter:card', content: 'summary' },
    ],
    link: [
      { rel: 'canonical', href: url },
      ...generateHreflangLinks.value,
    ],
  }

  return { meta, description }
}
