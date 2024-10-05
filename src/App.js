import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeScreen from './pages/HomeScreen'
import Menu from './pages/Menu'
import AboutPage from './pages/AboutPage'
import Location from './components/Location'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <Navbar /> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/location" element={<Location />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}