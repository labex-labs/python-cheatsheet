<script setup lang="ts">
import { ref, provide, useSlots, watch, computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { useQuizTracking } from '~/composables/useQuizTracking'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const slots = useSlots()
const { recordQuizCompletion } = useQuizTracking()
const selectedOption = ref<string | null>(null)
const correctAnswer = ref<string | null>(null)
const isAnswered = ref(false)

const props = defineProps<{
  correct?: string
}>()

if (props.correct) {
  correctAnswer.value = props.correct
}

// Generate stable quiz ID based on page path and correct answer
// Uses page path and component position to generate unique ID
const quizId = computed(() => {
  const pagePath = route.path
  // Use props.correct as primary identifier, fallback to correctAnswer if not available
  const correct = props.correct || correctAnswer.value || 'default'
  // Generate stable hash from page path and correct answer
  const hash = `${pagePath}:${correct}`
  // Simple hash function
  let hashValue = 0
  for (let i = 0; i < hash.length; i++) {
    const char = hash.charCodeAt(i)
    hashValue = ((hashValue << 5) - hashValue) + char
    hashValue = hashValue & hashValue
  }
  return `quiz-${Math.abs(hashValue).toString(36)}`
})

provide('quizState', {
  selectedOption,
  correctAnswer,
  isAnswered,
  selectOption: (value: string) => {
    if (!isAnswered.value) {
      selectedOption.value = value
      isAnswered.value = true
    }
  },
  setCorrectAnswer: (value: string) => {
    correctAnswer.value = value
  },
})

// Watch quiz completion status and record completion count
watch(isAnswered, (newValue) => {
  if (newValue && quizId.value) {
    recordQuizCompletion(quizId.value)
  }
})

const hasQuestionSlot = !!slots.question
</script>

<template>
  <div
    class="mb-6 rounded-lg border-2 border-primary-200 bg-gradient-to-br from-primary-50/50 to-white p-6 dark:border-primary-800 dark:from-primary-950/30 dark:to-slate-800/50 relative"
  >
    <div
      class="absolute -top-3 left-4 px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-semibold uppercase tracking-wide shadow-md dark:bg-primary-600"
    >
      {{ t('quiz.label') }}
    </div>
    <div
      v-if="hasQuestionSlot"
      class="mb-4 prose prose-slate dark:prose-invert"
    >
      <slot name="question" />
    </div>
    <div class="space-y-2">
      <slot />
    </div>
  </div>
</template>
