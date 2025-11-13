<script setup lang="ts">
const { theToc, currentSection } = useToc()

const route = useRoute()

const pageToc = computed(() => {
  if (route.name === 'changelog') {
    const cutIndex = { ...theToc?.value[13] }

    if (cutIndex) {
      const shorterToc = [...theToc.value].slice(0, 13)
      cutIndex.header = 'More...'
      shorterToc.push(cutIndex)
      return shorterToc
    }
    return theToc.value
  }
  return theToc.value
})
</script>

<template>
  <nav
    aria-labelledby="on-this-page-title"
    class="flex h-full w-72 flex-col justify-between"
  >
    <div>
      <p
        id="on-this-page-title"
        class="font-display text-sm font-medium text-slate-900 dark:text-white"
      >
        On this page
      </p>

      <ul class="mt-4 text-sm">
        <li v-for="item in pageToc" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="block py-1 font-medium transition duration-200"
            :class="
              currentSection === item.id
                ? 'text-primary-500 '
                : ' text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            "
          >
            {{ item.header }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
