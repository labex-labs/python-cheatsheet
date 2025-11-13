<script setup lang="ts">
const reader = useReaderStore()
const route = useRoute()

const rootRepositoryRoutes = ['contributing', 'changelog']
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <the-navbar v-show="!reader.isActive" />
    <the-navbar-reader v-show="reader.isActive" />

    <div
      class="relative mx-auto flex min-h-screen max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12"
    >
      <!-- sidebar -->
      <div
        v-show="!reader.isActive"
        class="hidden lg:relative lg:block lg:flex-none"
      >
        <div class="absolute inset-y-0 right-0 w-[50vw] dark:hidden" />
        <div
          class="sticky top-[3.6rem] -ml-0.5 h-[calc(100vh-3.6rem)] overflow-y-auto overflow-x-hidden py-10 pl-0.5"
        >
          <div
            class="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"
          />
          <div
            class="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block"
          />
          <div class="w-64 pr-8 xl:w-72 xl:pr-16">
            <the-sidebar-desktop />
          </div>
        </div>
      </div>

      <!-- article -->
      <div
        class="min-w-0 flex-auto px-4 py-12 xl:px-16"
        :class="[reader.isActive ? 'max-w-2xl lg:max-w-4xl' : 'lg:max-w-none']"
      >
        <article>
          <prose v-if="route.name !== 'index'"><router-view /></prose>
          <router-view v-else />
        </article>

        <base-pagination v-if="!route.path.startsWith('/builtin/')" />

        <the-footer
          :repository="
            !rootRepositoryRoutes.includes(route.name as string)
              ? 'https://github.com/wilfredinni/python-cheatsheet/blob/master/docs'
              : 'https://github.com/wilfredinni/python-cheatsheet/blob/master/src/pages'
          "
        />
      </div>

      <!-- table of content -->
      <div
        v-show="!reader.isActive"
        class="overflow-overlay hidden overflow-x-hidden xl:sticky xl:top-[3.6rem] xl:-mr-6 xl:block xl:h-[calc(100vh-3.6rem)] xl:flex-none xl:overflow-y-auto xl:py-10 xl:pr-6"
      >
        <the-toc />
      </div>
    </div>
  </div>
</template>

<style scoped>
.overflow-overlay {
  overflow-y: overlay;
}
</style>
