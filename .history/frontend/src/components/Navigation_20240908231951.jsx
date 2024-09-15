import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/services" className="hover:underline">Services</Link></li>
        <li><Link to="/products" className="hover:underline">Products</Link></li>
        <li><Link to="/internships" className="hover:underline">Internships</Link></li>
        <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
        <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
        <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;