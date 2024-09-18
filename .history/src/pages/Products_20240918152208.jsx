function Products() {
    return (
      <div className="container mx-auto mt-8">
        <h1 className="mb-4 text-4xl font-bold">Our Products</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="max-w-sm m-4 overflow-hidden bg-white rounded shadow-lg">
            <img className="object-cover w-full h-48" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Red_dot.svg" alt="IoT Development Project"/>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">IoT Development Project</div>
              <p className="text-base text-gray-700">
                Explore the Internet of Things (IoT) ecosystem. Acquire skills in programming embedded systems, integrating sensors and actuators, and designing connected devices.
              </p>
            </div>
          </div>
          <div className="max-w-sm m-4 overflow-hidden bg-white rounded shadow-lg">
            <img className="object-cover w-full h-48" src="https://cdn.pixabay.com/photo/2017/07/18/20/58/machine-learning-2513026_960_720.jpg" alt="Machine Learning Project"/>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">Machine Learning Project</div>
              <p className="text-base text-gray-700">
        <p>Here you can list and describe your products.</p>
      </div>
    );
  }
  
  export default Products;