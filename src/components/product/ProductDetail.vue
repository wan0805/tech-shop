<script setup lang="ts">
import { formatCurrency } from '@/utils/currency'
import { computed, ref } from 'vue'
import BaseButton from '../common/BaseButton.vue'
import CartIcon from '../icons/CartIcon.vue'
import ProductReview from './ProductReview.vue'
import type { ProductDetail } from '@/types/product.ts'

const props = defineProps<{
  product: ProductDetail
}>()


const isLoad = ref(false)

const emit = defineEmits(['update-stock'])


const stockCurrent = computed(() => props.product.stock)

function addToCart() {
  if (stockCurrent.value <= 0) return

  isLoad.value = true

  setTimeout(() => {
    isLoad.value = false

    emit('update-stock', props.product.id, stockCurrent.value - 1)
  }, 2000)
}
</script>
<template>
  <div
    class="sm:max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 bg-transparent p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] animate-[fadeIn_0.5s_ease-out]"
  >
    <div class="md:col-span-5 lg:col-span-4">
      <div
        class="bg-gray-100 rounded-2xl overflow-hidden aspect-square flex items-center justify-center group"
      >
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>

    <div class="md:col-span-7 lg:col-span-8 flex flex-col">
      <span class="text-accent font-bold tracking-widest uppercase text-xs mb-2">{{
        product.category
      }}</span>

      <h2 class="sm:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
        {{ product.title }}
      </h2>

      <div class="flex items-center gap-4 mb-6">
        <span class="text-2xl sm:text-3xl font-bold text-accent">{{
          formatCurrency(product.price)
        }}</span>
        <div class="h-6 w-px bg-gray-300"></div>

        <span
          class="text-sm text-[10px] sm:text-[16px] px-3 py-1 rounded-full font-medium transition-colors duration-300"
          :class="stockCurrent > 0 ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'"
        >
          {{ stockCurrent > 0 ? `In Stock: ${stockCurrent} units` : 'Out of Stock' }}
        </span>
      </div>

      <p class="text-gray-600 text-lg leading-relaxed max-w-2xl mb-10">{{ product.description }}</p>

      <div class="flex flex-col sm:flex-row gap-4 mb-16">
        <BaseButton
          text="Add to Cart"
          text-loading="Adding to cart"
          :stock="stockCurrent"
          @click="addToCart"
          :loading="isLoad"
        >
          <CartIcon class="w-5 h-5" />
        </BaseButton>
      </div>
      <ProductReview v-if="product.reviews" :reviews="product.reviews" />
    </div>
  </div>
</template>

<style scoped></style>
