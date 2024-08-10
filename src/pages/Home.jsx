import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
        <p className="text-xl mb-4">
          Discover the latest products at unbeatable prices!
        </p>
        <Link
          to="/products"
          className="bg-blue-500 text-white px-6 py-3 rounded-full"
        >
          Shop Now
        </Link>
      </div>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Product Name</h3>
            <p className="text-gray-700 mb-4">$49.99</p>
            <Link
              to="/products/1"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Summer Sale</h2>
        <p className="text-lg mb-4">
          Up to 50% off on selected items. Limited time only!
        </p>
        <Link
          to="/products"
          className="bg-blue-500 text-white px-6 py-3 rounded-full"
        >
          Shop the Sale
        </Link>
      </section>
    </div>
  );
}

export default Home;
