import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

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

export default function ShopHomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-center mb-8">
        <ShoppingBag className="h-12 w-12 text-purple-600 mr-4" />
        <h1 className="text-4xl font-bold text-purple-800">The Crown Shop</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/shop/products/${product.id}`}
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-64">
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
    </div>
  );
}