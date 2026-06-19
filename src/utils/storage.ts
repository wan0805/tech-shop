import type {  CartItem } from "@/types/cart"



export function storage() {
  function getStorage(key: string) {
    try {
      const storage = window.localStorage.getItem(key)
      if (!storage) return null

      return JSON.parse(storage)
    } catch (error) {
      console.error(`Erro ao ler chave "${key}" do localStorage:`, error)
      return null
    }
  }

  function setStorage(key: string, value: CartItem[]) {
    try {
      const serializedValue = JSON.stringify(value)
      window.localStorage.setItem(key, serializedValue)
    } catch (error) {
      console.error(`Erro ao salvar chave "${key}" no localStorage:`, error)
    }
  }

  return {
    getStorage,
    setStorage,
  }
}
