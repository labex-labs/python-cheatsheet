<script setup lang="ts">
interface Navigation {
  name: string
  path: string
  updated?: boolean
  [key: string]: any
}

defineProps<{
  sectionName: string
  navigation: Array<Navigation>
}>()

const route = useRoute()
const { localePath } = useI18n()
</script>

<template>
  <p class="font-display text-base font-medium text-slate-900 dark:text-white">
    {{ sectionName }}
  </p>
  <ul
    class="mb-6 mt-2 space-y-2 border-l-2 border-slate-100 text-base dark:border-slate-800 lg:mt-4 lg:space-y-1.5 lg:border-slate-200 lg:text-sm"
  >
    <li v-for="item in navigation" :key="item.name" class="relative">
      <router-link
        :to="localePath(item.path)"
        class="-ml-px block border-l border-transparent pl-4 transition duration-150"
        :class="
          route.path === localePath(item.path) || route.path === item.path
            ? 'border-current font-semibold text-primary-500 dark:text-primary-400'
            : 'text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300'
        "
      >
        {{ item.name }}
        <new-badge v-if="item.updated" class="ml-1" />
      </router-link>
    </li>
  </ul>
</template>
