<script setup>
const { meta } = useMeta()
useHead(meta)
useScrollBehavior()
</script>

<template>
  <BaseBanner storage-key-name="black-friday-2025-banner">
    <template #message>
      <span class="text-white">
        Black Friday 2025:
        <a
          href="https://labex.io/learn/python"
          target="_blank"
          class="font-semibold text-white underline hover:text-slate-200"
          >Learn Python</a
        >
        with LabEx Hands-on Labs.
        <a
          href="https://labex.io/pricing"
          target="_blank"
          class="ml-1 font-semibold text-white underline hover:text-slate-200"
        >
          Get 50% OFF Now →
        </a>
      </span>
    </template>
    <template #shortMsg>
      <span class="text-white">
        Black Friday 2025: Python Hands-on Labs
        <a
          href="https://labex.io/pricing"
          target="_blank"
          class="ml-1 font-semibold text-white underline hover:text-slate-200"
        >
          Get 50% OFF →
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
