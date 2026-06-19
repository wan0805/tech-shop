import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

import { useToast } from '@/composables/useToast'
import type { Cart, CartItem } from '@/types/cart'
import { storage } from '@/utils/storage'

export const useCartStore = defineStore('cart', () => {
  const toast = useToast()
  const { getStorage, setStorage } = storage()

  const isSideCart = ref(false)
  const isCheckOutModal = ref(false)
  const isPending = ref(false)

  const cart = ref<CartItem[]>(getStorage('cart') || [])

  watch(
    cart.value,
    (newCart) => {
      setStorage('cart', newCart)
    },
    { deep: true },
  )

  const totalPrice = computed(() => {
    const total = cart.value.reduce((acumulador, item) => {
      const qtd = item.quantity || 0

      return acumulador + item.product.price * qtd
    }, 0)

    return Number(total.toFixed(2))
  })
  function openSideCart() {
    isSideCart.value = true
  }

  function closeSideCart() {
    isSideCart.value = false
  }

  function addProductToCart(product: Cart) {
    if (product.stock <= 0) {
      toast.showToast('error', 'Product out of stock!')
      return
    }

    const existingItem = cart.value.find((item) => item.product.id === product.id)

    if (existingItem) {
      toast.showToast('success', `Increased quantity of ${product.title}`)
      incrementQuantity(existingItem.product)
    } else {
      cart.value.push({ product, quantity: 1 })

      toast.showToast('success', `${product.title} added to cart`)
      setTimeout(() => {
        openSideCart()
      }, 2500)
    }
  }

  function removeProductByIndex(index: number) {
    if (index >= 0 && index < cart.value.length) {
      const itemToBeRemoved = cart.value[index]
      if (itemToBeRemoved) {
        itemToBeRemoved.product.stock += itemToBeRemoved.quantity

        cart.value.splice(index, 1)

        toast.showToast('info', `${itemToBeRemoved.product.title} removed from cart.`)
      }
    }
  }

  function incrementQuantity(product: Cart) {
    const existingItem = cart.value.find((item) => item.product.id === product.id)

    if (existingItem) {
      if (existingItem.quantity >= product.stock) {
        toast.showToast('info', `Sorry, no more stock available!`)
        return
      }

      existingItem.quantity++
    }
  }

  function decrementQuantity(product: Cart, index: number) {
    const existingItem = cart.value.find((item) => item.product.id === product.id)

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity--
      } else {
        removeProductByIndex(index)
      }
    }
  }

  async function openCheckOutModal() {
    isPending.value = true
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      isCheckOutModal.value = true
    } finally {
      isPending.value = false
    }
  }

  function closeCheckOutModal() {
    isCheckOutModal.value = false
  }

  return {
    isSideCart,
    cart,
    totalPrice,
    isCheckOutModal,
    isPending,
    openSideCart,
    closeSideCart,
    addProductToCart,
    incrementQuantity,
    decrementQuantity,
    removeProductByIndex,
    openCheckOutModal,
    closeCheckOutModal,
  }
})
