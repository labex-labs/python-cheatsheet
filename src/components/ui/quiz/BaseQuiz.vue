<script setup lang="ts">
import { ref, provide, useSlots, watch, computed, onMounted } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { useQuizTracking } from '~/composables/useQuizTracking'
import { useAuth } from '~/composables/useAuth'

const { t } = useI18n()
const slots = useSlots()
const { recordQuizCompletion, getQuizStats, getUserQuizStatus } =
  useQuizTracking()
const {
  isAuthenticated,
  isLoading: isAuthLoading,
  login,
  checkAuth,
} = useAuth()
const selectedOption = ref<string | null>(null)
const correctAnswer = ref<string | null>(null)
const isAnswered = ref(false)
const completionCount = ref<number | null>(null)
const isLoadingStats = ref(false)
const userCompleted = ref<boolean | null>(null)
const isLoadingUserStatus = ref(false)
const hasClickedLogin = ref(false)

const props = defineProps<{
  correct?: string
  id?: string
}>()

if (props.correct) {
  correctAnswer.value = props.correct
}

const quizId = computed(() => {
  return props.id || null
})

provide('quizState', {
  selectedOption,
  correctAnswer,
  isAnswered,
  selectOption: (value: string) => {
    if (!isAuthenticated.value) {
      return
    }
    if (!isAnswered.value) {
      selectedOption.value = value
      isAnswered.value = true
    }
  },
  setCorrectAnswer: (value: string) => {
    correctAnswer.value = value
  },
  isAuthenticated: computed(() => isAuthenticated.value),
})

watch(isAnswered, async (newValue) => {
  if (newValue && quizId.value && isAuthenticated.value) {
    const newCount = await recordQuizCompletion(quizId.value)
    if (newCount !== null) {
      completionCount.value = newCount
      userCompleted.value = true
    } else {
      await loadStats()
      await loadUserStatus()
    }
  }
})

const loadUserStatus = async () => {
  if (!quizId.value || !isAuthenticated.value) {
    userCompleted.value = null
    return
  }

  isLoadingUserStatus.value = true
  try {
    const completed = await getUserQuizStatus(quizId.value)
    userCompleted.value = completed
  } catch (error) {
    console.error('Error loading user quiz status:', error)
    userCompleted.value = null
  } finally {
    isLoadingUserStatus.value = false
  }
}

watch(isAuthenticated, async (newValue) => {
  if (newValue) {
    hasClickedLogin.value = false
    if (quizId.value) {
      await loadUserStatus()
    }
  } else {
    userCompleted.value = null
  }
})

const loadStats = async () => {
  if (!quizId.value) return

  isLoadingStats.value = true
  try {
    const count = await getQuizStats(quizId.value)
    if (count !== null) {
      completionCount.value = count
    }
  } catch (error) {
    console.error('Error loading quiz stats:', error)
  } finally {
    isLoadingStats.value = false
  }
}

onMounted(() => {
  loadStats()
  if (isAuthenticated.value && quizId.value) {
    loadUserStatus()
  }
})

watch(quizId, () => {
  completionCount.value = null
  userCompleted.value = null
  loadStats()
  if (isAuthenticated.value && quizId.value) {
    loadUserStatus()
  }
})

const hasQuestionSlot = !!slots.question

const handleLogin = () => {
  hasClickedLogin.value = true
  login()
}

const completionText = computed(() => {
  if (completionCount.value === null) return ''
  const count = completionCount.value
  return count === 1
    ? `1 ${t('quiz.completion')}`
    : `${count.toLocaleString()} ${t('quiz.completions')}`
})
</script>

<template>
  <div
    class="my-8 rounded-lg border-2 bg-gradient-to-br from-primary-50/50 to-white p-6 dark:from-primary-950/30 dark:to-slate-800/50 relative"
    :class="{
      'border-primary-200 dark:border-primary-800':
        isAuthenticated || isAuthLoading,
      'border-amber-300 dark:border-amber-700':
        !isAuthLoading && !isAuthenticated,
    }"
  >
    <div class="absolute -top-3 left-4 flex items-center gap-2 z-10">
      <div
        class="px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-semibold uppercase tracking-wide shadow-md dark:bg-primary-600"
      >
        {{ t('quiz.label') }}
      </div>
      <div
        v-if="isAuthenticated && userCompleted === true"
        class="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium shadow-sm dark:bg-green-900/30 dark:text-green-400 flex items-center gap-1.5"
        :title="t('quiz.completed')"
      >
        <svg
          class="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>{{ t('quiz.completed') }}</span>
      </div>
      <div
        v-if="isAuthenticated && userCompleted === false"
        class="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium shadow-sm dark:bg-orange-900/30 dark:text-orange-400 flex items-center gap-1.5"
        :title="t('quiz.notCompleted')"
      >
        <svg
          class="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ t('quiz.notCompleted') }}</span>
      </div>
      <div
        v-if="completionCount !== null"
        class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium shadow-sm dark:bg-slate-700 dark:text-slate-300 flex items-center gap-1.5"
        :title="t('quiz.totalCompletions')"
      >
        <svg
          class="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span>{{ completionText }}</span>
      </div>
    </div>

    <!-- Login banner - shown at top when not authenticated -->
    <div
      v-if="!isAuthLoading && !isAuthenticated"
      class="mb-4 -mx-6 -mt-6 rounded-t-lg border-b border-amber-200 bg-amber-50/50 p-4 dark:border-amber-800 dark:bg-amber-900/10"
    >
      <div class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-3 flex-1">
          <svg
            class="h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!hasClickedLogin"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <p class="text-sm text-amber-900 dark:text-amber-200">
            {{
              hasClickedLogin
                ? t('quiz.loginRefreshDesc')
                : t('quiz.loginToUnlockDesc')
            }}
          </p>
        </div>
        <button
          v-if="!hasClickedLogin"
          class="flex-shrink-0 rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600"
          @click="handleLogin"
        >
          {{ t('navbar.login') }} →
        </button>
        <button
          v-else
          class="flex-shrink-0 rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600"
          @click="checkAuth"
        >
          {{ t('quiz.refresh') }}
        </button>
      </div>
    </div>

    <!-- Quiz content - always visible -->
    <div
      v-if="hasQuestionSlot"
      class="mb-4 prose prose-slate dark:prose-invert"
    >
      <slot name="question" />
    </div>

    <!-- Options area -->
    <div
      class="space-y-2"
      :class="{
        'pointer-events-none': !isAuthLoading && !isAuthenticated,
      }"
    >
      <slot />
    </div>
  </div>
</template>
