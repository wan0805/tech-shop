import { defineStore } from 'pinia'
import { computed } from 'vue'

import { useFetch } from '@/composables/useFetch'

const allowedCategories = ['smartphones', 'laptops', 'tablets']

export const useProductsStore = defineStore('products', () => {
  const { data: products, product, isLoading, error, getProducts, getProductDetail } = useFetch()

  const filteredProducts = computed(() => {
    return products.value.filter((product) => {
      return allowedCategories.includes(product.category)
    })
  })

  function onLoadProducts() {
    getProducts('products?limit=900')
  }

  async function onLoadProductDetail(id: any) {
    getProductDetail(id)
  }

  return {
    products: filteredProducts,
    productDetail: product,
    isLoading,
    error,
    onLoadProducts,
    onLoadProductDetail,
  }
})
