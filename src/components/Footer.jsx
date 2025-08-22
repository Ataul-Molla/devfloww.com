import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";
import image from ".././assets/footer-map.jpeg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12 px-5 md:px-0">
          <div className="lg:col-span-2">
            <div className="h-40 max-w-[400px] relative flex items-center justify-center mb-6">
              <img
                src={image}
                alt="Footer Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="text-[22px] font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <span>
                  <Mail />
                </span>
                <span>info@devfloww.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <MapPin />
                </span>
                <span>Kalna, Barddaman, WB, 713409</span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <Phone />
                </span>
                <span>+91 9332866855</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-sm">
                  <Facebook />
                </span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-sm">
                  <Twitter />
                </span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-sm">
                  <Instagram />
                </span>
              </div>
              <div className="w-10 h-10 p-3 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-sm ">
                  <Linkedin />
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Values
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Application Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  AI & ML Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  UI & UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  IT Consultation Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Website Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Design & Creative Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Digital Marketing & SEO
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Projects</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Project Showcase
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Diverse Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  What Clients Say
                </a>
              </li>
            </ul>
            <div className="space-y-2 mt-6">
              <h3 className="text-xl font-bold">Testimonials</h3>
              <h3 className="text-xl font-bold">Contact Us</h3>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-between items-center">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl lg:text-3xl font-bold text-white hover:text-cyan-400 transition-all duration-300 transform hover:scale-105"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                dev
              </span>
              <span className="text-white">floww</span>
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 devfloww.com All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
