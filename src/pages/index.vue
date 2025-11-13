<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import ReferenceIcon from '~/components/icons/ReferenceIcon.vue'
import PluginIcon from '~/components/icons/PluginIcon.vue'
import ArrowIcon from '~/components/icons/ArrowIcon.vue'
import GridIcon from '~/components/icons/GridIcon.vue'

const cardLinks = [
  {
    path: 'https://github.com/wilfredinni/python-cheatsheet',
    name: 'View on GitHub',
    description: `Drop a star on GitHub if you find this project useful.`,
    icon: ArrowIcon,
    external: true,
  },
  {
    path: '/contributing',
    name: 'Contribute',
    description: `Get to know how easy it is to contribute to the Python Cheatsheet.`,
    icon: PluginIcon,
  },
  {
    path: '/blog',
    name: 'Blog',
    description: `Read detailed articles about Python and it's ecosystem.`,
    icon: ReferenceIcon,
  },
  {
    path: '/changelog',
    name: 'Changelog',
    description: `See what is new, what got fixed, and what is coming.`,
    icon: GridIcon,
    external: false,
  },
]

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
        title="Python Cheatsheet"
        :description="description"
      >
        Python Cheatsheet
      </base-title>
      <h1
        v-else
        class="mb-2 bg-gradient-to-r from-secondary-400 to-green-400 bg-clip-text text-center font-display text-4xl font-medium tracking-tight text-transparent dark:from-primary-400 dark:via-teal-300 dark:to-orange-300"
      >
        Python Cheatsheet
      </h1>
    </prose>

    <prose class="hidden sm:block">
      <p>
        Anyone can forget how to
        <router-link
          to="/cheatsheet/regular-expressions#making-your-own-character-classes"
        >
          make character classes
        </router-link>
        for a regex,
        <router-link
          to="/cheatsheet/lists-and-tuples#getting-sublists-with-slices"
        >
          slice a list
        </router-link>
        or do a
        <router-link to="/cheatsheet/control-flow#for-loop">
          for loop
        </router-link>
        . This Python cheatsheet tries to provide basic reference for beginner
        and advanced developers, lower the entry barrier for newcomers and help
        veterans refresh the old tricks. View all
        <a
          href="https://github.com/wilfredinni/python-cheatsheet/blob/master/contributors/contributors.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          contributors
        </a>
        on GitHub.
      </p>
    </prose>

    <div className="not-prose my-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <base-link-card
        v-for="link in cardLinks"
        v-once
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
