import { type UserModule } from '~/types'
import enTranslations from '~/locales/en.json'
import zhTranslations from '~/locales/zh.json'
import esTranslations from '~/locales/es.json'
import frTranslations from '~/locales/fr.json'
import deTranslations from '~/locales/de.json'
import jaTranslations from '~/locales/ja.json'
import ruTranslations from '~/locales/ru.json'
import koTranslations from '~/locales/ko.json'
import ptTranslations from '~/locales/pt.json'

type Locale = 'en' | 'zh' | 'es' | 'fr' | 'de' | 'ja' | 'ru' | 'ko' | 'pt'

const translations: Record<Locale, typeof enTranslations> = {
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

// Get current locale from URL path
const getCurrentLocale = (): Locale => {
  if (typeof window === 'undefined') return 'en'
  const path = window.location.pathname
  const segments = path.split('/').filter(Boolean)
  const supportedLocales: Locale[] = ['en', 'zh', 'es', 'fr', 'de', 'ja', 'ru', 'ko', 'pt']

  if (segments.length > 0 && supportedLocales.includes(segments[0] as Locale)) {
    return segments[0] as Locale
  }
  return 'en'
}

// Get translation text
const t = (key: string): string => {
  const locale = getCurrentLocale()
  const keys = key.split('.')

  const getValue = (obj: any): any => {
    let value: any = obj
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

  // Fallback to English
  const fallbackValue = getValue(translations.en)
  if (typeof fallbackValue === 'string') {
    return fallbackValue
  }

  return key
}

export const install: UserModule = ({ router }) => {
  if (typeof window === 'undefined') return

  // Copy code to clipboard
  const copyToClipboard = async (text: string, button: HTMLElement) => {
    try {
      await navigator.clipboard.writeText(text)
      const originalText = button.textContent
      button.textContent = t('codeBlock.copied')
      button.classList.add('copied')
      setTimeout(() => {
        button.textContent = originalText
        button.classList.remove('copied')
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Toggle output block visibility
  const toggleOutputBlock = (pre: Element, toggleButton: HTMLElement) => {
    const isCollapsed = pre.classList.contains('output-collapsed')
    const codeElement = pre.querySelector('code')

    if (isCollapsed) {
      pre.classList.remove('output-collapsed')
      toggleButton.textContent = t('codeBlock.collapse')
      toggleButton.setAttribute('aria-expanded', 'true')
      if (codeElement) {
        codeElement.style.display = 'block'
      }
    } else {
      pre.classList.add('output-collapsed')
      toggleButton.textContent = t('codeBlock.expand')
      toggleButton.setAttribute('aria-expanded', 'false')
      if (codeElement) {
        codeElement.style.display = 'none'
      }
    }
  }

  // Extract language from class name and create header with label and copy button
  const setCodeBlockLabels = () => {
    const codeBlocks = document.querySelectorAll('.prose pre[class*="language-"]')

    codeBlocks.forEach((pre) => {
      // Skip if already processed
      if (pre.querySelector('.code-block-header')) return

      const classList = Array.from(pre.classList)
      const languageClass = classList.find(cls => cls.startsWith('language-'))

      if (languageClass) {
        const language = languageClass.replace('language-', '').trim()
        if (language) {
          pre.setAttribute('data-language', language)

          // Get code content
          const codeElement = pre.querySelector('code')
          const codeText = codeElement?.textContent || ''

          // Check if this is an output block (language is "output")
          const isOutput = language === 'output'
          if (isOutput) {
            pre.classList.add('output-block', 'output-collapsed')
            if (codeElement) {
              codeElement.style.display = 'none'
            }
          }

          // Create header element
          const header = document.createElement('div')
          header.className = 'code-block-header'

          // Create language label
          const label = document.createElement('span')
          label.className = 'code-block-label'
          label.textContent = language

          // Create button container
          const buttonContainer = document.createElement('div')
          buttonContainer.className = 'code-block-buttons'
          buttonContainer.style.display = 'flex'
          buttonContainer.style.gap = '0.5rem'

          // For output blocks, only show toggle button
          if (isOutput) {
            const toggleButton = document.createElement('button')
            toggleButton.className = 'code-block-toggle-button'
            toggleButton.setAttribute('aria-label', t('codeBlock.expand'))
            toggleButton.textContent = t('codeBlock.expand')
            toggleButton.setAttribute('aria-expanded', 'false')
            toggleButton.addEventListener('click', (e) => {
              e.stopPropagation()
              toggleOutputBlock(pre, toggleButton)
            })
            buttonContainer.appendChild(toggleButton)
          } else {
            // For non-output blocks, only show copy button
            const copyButton = document.createElement('button')
            copyButton.className = 'code-block-copy-button'
            copyButton.setAttribute('aria-label', t('codeBlock.copy'))
            copyButton.textContent = t('codeBlock.copy')
            copyButton.addEventListener('click', () => {
              copyToClipboard(codeText, copyButton)
            })
            buttonContainer.appendChild(copyButton)
          }

          // Append label and buttons to header
          header.appendChild(label)
          header.appendChild(buttonContainer)

          // Insert header at the beginning of pre element
          pre.insertBefore(header, pre.firstChild)
        }
      }
    })
  }

  // Debounce function to avoid excessive calls
  let debounceTimer: ReturnType<typeof setTimeout> | null = null
  const debouncedSetLabels = () => {
    if (debounceTimer) clearTimeout(debounceTimer)
    debounceTimer = setTimeout(setCodeBlockLabels, 50)
  }

  // Run on route changes
  router.afterEach(() => {
    setTimeout(setCodeBlockLabels, 100)
  })

  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setCodeBlockLabels)
  } else {
    setCodeBlockLabels()
  }

  // Use MutationObserver to handle dynamically added code blocks
  const observer = new MutationObserver((mutations) => {
    // Only process if code blocks are added
    const hasCodeBlocks = mutations.some(mutation =>
      Array.from(mutation.addedNodes).some(node =>
        node.nodeType === 1 && (
          (node as Element).querySelector?.('.prose pre[class*="language-"]') ||
          (node as Element).matches?.('.prose pre[class*="language-"]')
        )
      )
    )
    if (hasCodeBlocks) {
      debouncedSetLabels()
    }
  })

  // Observe the document body for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}

