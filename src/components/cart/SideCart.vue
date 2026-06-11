<script setup lang="ts">
import BaseQuantitySelector from '@/components/common/BaseQuantitySelector.vue'
import { formatCurrency } from '@/utils/currency.ts'
import { RouterLink } from 'vue-router'
import BaseButton from '../common/BaseButton.vue'
import CartIcon from '../icons/CartIcon.vue'
import RemoveIcon from '../icons/RemoveIcon.vue'

import { useCart } from '@/composables/useCart.ts'

const {
  isSideCart,
  cart,
  totalPrice,
  closeSideCart,
  incrementQuantity,
  decrementQuantity,
  removeProductByIndex,
} = useCart()
</script>
<template>
  <div
    v-if="isSideCart"
    class="fixed inset-0 bg-black/95 backdrop-blur z-40 transition-all duration-500"
    @click="closeSideCart"
  ></div>

  <aside
    :class="isSideCart ? 'translate-x-0' : 'translate-x-full'"
    class="fixed right-0 top-0 h-full w-full md:max-w-md bg-white shadow-[[-20px_0_50px_rgba(0,0,0,0.1)]] z-50 transition-transform duration-500 ease-in-out flex flex-col"
  >
    <div class="p-5 md:p-8 flex justify-between items-center border-b border-gray-50">
      <div>
        <h2 class="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Your Cart</h2>
        <p class="text-xs md:text-sm text-gray-500">{{ cart.length }} items</p>
      </div>
      <button
        class="p-2 hover:bg-gray-100 rounded-full transition-colors group"
        @click="closeSideCart"
      >
        <span class="text-gray-400 group-hover:text-black">✕</span>
      </button>
    </div>

    <div class="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
      <div>
        <div v-for="(item, index) in cart" :key="item.product.id" class="flex gap-4 group">
          <div class="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
            <img
              :src="item.product.thumbnail"
              :alt="item.product.title"
              class="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div class="flex flex-col justify-center flex-1">
            <h3 class="font-bold text-gray-900 text-sm line-clamp-1">{{ item.product.title }}</h3>
            <p class="text-accent font-medium text-sm mt-1">
              {{ formatCurrency(item.product.price) }}
              <span class="text-gray-400 font-normal ml-2">x {{ item.quantity }}</span>
            </p>
            <div class="flex items-center justify-between mt-1">
              <BaseQuantitySelector
                :quantity="item.quantity ?? 1"
                @increase="incrementQuantity(item.product)"
                @decrease="decrementQuantity(item.product, index)"
              />
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
      </div>

      <div
        v-if="cart.length === 0"
        class="h-full flex flex-col items-center justify-center text-center space-y-4"
      >
        <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
          <cartIcon class="text-gray-300 w-8 h-8" />
        </div>
        <p class="text-gray-500 font-medium">Your cart is feeling light.</p>
      </div>
    </div>

    <section class="p-5 md:p-8 bg-gray-50 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
      <div class="space-y-3 mb-6">
        <div class="flex justify-between text-gray-500 text-sm">
          <span>Shipping</span>
          <span v-if="totalPrice === 0" class="text-gray-900 font-medium">-----</span>
          <span v-else class="text-gray-900 font-medium">Calculated next step</span>
        </div>
        <div class="flex justify-between items-end">
          <span class="text-gray-900 font-bold text-lg">Subtotal</span>
          <span v-if="totalPrice === 0" class="text-xl md:text-2xl font-black text-gray-900"
            >----</span
          >
          <span v-else class="text-xl md:text-2xl font-black text-gray-900">{{
            formatCurrency(totalPrice)
          }}</span>
        </div>
      </div>

      <div class="space-y-3">
        <RouterLink
          to="/cart"
          class="block w-full bg-black text-white text-center rounded-xl py-3 md:py-4 font-bold hover:bg-gray-800 transition-all active:scale-[0.98] shadow-lg shadow-black/5"
          @click="closeSideCart"
        >
          Checkout Now
        </RouterLink>

        <BaseButton
          @click="closeSideCart"
          class="w-full bg-transparent border border-gray-200 text-gray-900! py-3 md:py-4 font-bold hover:bg-white hover:border-black hover:text-black transition-all"
          text="Continue Shopping"
          :stock="1"
        />
      </div>
    </section>
  </aside>
</template>

<style scoped></style>
