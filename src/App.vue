<script setup>
const { meta } = useMeta()
useHead(meta)
useScrollBehavior()
const { t } = useI18n()
</script>

<template>
  <BaseBanner storage-key-name="black-friday-2025-banner">
    <template #message>
      <span class="text-white">
        {{ t('banner.title') }}
        <a
          href="https://labex.io/learn/python"
          target="_blank"
          class="font-semibold text-white underline hover:text-slate-200"
          >{{ t('banner.learnPython') }}</a
        >
        {{ t('banner.withLabex') }}
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

<style>
::-webkit-scrollbar {
  width: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #868686;
}

/* Track */
.dark ::-webkit-scrollbar-track {
  background: #374151;
}

/* Handle */
.dark ::-webkit-scrollbar-thumb {
  background: #6b7280;
}

/* Track */
::-webkit-scrollbar-track {
  background: #dfe0e2;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #9ca3af;
}
</style>
