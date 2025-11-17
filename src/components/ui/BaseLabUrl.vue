<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  url: string
}>()
</script>

<template>
  <div v-if="url" class="not-prose mb-6">
    <a
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M17.2 0a1.2 1.2 0 0 1 1.2 1.2v4a1.2 1.2 0 0 1-1.2 1.2h-.402v1.212l6.976 9.687a1.2 1.2 0 0 1 .22.576L24 18v4.8a1.2 1.2 0 0 1-1.2 1.2H1.2A1.2 1.2 0 0 1 0 22.8V18c0-.252.08-.497.226-.701l6.975-9.687V6.4H6.8a1.2 1.2 0 0 1-1.194-1.084L5.6 5.2v-4A1.2 1.2 0 0 1 6.8 0zM16 2.4H8V4h.4a1.2 1.2 0 0 1 1.195 1.084l.006.116v2.703c0 .315-.1.622-.283.877L2.4 18.386V21.6h19.2v-3.213L14.681 8.78a1.5 1.5 0 0 1-.277-.743l-.006-.134V5.2a1.2 1.2 0 0 1 1.2-1.2H16zm-.48 14.4a1.2 1.2 0 0 1 0 2.4h-2.88a1.2 1.2 0 0 1 0-2.4zm-6.137-4.449 2.135 2.135a1.2 1.2 0 0 1 0 1.697l-2.135 2.135a1.2 1.2 0 1 1-1.697-1.697l1.286-1.286-1.286-1.286a1.2 1.2 0 0 1-.078-1.612l.078-.086a1.2 1.2 0 0 1 1.697 0"
        />
      </svg>
      <span>{{ t('common.practiceInLabexVm') }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  </div>
</template>
