<script setup lang="ts">
import EditIcon from '~/components/icons/EditIcon.vue'
import QuestionIcon from '~/components/icons/QuestionIcon.vue'
import BugIcon from '~/components/icons/BugIcon.vue'

const props = defineProps<{
  repository?: string
}>()

const route = useRoute()
const { t } = useI18n()

const EditLink = computed(() => ({
  linkHeader: t('footer.editThisPageOn'),
  linkText: t('footer.github'),
  url: `${props.repository}${route.path}.md`,
  icon: EditIcon,
}))

const footerLinks = computed(() => [
  {
    linkHeader: t('footer.doYouHaveAQuestion'),
    linkText: t('footer.askTheCommunity'),
    url: 'https://github.com/wilfredinni/python-cheatsheet/discussions',
    icon: QuestionIcon,
  },
  {
    linkHeader: t('footer.doYouSeeABug'),
    linkText: t('footer.openAnIssueOnGithub'),
    url: 'https://github.com/wilfredinni/python-cheatsheet/issues',
    icon: BugIcon,
  },
])

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
            class="ml-1 flex text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500"
          >
            {{ EditLink.linkText }}
          </a>
        </div>

        <div
          v-for="link in footerLinks"
          :key="link.url"
          class="flex items-center text-slate-600 dark:text-slate-400"
        >
          <component :is="link.icon" class="mr-2 h-4 w-4" />
          {{ link.linkHeader }}
          <a
            target="_blank"
            :href="link.url"
            class="ml-1 flex text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500"
          >
            {{ link.linkText }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
