import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  const categories = ['All', 'Burgers', 'Sandwiches', 'Sides', 'Drinks'];

  const menuItems = [
    { id: 1, name: 'Classic Burger', category: 'Burgers', price: '$7.99', image: '/placeholder.svg?height=150&width=150' },
    { id: 2, name: 'Cheese Burger', category: 'Burgers', price: '$8.99', image: '/placeholder.svg?height=150&width=150' },
    { id: 3, name: 'Veggie Sandwich', category: 'Sandwiches', price: '$6.99', image: '/placeholder.svg?height=150&width=150' },
    { id: 4, name: 'French Fries', category: 'Sides', price: '$3.99', image: '/placeholder.svg?height=150&width=150' },
    { id: 5, name: 'Soda', category: 'Drinks', price: '$1.99', image: '/placeholder.svg?height=150&width=150' },
  ];

  const filteredItems = menuItems.filter((item) =>
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const viewItem = (id) => {
    navigate(`/product/${id}`); // Use navigate for routing
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>
      <div className="flex flex-col md:flex-row justify-between mb-8">
      
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search menu..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer" 
          >
            <img src={item.image} alt={item.name} width={150} height={150}
             className="mx-auto mb-4 rounded-lg"
             onClick={() => viewItem(item.id)} // Correctly pass the function
/>
            <h3 className="font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.category}</p>
            <p className="text-red-500 font-bold">{item.price}</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full w-full hover:bg-red-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
