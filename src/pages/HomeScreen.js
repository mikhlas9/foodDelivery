// src/pages/HomeScreen.js
import React from 'react';
import Location from '../components/Location';
import DeliveryPromo from '../components/DeliveryPromo';
import { BestSellers } from '../components/BestSellers';
import Navbar from '../components/Navbar';
import image from "../images/image.png"

export default function HomeScreen() {
  return (
    <div>
      <Navbar color={"bg-transparent"} />
      <div className="bg-gray-900 text-white min-h-screen">
        <div 
          className="relative h-screen bg-cover bg-center" // Change to bg-cover
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center',  backgroundRepeat: 'no-repeat' }} // Ensure the background image covers and is centered
        >
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-bold mb-4">Give Life to your</h1>
              <h2 className="text-6xl font-bold mb-8 text-red-500">BRAND!</h2>
              <a
                href="/menu"
                className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300"
              >
                View Menu
              </a>
            </div>
          </div> */}
        </div>

        <BestSellers />
        <DeliveryPromo />
        <Location />
      </div>
    </div>
  );
}
