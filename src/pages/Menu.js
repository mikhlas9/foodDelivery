import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [notification, setNotification] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  const categories = ['All', 'Burgers', 'Sandwiches', 'Sides', 'Drinks'];

  const menuItems = [
    { id: 1, name: 'Classic Burger', category: 'Burgers', price: 7.99, image: '/placeholder.svg?height=150&width=150' },
    { id: 2, name: 'Cheese Burger', category: 'Burgers', price: 8.99, image: '/placeholder.svg?height=150&width=150' },
    { id: 3, name: 'Veggie Sandwich', category: 'Sandwiches', price: 6.99, image: '/placeholder.svg?height=150&width=150' },
    { id: 4, name: 'French Fries', category: 'Sides', price: 3.99, image: '/placeholder.svg?height=150&width=150' },
    { id: 5, name: 'Soda', category: 'Drinks', price: 1.99, image: '/placeholder.svg?height=150&width=150' },
  ];

  const filteredItems = menuItems.filter((item) =>
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const viewItem = (id) => {
    navigate(`/product/${id}`); // Use navigate for routing
  };

  const addToCart = (item) => {
    setNotification(`${item} added to cart!`);
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  return (
    <div>
      <Navbar color={"bg-red-500"} />
      {/* Notification for adding to cart */}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg z-50 border-2 width-full">
          {notification}
        </div>
      )}
<div className="container bg-[#f5e6c9] mx-auto px-4 py-8 w-full ">
<h1 className="text-3xl font-bold mb-8 text-center text-red-500 mt-24 mb-20">Our Menu</h1>
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full hover:text-white hover:bg-red-500 ${
                  selectedCategory === category ? 'bg-red-500 text-white' : 'bg-white text-black'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-gradient-to-t from-white to-gray-100 rounded-lg p-6 text-center shadow-lg transition duration-300 cursor-pointer"
              onClick={() => viewItem(item.id)} // Navigate when clicking on the card
            >
              <div className="bg-white p-6 rounded-lg mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto rounded-full transform transition-all duration-300 hover:scale-110" // Image hover effect only
                  width={150}
                  height={150}
                />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900">{item.name}</h3>
              <p className="text-red-500 font-bold text-2xl mb-4">${item.price.toFixed(2)}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation when clicking the button
                  addToCart(item.name); // Call the addToCart function
                }}
                className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition duration-300 flex items-center justify-center w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
