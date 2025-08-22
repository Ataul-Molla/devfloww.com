import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  User,
  Briefcase,
  FolderOpen,
  MessageCircle,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Our Services", href: "/services", icon: Briefcase },
    { name: "Projects", href: "/projects", icon: FolderOpen },
    { name: "Testimonials", href: "/testimonials", icon: MessageCircle },
    { name: "Contact Us", href: "/contact", icon: Mail },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-cyan-500/10"
            : "bg-black/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 pl-5 md:pl-0">
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex  flex-1 justify-center">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative px-4 py-2 text-[17px] font- text-gray-300 hover:text-white transition-all duration-300 rounded-lg  hover:backdrop-blur-sm"
                    >
                      <div className="flex items-center space-x-2">
                        {/* <IconComponent
                          size={16}
                          className="transition-all duration-300 group-hover:text-cyan-400"
                        /> */}
                        <span>{item.name}</span>
                      </div>

                      {/* Hover underline effect */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-sm"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Button (Desktop) */}
            {/* <div className="hidden lg:block">
              <button className="relative px-6 py-2 text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Get Started
                <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div> */}

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-6 space-y-1 bg-black/95 backdrop-blur-md border-t border-gray-800">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`group flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                    isOpen ? "animate-fade-in-up" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <IconComponent
                    size={18}
                    className="mr-3 transition-colors duration-300 group-hover:text-cyan-400"
                  />
                  {item.name}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronDown
                      size={16}
                      className="rotate-[-90deg] text-cyan-400"
                    />
                  </div>
                </a>
              );
            })}

            {/* Mobile CTA Button */}
            <div className="px-4 pt-4">
              <button className="w-full px-6 py-3 text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[60px] md:h-[80px] w-full bg-black/95" />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
