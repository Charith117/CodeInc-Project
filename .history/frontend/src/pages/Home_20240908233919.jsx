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
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/path/to/your/beautiful-banner-image.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to CodeInc</h1>
          <p className="text-xl">Empowering Your Digital Journey</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Who We Are</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            CodeInc is a leading tech company dedicated to providing innovative solutions for businesses and individuals. Our team of experts is passionate about creating cutting-edge technology that makes a difference.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Exclusive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p>We build responsive and dynamic websites tailored to your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Web Applications</h3>
              <p>Custom web applications to streamline your business processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Positions Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Internship Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{internship.title}</h3>
                <p className="mb-4">{internship.description}</p>
                <a href="#" className="text-blue-600 hover:underline">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Growing Online Community</h2>
          <p className="text-lg mb-8">Join thousands of developers and tech enthusiasts in our vibrant community.</p>
          <a href="#" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">Join Now</a>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-8">Have questions or want to learn more about our services? We'd love to hear from you!</p>
          <a href="/contact" className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default Home;