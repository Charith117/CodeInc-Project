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
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-center bg-cover" style={{backgroundImage: "url('/path/to/your/professional-hero-image.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">Welcome to CodeInc</h1>
          <p className="mb-10 text-xl text-gray-200 md:text-2xl">Empowering Your IT Career Journey</p>
          <a href="#internships" className="px-8 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out bg-blue-600 rounded-full hover:bg-blue-700">Explore Internships</a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">Who We Are</h2>
          <p className="max-w-3xl mx-auto text-lg text-center text-gray-700">
            CodeInc is a leading tech company dedicated to providing short-term internship opportunities across various IT fields. We're committed to empowering the next generation of tech professionals through hands-on experience and mentorship.
          </p>
        </div>
      </section>

      {/* Internship Fields Section */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">Our Internship Fields</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {['Web Development', 'Mobile App Development', 'Data Science', 'Cloud Computing', 'Cybersecurity', 'Artificial Intelligence'].map((field, index) => (
              <div key={index} className="p-6 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-blue-600">{field}</h3>
                <p className="text-gray-600">Gain hands-on experience in cutting-edge {field.toLowerCase()} technologies and methodologies.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Growing Online Community Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">Our Growing Online Community</h2>
          <p className="mb-12 text-xl text-center text-gray-700">
            Connect with a community of individuals who share your vision, unlocking boundless opportunities and fostering personal growth as you pursue success.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 text-center rounded-lg bg-gray-50">
              <h3 className="mb-2 text-4xl font-bold text-blue-600">240K+</h3>
              <p className="text-gray-600">LinkedIn community</p>
            </div>
            <div className="p-6 text-center rounded-lg bg-gray-50">
              <h3 className="mb-2 text-4xl font-bold text-blue-600">6K+</h3>
              <p className="text-gray-600">Telegram community</p>
            </div>
            <div className="p-6 text-center rounded-lg bg-gray-50">
              <h3 className="mb-2 text-4xl font-bold text-blue-600">20K+</h3>
              <p className="text-gray-600">Instagram community</p>
            </div>
            <div className="p-6 text-center rounded-lg bg-gray-50">
              <h3 className="mb-2 text-4xl font-bold text-blue-600">90K+</h3>
              <p className="text-gray-600">Facebook community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Join Our Intern Community</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">Connect with fellow interns, mentors, and industry professionals in our vibrant community.</p>
          <a href="#" className="px-8 py-3 text-lg font-semibold text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700">Join Now</a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center md:text-4xl">Get in Touch</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-center text-gray-700">Have questions about our internship programs? We'd love to hear from you!</p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-2 font-bold text-gray-700">Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Your email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-bold text-gray-700">Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" className="px-8 py-3 text-lg font-semibold text-white transition duration-300 bg-green-600 rounded-full hover:bg-green-700">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      
      
    </div>
  );
}

export default Home;