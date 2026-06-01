<script setup lang="ts">
import { useToast } from '@/composables/useToast'
import { computed } from 'vue'

const { isToast, toastType, toastMessage } = useToast()

const toastStyle = computed(() => {
  if (toastType.value === 'success') {
    return { text: 'text-green-600', bar: 'bg-green-600' }
  }
  if (toastType.value === 'error') {
    return { text: 'text-red-600', bar: 'bg-red-600' }
  }
  if (toastType.value === 'info') {
    return { text: 'text-blue-600', bar: 'bg-blue-600' }
  }
  if (toastType.value === 'warning') {
    return { text: 'text-orange-600', bar: 'bg-orange-600' }
  }

  return { text: 'text-gray-900', bar: 'bg-gray-600' }
})
</script>

<template>
  <transition
    enter-active-class="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
    enter-from-class="translate-x-full opacity-0 scale-95"
    enter-to-class="translate-x-0 opacity-100 scale-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <section
      v-if="isToast && toastType"
      :class="[
        'fixed top-8 right-8 z-2000 flex items-center gap-4 px-6 py-5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 min-w-[320px]',
        toastStyle.text,
      ]"
    >
      <div :class="['w-1.5 h-10 rounded-full', toastStyle.bar]"></div>

      <div class="flex flex-col flex-1">
        <span class="text-xs uppercase tracking-widest font-black opacity-40 mb-0.5">
          {{ toastType }}
        </span>
        <p class="text-gray-900 font-bold leading-tight">
          {{ toastMessage }}
        </p>
      </div>
    </section>
  </transition>
</template>
