<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import ReferenceIcon from '~/components/icons/ReferenceIcon.vue'
import PluginIcon from '~/components/icons/PluginIcon.vue'
import ArrowIcon from '~/components/icons/ArrowIcon.vue'
import GridIcon from '~/components/icons/GridIcon.vue'
import { computed } from 'vue'

const { t, localePath } = useI18n()

const cardLinks = computed(() => [
  {
    path: 'https://github.com/wilfredinni/python-cheatsheet',
    name: t('home.cardLinks.viewOnGithub'),
    description: t('home.cardLinks.viewOnGithubDesc'),
    icon: ArrowIcon,
    external: true,
  },
  {
    path: localePath('/blog'),
    name: t('home.cardLinks.blog'),
    description: t('home.cardLinks.blogDesc'),
    icon: ReferenceIcon,
  },
  {
    path: localePath('/contributing'),
    name: t('home.cardLinks.contribute'),
    description: t('home.cardLinks.contributeDesc'),
    icon: PluginIcon,
  },
  {
    path: localePath('/changelog'),
    name: t('home.cardLinks.changelog'),
    description: t('home.cardLinks.changelogDesc'),
    icon: GridIcon,
    external: false,
  },
])

const isDark = useDark()
const { description } = useMeta()
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>

<template>
  <article>
    <prose>
      <div class="flex justify-center sm:hidden">
        <img
          class="h-20 w-auto"
          :src="
            isDark
              ? 'https://raw.githubusercontent.com/wilfredinni/python-cheatsheet/refs/heads/master/public/logo.svg'
              : 'https://raw.githubusercontent.com/wilfredinni/python-cheatsheet/refs/heads/master/public/logo-light.svg'
          "
          alt="python-cheatsheet"
        />
      </div>

      <base-title
        v-if="smAndLarger"
        id="python-cheatsheet"
        :title="t('home.title')"
        :description="description"
      >
        {{ t('home.title') }}
      </base-title>
      <h1
        v-else
        class="mb-2 bg-gradient-to-r from-secondary-400 to-green-400 bg-clip-text text-center font-display text-4xl font-medium tracking-tight text-transparent dark:from-primary-400 dark:via-teal-300 dark:to-orange-300"
      >
        {{ t('home.title') }}
      </h1>
    </prose>

    <prose>
      <p>
        {{ t('home.basedOnBook') }}
        <a
          href="https://automatetheboringstuff.com/"
          target="_blank"
          rel="nofollow noreferrer"
        >
          Automate the Boring Stuff with Python
        </a>
        {{ t('home.andManyOtherSources') }}
      </p>
      <p>
        {{ t('home.anyoneCanForget') }}
        <router-link
          :to="
            localePath(
              '/cheatsheet/regular-expressions#making-your-own-character-classes',
            )
          "
        >
          {{ t('home.makeCharacterClasses') }}
        </router-link>
        {{ t('home.forRegex') }}
        <router-link
          :to="
            localePath(
              '/cheatsheet/lists-and-tuples#getting-sublists-with-slices',
            )
          "
        >
          {{ t('home.sliceAList') }}
        </router-link>
        {{ t('home.orDoA') }}
        <router-link :to="localePath('/cheatsheet/control-flow#for-loop')">
          {{ t('home.forLoop') }}
        </router-link>
        . {{ t('home.description') }}
        <a
          href="https://github.com/wilfredinni/python-cheatsheet/blob/master/contributors/contributors.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t('home.contributors') }}
        </a>
        {{ t('home.onGithub') }}
      </p>
    </prose>

    <div className="not-prose my-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <base-link-card
        v-for="link in cardLinks"
        :key="link.path"
        :title="link.name"
        :description="link.description"
        :path="link.path"
        :icon="link.icon"
        :is-external="link.external"
      />
    </div>
  </article>
</template>
