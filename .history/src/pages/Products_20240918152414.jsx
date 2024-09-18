function Products() {
    return (
      <div className="container mx-auto mt-8">
        <h1 className="mb-4 text-4xl font-bold">Our Products</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="max-w-sm m-4 overflow-hidden bg-white rounded shadow-lg">
            <img className="object-cover w-full h-48" src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/iot-gif-1.gif" alt="IoT Development Project"/>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">IoT Development Project</div>
              <p className="text-base text-gray-700">
                Explore the Internet of Things (IoT) ecosystem. Acquire skills in programming embedded systems, integrating sensors and actuators, and designing connected devices.
              </p>
            </div>
          </div>
          <div className="max-w-sm m-4 overflow-hidden bg-white rounded shadow-lg">
            <img className="object-cover w-full h-48" src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/machine-learning-gif.gif" alt="Machine Learning Project"/>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">Machine Learning Project</div>
              <p className="text-base text-gray-700">
                Explore algorithms that enable computers to learn from and make predictions on data. Dive into neural networks, deep learning, and natural language processing.
              </p>
            </div>
          </div>
          <div className="max-w-sm m-4 overflow-hidden bg-white rounded shadow-lg">
            <img className="object-cover w-full h-48" src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/ui-ux-design-gif.gif" alt="UI/UX Design Project"/>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">UI/UX Design Project</div>
              <p className="text-base text-gray-700">
                Create intuitive and visually appealing user interfaces and experiences. Master design tools like Sketch or Figma, learn about user research, wireframing, prototyping, and usability testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Products;