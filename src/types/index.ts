export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
  colors?: string[];
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}