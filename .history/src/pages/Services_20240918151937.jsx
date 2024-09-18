function Services() {
    return (
      <div className="container p-4 mx-auto mt-8 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="mb-4 text-lg text-gray-600">In addition to our internship programs, we offer a range of services to help you achieve your technology goals.</p>
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <div className="flex flex-col items-center p-4 space-y-2 bg-blue-500 rounded-lg">
            <div className="flex flex-col items-center space-y-2">
              <div className="overflow-hidden h-96">
                <img src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/web_developing-dJoGejvV7nI9KNlO.gif" alt="Web Development" className="object-cover w-full h-full rounded-lg" />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-white">Web Development</h2>
                <p className="text-base text-white">Gain hands-on experience in building responsive and dynamic websites using modern frameworks like React, Angular, or Vue.js. Learn about front-end technologies, back-end development, and database integration to create full-stack web applications.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 space-y-2 bg-green-500 rounded-lg">
            <div className="flex flex-col items-center space-y-2">
              <img src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/mob-dev-AGBrMO8XElc08jln.gif" alt="Mobile App Development" className="object-cover rounded-lg h-500 w-500" />
              <h2 className="text-2xl font-semibold text-white">Mobile App Development</h2>
              <p className="text-base text-white">Learn to create innovative mobile applications for Android devices using Java or Kotlin. Explore Android Studio, app architecture, UI design principles, and integration with device features like GPS and camera.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 space-y-2 bg-yellow-500 rounded-lg">
            <div className="flex flex-col items-center space-y-2">
              <img src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/web_developing-dJoGejvV7nI9KNlO.gif" alt="UI/UX Design" className="object-cover w-64 h-64 rounded-lg" />
              <h2 className="text-2xl font-semibold text-white">UI/UX Design</h2>
              <p className="text-base text-white">Create intuitive and visually appealing user interfaces and experiences. Master design tools like Sketch or Figma, learn about user research, wireframing, prototyping, and usability testing to create engaging digital products.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 space-y-2 bg-red-500 rounded-lg">
            <div className="flex flex-col items-center space-y-2">
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=227,h=168,fit=crop/Aq20eV79zLfpXV6b/java_projects_for_beginners-AGBrMZgjljfZV2EE.jpg" alt="Cloud Solutions" className="object-cover w-64 h-64 rounded-lg" />
              <h2 className="text-2xl font-semibold text-white">Cloud Solutions</h2>
              <p className="text-base text-white">Learn about cloud platforms like AWS, Azure, or Google Cloud. Gain experience in deploying, managing, and scaling applications in the cloud. Explore concepts like serverless computing, containerization, and cloud security.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;