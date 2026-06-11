<script setup lang="ts">
import { formatCurrency } from '@/utils/currency.ts'
import BaseQuantitySelector from '../common/BaseQuantitySelector.vue'
import PackageOpenIcon from '../icons/PackageOpenIcon.vue'
import RemoveIcon from '../icons/RemoveIcon.vue'
import CartOrderSummary from './CartOrderSummary.vue'

import { useCart } from '@/composables/useCart'
const { cart, incrementQuantity, decrementQuantity, removeProductByIndex } = useCart()
</script>
<template>
  <main
    v-if="cart.length > 0"
    class="grid grid-cols-1 lg:grid-cols-12 gap-12 p-6 max-w-6xl mx-auto mt-8 mb-32 rounded-3xl items-start bg-white/70 backdrop-blur-md"
  >
    <section class="lg:col-span-8">
      <h1 class="text-4xl font-extrabold mb-10 tracking-tight text-gray-900">Shopping Cart</h1>

      <div class="space-y-0">
        <div
          v-for="(item, index) in cart"
          :key="item.product.id"
          class="group flex flex-col sm:flex-row items-center border-b border-gray-100 py-8 gap-6 transition-all"
        >
          <div class="w-full sm:w-32 h-32 bg-gray-50 rounded-2xl overflow-hidden shrink-0">
            <img
              :src="item.product.thumbnail"
              class="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div class="flex-1 text-center sm:text-left">
            <h2 class="font-bold text-xl text-gray-900 mb-1">{{ item.product.title }}</h2>
            <p class="text-gray-400 text-sm uppercase tracking-wider font-medium">
              ID:{{ item.product.id }}
            </p>
          </div>

          <base-quantity-selector
            :quantity="item.quantity"
            @increase="incrementQuantity(item.product)"
            @decrease="decrementQuantity(item.product, index)"
          />

          <div class="flex flex-col items-end gap-2 min-w-25">
            <p class="font-black text-xl text-gray-900">
              {{ formatCurrency(item.product.price * item.quantity) }}
            </p>
            <button
              @click="removeProductByIndex(index)"
              type="button"
              title="Delete"
              aria-label="Delete Item"
              class="text-xs text-red-400 hover:text-red-600 transition-colors underline underline-offset-4"
            >
              <RemoveIcon class="h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <aside class="lg:col-span-4">
      <CartOrderSummary />
    </aside>
  </main>
  <main
    class="p-6 max-w-6xl mx-auto mt-8 mb-45 rounded-3xl items-start bg-white/70 backdrop-blur-md"
    v-else
  >
    <div
      class="flex items-center justify-center flex-col py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200"
    >
      <div class="w-26 h-26 bg-gray-100 rounded-full flex items-center justify-center mb-5">
        <package-open-icon class="w-16 h-16 text-gray-300 stroke-[1.2] animate-pulse" />
      </div>
      <p class="text-gray-400">Your cart is feeling light.</p>
      <router-link to="/" class="text-accent font-bold mt-4 inline-block underline"
        >Return to shop</router-link
      >
    </div>
  </main>
</template>

<style scoped></style>
