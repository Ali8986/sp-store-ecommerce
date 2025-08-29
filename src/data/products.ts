import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    count: 12
  },
  {
    id: 'fashion',
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    count: 18
  },
  {
    id: 'home',
    name: 'Home & Living',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    count: 15
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    count: 9
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless AirPods Pro',
    price: 249,
    originalPrice: 299,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: 'Premium wireless earphones with active noise cancellation and spatial audio.',
    featured: true,
    colors: ['white', 'black'],
    rating: 4.8,
    reviews: 1247
  },
  {
    id: '2',
    name: 'Smart Watch Ultra',
    price: 399,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    colors: ['silver', 'black', 'gold'],
    rating: 4.6,
    reviews: 892
  },
  {
    id: '3',
    name: 'Designer Leather Jacket',
    price: 299,
    originalPrice: 399,
    category: 'fashion',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: 'Premium leather jacket with modern cut and timeless style.',
    featured: true,
    colors: ['black', 'brown'],
    rating: 4.9,
    reviews: 456
  },
  {
    id: '4',
    name: 'Minimalist Lamp',
    price: 189,
    category: 'home',
    image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: 'Modern LED desk lamp with adjustable brightness and color temperature.',
    colors: ['white', 'black', 'silver'],
    rating: 4.7,
    reviews: 328
  },
  {
    id: '5',
    name: 'Professional Camera',
    price: 1299,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: 'High-resolution mirrorless camera with 4K video recording.',
    featured: true,
    rating: 4.9,
    reviews: 672
  },
  {
    id: '6',
    name: 'Running Sneakers',
    price: 159,
    category: 'sports',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: 'Ultra-lightweight running shoes with advanced cushioning technology.',
    colors: ['white', 'black', 'blue', 'red'],
    rating: 4.5,
    reviews: 234
  },
  {
    id: '7',
    name: 'Vintage Sunglasses',
    price: 149,
    category: 'fashion',
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: 'Classic aviator sunglasses with UV protection and polarized lenses.',
    colors: ['gold', 'silver', 'black'],
    rating: 4.6,
    reviews: 189
  },
  {
    id: '8',
    name: 'Modern Coffee Table',
    price: 449,
    category: 'home',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description: 'Sleek glass coffee table with wooden legs and storage compartment.',
    rating: 4.8,
    reviews: 156
  }
];