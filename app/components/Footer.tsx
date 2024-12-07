// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-blue-500 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2">
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-blue-500 font-bold">
                H
              </div>
              <span className="text-lg font-bold uppercase">Healthcare</span>
            </div>
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore aliqua. Ut enim ad
              minim veniam quis nostrud exercitation ullamco.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Portfolio</a></li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">Google+</a></li>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-300">WhatsApp</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Find Us</h3>
            <ul className="space-y-2">
              <li>
                <span className="block">143 Gordon Terrace Embarrassing</span>
                <span>NG33 0ZT United Kingdom</span>
              </li>
              <li>
                <a href="mailto:info@healthcare.com" className="hover:text-gray-300">
                  info@healthcare.com
                </a>
              </li>
              <li>
                <a href="tel:+18003263264" className="hover:text-gray-300">
                  +1800 326 3264
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="bg-blue-600 mt-10 py-4">
          <p className="text-center text-sm">
            &copy; Copyright 2022, All Rights Reserved, HEALTHCARE
          </p>
        </div>
      </footer>
    );
  }
  