<script setup lang="ts">
const { currentLocale, localePath, t } = useI18n()

const getCheatsheetsUrl = () => {
  const baseUrl = 'https://labex.io/cheatsheets'
  const localeMap: Record<string, string> = {
    en: '',
    zh: '/zh',
    es: '/es',
    fr: '/fr',
    de: '/de',
    ja: '/ja',
    ru: '/ru',
    ko: '/ko',
    pt: '/pt',
  }
  const localeSuffix = localeMap[currentLocale.value] || ''
  return `${baseUrl}${localeSuffix}`
}
</script>

<template>
  <footer class="mt-5 border-t dark:border-t-slate-800">
    <div class="pt-5 flex items-center justify-between">
      <div class="flex items-center space-x-2 sm:space-x-5">
        <a
          target="_blank"
          href="https://github.com/labex-labs/python-cheatsheet"
          rel="noreferrer"
        >
          <github-icon />
          <span class="sr-only">{{ t('navbar.repositoryLink') }}</span>
        </a>
        <router-link :to="localePath('/blog')">
          <blog-icon />
          <span class="sr-only">{{ t('navbar.blog') }}</span>
        </router-link>
        <base-theme-toggle />
      </div>
      <a
        :href="getCheatsheetsUrl()"
        target="_blank"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 underline underline-offset-4 transition duration-300 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
      >
        {{ t('footer.moreCheatsheets') }}
        <external-link-icon />
      </a>
    </div>
  </footer>
</template>
