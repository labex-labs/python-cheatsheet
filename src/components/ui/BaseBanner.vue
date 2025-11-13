<script setup lang="ts">
const props = defineProps<{
  storageKeyName?: string
}>()

const reader = useReaderStore()

const keyName = computed(() => {
  if (props.storageKeyName) return props.storageKeyName
  return 'showBanner'
})

const showBanner = useLocalStorage(keyName.value, true)
</script>

<template>
  <div v-if="!reader.isActive && showBanner">
    <div class="banner-background">
      <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 md:px-0 lg:px-8">
        <div class="sm:px-16 sm:text-center">
          <div class="text-sm font-medium">
            <div class="flex items-center justify-center text-white md:hidden">
              <slot name="shortMsg">We announced a new product!</slot>
            </div>
            <div
              class="md hidden items-center md:flex md:justify-center text-white xl:px-20"
            >
              <slot name="message">
                Big news! We're excited to announce a brand new product.
              </slot>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 items-start pt-1 pr-1 sm:pt-1.5 sm:pr-2"
        >
          <button
            type="button"
            class="hidden rounded-md p-2 text-white transition duration-300 hover:text-slate-200 focus:outline-none sm:block"
            @click="showBanner = false"
          >
            <span class="sr-only">Dismiss</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-background {
  background-color: #2e7eee;
}
</style>
