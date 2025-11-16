import { type UserModule } from '~/types'

export const install: UserModule = ({ router }) => {
  if (typeof window === 'undefined') return

  // Copy code to clipboard
  const copyToClipboard = async (text: string, button: HTMLElement) => {
    try {
      await navigator.clipboard.writeText(text)
      const originalText = button.textContent
      button.textContent = 'Copied'
      button.classList.add('copied')
      setTimeout(() => {
        button.textContent = originalText
        button.classList.remove('copied')
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
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

          // Create header element
          const header = document.createElement('div')
          header.className = 'code-block-header'

          // Create language label
          const label = document.createElement('span')
          label.className = 'code-block-label'
          label.textContent = language

          // Create copy button
          const copyButton = document.createElement('button')
          copyButton.className = 'code-block-copy-button'
          copyButton.setAttribute('aria-label', 'Copy code')
          copyButton.textContent = 'Copy'
          copyButton.addEventListener('click', () => {
            copyToClipboard(codeText, copyButton)
          })

          // Append label and button to header
          header.appendChild(label)
          header.appendChild(copyButton)

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

