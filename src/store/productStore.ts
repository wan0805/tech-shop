import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { useFetch } from '@/composables/useFetch'

const allowedCategories = ['smartphones', 'laptops', 'tablets']

export const useProductsStore = defineStore('products', () => {
  const { data: products, product, isLoading, error, getProducts, getProductDetail } = useFetch()

  const filter = ref<string>('')
  const sort = ref<string>('')
  const filterOptions = ['laptops', 'smartphones']
  const sortOptions = ['Price, high to low', 'Price, low to High']

  const filteredProducts = computed(() => {
    //  apenas categorias permitidas
    let filtered = products.value.filter((product) => {
      return allowedCategories.includes(product.category)
    })

    if (filter.value && filter.value.trim() !== '') {
      const searchLower = filter.value.toLowerCase()

      filtered = filtered.filter((item) => {
        return item.category.toLowerCase().includes(searchLower)
      })
    }

    if (sort.value === 'Price, high to low') {
      filtered = filtered.sort((a, b) => b.price - a.price)
    }
    if (sort.value === 'Price, low to High') {
      filtered = filtered.sort((a, b) => a.price - b.price)
    }

    return filtered
  })

  function onLoadProducts() {
    getProducts('products?limit=900')
  }

  async function onLoadProductDetail(id: number) {
    getProductDetail(id)
  }

  return {
    products: filteredProducts,
    productDetail: product,
    isLoading,
    error,
    filter,
    sort,
    filterOptions,
    sortOptions,
    onLoadProducts,
    onLoadProductDetail,
  }
})
