function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">About Us</h4>
            <p className="text-gray-400">
              We offer the best products at the best prices. Our commitment is
              to your satisfaction.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/products" className="hover:text-blue-400">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="/cart" className="hover:text-blue-400">
                  Cart
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-blue-400">
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-400">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6">
          &copy; 2024 Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
