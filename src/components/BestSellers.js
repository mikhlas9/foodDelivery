import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BestSellers = () => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState('');

  const bestsellers = [
    { id: 1, name: 'Bacon+Cheese Burger', price: 8.99, image: 'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_01.jpg' },
    { id: 2, name: 'Black Angus Burger', price: 10.99, image: 'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_02.jpg' },
    { id: 3, name: 'Buffalo Sandwich', price: 9.99, image: 'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_03.jpg' },
    { id: 4, name: 'Halloween Special', price: 12.99, image: 'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_05.jpg' },
  ];

  const viewItem = (id) => {
    navigate(`/product/${id}`); // Navigate to the product page
  };

  const addToCart = (itemName) => {
    setNotification(`${itemName} added to cart!`);
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  return (
    <div className="bg-gradient-to-b from-[#6B939B] to-[#192231] text-gray-800 py-20 border-b-4  border-red-500 relative">
      {/* Notification for adding to cart */}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg z-50 border-2 width-full">
          {notification}
        </div>
      )}

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-20 text-center text-red-500 rounded-full bg-white py-3 px-5 mx-20">Bestsellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {bestsellers.map((item) => (
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
                  addToCart(item.name); // Show notification
                }}
                className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition duration-300 flex items-center justify-center w-full"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
