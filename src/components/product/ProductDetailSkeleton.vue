<script setup lang="ts"></script>
<template>
  <section
    class="inset-0 z-50 flex flex-col items-center w-full p-4 sm:p-10 md:p-20 overflow-y-auto bg-black/0 animate-pulse"
  >
    <div
      class="relative z-10 grid grid-cols-1 md:grid-cols-[minmax(0,250px)_1fr] gap-6 md:gap-12 p-4 sm:p-12 pl-0 bg-[#f3f4f6] md:bg-[linear-gradient(to_right,transparent_250px,#f3f4f6_250px)] w-full max-w-5xl"
    >
      <div
        class="bg-gray-300 shadow-[0_0_2rem_rgba(0,0,0,0.1)] w-full aspect-square max-w-62.5 md:w-full md:h-auto"
      ></div>

      <div class="w-full max-w-xl">
        <div class="h-10 sm:h-12 bg-gray-300 rounded-md w-3/4 mb-4"></div>

        <div class="space-y-3">
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>

        <div class="h-8 bg-gray-300 rounded w-24 mt-4"></div>
        <div class="mt-10 md:mt-20 h-12 bg-gray-400 w-40 sm:w-48"></div>
      </div>

      <div class="md:col-start-2 mt-4 md:mt-8 w-full">
        <div class="h-8 bg-gray-300 rounded w-40 mb-6"></div>

        <div class="space-y-6">
          <div v-for="i in 2" :key="i" class="border-b border-black/10 pb-5">
            <div class="h-5 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div class="h-4 bg-gray-100 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
