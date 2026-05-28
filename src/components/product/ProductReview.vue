<script setup lang="ts">
import type { Review } from '@/types/product'

import HeartIcon from '../icons/HeartIcon.vue'

defineProps<{
  reviews: Review[]
}>()
</script>
<template>
  <div class="border-t border-gray-100 pt-10">
    <h3 class="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
      Customer Reviews
      <span class="text-sm font-normal text-gray-400" aria-label="Total reviews"
        >({{ reviews.length }})</span
      >
    </h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        v-for="review in reviews"
        class="bg-gray-50 p-6 rounded-2xl border border-transparent hover:border-gray-200 transition-colors"
      >
        <div class="flex items-center justify-between mb-3">
          <p class="font-bold text-gray-900">{{ review.reviewerName }}</p>
          <div class="flex items-center gap-0.5 text-sm" aria-hidden="true">
            <template v-for="star in 5" :key="star">
              <HeartIcon
                class="w-4 h-4 transition-colors duration-250 hover:scale-110"
                :class="star <= review.rating ? 'text-red-600 fill-current' : 'text-gray-400'"
              />
            </template>
          </div>
        </div>
        <p class="text-gray-600 text-sm italic leading-snug">"{{ review.comment }}"</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
