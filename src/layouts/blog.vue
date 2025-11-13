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
      <div class="min-w-0 w-full flex-auto px-4 py-12 lg:px-8">
        <div
          class="mx-auto"
          :class="[reader.isActive ? 'lg:max-w-4xl' : 'lg:max-w-6xl']"
        >
          <article>
            <RouterView />
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
