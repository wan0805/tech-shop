<script setup lang="ts">
import { computed } from 'vue'
import PackageXIcon from '../icons/PackageXIcon.vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Button',
  },
  textLoading: {
    type: String,
    required: false,
    default: 'Loading...',
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  stock: {
    type: Number,
    required: false,
    default: 0,
  },
  textDisabled: {
    type: String,
    required: false,
    default: 'Out of stock',
  },
})

const isOutOfStock = computed(() => props.stock <= 0)
const isDisabled = computed(() => props.loading || isOutOfStock.value)
</script>

<template>
  <button
    class="flex-1 bg-black text-white px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/10"
    :disabled="isDisabled"
    :class="{
      'cursor-wait bg-gray-950 active:scale-100': loading,
      'bg-gray-500 text-white cursor-not-allowed active:scale-100': isOutOfStock && !loading,
      'hover:bg-gray-800 active:scale-95 cursor-pointer': !isDisabled,
    }"
  >
    <!-- Spinner de Loading -->
    <span
      v-if="loading"
      class="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
      aria-hidden="true"
    ></span>

    <PackageXIcon v-if="isOutOfStock && !loading" class="w-5 h-5" aria-hidden="true" />

    <slot v-if="!loading && !isOutOfStock"></slot>

    <span>
      {{ loading ? textLoading : isOutOfStock ? textDisabled : text }}
    </span>
  </button>
</template>

<style scoped></style>
