<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useI18n, type Locale } from '~/composables/useI18n'

const { currentLocale, switchLocale, SUPPORTED_LOCALES, t } = useI18n()

const getLocaleName = (locale: Locale): string => {
  return t(`common.localeNames.${locale}`)
}

const handleLocaleChange = (locale: Locale) => {
  if (locale !== currentLocale.value) {
    switchLocale(locale)
  }
}
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full items-center justify-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium text-slate-700 transition duration-300 hover:bg-slate-100 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:text-gray-200 dark:hover:bg-slate-800 dark:hover:text-primary-400 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm"
      >
        <span class="sr-only">{{ t('common.language') }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 sm:h-5 sm:w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span class="hidden sm:inline">{{ getLocaleName(currentLocale) }}</span>
        <svg
          class="-mr-1 ml-0.5 h-3 w-3 sm:ml-1 sm:h-4 sm:w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01-.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800"
      >
        <div class="py-1">
          <MenuItem
            v-for="locale in SUPPORTED_LOCALES"
            :key="locale"
            v-slot="{ active }"
          >
            <button
              :class="[
                active
                  ? 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-white'
                  : 'text-slate-700 dark:text-gray-200',
                'group flex w-full items-center px-4 py-2 text-sm transition duration-150',
                currentLocale === locale ? 'font-semibold' : 'font-normal',
              ]"
              @click="handleLocaleChange(locale)"
            >
              <svg
                v-if="currentLocale === locale"
                class="mr-2 h-4 w-4 text-primary-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              <span v-else class="mr-2 h-4 w-4" aria-hidden="true" />
              {{ getLocaleName(locale) }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
