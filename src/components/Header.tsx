import React from 'react';
import { Search, ShoppingCart, Menu, User, Heart } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onSearchChange, searchQuery }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              NEXUS
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-xl mx-8">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-500 transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search for amazing products..."
                className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-full focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block p-2 text-gray-600 hover:text-purple-600 transition-colors duration-300 hover:bg-purple-50 rounded-full">
              <User className="w-5 h-5" />
            </button>
            
            <button className="hidden md:block p-2 text-gray-600 hover:text-red-500 transition-colors duration-300 hover:bg-red-50 rounded-full">
              <Heart className="w-5 h-5" />
            </button>

            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-green-600 transition-all duration-300 hover:bg-green-50 rounded-full group"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors duration-300">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;