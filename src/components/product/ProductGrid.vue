<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import ProductCard from './ProductCard.vue'
import ProductCardSkeleton from './ProductCardSkeleton.vue'

import CloudOffIcon from '../icons/CloudOffIcon.vue'

import { useProductsStore } from '@/store/productStore.ts'
const productStore = useProductsStore()

onMounted(async () => {
  await productStore.onLoadProducts()
})
onUnmounted(() => {
  productStore.products
})
</script>
<template>
  <section class="sm:max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
    <template v-if="productStore.products.length > 0">
      <ProductCard v-for="product in productStore.products" :key="product.id" :product="product" />
    </template>
    <template v-else-if="productStore.isLoading">
      <ProductCardSkeleton v-for="n in 6" :key="n" />
    </template>
    <template v-else>
      <section class="flex flex-col items-center justify-center mb-35 col-span-full">
        <div class="w-26 h-26 bg-gray-200 rounded-full flex items-center justify-center mb-5">
          <CloudOffIcon class="w-16 h-16 text-gray-500 stroke-[1.2] animate-pulse" />
        </div>

        <p class="text-gray-500 text-center mx-auto">{{ productStore.error }}</p>
      </section>
    </template>
  </section>
</template>

<style scoped></style>
