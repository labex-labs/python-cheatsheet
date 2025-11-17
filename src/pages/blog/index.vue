<script setup>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { currentLocale, t } = useI18n()

useHead({
  title: t('blog.title'),
  meta: [
    {
      name: 'description',
      content: t('blog.description'),
    },
  ],
})

const router = useRouter()
const route = useRoute()
const currentPage = ref(parseInt(route.query.page) || 1)
const postsPerPage = 7

watch(
  () => route.query.page,
  (newPage) => {
    currentPage.value = parseInt(newPage) || 1
  },
)

const articles = computed(() => {
  const routes = router.options.routes
  const locale = currentLocale.value
  const blogPrefix = locale === 'en' ? '/blog' : `/${locale}/blog`

  const posts = routes.filter((route) => {
    const path = route.path
    // Exclude blog index page itself
    if (path === '/blog' || path === `/${locale}/blog`) {
      return false
    }
    // Filter blog posts by current locale
    return path.startsWith(blogPrefix + '/')
  })
  return posts.sort(function (a, b) {
    return (
      new Date(b.children[0]?.meta?.date) - new Date(a.children[0]?.meta?.date)
    )
  })
})

const totalPages = computed(() => {
  return Math.ceil(articles.value.length / postsPerPage)
})

const postsToShow = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return articles.value.slice(start, end)
})

const featuredArticle = computed(() => {
  return currentPage.value === 1 ? postsToShow.value[0] : null
})

const gridArticles = computed(() => {
  if (currentPage.value === 1) {
    return postsToShow.value.slice(1)
  }
  return postsToShow.value
})

const getTags = (article) => {
  const tags = article.children[0]?.meta?.tags
  if (!tags) return []
  return tags.split(',').map((tag) => tag.trim())
}

function updatePage(newPage) {
  currentPage.value = newPage
  router.push({ query: { page: newPage } })
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    updatePage(currentPage.value + 1)
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    updatePage(currentPage.value - 1)
  }
}
</script>

<template>
  <div v-if="featuredArticle" class="mb-12">
    <router-link
      :to="featuredArticle.path"
      class="group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
    >
      <div class="md:flex">
        <div class="relative overflow-hidden md:w-1/2">
          <img
            v-if="featuredArticle.children[0]?.meta?.socialImage"
            :src="featuredArticle.children[0]?.meta?.socialImage"
            alt=""
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            v-else
            class="flex h-full w-full items-center justify-center bg-slate-100 dark:bg-slate-700"
          >
            <svg
              class="h-12 w-12 text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 18"
              />
            </svg>
          </div>
        </div>
        <div class="flex flex-col p-6 md:w-1/2">
          <div class="flex-1">
            <div class="mb-2 flex flex-wrap gap-2">
              <Tag
                v-for="tag in getTags(featuredArticle).slice(0, 2)"
                :key="tag"
              >
                {{ tag }}
              </Tag>
            </div>
            <h2
              class="text-2xl font-semibold text-slate-800 dark:text-slate-100"
            >
              {{ featuredArticle.children[0]?.meta?.title }}
            </h2>
            <p class="mt-2 text-slate-600 dark:text-slate-400">
              {{ featuredArticle.children[0]?.meta?.description }}
            </p>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <time class="text-sm text-slate-500 dark:text-slate-400">
              {{ featuredArticle.children[0]?.meta?.date }}
            </time>
            <div class="flex items-center text-sm font-medium text-primary-500">
              {{ t('blog.readArticle') }}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                class="ml-1 h-4 w-4 stroke-current"
              >
                <path
                  d="M6.75 5.75 9.25 8l-2.5 2.25"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>

  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <router-link
      v-for="article in gridArticles"
      :key="article.path"
      :to="article.path"
      class="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
    >
      <div class="relative overflow-hidden">
        <img
          v-if="article.children[0]?.meta?.socialImage"
          :src="article.children[0]?.meta?.socialImage"
          alt=""
          class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          v-else
          class="flex h-48 w-full items-center justify-center bg-slate-100 dark:bg-slate-700"
        >
          <svg
            class="h-12 w-12 text-slate-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 18"
            />
          </svg>
        </div>
      </div>
      <div class="flex flex-1 flex-col p-6">
        <div class="flex-1">
          <div class="mb-2 flex flex-wrap gap-2">
            <Tag v-for="tag in getTags(article).slice(0, 2)" :key="tag">
              {{ tag }}
            </Tag>
          </div>
          <h2 class="text-xl font-semibold text-slate-800 dark:text-slate-100">
            {{ article.children[0]?.meta?.title }}
          </h2>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {{ article.children[0]?.meta?.description }}
          </p>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <time class="text-xs text-slate-500 dark:text-slate-400">
            {{ article.children[0]?.meta?.date }}
          </time>
          <div class="flex items-center text-sm font-medium text-primary-500">
            {{ t('blog.readArticle') }}
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              class="ml-1 h-4 w-4 stroke-current"
            >
              <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </router-link>
  </div>

  <BlogPagination
    :current-page="currentPage"
    :total-pages="totalPages"
    @prev-page="prevPage"
    @next-page="nextPage"
  />
</template>

<route lang="yaml">
meta:
  layout: blog
</route>
