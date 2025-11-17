<script setup lang="ts">
const reader = useReaderStore()
</script>

<template>
  <button
    @click="reader.toggle()"
    class="rounded text-slate-500 transition duration-300 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
    :class="reader.isActive ? 'text-primary-500 dark:text-primary-400' : ''"
  >
    <span class="sr-only">Reader mode</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 sm:h-6 sm:w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  </button>
</template>
