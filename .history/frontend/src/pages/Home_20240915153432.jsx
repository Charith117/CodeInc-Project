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
            CodeInc is a leading tech company dedicated to providing short-term internship opportunities across various IT fields. We're committed to empowering the next generation of tech professionals through hands-on experience and mentorship.
          </p>
        </div>
      </section>

      {/* Internship Fields Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">Our Internship Fields</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">Web Development</h3>
              <p className="text-lg">Gain hands-on experience in building responsive and dynamic websites.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">Android App Development</h3>
              <p className="text-lg">Learn to create innovative mobile applications for Android devices.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">Data Science</h3>
              <p className="text-lg">Explore the world of big data, statistical analysis, and predictive modeling.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">Java Programming</h3>
              <p className="text-lg">Master object-oriented programming and enterprise application development with Java.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">Python Programming</h3>
              <p className="text-lg">Develop skills in one of the most versatile and popular programming languages.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">C++ Programming</h3>
              <p className="text-lg">Learn system/application development and gain a deep understanding of computer science concepts.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">UI/UX Design</h3>
              <p className="text-lg">Create intuitive and visually appealing user interfaces and experiences.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">Artificial Intelligence</h3>
              <p className="text-lg">Dive into AI algorithms, neural networks, and intelligent system design.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">Machine Learning</h3>
              <p className="text-lg">Explore algorithms that enable computers to learn from and make predictions on data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Positions Section */}
      <section id="internships" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">Current Internship Positions</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {internships.map((internship, index) => (
              <div key={index} className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
                <h3 className="mb-3 text-2xl font-semibold text-blue-600">{internship.title}</h3>
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold">Join Our Intern Community</h2>
          <p className="mb-8 text-xl">Connect with fellow interns, mentors, and industry professionals in our vibrant community.</p>
          <a href="#" className="px-6 py-2 text-lg text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700">Join Now</a>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold">Get in Touch</h2>
          <p className="mb-8 text-xl">Have questions about our internship programs? We'd love to hear from you!</p>
          <a href="/contact" className="px-6 py-2 text-lg text-white transition duration-300 bg-green-600 rounded-full hover:bg-green-700">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default Home;