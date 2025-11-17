<script setup lang="ts">
import { computed } from 'vue'

const navigation = useNavigationStore()
const { t, localePath, getNavigationName } = useI18n()

const mainNavigation = computed(() => {
  return navigation.mainNavigation.map((item) => ({
    ...item,
    name: item.path === '/' ? t('sidebar.gettingStarted') : item.name,
    path: localePath(item.path),
  }))
})

const cheatsheetNavigation = computed(() => {
  return navigation.cheatsheetNavigation.map((item) => ({
    ...item,
    name: getNavigationName(item.path, item.name),
    path: localePath(item.path),
  }))
})

const standardLibraryNavigation = computed(() => {
  return navigation.standardLibraryNavigation.map((item) => ({
    ...item,
    name: getNavigationName(item.path, item.name),
    path: localePath(item.path),
  }))
})

const builtinNavigation = computed(() => {
  return navigation.builtinNavigation.map((item) => ({
    ...item,
    name: getNavigationName(item.path, item.name),
    path: localePath(item.path),
  }))
})
</script>

<template>
  <nav>
    <the-sidebar-navigation
      :navigation="mainNavigation"
      :section-name="t('sidebar.introduction')"
    />

    <the-sidebar-navigation
      :navigation="cheatsheetNavigation"
      :section-name="t('sidebar.cheatsheet')"
    />

    <the-sidebar-navigation
      :navigation="standardLibraryNavigation"
      :section-name="t('sidebar.standardLibrary')"
    />

    <the-sidebar-navigation
      :navigation="builtinNavigation"
      :section-name="t('sidebar.builtinFunctions')"
    />
  </nav>
</template>
