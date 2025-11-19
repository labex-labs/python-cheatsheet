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

  // Check if a code block follows an "Output:" text (supports multiple languages)
  const isOutputBlock = (pre: Element): boolean => {
    // List of "Output:" translations in different languages
    const outputLabels = [
      'Output:',           // English
      'Saída:',            // Portuguese
      '输出：',            // Chinese (Simplified)
      'Salida:',           // Spanish
      'Ausgabe:',          // German
      'Sortie :',          // French (with space)
      'Sortie:',           // French (without space)
      '出力：',            // Japanese
      '출력:',             // Korean
      'Вывод:',            // Russian
    ]

    let previousSibling = pre.previousElementSibling
    // Check previous siblings (skip empty text nodes)
    while (previousSibling) {
      const text = previousSibling.textContent?.trim()
      // Check if the text matches any of the output labels
      if (text) {
        for (const label of outputLabels) {
          // Remove trailing spaces from both for comparison
          const textNormalized = text.replace(/\s+$/, '')
          const labelNormalized = label.replace(/\s+$/, '')
          // Match if text exactly equals label (after normalization)
          if (textNormalized === labelNormalized) {
            return true
          }
        }
      }
      // If we hit another code block or a heading, stop searching
      if (previousSibling.tagName === 'PRE' || previousSibling.tagName.startsWith('H')) {
        break
      }
      previousSibling = previousSibling.previousElementSibling
    }
    return false
  }

  // Toggle output block visibility
  const toggleOutputBlock = (pre: Element, toggleButton: HTMLElement) => {
    const isCollapsed = pre.classList.contains('output-collapsed')
    const codeElement = pre.querySelector('code')

    if (isCollapsed) {
      pre.classList.remove('output-collapsed')
      toggleButton.textContent = 'Collapse'
      toggleButton.setAttribute('aria-expanded', 'true')
      if (codeElement) {
        codeElement.style.display = 'block'
      }
    } else {
      pre.classList.add('output-collapsed')
      toggleButton.textContent = 'Expand'
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

          // Check if this is an output block
          const isOutput = isOutputBlock(pre)
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
            toggleButton.setAttribute('aria-label', 'Toggle output')
            toggleButton.textContent = 'Expand'
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
            copyButton.setAttribute('aria-label', 'Copy code')
            copyButton.textContent = 'Copy'
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

