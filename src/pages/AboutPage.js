import React from 'react';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <div>
      <Navbar color={"bg-red-500"} />
    
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mt-20 mb-8 text-center text-red-500">About FastFood</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/api/placeholder/600/400"
                alt="FastFood restaurant"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, FastFood began as a small burger joint with a big dream: to serve the most delicious, high-quality burgers in town. Over the years, we've grown into a beloved local chain, but our commitment to great food and excellent service remains unchanged.
              </p>
              <p className="text-gray-700 mb-4">
                We source our ingredients from local farms and suppliers, ensuring that every bite is fresh and flavorful. Our chefs craft each burger with care, and our friendly staff is dedicated to making your dining experience exceptional.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Mission</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            At FastFood, we're on a mission to redefine fast food. We believe that quick doesn't have to mean low-quality. Our goal is to provide delicious, nutritious meals that are convenient for our busy customers, while also being mindful of our environmental impact.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Quality', 'Community', 'Sustainability'].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-red-500">{value}</h3>
              <p className="text-gray-700">
                {value === 'Quality' && "We never compromise on the quality of our ingredients or the care we put into preparing your meal."}
                {value === 'Community' && "We're proud to be a part of our local community and strive to give back through various initiatives."}
                {value === 'Sustainability' && "We're committed to reducing our environmental impact through responsible sourcing and eco-friendly practices."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}