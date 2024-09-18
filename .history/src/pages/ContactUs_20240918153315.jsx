function ContactUs() {
    return (
      <div className="container px-4 mx-auto mt-8">
        <h2 className="mb-6 text-3xl font-bold text-center md:text-4xl">Get in Touch</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-center text-gray-700">Have questions about our services? We'd love to hear from you!</p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Your email*</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-bold text-gray-700">Message*</label>
            <textarea
              id="message"
              name="message"
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
    );
  }
  
  export default ContactUs;