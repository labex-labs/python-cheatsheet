import { useRoute } from 'vue-router'

export function useQuizTracking() {
  const route = useRoute()

  const recordQuizCompletion = async (quizId: string): Promise<void> => {
    try {
      const pagePath = route.path
      
      const response = await fetch('/api/quiz/record', {
        method: 'POST',
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
      }
    } catch (error) {
      console.error('Error recording quiz completion:', error)
    }
  }

  const getQuizStats = async (quizId: string): Promise<number | null> => {
    try {
      const pagePath = route.path
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

      const data = await response.json()
      return data.count || 0
    } catch (error) {
      console.error('Error fetching quiz stats:', error)
      return null
    }
  }

  return {
    recordQuizCompletion,
    getQuizStats,
  }
}

