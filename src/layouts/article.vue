<script setup lang="ts">
const reader = useReaderStore()
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <the-navbar v-show="!reader.isActive" />
    <the-navbar-reader v-show="reader.isActive" />

    <div
      class="relative mx-auto flex min-h-screen max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12"
    >
      <!-- article -->
      <div
        class="min-w-0 flex-auto px-4 py-12 xl:pr-16"
        :class="[reader.isActive ? 'max-w-2xl lg:max-w-4xl' : 'lg:max-w-4xl']"
      >
        <article>
          <prose><RouterView /></prose>
        </article>

        <the-footer
          repository="https://github.com/wilfredinni/python-cheatsheet/blob/master/docs"
        />
      </div>

      <!-- table of content -->
      <div
        v-show="!reader.isActive"
        class="hidden w-64 overflow-x-hidden xl:sticky xl:top-[4.3rem] xl:-mr-6 xl:block xl:h-[calc(100vh-3.6rem)] xl:flex-none xl:overflow-y-auto xl:py-10 xl:pr-6"
      >
        <the-toc />
      </div>
    </div>
  </div>
</template>
