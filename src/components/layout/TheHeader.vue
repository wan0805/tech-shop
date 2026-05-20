<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import CartIcon from '../icons/CartIcon.vue'

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5',
    ]"
  >
    <div class="flex justify-between sm:max-w-6xl px-6 w-full sm:m-auto">
      <router-link class="text-black font-secondary text-2xl font-bold tracking-widest" to="/">
        Tech Shop
      </router-link>

      <button class="relative cursor-pointer">
        <div>
          <CartIcon />
        </div>

        <div
          class="w-5 h-5 rounded-full flex items-center justify-center bg-accent absolute text-white text-sm -top-2 -right-2"
        >
          2
        </div>
      </button>
    </div>
  </header>

  <div class="h-20"></div>
</template>
<style scoped></style>
