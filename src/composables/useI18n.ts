import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import enTranslations from '~/locales/en.json'
import zhTranslations from '~/locales/zh.json'
import esTranslations from '~/locales/es.json'
import frTranslations from '~/locales/fr.json'
import deTranslations from '~/locales/de.json'
import jaTranslations from '~/locales/ja.json'
import ruTranslations from '~/locales/ru.json'
import koTranslations from '~/locales/ko.json'
import ptTranslations from '~/locales/pt.json'

export const SUPPORTED_LOCALES = ['en', 'zh', 'es', 'fr', 'de', 'ja', 'ru', 'ko', 'pt'] as const
export type Locale = typeof SUPPORTED_LOCALES[number]

type Translations = typeof enTranslations

const translations: Record<Locale, Translations> = {
  en: enTranslations,
  zh: zhTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
  ja: jaTranslations,
  ru: ruTranslations,
  ko: koTranslations,
  pt: ptTranslations,
}

export function useI18n() {
  const route = useRoute()
  const router = useRouter()

  const currentLocale = computed<Locale>(() => {
    const path = route.path
    const segments = path.split('/').filter(Boolean)

    if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0] as Locale)) {
      return segments[0] as Locale
    }

    return 'en'
  })

  const localePath = (path: string, locale?: Locale) => {
    const targetLocale = locale || currentLocale.value
    let cleanPath = path.startsWith('/') ? path : `/${path}`

    // Remove existing locale prefix
    const segments = cleanPath.split('/').filter(Boolean)
    if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0] as Locale)) {
      segments.shift()
      cleanPath = segments.length > 0 ? '/' + segments.join('/') : '/'
    }

    if (targetLocale === 'en') {
      return cleanPath
    }

    return `/${targetLocale}${cleanPath}`
  }

  const switchLocale = (locale: Locale) => {
    const currentPath = route.path
    const segments = currentPath.split('/').filter(Boolean)

    let basePath = currentPath

    if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0] as Locale)) {
      segments.shift()
      basePath = segments.length > 0 ? '/' + segments.join('/') : '/'
    }

    if (basePath === '/') {
      const newPath = locale === 'en' ? '/' : `/${locale}`
      router.push(newPath)
    } else {
      const newPath = locale === 'en' ? basePath : `/${locale}${basePath}`
      router.push(newPath)
    }
  }

  const t = (key: string): string => {
    const locale = currentLocale.value
    const keys = key.split('.')

    const getValue = (translationObj: Translations): any => {
      let value: any = translationObj
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k as keyof typeof value]
        } else {
          return undefined
        }
      }
      return value
    }

    const value = getValue(translations[locale])
    if (typeof value === 'string') {
      return value
    }

    const fallbackValue = getValue(translations.en)
    if (typeof fallbackValue === 'string') {
      return fallbackValue
    }

    return key
  }

  const getNavigationName = (path: string, fallbackName: string): string => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    const segments = cleanPath.split('/').filter(Boolean)

    if (segments.length === 0) {
      return fallbackName
    }

    const section = segments[0]
    const item = segments[1] || segments[0]

    let translationKey = ''

    if (section === 'cheatsheet' && segments.length > 1) {
      translationKey = `navigation.cheatsheet.${item}`
    } else if (section === 'modules' && segments.length > 1) {
      translationKey = `navigation.modules.${item}`
    } else if (section === 'builtin' && segments.length > 1) {
      return fallbackName
    }

    if (translationKey) {
      const translated = t(translationKey)
      if (translated !== translationKey) {
        return translated
      }
    }

    return fallbackName
  }

  return {
    currentLocale,
    localePath,
    switchLocale,
    t,
    getNavigationName,
    SUPPORTED_LOCALES,
  }
}

