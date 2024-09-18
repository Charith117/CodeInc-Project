import { useState, useEffect } from 'react';
import { getInternships } from '../services/api';

function Home() {
  const [internships, setInternships] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await getInternships();
        setInternships(response.data);
      } catch (error) {
        console.error('Error fetching internships:', error);
      }
    };
    fetchInternships();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen overflow-hidden bg-center bg-cover">
        <div className="absolute inset-0 bg-center bg-cover animate-ken-burns" style={{backgroundImage: "url('hero-image.jpg')"}}></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl animate-fade-in-down animate-pulse">Welcome to CodeInc</h1>
          <p className="mb-10 text-xl text-gray-200 md:text-2xl animate-fade-in-up">Empowering Your IT Career Journey</p>
          <a 
            href="https://forms.gle/QVDxBkntuWnMAdtW7" 
            className="inline-block px-8 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 animate-fade-in"
          >
            Explore Internships
          </a>
        </div>
      <//