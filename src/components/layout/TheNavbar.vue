<script setup lang="ts">
import { onMounted } from 'vue'

const navigation = useNavigationStore()
const route = useRoute()
const isDark = useDark()
const { localePath, t } = useI18n()
const { user, isLoading, isAuthenticated, login, checkAuth } = useAuth()

onMounted(() => {
  checkAuth()
})

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
                :src="isDark ? '/labex-logo-light.svg' : '/labex-logo-dark.svg'"
                alt="LabEx"
                height="10"
                width="10"
              />
            </router-link>
          </div>

          <!-- <algolia-doc-search /> -->
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
              href="https://labex.io/cheatsheets/pdf/python-cheatsheet.pdf"
              target="_blank"
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
          <!-- Auth status -->
          <div v-if="!isLoading" class="flex items-center">
            <a
              v-if="isAuthenticated && user"
              :href="`https://labex.io/users/${user.name || user.nick_name || ''}`"
              target="_blank"
              class="flex items-center"
              :title="user.nick_name || user.name || ''"
            >
              <img
                v-if="user.img_url"
                :src="user.img_url"
                :alt="user.name || user.nick_name || 'User'"
                class="h-8 w-8 rounded-full border border-slate-300 dark:border-slate-600"
              />
              <div
                v-else
                class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-sm font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {{
                  (user.name || user.nick_name || 'U').charAt(0).toUpperCase()
                }}
              </div>
            </a>
            <button
              v-else
              class="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
              @click="login"
            >
              {{ t('navbar.login') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
