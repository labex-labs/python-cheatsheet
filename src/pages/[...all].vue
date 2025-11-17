<script setup lang="ts">
const isDark = useDark()
const { t, localePath } = useI18n()

useHead({
  title: t('error404.title'),
  meta: [
    {
      name: 'description',
      content: t('error404.description'),
    },
  ],
})
</script>

<template>
  <div class="flex min-h-full flex-col bg-gray-900 pb-12 pt-16">
    <main
      class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8"
    >
      <div class="flex flex-shrink-0 justify-center">
        <router-link :to="localePath('/')" class="inline-flex">
          <span class="sr-only">{{ t('home.title') }}</span>
          <img
            class="h-12 w-auto"
            :src="
              isDark
                ? 'https://raw.githubusercontent.com/wilfredinni/python-cheatsheet/refs/heads/master/public/logo.svg'
                : 'https://raw.githubusercontent.com/wilfredinni/python-cheatsheet/refs/heads/master/public/logo-light.svg'
            "
            alt="python-cheatsheet"
          />
        </router-link>
      </div>
      <div class="py-12">
        <div class="text-center">
          <p
            class="text-sm font-semibold uppercase tracking-wide text-primary-400"
          >
            {{ t('error404.error') }}
          </p>
          <h1
            class="mt-2 text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl"
          >
            {{ t('error404.pageNotFound') }}
          </h1>
          <p class="mt-2 text-base text-slate-500">
            {{ t('error404.description') }}
          </p>
          <div class="mt-6">
            <router-link
              :to="localePath('/')"
              class="text-base font-medium text-primary-400 hover:text-primary-500"
            >
              {{ t('error404.goBackHome')
              }}<span aria-hidden="true"> &rarr;</span>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
