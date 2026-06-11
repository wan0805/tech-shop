<script setup lang="ts">
import { formatCurrency } from '@/utils/currency'

import { useCart } from '@/composables/useCart'
import BaseButton from '../common/BaseButton.vue'
const { totalPrice, isPending, openCheckOutModal } = useCart()
</script>
<template>
  <section
    class="bg-white rounded-4xl p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-50"
  >
    <h2 class="text-2xl font-bold mb-8 text-gray-900">Order Summary</h2>

    <div class="space-y-4">
      <div class="flex justify-between text-gray-500 font-medium">
        <span>Subtotal</span>

        <span class="text-gray-900">{{ formatCurrency(totalPrice) }}</span>
      </div>
      <div class="flex justify-between text-gray-500 font-medium">
        <span>Shipping</span>

        <span
          class="text-green-500 font-bold text-xs uppercase tracking-widest bg-green-50 px-2 py-1 rounded"
          >Free</span
        >
      </div>

      <div class="pt-6 border-t border-gray-100 mt-6">
        <div class="flex justify-between items-end mb-8">
          <span class="text-gray-900 font-bold text-lg">Total</span>
          <div class="text-right">
            <span class="block text-3xl font-black text-black">{{
              formatCurrency(totalPrice)
            }}</span>

            <span class="text-[10px] text-gray-400 uppercase">Taxes included</span>
          </div>
        </div>
      </div>
      <BaseButton
        @click="openCheckOutModal"
        class="w-full"
        text="Complete Purchase"
        :stock="1"
        text-loading="Processing..."
        :loading="isPending"
      />
    </div>
  </section>
</template>

<style scoped></style>
