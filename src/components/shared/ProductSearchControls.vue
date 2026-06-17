<script setup lang="ts">
import ProductFiltersModal from '@/components/home/HomeProductFiltersModal.vue'
import { ref } from 'vue'

import { useProductsStore } from '@/store/productStore'
const productStore = useProductsStore()

type ModalType = 'filter' | 'sort' | null

const activeModalType = ref<ModalType>(null)

const modalTitle = ref('')
const modalSelection = ref<string[]>([])

function openModal(type: 'filter' | 'sort') {
  activeModalType.value = type
  if (type === 'filter') {
    modalTitle.value = 'Filter by'
    modalSelection.value = productStore.filterOptions
  } else {
    modalTitle.value = 'Sort by'
    modalSelection.value = productStore.sortOptions
  }
}

function handleCloseModal() {
  activeModalType.value = null
}

function handleUpdate(item: string) {
  if (activeModalType.value === 'filter') {
    productStore.filter = item
  } else if (activeModalType.value === 'sort') {
    productStore.sort = item
  }
  handleCloseModal()
}

function handleReset(type: 'filter' | 'sort') {
  if (type === 'filter') {
    productStore.filter = ''
  } else {
    productStore.sort = ''
  }
  handleCloseModal()
}
</script>
<template>
  <section class="w-full mb-24 m-auto flex flex-col sm:flex-row gap-2 items-center justify-between">
    <button class="cursor-pointer" @click="openModal('filter')">
      Filter by: <span class="text-blue-400">{{ productStore.filter }}</span>
    </button>
    <button class="cursor-pointer" @click="openModal('sort')">
      Sort by: <span class="text-blue-400">{{ productStore.sort }}</span>
    </button>
  </section>
  <teleport to="body">
    <ProductFiltersModal
      :open="activeModalType !== null"
      :title="modalTitle"
      :selection="modalSelection"
      :show-clear-filter="activeModalType === 'filter' && !!productStore.filter"
      :show-clear-sort="activeModalType === 'sort' && !!productStore.sort"
      @close="handleCloseModal"
      @selected="handleUpdate"
      @erase="handleReset"
    />
  </teleport>
</template>

<style scoped></style>
