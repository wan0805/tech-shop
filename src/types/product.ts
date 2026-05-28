export interface Product {
  id: string | number
  title: string
  price: number
  category: string
  thumbnail: string
}

export interface ProductDetail extends Product {
  description: string
  stock: number
  reviews?: Review[]
}

export interface Review {
  comment: string
  date: string
  rating: number
  reviewerEmail: string
  reviewerName: string
}
