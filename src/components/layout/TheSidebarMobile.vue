<script setup lang="ts">
import { computed } from 'vue'

const isOpen = ref(false)
const navigation = useNavigationStore()
const { t, localePath, getNavigationName } = useI18n()

watch(useRoute(), () => (isOpen.value = false))

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
  <div class="absolute inset-y-0 left-1.5 flex items-center lg:hidden">
    <button type="button" class="relative" @click="isOpen = true">
      <span class="sr-only">{{ t('mobile.openNavigation') }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 stroke-slate-400 sm:h-7 sm:w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>

  <TransitionRoot as="template" :show="isOpen">
    <Dialog
      class="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden"
      @close="isOpen = false"
    >
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <DialogPanel
          class="min-h-full w-full max-w-xs bg-white px-4 pb-12 pt-5 dark:bg-slate-900 sm:px-6"
        >
          <DialogTitle class="sr-only">{{
            t('mobile.navigation')
          }}</DialogTitle>
          <div class="flex items-center">
            <button type="button" @click="isOpen = false">
              <span class="sr-only">{{ t('mobile.closeNavigation') }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 stroke-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav class="mt-10">
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
          </nav>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
