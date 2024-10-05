// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu as MenuIcon, Heart, X, Home, Info, Users, MessageSquare, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ color }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Homepage', icon: Home, link: '/' },
    { title: 'About Us', icon: Info, link: '/about' },
    { title: 'Our Partners', icon: Users, link: '/partners' },
    { title: "Let's talk", icon: MessageSquare, link: '/contact' },
    { title: 'Menu', icon: BookOpen, link: '/menu' },
    { title: 'Profile', icon: User, link: '/user' },
    { title: 'Wishlist', icon: Heart, link: '/wishlist' },
  ];

  return (
    <div className={`${isMenuOpen ? 'overflow-hidden h-screen' : ''}`}>
      <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 rounded-full mt-5 mx-5 ${isScrolled ? 'bg-red-500' : color}`}>
        <div className="max-w-fullxl mx-auto px-10 py-3">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-4xl font-extrabold   text-white">
                FastFood
              </Link>


            </div>

            <div className="flex items-center space-x-4">
              <Link to="/cart" className={`md:hidden ${isScrolled ? 'text-white hover:text-black' : 'text-white hover:text-red-500'}`}>
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <button onClick={toggleMenu} className={`${isScrolled ? 'text-white hover:text-black hover:bg-white hover:text-red-500 rounded-full p-3' : 'text-white hover:bg-white hover:text-red-500 md:bg-red-500 rounded-full p-5'}`}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <Link to="/menu" className={`${isScrolled ? 'bg-white text-red-500 hover:bg-white hover:text-black' : 'bg-red-500 text-white hover:bg-white hover:text-red-500'} px-5 py-2 rounded-full font-semibold transition duration-300`}>
                Menu
              </Link>
              <Link to="/user" className={`hover:bg-white hover:text-red-500 rounded-full p-3 ${isScrolled ? 'text-white hover:text-black ' : 'text-white hover:text-red-500 '}`}>
                <User className="h-6 w-6" />
              </Link>
              <Link to="/cart" className={`hover:bg-white hover:text-red-500 rounded-full p-3 ${isScrolled ? 'text-white hover:text-black' : 'text-white hover:text-red-500'}`}>
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <Link to="/wishlist" className={`hover:bg-white hover:text-red-500 rounded-full p-3 ${isScrolled ? 'text-white hover:text-black' : 'text-white hover:text-red-500'}`}>
                <Heart className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md" onClick={toggleMenu}></div>

          {/* Menu container */}
          <div className="relative text-white p-8 z-40">
            <nav>
              <ul className="space-y-6 text-center">
                {menuItems.map((item, index) => (
                  <li key={index} className="transition duration-300 transform hover:scale-105">
                    <Link
                      to={item.link}
                      className="flex items-center justify-center text-2xl text-white hover:text-red-500 transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      <item.icon className="h-6 w-6 mr-2" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
