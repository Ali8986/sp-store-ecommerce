import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, Star, Heart } from 'lucide-react';

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-green-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 font-semibold text-lg">TRENDING NOW</span>
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Limited Edition
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Designer Collection
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Exclusive products designed by world-renowned creators, available for a limited time only.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Product */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">BESTSELLER</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Professional Camera Kit
              </h3>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Complete photography solution with professional-grade lens, advanced stabilization, 
                and 4K video recording capabilities.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">4.9</span>
                  <span className="text-gray-400">(2.1k reviews)</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-white">$1,299</span>
                  <span className="text-xl text-gray-400 line-through">$1,799</span>
                </div>
              </div>
              
              <button className="group bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 flex items-center gap-3">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Side Features */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <Zap className="w-10 h-10 mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">Flash Sale</h3>
              <p className="text-green-100 mb-4">Up to 50% off selected items</p>
              <button className="text-sm font-semibold text-white border border-white/30 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                View Deals
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              <Heart className="w-10 h-10 mb-4 text-pink-200" />
              <h3 className="text-xl font-bold mb-2">New Arrivals</h3>
              <p className="text-purple-100 mb-4">Fresh designs just landed</p>
              <button className="text-sm font-semibold text-white border border-white/30 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;