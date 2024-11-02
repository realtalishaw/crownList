"use client";

import { useState } from 'react';
import { ImagePlus, Camera, Mic, Search, X, Send, Heart, Plus } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ShopHomePage() {
  const router = useRouter();
  const [searchMode, setSearchMode] = useState('text');
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [activeSearch, setActiveSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [stylePreferences, setStylePreferences] = useState([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [searchImages, setSearchImages] = useState([]);
  
  const fileInputRef = useState(null);

  const featuredProducts = [
    {
      id: '1',
      name: 'Crystal Crown Pin',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1920',
    },
    {
      id: '2', 
      name: 'Pageant Preparation Guide',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1920',
    },
  ];

  const styles = [
    { name: 'Elegant', emoji: '👗' },
    { name: 'Minimalist', emoji: '🤍' },
    { name: 'Bohemian', emoji: '🌸' },
    { name: 'Vintage', emoji: '🎭' },
    { name: 'Glamorous', emoji: '✨' },
    { name: 'Modern', emoji: '🔲' },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSearchImages(prev => [...prev, reader.result]);
        setIsUploadModalOpen(false);
      /*  router.push('/shop/search?type=image'); */
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSearchImages(prev => [...prev, reader.result]);
        setIsUploadModalOpen(false);
        router.push('/shop/search?type=image');
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateSearch = () => {
    setActiveSearch(true);
    // Add search simulation logic here
  };

  const removeSearchImage = (index) => {
    setSearchImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="py-16 text-center max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-purple-800 mb-4">Find Your Perfect Pageant Look</h1>
        <p className="text-xl text-gray-600 mb-8">Discover stunning dresses, accessories and more for your next competition</p>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Enhanced Search Bar */}
          <div 
            className="relative bg-white rounded-2xl shadow-lg"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex items-center gap-2 p-4">
              {searchImages.length > 0 ? (
                <div className="flex items-center gap-2">
                  {searchImages.map((img, index) => (
                    <div key={index} className="relative">
                      <img 
                        src={img} 
                        alt={`Search reference ${index + 1}`} 
                        className="h-10 w-10 object-cover rounded"
                      />
                      <button 
                        onClick={() => removeSearchImage(index)}
                        className="absolute -top-2 -right-2 bg-white rounded-full p-0.5 shadow-sm hover:bg-gray-100"
                      >
                        <X size={14} className="text-gray-500" />
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={() => setIsUploadModalOpen(true)}
                    className="h-10 px-3 border border-dashed border-purple-300 rounded flex items-center gap-1 text-purple-600 hover:bg-purple-50 transition-colors"
                  >
                    <Plus size={16} />
                    <span className="text-sm">Add more</span>
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileUpload}
                    ref={fileInputRef}
                  />
                  <button 
                    className="p-2 rounded-full hover:bg-purple-50 transition-colors"
                    onClick={() => setIsUploadModalOpen(true)}
                  >
                    <ImagePlus size={24} className="text-purple-600" />
                  </button>
                  <button className="p-2 hover:bg-purple-50 rounded-full transition-colors">
                    <Mic size={24} className="text-purple-600" />
                  </button>
                </div>
              )}

              <input
                type="text"
                className="flex-1 outline-none text-lg"
                placeholder="Search for dresses, accessories, shoes or upload inspiration photos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <button 
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors flex items-center gap-2"
                onClick={() => router.push('/shop/search?type=image')}
              >
                <Search size={20} />
                Search
              </button>
            </div>
          </div>

          {/* Style Preferences */}
          <div className="flex gap-2 flex-wrap justify-center">
            {styles.map(style => (
              <button
                key={style.name}
                className={`px-4 py-2 rounded-full border transition-colors flex items-center gap-2 ${
                  stylePreferences.includes(style.name) 
                    ? 'bg-purple-100 border-purple-300 text-purple-700' 
                    : 'hover:bg-purple-50 border-gray-200'
                }`}
                onClick={() => setStylePreferences(prev => 
                  prev.includes(style.name) 
                    ? prev.filter(s => s !== style.name)
                    : [...prev, style.name]
                )}
              >
                <span>{style.emoji}</span>
                {style.name}
              </button>
            ))}
          </div>

          {/* Uploaded Images Preview */}
          {images.length > 0 && (
            <div className="flex gap-4 flex-wrap justify-center">
              {images.map((img, i) => (
                <div key={i} className="relative group">
                  <img src={img} alt="reference" className="w-32 h-32 object-cover rounded-lg shadow-md" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity flex items-center justify-center">
                    <button 
                      className="p-1 bg-white rounded-full"
                      onClick={() => setImages(images.filter((_, idx) => idx !== i))}
                    >
                      <X size={16} className="text-purple-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
        {featuredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/shop/products/${product.id}`}
            className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[4/5]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-purple-600 font-medium mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Updated Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 max-w-xl w-full mx-4 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Search by image</h2>
              <button 
                onClick={() => setIsUploadModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div 
              className="border-2 border-dashed border-purple-200 rounded-xl p-10 text-center mb-6 hover:border-purple-400 transition-colors cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center">
                  <ImagePlus size={32} className="text-purple-600" />
                </div>
                <p className="text-gray-600">
                  Drag your image here or{' '}
                  <button 
                    className="text-purple-600 hover:text-purple-700 font-medium"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Click to upload
                  </button>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Paste image link"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:border-purple-400 transition-colors pr-12"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-700">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}