import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="text-gray-800 text-xl font-bold">
                ShopName
              </Link>
            </div>
            <div className="flex items-center">
              <Link to="/cart" className="text-gray-800 mx-4">
                Cart
              </Link>
              <Link to="/login" className="text-gray-800">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
