import { Product } from '../types';

export const filterProducts = (
  products: Product[],
  searchQuery: string,
  selectedCategory: string | null,
  sortBy: string
): Product[] => {
  let filteredProducts = [...products];

  // Search filter
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  }

  // Category filter
  if (selectedCategory && selectedCategory !== '') {
    filteredProducts = filteredProducts.filter(product =>
      product.category === selectedCategory
    );
  }

  // Sort
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      // Reverse order to show newest first
      filteredProducts.reverse();
      break;
    case 'featured':
    default:
      // Featured products first, then by rating
      filteredProducts.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
      });
      break;
  }

  return filteredProducts;
};