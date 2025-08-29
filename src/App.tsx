import React, { useState, useMemo, useEffect } from 'react';
import { Product } from './types';
import { products, categories } from './data/products';
import { useCart } from './hooks/useCart';
import { filterProducts } from './utils/productFilters';

import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedSection from './components/FeaturedSection';
import ProductGrid from './components/ProductGrid';
import FilterBar from './components/FilterBar';
import Cart from './components/Cart';
import QuickView from './components/QuickView';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [showHero, setShowHero] = useState(true);

  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount
  } = useCart();

  // Filter products
  const filteredProducts = useMemo(() => {
    return filterProducts(products, searchQuery, selectedCategory, sortBy);
  }, [searchQuery, selectedCategory, sortBy]);

  // Featured products for hero section
  const featuredProducts = useMemo(() => {
    return products.filter(product => product.featured);
  }, []);

  // Handle search - hide hero when searching
  useEffect(() => {
    setShowHero(searchQuery.trim() === '' && !selectedCategory);
  }, [searchQuery, selectedCategory]);

  const handleAddToCart = (product: Product, color?: string) => {
    addToCart(product, color);
    // Add a subtle animation feedback here
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId || null);
    setSearchQuery('');
  };

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        cartCount={getCartCount()}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />

      {/* Hero Section - Only show when not filtering */}
      {showHero && <Hero />}

      {/* Categories */}
      {showHero && (
        <CategoryGrid
          categories={categories}
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
      )}

      {/* Featured Section */}
      {showHero && <FeaturedSection />}

      {/* Filter Bar - Show when filtering */}
      {!showHero && (
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          productCount={filteredProducts.length}
        />
      )}

      {/* Products Grid */}
      <ProductGrid
        products={showHero ? featuredProducts : filteredProducts}
        onAddToCart={handleAddToCart}
        onQuickView={handleQuickView}
        title={showHero ? "Featured Products" : 
               selectedCategory ? categories.find(c => c.id === selectedCategory)?.name || "Products" : 
               searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}
      />

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        total={getCartTotal()}
      />

      {/* Quick View Modal */}
      <QuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;