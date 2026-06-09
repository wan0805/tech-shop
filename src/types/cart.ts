
import type { ProductDetail } from "./product";

export interface Cart extends ProductDetail{
  quantity?: number 
  
}

export interface CartItem {
  product: Cart
  quantity: number
}