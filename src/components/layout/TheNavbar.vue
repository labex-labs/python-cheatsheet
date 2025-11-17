<script setup lang="ts">
const navigation = useNavigationStore()
const route = useRoute()
const isDark = useDark()
const { localePath, t } = useI18n()

// const timeAgo = useTimeAgo(new Date(2023, 12, 29, 15, 15))
</script>

<template>
  <nav
    class="sticky top-0 z-40 w-full flex-none border-b border-slate-900/10 bg-white/90 backdrop-blur dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50"
  >
    <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-12">
      <div class="relative flex h-12 justify-between sm:h-14">
        <the-sidebar-mobile />

        <!-- menu -->
        <div
          class="ml-14 flex flex-1 items-center space-x-2 sm:space-x-4 lg:ml-0 lg:space-x-6"
        >
          <div
            class="mr-2 flex flex-shrink-0 items-center gap-2 sm:mr-3 sm:gap-3"
          >
            <router-link :to="localePath('/')" class="flex items-center">
              <img
                class="h-6 w-auto sm:h-7"
                :src="
                  isDark
                    ? 'https://raw.githubusercontent.com/wilfredinni/python-cheatsheet/refs/heads/master/public/logo.svg'
                    : 'https://raw.githubusercontent.com/wilfredinni/python-cheatsheet/refs/heads/master/public/logo-light.svg'
                "
                alt="python-cheatsheet"
                height="10"
                width="10"
              />
            </router-link>
            <div class="h-5 w-px bg-slate-300 dark:bg-slate-700 sm:h-6"></div>
            <a
              href="https://labex.io/learn"
              target="_blank"
              class="flex items-center"
            >
              <img
                class="h-6 w-auto sm:h-7"
                :src="
                  isDark
                    ? 'https://cdn.jsdelivr.net/gh/labex-labs/files@master/images/labex-logo-light.svg'
                    : 'https://cdn.jsdelivr.net/gh/labex-labs/files@master/images/labex-logo-dark.svg'
                "
                alt="LabEx"
                height="10"
                width="10"
              />
            </a>
          </div>

          <!-- <algolia-doc-search /> -->

          <base-badge-notice size="xs" class="hidden lg:block">
            <template #title>
              <router-link
                :to="localePath('/blog')"
                class="capitalize hover:text-primary-500"
              >
                ✨ {{ t('navbar.blog') }}
              </router-link>
            </template>
            <template #message>
              <router-link
                :to="localePath('/blog/python-decorators-for-beginners')"
                class="hover:text-primary-500"
              >
                Python Decorators Patterns
              </router-link>
            </template>
          </base-badge-notice>
        </div>

        <!-- actions -->
        <div
          class="absolute inset-y-0 right-0 flex items-center space-x-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:space-x-5 sm:pr-0"
        >
          <div
            class="hidden border-r border-slate-200 pr-6 dark:border-slate-800 sm:ml-6 sm:space-x-6 lg:flex"
          >
            <div
              v-for="item in navigation.navbarNavigation"
              v-once
              :key="item.name"
            >
              <router-link
                v-if="item.internal"
                :to="localePath(item.path)"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-300"
                :class="
                  route.path === localePath(item.path) ||
                  route.path === item.path
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-slate-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400'
                "
              >
                {{ item.name }}
              </router-link>

              <a
                v-else
                v-once
                :href="item.path"
                target="_blank"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-700 transition duration-300 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400"
              >
                {{ item.name }}
              </a>
            </div>
            <a
              href="/labex-python-cheatsheet.pdf"
              download="labex-python-cheatsheet.pdf"
            >
              <div
                class="text-xs relative flex items-center gap-2 rounded-full border border-primary-600 px-4 py-0.5 leading-6 text-primary-600 transition duration-300 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-950/20"
              >
                <strong class="line-clamp-1 font-semibold">
                  {{ t('navbar.pythonCheatsheetPdf') }}
                </strong>
                <svg
                  viewBox="0 0 16 16"
                  class="h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <path
                    d="M8 11V1M8 11L4 7M8 11L12 7M2 15h12"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>

          <base-locale-switcher />
          <base-reader-mode />
          <a
            target="_blank"
            href="https://github.com/wilfredinni/python-cheatsheet"
            rel="noreferrer"
          >
            <github-icon />
            <span class="sr-only">{{ t('navbar.repositoryLink') }}</span>
          </a>
          <base-theme-toggle />
        </div>
      </div>
    </div>
  </nav>
</template>
