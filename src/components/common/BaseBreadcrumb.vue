<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import HomeIcon from '../icons/HomeIcon.vue'

import PackageIcon from '../icons/PackageIcon.vue'
import ShopingBagIcon from '../icons/ShopingBagIcon.vue'

const route = useRoute()

const routeCurrency = computed(() => {
  const routeName = route.name
  if (routeName === 'productDetail') {
    return 'Product Detail'
  }
  if (routeName === 'cart') {
    return 'Cart Page'
  }
  return ''
})
</script>
<template>
  <section class="w-full max-w-6xl mx-auto px-4 mt-4 mb-8">
    <nav aria-label="Breadcrumb" class="overflow-x-auto whitespace-nowrap scrollbar-none">
      <RouterLink
        class="text-gray-500 hover:text-black inline-flex items-center gap-1.5 transition-colors text-xs sm:text-sm font-medium"
        to="/"
      >
        <HomeIcon class="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
        <span translate="no">Home</span>
        <span class="text-gray-400 mx-1">/</span>
      </RouterLink>

      <div class="inline-flex items-center gap-1.5">
        <PackageIcon
          class="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
          v-if="routeCurrency === 'Product Detail'"
        />
        <ShopingBagIcon
          class="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
          v-if="routeCurrency === 'Cart Page'"
        />
        <span class="text-gray-900">{{ routeCurrency }}</span>
      </div>
    </nav>
  </section>
</template>

<style scoped></style>
