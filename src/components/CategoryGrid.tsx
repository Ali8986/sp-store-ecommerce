import React from 'react';
import { Category } from '../types';

interface CategoryGridProps {
  categories: Category[];
  onCategorySelect: (categoryId: string) => void;
  selectedCategory: string | null;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onCategorySelect, selectedCategory }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-700 to-blue-600 bg-clip-text text-transparent">
            Explore Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium products across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            onClick={() => onCategorySelect('')}
            className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 ${
              selectedCategory === '' ? 'ring-4 ring-purple-500 ring-offset-4' : ''
            }`}
          >
            <div className="aspect-square bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-white mb-2">All Products</h3>
                <p className="text-purple-200">Everything</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 ${
                selectedCategory === category.id ? 'ring-4 ring-purple-500 ring-offset-4' : ''
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-200 text-sm">
                  {category.count} items
                </p>
              </div>
              <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;