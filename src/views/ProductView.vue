<script setup lang="ts">
import BaseBreadcrumb from '@/components/common/BaseBreadcrumb.vue'
import ProductDetail from '@/components/product/ProductDetail.vue'
import ProductDetailSkeleton from '@/components/product/ProductDetailSkeleton.vue'
import { onMounted, ref } from 'vue'

import { useRoute } from 'vue-router'
const route = useRoute()

const productId = ref<string[] | string>()

const mockProduct = ref({
  id: 4,
  title: 'Apple MacBook Pro 14 Inch Space Grey',
  description:
    'The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apples M1 Pro chip for exceptional performance and a stunning Retina display',
  price: 109.95,
  stock: 8,
  category: 'laptops',
  thumbnail:
    'https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp',
  reviews: [
    {
      comment: 'Very happy with my purchase!',
      date: '2025-04-30T09:41:02.053Z',
      rating: 3,
      reviewerEmail: 'hazel.evans@x.dummyjson.com',
      reviewerName: 'Hazel Evans',
    },
  ],
})

function handleStockUpdate(productId: number, newStock: number) {
  if (mockProduct.value.id === productId) {
    mockProduct.value.stock = newStock
  }
}

onMounted(async () => {
  setTimeout(() => {
    productId.value = route.params.id
  }, 5000)
})
</script>
<template>
  <template v-if="productId">
    <BaseBreadcrumb />
    <ProductDetail :product="mockProduct" @update-stock="handleStockUpdate" />
  </template>
  <ProductDetailSkeleton v-else />
</template>

<style scoped></style>
