<script setup lang="ts">
import CheckOutModal from './components/cart/CheckOutModal.vue'
import SideCart from './components/cart/SideCart.vue'
import TheFooter from './components/layout/TheFooter.vue'
import TheHeader from './components/layout/TheHeader.vue'
import ToastNotification from './components/toast/ToastNotification.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="sm:max-w-6xl px-6 py-8 w-full sm:m-auto grow">
      <RouterView />
    </main>
    <TheFooter />
  </div>
  <SideCart />
  <ToastNotification />
  <CheckOutModal />
</template>
<style scoped></style>
