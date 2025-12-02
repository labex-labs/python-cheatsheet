<script setup>
import { generateStructuredData } from '~/composables/structuredData'

const route = useRoute()
const { currentLocale } = useI18n()

// Extract article meta from route
const articleMeta = computed(() => {
  const routeMeta = route.meta || {}
  const childMeta = route.matched[0]?.children?.[0]?.meta || {}

  if (routeMeta.title || routeMeta.date) {
    return {
      title: routeMeta.title,
      description: routeMeta.description,
      date: routeMeta.date,
      updated: routeMeta.updated,
      tags: routeMeta.tags,
      socialImage: routeMeta.socialImage,
    }
  }

  if (childMeta.title || childMeta.date) {
    return {
      title: childMeta.title,
      description: childMeta.description,
      date: childMeta.date,
      updated: childMeta.updated,
      tags: childMeta.tags,
      socialImage: childMeta.socialImage,
    }
  }

  return undefined
})

const { meta } = useMeta(articleMeta.value)
useHead(meta)
useScrollBehavior()
const { t } = useI18n()

// Generate structured data
const structuredData = computed(() => {
  return generateStructuredData(route, currentLocale.value, articleMeta.value)
})

// Inject structured data as JSON-LD
useHead({
  script: computed(() =>
    structuredData.value.map((schema, index) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schema),
      key: `structured-data-${index}-${route.path}`,
    })),
  ),
})

// Inject Google Analytics script if VITE_GTAG is configured
const gTag = import.meta.env.VITE_GTAG
if (gTag && gTag !== 'tag' && gTag.trim() !== '') {
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gTag}`,
        async: true,
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gTag}');
        `,
      },
    ],
  })
}
</script>

<template>
  <BaseBanner storage-key-name="cyber-monday-2025-banner">
    <template #message>
      <span class="text-white">
        {{ t('banner.title') }}
        <a
          href="https://labex.io/pricing"
          target="_blank"
          class="ml-1 font-semibold text-white underline hover:text-slate-200"
        >
          {{ t('banner.getDiscount') }}
        </a>
      </span>
    </template>
    <template #shortMsg>
      <span class="text-white">
        {{ t('banner.shortMessage') }}
        <a
          href="https://labex.io/pricing"
          target="_blank"
          class="ml-1 font-semibold text-white underline hover:text-slate-200"
        >
          {{ t('banner.shortDiscount') }}
        </a>
      </span>
    </template>
  </BaseBanner>
  <RouterView />
</template>
