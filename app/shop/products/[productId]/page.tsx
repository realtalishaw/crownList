import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';

// This would typically come from an API or database
const getProduct = async (id: string) => {
  // Placeholder implementation
  return {
    id,
    name: 'Crystal Crown Pin',
    price: 29.99,
    description: 'Beautiful crystal crown pin perfect for pageant events.',
    features: [
      'High-quality crystals',
      'Secure pin backing',
      'Elegant design',
      'Perfect for any occasion'
    ],
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1920',
  };
};

// Required for static export
export function generateStaticParams() {
  return [
    { productId: '1' },
    { productId: '2' },
  ]
}

export default async function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="/shop"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-2xl text-purple-600 font-semibold mb-6">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}