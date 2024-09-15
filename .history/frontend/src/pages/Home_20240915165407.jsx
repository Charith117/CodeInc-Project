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
      <section className="relative flex items-center justify-center h-screen overflow-hidden bg-center bg-cover">
        <div className="absolute inset-0 bg-center bg-cover animate-ken-burns" style={{backgroundImage: "url('hero-image.jpg')"}}></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl animate-fade-in-down animate-pulse">Welcome to CodeInc</h1>
          <p className="mb-10 text-xl text-gray-200 md:text-2xl animate-fade-in-up">Empowering Your IT Career Journey</p>
          <a 
            href="internships" 
            className="inline-block px-8 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 animate-fade-in"
          >
            Explore Internships
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-10 text-4xl font-bold text-center text-gray-800 md:text-5xl lg:text-6xl">
            Who We Are
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-center text-gray-600 md:text-2xl">
            <span className="font-bold">CodeInc</span> is a <span className="italic">leading tech company</span> dedicated to providing 
            short-term internship opportunities across various IT fields. 
            We're committed to empowering the next generation of tech professionals through 
            hands-on experience and mentorship.
          </p>
        </div>
      </section>

      {/* Internship Fields Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Explore Our Internship Fields</h2>
          <div className="grid grid-cols-1 gap-y-2.5 gap-x-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center  ">
            {[
              { title: 'Web Development', image: '/images/web-dev.jpg', description: 'Build responsive and dynamic websites using modern frameworks.' },
              { title: 'Mobile App Development', image: '/images/mobile-dev.jpg', description: 'Create innovative mobile applications for iOS and Android.' },
              { title: 'Data Science', image: '/images/data-science.jpg', description: 'Analyze complex datasets and derive meaningful insights.' },
              { title: 'Cloud Computing', image: '/images/cloud-computing.jpg', description: 'Harness the power of cloud technologies for scalable solutions.' },
              { title: 'Cybersecurity', image: '/images/cybersecurity.jpg', description: 'Protect digital assets and implement robust security measures.' },
              { title: 'Artificial Intelligence', image: '/images/ai.jpg', description: 'Develop intelligent systems and machine learning models.' }
            ].map((field, index) => (
              <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg" style={{ width: '250px', margin: '10px 10px 10px 10px'}}>
                <img src={field.image} alt={field.title} className="object-cover w-full h-40" />
                <div className="flex flex-col justify-between flex-grow p-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{field.title}</h3>
                    <p className="text-sm text-gray-600">{field.description}</p>
                  </div>
                  <div className="flex justify-center mt-4">
                    <a 
                      href="https://forms.google.com/internship-application" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 bg-blue-600 rounded hover:bg-blue-700"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
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