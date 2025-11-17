import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import Markdown from 'unplugin-vue-markdown/vite'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import string from 'string'
import { generateI18nSitemap } from './scripts/generate-i18n-sitemap'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }

  const locales = ['zh', 'es', 'fr', 'de', 'ja', 'ru', 'ko', 'pt']
  const docSections = ['cheatsheet', 'builtin', 'modules', 'blog']

  const pageDirs: Array<{ dir: string; baseRoute: string }> = [
    { dir: 'src/pages', baseRoute: '' },
    { dir: 'docs/cheatsheet/en', baseRoute: 'cheatsheet' },
    { dir: 'docs/builtin/en', baseRoute: 'builtin' },
    { dir: 'docs/modules/en', baseRoute: 'modules' },
    { dir: 'docs/blog/en', baseRoute: 'blog' },
  ]

  // Add multilingual directories for each locale and documentation section
  for (const locale of locales) {
    for (const section of docSections) {
      pageDirs.push({
        dir: `docs/${section}/${locale}`,
        baseRoute: `${locale}/${section}`,
      })
    }
  }

  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
        'vue-gtag': 'vue-gtag/dist/vue-gtag.esm-browser.js', // force ESM build for vue-gtag
      },
    },

    server: {
      proxy: {},
    },

    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
        // reactivityTransform: true,
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ['vue', 'md'],
        dirs: pageDirs,
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts(),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/head', '@vueuse/core'],
        dts: 'src/auto-imports.d.ts',
        dirs: ['src/composables', 'src/store'],
        vueTemplate: true,
        eslintrc: {
          enabled: true,
        },
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        // allow auto load markdown components under `./src/components/`
        dirs: ['src/components'],
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: 'src/components.d.ts',

        resolvers: [HeadlessUiResolver()],
      }),

      // https://github.com/antfu/vite-plugin-vue-markdown
      // https://prismjs.com/
      Markdown({
        headEnabled: true,
        markdownItSetup(md) {
          md.use(require('markdown-it-anchor'), {
            slugify: (s: string) => string(s).slugify().toString(),
          })
          md.use(Prism, {})
          md.use(LinkAttributes, {
            matcher: (link: string) => /^https?:\/\//.test(link),
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          })
        },
      }),

      // https://github.com/antfu/vite-plugin-pwa
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
        manifest: {
          name: 'Python Cheatsheet',
          short_name: 'Python Cheatsheet',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
    ],

    // https://github.com/antfu/vite-ssg
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      format: 'esm', // changed from 'cjs' to 'esm' to fix ESM/CJS compatibility
      async onFinished() {
        const baseUrl = process.env.VITE_BASE_URL || 'pythoncheatsheet.org'
        const hostname = baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`
        await generateI18nSitemap(hostname, 'dist')
      },
    },

    // https://github.com/vitest-dev/vitest
    test: {
      environment: 'jsdom',
      deps: {
        inline: ['@vue', '@vueuse'],
      },
    },
  }
})
