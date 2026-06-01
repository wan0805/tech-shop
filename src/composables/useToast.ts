import { readonly, ref } from 'vue'

type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default'

const loadingDuration = 2000
const toastDuration = 1000

const isToast = ref(false)
const isLoad = ref(false)
const toastType = ref<ToastType>('default')
const toastMessage = ref('')

function delay(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

export function useToast() {
  async function messageToast(type: ToastType, message: string) {
    toastType.value = type
    toastMessage.value = message
    isToast.value = true

    await delay(toastDuration)

    isToast.value = false
  }

  async function showToast(type: ToastType, message: string) {
    isLoad.value = true

    await delay(loadingDuration)

    await messageToast(type, message)

    isLoad.value = false
  }

  return {
    isToast: readonly(isToast),
    isLoad: readonly(isLoad),
    toastType: readonly(toastType),
    toastMessage: readonly(toastMessage),
    showToast,
  }
}
