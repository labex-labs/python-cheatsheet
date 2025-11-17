<script setup lang="ts">
const route = useRoute()
const navigation = useNavigationStore()
const { localePath, t } = useI18n()

const changelogPath = [{ name: 'Changelog', path: '/changelog' }]
const allRoutes = [
  ...changelogPath,
  ...navigation.mainNavigation,
  ...navigation.cheatsheetNavigation,
  ...navigation.standardLibraryNavigation,
]

const previous = computed(() => {
  try {
    const currentPath = route.path
    const index = allRoutes.findIndex((item) => {
      const localizedPath = localePath(item.path)
      return currentPath === localizedPath || currentPath === item.path
    })
    const prev = allRoutes[index - 1]
    return prev ? { ...prev, path: localePath(prev.path) } : null
  } catch (err) {
    return null
  }
})

const next = computed(() => {
  try {
    const currentPath = route.path
    const index = allRoutes.findIndex((item) => {
      const localizedPath = localePath(item.path)
      return currentPath === localizedPath || currentPath === item.path
    })
    const nextItem = allRoutes[index + 1]
    return nextItem ? { ...nextItem, path: localePath(nextItem.path) } : null
  } catch (err) {
    return null
  }
})
</script>

<template>
  <div class="mt-5 grid grid-cols-1 gap-4 pt-5 text-slate-400 sm:grid-cols-2">
    <router-link
      v-if="previous"
      :to="previous.path"
      class="grid w-full rounded-lg border border-slate-300/70 p-5 transition duration-300 hover:border-primary-500 hover:bg-primary-400/5 dark:border-slate-800 dark:hover:border-primary-400"
    >
      <span class="text-sm text-slate-500 dark:text-slate-400">
        {{ t('common.previousPage') }}
      </span>
      <span class="font-medium text-primary-500 dark:text-primary-400">
        {{ previous.name }}
      </span>
    </router-link>
    <div v-else />
    <router-link
      v-if="next"
      :to="next.path"
      class="grid w-full rounded-lg border border-slate-300/70 p-5 text-end transition duration-300 hover:border-primary-500 hover:bg-primary-400/5 dark:border-slate-800 dark:hover:border-primary-400"
    >
      <span class="text-sm text-slate-500 dark:text-slate-400">
        {{ t('common.nextPage') }}
      </span>
      <span class="font-medium text-primary-500 dark:text-primary-400">
        {{ next.name }}
      </span>
    </router-link>
    <div v-else />
  </div>
</template>
