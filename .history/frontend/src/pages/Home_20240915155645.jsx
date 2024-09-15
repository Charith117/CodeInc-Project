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

      {/* Current Internship Positions Section */}
      <section id="internships" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">Current Internship Positions</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {internships.map((internship, index) => (
              <div key={index} className="p-6 transition duration-300 rounded-lg shadow-md bg-gray-50 hover:shadow-lg">
                <h3 className="mb-3 text-xl font-semibold text-blue-600">{internship.title}</h3>
                <p className="mb-4 text-gray-600">{internship.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{internship.duration}</span>
                  <a href="#" className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600">Apply Now</a>
                </div>
              </div>
            ))}
            
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
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">Have questions about our internship programs? We'd love to hear from you!</p>
          <a href="/contact" className="px-8 py-3 text-lg font-semibold text-white transition duration-300 bg-green-600 rounded-full hover:bg-green-700">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default Home;