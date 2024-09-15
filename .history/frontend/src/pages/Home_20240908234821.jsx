import { useState, useEffect } from 'react';
import { getInternships } from '../services/api';

function Home() {
  const [internships, setInternships] = useState([]);

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

  return (
    <div className="container mx-auto">
      {/* Banner Section */}
       <section className="relative h-[80vh] w-full flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/path/to/your/beautiful-banner-image.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="w-full text-center relative z-10">
          <h1 className="text-8xl font-bold mb-6 text-yellow-400 leading-tight font-serif">Welcome to CodeInc</h1>
          <p className="text-5xl text-green-300 mb-8 font-sans">Empowering Your Digital Journey</p>
          <a href="#services" className="bg-blue-600 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300 ease-in-out">Explore Our Services</a>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Who We Are</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            CodeInc is a leading tech company dedicated to providing innovative solutions for businesses and individuals. Our team of experts is passionate about creating cutting-edge technology that makes a difference.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Exclusive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-lg">We build responsive and dynamic websites tailored to your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Web Applications</h3>
              <p className="text-lg">Custom web applications to streamline your business processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Positions Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Internship Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-3 text-blue-600">{internship.title}</h3>
                <p className="text-gray-600 mb-4">{internship.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{internship.duration}</span>
                  <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Growing Online Community</h2>
          <p className="text-xl mb-8">Join thousands of developers and tech enthusiasts in our vibrant community.</p>
          <a href="#" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 text-lg">Join Now</a>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8">Have questions or want to learn more about our services? We'd love to hear from you!</p>
          <a href="/contact" className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300 text-lg">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default Home;