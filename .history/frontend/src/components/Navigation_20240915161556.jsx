import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container px-6 py-3 mx-auto">
        <ul className="flex items-center justify-between">
          <li><Link to="/" className="text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-blue-600">Home</Link></li>
          <li><Link to="/services" className="text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-blue-600">Services</Link></li>
          <li><Link to="/products" className="text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-blue-600">Products</Link></li>
          <li><Link to="/internships" className="text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-blue-600">Internships</Link></li>
          <li><Link to="/jobs" className="text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-blue-600">Jobs</Link></li>
          <li><Link to="/about-us" className="text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-blue-600">About Us</Link></li>
          <li><Link to="/contact-us" className="text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-blue-600">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;