<script setup lang="ts">
import BaseBreadcrumb from '@/components/common/BaseBreadcrumb.vue'
import ProductDetail from '@/components/product/ProductDetail.vue'
import ProductDetailSkeleton from '@/components/product/ProductDetailSkeleton.vue'
import { onMounted, watchEffect } from 'vue'

import { useProductsStore } from '@/store/productStore'
const productStore = useProductsStore()

import CloudOffIcon from '@/components/icons/CloudOffIcon.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const productId = Number(route.params.id)

function handleStockUpdate(productId: string | number, newStock: number) {
  if (productStore.productDetail.id === productId) {
    productStore.productDetail.stock = newStock
  }
}

watchEffect(() => {
  if (productStore.productDetail?.title) {
    document.title = `${productStore.productDetail.title}`
  }
})

onMounted(async () => {
  await productStore.onLoadProductDetail(productId)
})
</script>
<template>
  <template v-if="productStore.isLoading">
    <ProductDetailSkeleton />
  </template>
  <template v-if="productStore.productDetail">
    <BaseBreadcrumb />
    <ProductDetail :product="productStore.productDetail" @update-stock="handleStockUpdate" />
  </template>
  <template v-else>
    <section class="flex flex-col items-center justify-center mb-35 col-span-full">
      <div class="w-26 h-26 bg-gray-200 rounded-full flex items-center justify-center mb-5">
        <CloudOffIcon class="w-16 h-16 text-gray-500 stroke-[1.2] animate-pulse" />
      </div>

      <p class="text-gray-500 text-center mx-auto">{{ productStore.error }}</p>
    </section>
  </template>
</template>

<style scoped></style>
