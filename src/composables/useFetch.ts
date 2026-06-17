import type { Product } from '@/types/product'
import { readonly, ref } from 'vue'

const BASEURL = 'https://dummyjson.com/'

const data = ref<Product[]>([])
const productDetail = ref()
const isPending = ref<boolean>(false)
const errorMessage = ref<string | null>(null)

interface DataResponse {
  products: Product[]
  limit: number
  skip: number
  total: number
}

export function useFetch() {
  async function getProducts(url: string) {
    isPending.value = true
    data.value = []
    errorMessage.value = null
    try {
      const request = await fetch(`${BASEURL}${url}`)

      const response: DataResponse = await request.json()

      data.value = response.products

      return response.products
    } catch (error) {
      console.error('Error: ', error)
      errorMessage.value =
        "Oops! We couldn't load the products right now. Please refresh the page or try again in a few moments."
    } finally {
      isPending.value = false
    }
  }

  async function getProductDetail(id: number) {
    isPending.value = true
    productDetail.value = []
    errorMessage.value = null
    try {
      const request = await fetch(`${BASEURL}products/${id}`)

      const response = await request.json()

      productDetail.value = response

      return response
    } catch (error) {
      console.error('Error: ', error)
      errorMessage.value =
        "Oops! We couldn't load the product right now. Please refresh the page or try again in a few moments."
    } finally {
      isPending.value = false
    }
  }

  return {
    data: readonly(data),
    product: productDetail,
    isLoading: readonly(isPending),
    error: readonly(errorMessage),
    getProducts,
    getProductDetail,
  }
}
