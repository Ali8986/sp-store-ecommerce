import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, color?: string) => void;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [isHovered, setIsHovered] = useState(false);

  const colorMap: { [key: string]: string } = {
    black: 'bg-gray-900',
    white: 'bg-white border border-gray-300',
    brown: 'bg-amber-800',
    blue: 'bg-blue-600',
    red: 'bg-red-600',
    green: 'bg-green-600',
    silver: 'bg-gray-400',
    gold: 'bg-yellow-500',
    purple: 'bg-purple-600'
  };

  return (
    <div
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </div>
        )}

        {/* Quick Actions */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <button
            onClick={() => onQuickView(product)}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
          >
            <Eye className="w-4 h-4 text-gray-700" />
          </button>
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:scale-110">
            <Heart className="w-4 h-4 text-gray-700 hover:text-red-500" />
          </button>
        </div>

        {/* Overlay with Add to Cart */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button
            onClick={() => onAddToCart(product, selectedColor)}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Colors */}
        {product.colors && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-gray-500">Colors:</span>
            <div className="flex gap-1">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full transition-all duration-200 hover:scale-110 ${colorMap[color] || 'bg-gray-400'} ${
                    selectedColor === color ? 'ring-2 ring-purple-500 ring-offset-2' : ''
                  }`}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;