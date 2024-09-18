function Services() {
    return (
      <div className="container mx-auto mt-8">
        <h1 className="mb-4 text-4xl font-bold">Our Services</h1>
        <p className="mb-4">In addition to our internship programs, we offer a range of services to help you achieve your technology goals.</p>
        <ul className="list-disc list-inside">
          <li><a href="/web-development">Web Development</a></li>
          <li><a href="/mobile-app-development">Mobile App Development</a></li>
          <li><a href="/ui-ux-design">UI/UX Design</a></li>
          <li><a href="/cloud-solutions">Cloud Solutions</a></li>
        </ul>
      </div>
    );
  }
  
  export default Services;