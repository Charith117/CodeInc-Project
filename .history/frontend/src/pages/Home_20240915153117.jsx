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
        <div className="relative z-10 w-full text-center">
          <h1 className="mb-6 font-serif font-bold leading-tight text-yellow-400 text-8xl">Welcome to CodeInc</h1>
          <p className="mb-8 font-sans text-5xl text-green-300">Empowering Your IT Career Journey</p>
          <a href="#internships" className="px-8 py-3 text-xl font-semibold text-white transition duration-300 ease-in-out bg-blue-600 rounded-full hover:bg-blue-700">Explore Internships</a>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">Who We Are</h2>
          <p className="max-w-3xl mx-auto text-xl text-center">
            CodeInc is a leading tech company dedicated to providing innovative solutions for businesses and individuals. Our team of experts is passionate about creating cutting-edge technology that makes a difference.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">Our Exclusive Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">Web Development</h3>
              <p className="text-lg">We build responsive and dynamic websites tailored to your needs.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">Web Applications</h3>
              <p className="text-lg">Custom web applications to streamline your business processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Positions Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">Internship Positions</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {internships.map((internship, index) => (
              <div key={index} className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
                <h3 className="mb-3 text-2xl font-semibold text-blue-600">{internship.title}</h3>
                <p className="mb-4 text-gray-600">{internship.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{internship.duration}</span>
                  <a href="#" className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold">Our Growing Online Community</h2>
          <p className="mb-8 text-xl">Join thousands of developers and tech enthusiasts in our vibrant community.</p>
          <a href="#" className="px-6 py-2 text-lg text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700">Join Now</a>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold">Get in Touch</h2>
          <p className="mb-8 text-xl">Have questions or want to learn more about our services? We'd love to hear from you!</p>
          <a href="/contact" className="px-6 py-2 text-lg text-white transition duration-300 bg-green-600 rounded-full hover:bg-green-700">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default Home;