<script setup lang="ts">
import type { Product } from '@/types/product'
import { formatCurrency } from '@/utils/currency'
import { RouterLink } from 'vue-router'
defineProps<{
  product: Product
}>()
</script>
<template>
  <RouterLink
    :to="{ name: 'productDetail', params: { id: product.id } }"
    class="flex items-center rounded-2xl bg-white shadow-lg hover:scale-95 transition-all duration-300"
  >
    <div class="rounded-2xl overflow-hidden">
      <div class="aspect-square bg-white">
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="w-full h-full object-center object-contain p-4"
        />
      </div>

      <div class="p-6">
        <span class="text-xs text-secondary font-semibold uppercase tracking-wider">{{
          product.category
        }}</span>
        <h3 class="text-xl font-bold text-gray-900 mt-1 line-clamp-2">{{ product.title }}</h3>
        <div class="flex items-center justify-between mt-4">
          <span class="text-lg font-medium text-accent">{{ formatCurrency(product.price) }}</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped></style>
