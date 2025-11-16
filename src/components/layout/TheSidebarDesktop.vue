<script setup lang="ts">
const navigation = useNavigationStore()
</script>

<template>
  <nav>
    <the-sidebar-navigation
      :navigation="navigation.mainNavigation"
      section-name="Introduction"
    />

    <the-sidebar-navigation
      :navigation="navigation.cheatsheetNavigation"
      section-name="Cheatsheet"
    />

    <the-sidebar-navigation
      :navigation="navigation.standardLibraryNavigation"
      section-name="Standard Library"
    />

    <the-sidebar-navigation
      :navigation="navigation.builtinNavigation"
      section-name="Built-in Functions"
    />
  </nav>
</template>
