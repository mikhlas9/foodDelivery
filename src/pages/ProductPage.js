import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';

const mockProducts = [
  { 
    id: 1, 
    name: 'Bacon+Cheese Burger', 
    price: 10.00, 
    description: 'A juicy beef patty topped with crispy bacon and melted cheese, served on a toasted sesame seed bun.',
    ingredients: ['onion', 'oregano', 'bacon', 'cheese', 'ketchup', 'mustard', 'mushrooms'],
    images: [
      'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_01.jpg',
      'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_02.jpg',
      'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_01.jpg',
      'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_01.jpg',
    ]
  },
  // ... other products
];

export default function ProductPage({ productId }) {
  const product = mockProducts.find(p => p.id === Number(productId)) || mockProducts[0];
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const addToCart = () => {
    // Implement add to cart logic here
    console.log(`Added ${quantity} ${product.name}(s) to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-[#f5e6c9]">
      <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <div className="relative mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              width={400} 
              height={400} 
              className="rounded-lg"
            />
        
          </div>
          <div className="flex space-x-2">
            {product.images.slice(1).map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`${product.name} thumbnail ${index + 1}`} 
                width={100} 
                height={100} 
                className="rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(index + 1)}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold mb-6">${product.price.toFixed(2)}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
            <p>{product.ingredients.join(', ')}</p>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded-full">
              <button 
                className="p-2" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus size={20} />
              </button>
              <span className="px-4">{quantity}</span>
              <button 
                className="p-2" 
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus size={20} />
              </button>
            </div>
            <button 
              onClick={addToCart} 
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
