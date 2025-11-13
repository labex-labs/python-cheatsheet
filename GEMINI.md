# Gemini Customization File

This file provides instructions for Gemini to effectively assist with development in this project.

## Project Overview

This project is a Python cheatsheet website built with Vue.js and Vite. The content is written in Markdown and located in the `docs/` directory.

## Technologies

*   **Framework:** Vue.js 3
*   **Build Tool:** Vite
*   **Package Manager:** pnpm
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Linting:** ESLint
*   **Formatting:** Prettier
*   **Testing:** Vitest

## Coding Style and Conventions

*   Follow the existing coding style.
*   Use TypeScript for all new code.
*   Use pnpm for all package management.
*   Components are located in `src/components`.
*   Pages are located in `src/pages`.
*   Content is in Markdown files in the `docs/` directory.

## Routing & Layout System

- Uses `vite-plugin-pages` for file-based routing with multiple layouts:
  - `default.vue`: Main layout with sidebar + TOC
  - `article.vue`: Blog post layout
  - `fullPage.vue`: Full-width pages
  - `blog.vue`: Blog index layout
- Route metadata defined in `<route lang="yaml">` blocks
- Navigation structure centralized in `src/store/navigation.ts`

## Content Rendering

- Markdown files auto-converted to Vue components via `unplugin-vue-markdown`
- Prism.js for syntax highlighting with custom theme
- Custom Vue components available in markdown (e.g., `<base-title>`, `<base-disclaimer>`)
- Automatic TOC generation from headings using `markdown-it-anchor`

## Key Features Implementation

- **Reader Mode**: Full-screen reading with font size controls (`src/store/reader.ts`)
- **Dark Mode**: Theme toggle with system preference detection
- **Search**: Algolia DocSearch integration (`src/components/AlgoliaDocSearch.vue`)
- **Contributors**: Auto-fetched from GitHub API (`scripts/fetch-contributors.ts`)

## Available Scripts

The following scripts are available in `package.json`:

*   `pnpm dev`: Starts the development server.
*   `pnpm build`: Builds the project for production.
*   `pnpm preview`: Previews the production build.
*   `pnpm test`: Runs the tests.
*   `pnpm lint`: Lints the code with ESLint.
*   `pnpm typecheck`: Runs a type check with `vue-tsc`.
*   `pnpm fetch-contributors`: Fetches the contributors from GitHub.


## Content Creation Patterns

**New Cheatsheet Page:**

```markdown
---
title: Topic Name - Python Cheatsheet
description: Brief description of the topic
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Topic Name
</base-title>

<!-- Content with proper heading structure -->
```

**New Blog Post:**

```markdown
---
title: Post Title - Python Cheatsheet
description: Post description
date: MMM DD, YYYY
updated: MMM DD, YYYY
tags: python, topic, level
socialImage: /blog/image.jpg
---

<route lang="yaml">
meta:
    layout: article
    # duplicate frontmatter here
</route>

<blog-title-header :frontmatter="frontmatter" title="Display Title" />
```

## Navigation Updates

- Add new routes to `src/store/navigation.ts` in appropriate section
- Use `updated: true` flag for highlighting new content
- Internal links use `<router-link>` for SPA navigation

## Project-Specific Conventions

### Component Organization

- **UI Components**: `src/components/ui/` - reusable base components
- **Layout Components**: `src/components/layout/` - navigation, sidebars, footers
- **Icons**: `src/components/icons/` - SVG icon components
- **Auto-imports**: Components auto-registered via `unplugin-vue-components`

## State Management

- **Pinia stores** for global state (navigation, reader mode)
- **VueUse composables** for reactive utilities
- **Auto-imports** for composables and Vue APIs

## Content Guidelines

- Use consistent frontmatter structure across similar content types
- Link internally with `<router-link>` for better SPA experience
- Include code examples in fenced blocks for proper syntax highlighting
- Add social images for blog posts to improve sharing
- Update navigation store when adding new major sections