<script setup lang="ts">
defineProps({
  quantity: { type: Number, required: true },
})

const emit = defineEmits(['increase', 'decrease'])
</script>

<template>
  <div class="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100 w-fit">
    <button
      type="button"
      aria-label="Decrease quantity"
      title="Minus"
      @click="emit('decrease')"
      class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 transition-all hover:bg-white hover:shadow-sm active:scale-90"
    >
      <span class="text-xl leading-none" aria-hidden="true">-</span>
    </button>

    <span class="w-12 text-center font-bold text-gray-900 select-none">
      {{ quantity }}
    </span>

    <button
      type="button"
      aria-label="Increase quantity"
      title="Plus"
      @click="emit('increase')"
      class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 transition-all hover:bg-white hover:shadow-sm active:scale-90"
    >
      <span class="text-xl leading-none" aria-hidden="true">+</span>
    </button>
  </div>
</template>
