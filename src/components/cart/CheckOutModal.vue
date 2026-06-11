<script setup lang="ts">
import CardCreditIcon from '../icons/CardCreditIcon.vue'

import { useCart } from '@/composables/useCart.ts'
const { isCheckOutModal, closeCheckOutModal } = useCart()
</script>
<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0 -translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-full"
  >
    <div
      role="dialog"
      aria-modal="true"
      v-if="isCheckOutModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
    >
      <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100">
        <div
          class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-4"
        >
          <CardCreditIcon class="w-12 h-12 text-green-400" />
        </div>

        <h3 class="text-xl font-bold text-center text-gray-900 mb-2">
          Checkout: Next Step in the Flow
        </h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4 text-center">
          You've completed the shopping journey so far! This e-commerce is a demonstration
          environment focused on <strong>performance and UI/UX</strong>.
        </p>

        <div class="bg-indigo-50 p-3 rounded-lg mb-6">
          <p class="text-indigo-800 text-xs">
            <strong>Technical Note:</strong> This cart's state is managed via
            <strong>Pinia</strong>. In a production environment, this is where integration with
            payment gateways via API would occur.
          </p>
        </div>

        <button
          @click="closeCheckOutModal"
          class="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 rounded-lg transition-all"
        >
          Continue Exploring
        </button>
      </div>
    </div>
  </Transition>
</template>
