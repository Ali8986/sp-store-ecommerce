import React, { useState } from 'react';
import { X, Star, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Product } from '../types';

interface QuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, color?: string) => void;
}

const QuickView: React.FC<QuickViewProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);

  if (!isOpen || !product) return null;

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
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full mx-auto overflow-hidden animate-fadeInUp">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative group overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Discount Badge */}
              {product.originalPrice && (
                <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </div>
              )}

              {/* Action Icons */}
              <div className="absolute top-6 right-16 flex flex-col gap-2">
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:scale-110">
                  <Heart className="w-4 h-4 text-gray-700 hover:text-red-500" />
                </button>
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:scale-110">
                  <Share2 className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Colors */}
              {product.colors && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Available Colors:</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 ${colorMap[color] || 'bg-gray-400'} ${
                          selectedColor === color ? 'ring-4 ring-purple-500 ring-offset-2 scale-110' : ''
                        }`}
                        title={color}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2 capitalize">Selected: {selectedColor}</p>
                </div>
              )}

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={() => onAddToCart(product, selectedColor)}
                  className="flex-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                
                <button className="px-6 py-4 border-2 border-purple-500 text-purple-600 rounded-2xl font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;