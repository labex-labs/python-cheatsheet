<script setup lang="ts">
import EditIcon from '~/components/icons/EditIcon.vue'
import QuestionIcon from '~/components/icons/QuestionIcon.vue'
import BugIcon from '~/components/icons/BugIcon.vue'

const props = defineProps<{
  repository?: string
}>()

const route = useRoute()

const EditLink = {
  linkHeader: 'Edit this page on',
  linkText: 'GitHub',
  url: `${props.repository}${route.path}.md`,
  icon: EditIcon,
}

const footerLinks = [
  {
    linkHeader: 'Do you have a question?',
    linkText: 'ask the community',
    url: 'https://github.com/wilfredinni/python-cheatsheet/discussions',
    icon: QuestionIcon,
  },
  {
    linkHeader: 'Do you see a bug?',
    linkText: 'open an issue on GitHub',
    url: 'https://github.com/wilfredinni/python-cheatsheet/issues',
    icon: BugIcon,
  },
]

const routesWithoutGithub = ['index', 'blog']
</script>

<template>
  <footer class="mt-5 border-t dark:border-t-slate-800">
    <div class="justify-between pt-5 sm:flex">
      <div
        class="grid text-xs"
        :class="route.name !== 'index' ? 'space-y-1.5' : ''"
      >
        <div
          v-if="!routesWithoutGithub.includes(route.name as string)"
          class="flex items-center text-slate-600 dark:text-slate-400"
        >
          <component :is="EditLink.icon" class="mr-2 h-4 w-4" />
          {{ EditLink.linkHeader }}
          <a
            target="_blank"
            :href="`${props.repository}${route.path}.md`"
            class="ml-1 flex text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500"
          >
            {{ EditLink.linkText }}
          </a>
        </div>

        <div
          v-for="link in footerLinks"
          v-once
          :key="link.url"
          class="flex items-center text-slate-600 dark:text-slate-400"
        >
          <component :is="link.icon" class="mr-2 h-4 w-4" />
          {{ link.linkHeader }}
          <a
            target="_blank"
            :href="link.url"
            class="ml-1 flex text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500"
          >
            {{ link.linkText }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
