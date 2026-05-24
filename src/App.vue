<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main class="min-h-screen sm:max-w-6xl px-6 py-8 w-full sm:m-auto">
    <RouterView />

  </main>
</template>

<style scoped></style>
