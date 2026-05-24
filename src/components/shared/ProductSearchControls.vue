<script setup lang="ts">
import { ref } from 'vue'
import ProductFiltersModal from '@/components/home/HomeProductFiltersModal.vue'


type ModalType = 'filter' | 'sort' | null

const filter = ref('')
const sort = ref('')
const filterOptions = ['laptops', 'smartphones']
const sortOptions = ['Price, high to low', 'Price, low to High']

const activeModalType = ref<ModalType>(null)

const modalTitle = ref('')
const modalSelection = ref<string[]>([])

function openModal(type: 'filter' | 'sort') {
  activeModalType.value = type
  if (type === 'filter') {
    modalTitle.value = 'Filter by'
    modalSelection.value = filterOptions
  } else {
    modalTitle.value = 'Sort by'
    modalSelection.value = sortOptions
  }
}

function handleCloseModal() {
  activeModalType.value = null
}

function handleUpdate(item: string) {
  if (activeModalType.value === 'filter') {
    filter.value = item
  } else if (activeModalType.value === 'sort') {
    sort.value = item
  }
  handleCloseModal()
}

function handleReset(type: 'filter' | 'sort') {
  if (type === 'filter') {
    filter.value = ''
  } else {
    sort.value = ''
  }
  handleCloseModal()
}
</script>
<template>
  <section class="w-full mb-24 m-auto flex flex-col sm:flex-row gap-2 items-center justify-between">
    <button class="cursor-pointer" @click="openModal('filter')">
      Filter by: <span class="text-blue-400">{{ filter }}</span>
    </button>
    <button class="cursor-pointer" @click="openModal('sort')">
      Sort by: <span class="text-blue-400">{{ sort }}</span>
    </button>
  </section>
  <teleport to="body">
    <ProductFiltersModal
      :open="activeModalType !== null"
      :title="modalTitle"
      :selection="modalSelection"
      :show-clear-filter="activeModalType === 'filter' && !!filter"
      :show-clear-sort="activeModalType === 'sort' && !!sort"
      @close="handleCloseModal"
      @selected="handleUpdate"
      @erase="handleReset"
    />
  </teleport>
</template>

<style scoped></style>
