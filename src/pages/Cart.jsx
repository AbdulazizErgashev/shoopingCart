import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  function removeFromCart(index) {
    let updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function updateQuantity(index, quantity) {
    let updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-6 py-3">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link
          to="/products"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-3">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="flex items-center justify-between mb-4">
            <img
              className="w-16 h-16 object-cover"
              src={item.image}
              alt={item.title}
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(index, e.target.value)}
              className="w-16 text-center"
            />
            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 text-white px-4 py-2 rounded ml-4"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          to="/checkout"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
