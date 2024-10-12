import { useState } from 'react';
import { X } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Bacon+Cheese Burger', price: 8.99, image: 'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_01.jpg' },
  { id: 2, name: 'Black Angus Burger', price: 10.99, image: 'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_02.jpg' },
  { id: 3, name: 'Buffalo Sandwich', price: 9.99, image: 'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_03.jpg' },
  { id: 4, name: 'Halloween Special', price: 12.99, image: 'https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_05.jpg' },
]);
  const [couponCode, setCouponCode] = useState('');

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ));
  };

  return (
    <div>
        <Navbar color={"bg-red-500"} />
    
    <div className="container w-full mx-auto px-4 py-12 bg-[#f5e6c9]">
      <h1 className="text-4xl font-bold mb-8 ml-20 mt-24 text-red-500">Your Cart</h1>
      {cart.length > 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-6 mx-20">
          <div className="bg-red-500 text-white rounded-full p-4 mb-6 grid grid-cols-4 gap-4">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="grid grid-cols-4 gap-4 items-center py-4 border-b">
              <div className="flex items-center">
                <button onClick={() => removeItem(item.id)} className="mr-2">
                  <X size={20} />
                </button>
                <img src={item.image} alt={item.name} width={80} height={80} className="mr-4" />
                <span className="text-red-500">{item.name}</span>
              </div>
              <div>${item.price.toFixed(2)}</div>
              <div>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  min="1"
                  className="w-16 text-center border rounded-full p-2"
                />
              </div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
          <div className="mt-6 flex items-center">
            <input
              type="text"
              placeholder="Coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border rounded-full p-2 mr-2"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-full mr-2">
              Apply Coupon
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full">
              Update Cart
            </button>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Cart totals</h2>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Shipping:</span>
              <div className="text-right">
                <p>Enter your address to view shipping options.</p>
                <a href="#" className="text-red-500">Calculate shipping</a>
              </div>
            </div>
            <div className="flex justify-between py-2 border-b text-xl font-bold">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300 w-full text-lg font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
    </div>
  );
}
