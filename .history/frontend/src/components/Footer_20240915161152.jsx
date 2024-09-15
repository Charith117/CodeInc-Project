function Footer() {
    return (
      <footer className="py-10 text-white bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Useful Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300">Refund Policy</a></li>
                <li><a href="#" className="hover:text-blue-300">Terms and Conditions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Legal Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">Home</a></li>
                <li><a href="#" className="hover:text-blue-300">About Us</a></li>
                <li><a href="#" className="hover:text-blue-300">Services</a></li>
                <li><a href="#" className="hover:text-blue-300">Internships</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
              <p>Lokenath bose garden lane</p>
              <p>Kolkata, West Bengal</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-blue-300"><FaFacebook /></a>
                <a href="#" className="text-2xl hover:text-blue-300"><FaTwitter /></a>
                <a href="#" className="text-2xl hover:text-blue-300"><FaInstagram /></a>
                <a href="#" className="text-2xl hover:text-blue-300"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;