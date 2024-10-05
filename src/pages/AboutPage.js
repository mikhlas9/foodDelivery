import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Eatsy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Eatsy restaurant"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2010, Eatsy began as a small burger joint with a big dream: to serve the most delicious, high-quality burgers in town. Over the years, we've grown into a beloved local chain, but our commitment to great food and excellent service remains unchanged.
          </p>
          <p className="text-gray-700 mb-4">
            We source our ingredients from local farms and suppliers, ensuring that every bite is fresh and flavorful. Our chefs craft each burger with care, and our friendly staff is dedicated to making your dining experience exceptional.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Eatsy, we're on a mission to redefine fast food. We believe that quick doesn't have to mean low-quality. Our goal is to provide delicious, nutritious meals that are convenient for our busy customers, while also being mindful of our environmental impact.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Quality</h3>
            <p className="text-gray-700">We never compromise on the quality of our ingredients or the care we put into preparing your meal.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-gray-700">We're proud to be a part of our local community and strive to give back through various initiatives.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
            <p className="text-gray-700">We're committed to reducing our environmental impact through responsible sourcing and eco-friendly practices.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
