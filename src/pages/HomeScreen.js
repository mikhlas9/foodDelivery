import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import Location from '../components/Location';
import { useNavigate } from 'react-router-dom';
import DeliveryPromo from '../components/DeliveryPromo';

const sliderItems = [
  { id: 1, name: 'Classic Cheeseburger', description: 'Juicy beef patty with melted cheese', image: '/placeholder.svg?height=600&width=600' },
  { id: 2, name: 'Veggie Delight', description: 'Plant-based patty with fresh veggies', image: '/placeholder.svg?height=600&width=600' },
  { id: 3, name: 'Spicy Chicken Burger', description: 'Crispy chicken with a spicy kick', image: '/placeholder.svg?height=600&width=600' },
];

const bestsellers = [
  { id: 1, name: 'Bacon+Cheese Burger', price: 8.99, image: 'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_01.jpg' },
  { id: 2, name: 'Black Angus Burger', price: 10.99, image: 'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_02.jpg' },
  { id: 3, name: 'Buffalo Sandwich', price: 9.99, image: 'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_03.jpg' },
  { id: 4, name: 'Halloween Special', price: 12.99, image: 'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_05.jpg' },
];

export default function HomeScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate(); // Use the useNavigate hook for navigation


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + sliderItems.length) % sliderItems.length);
  };
  const viewItem = (id) => {
    navigate(`/product/${id}`); // Use navigate for routing
  };

  return (
    <div className="bg-red-500 text-white">
      <div className="relative h-screen">
        {sliderItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-full"

            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">{item.name}</h1>
                <p className="text-xl mb-8">{item.description}</p>
                <a href="/menu" className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        ))}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-red-500" size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="text-red-500" size={24} />
        </button>
      </div>
      <div className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Bestsellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map((item) => (
              <div key={item.id} className="bg-gray-100 rounded-lg p-6 text-center shadow-lg transition duration-300 hover:shadow-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="mx-auto mb-6 rounded-lg"
                  onClick={() => viewItem(item.id)} // Correctly pass the function

                />
                <h3 className="font-semibold text-xl mb-2">{item.name}</h3>
                <p className="text-red-500 font-bold text-2xl mb-4">${item.price.toFixed(2)}</p>
                <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition duration-300 flex items-center justify-center w-full">
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DeliveryPromo />
      <Location />
    </div>
  );
}
