<script setup lang="ts">
import { inject, computed } from 'vue'
import { useI18n } from '~/composables/useI18n'

const { t } = useI18n()

const props = defineProps<{
  value: string
  correct?: boolean
}>()

const quizState = inject<{
  selectedOption: { value: string | null }
  correctAnswer: { value: string | null }
  isAnswered: { value: boolean }
  isAuthenticated?: { value: boolean }
  // eslint-disable-next-line no-unused-vars
  selectOption: (value: string) => void
  // eslint-disable-next-line no-unused-vars
  setCorrectAnswer: (value: string) => void
}>('quizState')

if (props.correct && quizState) {
  quizState.setCorrectAnswer(props.value)
}

const isSelected = computed(() => {
  return quizState?.selectedOption.value === props.value
})

const isCorrect = computed(() => {
  return props.value === quizState?.correctAnswer.value
})

const showResult = computed(() => {
  return quizState?.isAnswered.value && isSelected.value
})

const showCorrectIndicator = computed(() => {
  return quizState?.isAnswered.value && isCorrect.value
})

const handleClick = () => {
  if (isDisabled.value) {
    return
  }
  if (quizState && !quizState.isAnswered.value) {
    quizState.selectOption(props.value)
  }
}

const isDisabled = computed(() => {
  return !quizState?.isAuthenticated?.value
})

const getOptionClass = computed(() => {
  const baseClass =
    'flex w-full items-start gap-3 rounded-lg border-2 p-4 transition-all duration-200'

  const cursorClass = isDisabled.value
    ? 'cursor-not-allowed opacity-50'
    : 'cursor-pointer'

  if (!quizState?.isAnswered.value) {
    if (isDisabled.value) {
      return `${baseClass} ${cursorClass} border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50`
    }
    return `${baseClass} ${cursorClass} border-slate-200 bg-white hover:border-primary-400 hover:bg-primary-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-600 dark:hover:bg-slate-800`
  }

  if (isSelected.value) {
    if (isCorrect.value) {
      return `${baseClass} border-green-500 bg-green-50 dark:border-green-600 dark:bg-green-900/20`
    } else {
      return `${baseClass} border-red-500 bg-red-50 dark:border-red-600 dark:bg-red-900/20`
    }
  }

  if (isCorrect.value) {
    return `${baseClass} border-green-300 bg-green-50/50 dark:border-green-700 dark:bg-green-900/10`
  }

  return `${baseClass} border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/30`
})
</script>

<template>
  <div :class="getOptionClass" @click="handleClick">
    <div
      class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 transition-colors dark:border-slate-600"
      :class="{
        'border-green-500 dark:border-green-600': showResult && isCorrect,
        'border-red-500 dark:border-red-600': showResult && !isCorrect,
        'border-green-300 dark:border-green-700':
          showCorrectIndicator && !isSelected,
      }"
    >
      <div
        v-if="showResult"
        :class="[
          'h-3 w-3 rounded-full',
          isCorrect ? 'bg-green-500' : 'bg-red-500',
        ]"
      />
      <div
        v-else-if="showCorrectIndicator"
        class="h-3 w-3 rounded-full bg-green-500"
      />
    </div>
    <div
      class="flex-1 prose prose-sm dark:prose-invert prose-code:text-primary-900 dark:prose-code:text-slate-300"
    >
      <slot />
    </div>
    <div v-if="showResult" class="shrink-0">
      <span
        v-if="isCorrect"
        class="text-sm font-medium text-green-600 dark:text-green-400"
      >
        {{ t('quiz.correct') }}
      </span>
      <span v-else class="text-sm font-medium text-red-600 dark:text-red-400">
        {{ t('quiz.wrong') }}
      </span>
    </div>
  </div>
</template>
