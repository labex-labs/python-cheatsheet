import { useRoute } from 'vue-router'
import { SUPPORTED_LOCALES } from './useI18n'

interface QuizAPIResponse {
  success: boolean
  quizId: string
  pagePath: string
  count: number
}

interface UserStatusResponse {
  success: boolean
  quizId: string
  pagePath: string
  userId: number
  completed: boolean
}

/**
 * Normalize path to English version by removing language prefix
 * This ensures all language versions of the same page share the same quiz data
 */
function normalizePathToEnglish(path: string): string {
  const segments = path.split('/').filter(Boolean)
  if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0] as typeof SUPPORTED_LOCALES[number])) {
    segments.shift()
    return segments.length > 0 ? '/' + segments.join('/') : '/'
  }
  return path
}

export function useQuizTracking() {
  const route = useRoute()

  const recordQuizCompletion = async (quizId: string): Promise<number | null> => {
    try {
      const pagePath = normalizePathToEnglish(route.path)

      const response = await fetch('/api/quiz/record', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quizId,
          pagePath,
        }),
      })

      if (!response.ok) {
        console.error('Failed to record quiz completion:', response.statusText)
        return null
      }

      const data = await response.json() as QuizAPIResponse
      return data.count || null
    } catch (error) {
      console.error('Error recording quiz completion:', error)
      return null
    }
  }

  const getQuizStats = async (quizId: string): Promise<number | null> => {
    try {
      const pagePath = normalizePathToEnglish(route.path)
      const url = new URL('/api/quiz/stats', window.location.origin)
      url.searchParams.set('quizId', quizId)
      url.searchParams.set('pagePath', pagePath)

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        console.error('Failed to fetch quiz stats:', response.statusText)
        return null
      }

      const data = await response.json() as QuizAPIResponse
      return data.count || 0
    } catch (error) {
      console.error('Error fetching quiz stats:', error)
      return null
    }
  }

  const getUserQuizStatus = async (quizId: string): Promise<boolean | null> => {
    try {
      const pagePath = normalizePathToEnglish(route.path)
      const url = new URL('/api/quiz/user-status', window.location.origin)
      url.searchParams.set('quizId', quizId)
      url.searchParams.set('pagePath', pagePath)

      const response = await fetch(url.toString(), {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        if (response.status === 401) {
          return null
        }
        console.error('Failed to fetch user quiz status:', response.statusText)
        return null
      }

      const data = await response.json() as UserStatusResponse
      return data.completed || false
    } catch (error) {
      console.error('Error fetching user quiz status:', error)
      return null
    }
  }

  return {
    recordQuizCompletion,
    getQuizStats,
    getUserQuizStatus,
  }
}

