import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link to="/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="CodeInc Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeInc</span>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
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