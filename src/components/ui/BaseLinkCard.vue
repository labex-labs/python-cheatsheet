<script setup lang="ts">
defineProps<{
  icon: Object
  path: string
  title: string
  description: string
  isExternal?: boolean
}>()
</script>

<template>
  <div
    class="group relative rounded-xl border border-slate-200 dark:border-slate-800"
  >
    <div
      class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 transition duration-300 [background:linear-gradient(var(--link-grid-hover-bg,theme(colors.primary.50)),var(--link-grid-hover-bg,theme(colors.primary.50)))_padding-box,linear-gradient(to_top,theme(colors.secondary.400),theme(colors.accent.400),theme(colors.primary.500))_border-box] group-hover:opacity-100 dark:[--link-grid-hover-bg:theme(colors.slate.800)]"
    />
    <div class="relative overflow-hidden rounded-xl p-6">
      <component :is="icon" class="h-8 w-8" />
      <h2 class="mt-4 font-display text-base text-slate-900 dark:text-white">
        <a v-if="isExternal" target="_blank" :href="path">
          <span class="absolute -inset-px rounded-xl" />
          {{ title }}
        </a>
        <router-link v-else :to="path">
          <span class="absolute -inset-px rounded-xl" />
          {{ title }}
        </router-link>
      </h2>
      <p class="mt-1 text-sm text-slate-700 dark:text-slate-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>
