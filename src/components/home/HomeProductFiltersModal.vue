<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

interface Props {
  open: boolean
  title: string
  selection: string[]
  showClearFilter: boolean
  showClearSort: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  selected: [item: string]
  erase: [type: 'filter' | 'sort']
}>()

function closeModal() {
  emit('close')
}
function selectedUpdate(item: string) {
  emit('selected', item)
  closeModal()
}

function eraseFilter(type: 'filter' | 'sort') {
  emit('erase', type)
  closeModal()
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.open) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>
<template>
  <transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0 -translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-full"
  >
    <section
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      v-if="props.open"
      class="w-full h-full bg-black/05 backdrop-blur-sm text-white fixed top-0 right-0 flex items-center justify-center z-999 transform"
    >
      <div class="w-full sm:w-[50%] mx-4 bg-white p-6 text-black relative text-center rounded">
        <button
          aria-label="close modal"
          @click="closeModal()"
          class="w-10 h-10 border-2 border-black rounded-full bg-white cursor-pointer text-[16px] absolute -top-5 -right-4 text-red-600 transition-all duration-300 hover:border-red-700"
        >
          X
        </button>
        <div class="flex items-center justify-center mb-5">
          <h3 id="modal-title" class="text-4xl">{{ props.title }}</h3>
        </div>
        <div class="flex items-center justify-center" v-for="item in props.selection" :key="item">
          <button
            aria-label="implement item in search"
            @click="selectedUpdate(item)"
            class="font-sans text-3xl mt-1 cursor-pointer group relative font-medium text-black transition-colors duration-300"
          >
            {{ item }}
            <span
              class="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"
            ></span>
          </button>
        </div>
        <button
          v-if="props.showClearFilter === true"
          aria-label="implement reset in filter"
          @click="eraseFilter('filter')"
          class="font-sans text-3xl mt-2 cursor-pointer group relative font-medium text-black transition-colors duration-300"
        >
          Clear Filter
          <span
            class="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"
          ></span>
        </button>
        <button
          v-else-if="props.showClearSort === true"
          aria-label="implement reset in filter"
          @click="eraseFilter('sort')"
          class="font-sans text-3xl mt-2 cursor-pointer group relative font-medium text-black transition-colors duration-300"
        >
          Clear Sort
          <span
            class="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"
          ></span>
        </button>
      </div>
    </section>
  </transition>
</template>

<style scoped></style>
