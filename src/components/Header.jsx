import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Facebook,
  MessageCircle,
  Instagram,
  Linkedin,
  Clock,
  Shield,
  Star,
  Truck,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../src/assets/Logo.png";

const ProfessionalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { id: "home", name: "HOME", href: "/" },
    { id: "about", name: "ABOUT", href: "/about" },
    { id: "services", name: "SERVICES", href: "/services" },
    { id: "gallery", name: "GALLERY", href: "/gallery-photo" },
    { id: "contact", name: "CONTACT", href: "/contact" },
  ];

  // Handle navigation click
  const handleNavClick = (sectionId, href) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full relative">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -skew-x-12 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            {/* Location & Services Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-3 h-3" />
                </div>
                <span className="text-gray-300">
                  Al Khidaryah, Dammam-32435, Saudi Arabia
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold">
                  24/7 Emergency Service
                </span>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                {/* Phone Number 1: Call and WhatsApp */}
                <div className="flex items-center space-x-2 bg-orange-600 bg-opacity-20 px-3 py-1 rounded-full">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <a
                    href="tel:0507962866"
                    className="text-orange-400 font-bold hover:underline"
                  >
                    0507962866
                  </a>
                  <a
                    href="https://wa.me/0507962866?text=Hello%2C%20I%27m%20contacting%20you%20regarding%20towing%20services"
                    className="text-green-400 font-bold hover:underline"
                  >
                    <MessageCircle className="w-4 h-4 inline-block" />
                  </a>
                </div>
                {/* Phone Number 2: Call and WhatsApp */}
                <div className="flex items-center space-x-2 bg-blue-600 bg-opacity-20 px-3 py-1 rounded-full">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a
                    href="tel:0507962866"
                    className="text-blue-400 font-bold hover:underline"
                  >
                    0507962866
                  </a>
                  <a
                    href="https://wa.me/0507962866?text=Hello%2C%20I%27m%20contacting%20you%20regarding%20towing%20services"
                    className="text-green-400 font-bold hover:underline"
                  >
                    <MessageCircle className="w-4 h-4 inline-block" />
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.facebook.com/share/1C9vU6394x/"
                  className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/0507962866?text=Hello%2C%20I%27m%20contacting%20you%20regarding%20towing%20services"
                  className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white bg-opacity-95 backdrop-blur-lg shadow-2xl border-b border-orange-200"
            : "bg-white shadow-lg border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center group">
              <div className="relative">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                />

                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  SATHA TOWING
                </div>
                <div className="text-xs text-gray-600 font-medium mb-2">
                  مؤسسة طرق المتحدة للخدمات
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;

                  return (
                    <Link
                      key={item.id}
                      to={item.href}
                      className={`relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 group ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform -translate-y-1"
                          : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                      }`}
                    >
                      {item.name}
                      <div
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-transform duration-300 ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Service Areas & Emergency Call */}
            <div className="hidden xl:flex items-center space-x-4 ml-2">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl px-6 py-3 shadow-lg">
                <div className="text-[11px] leading-tight text-orange-800 font-bold mb-0 ">
                  <span className="flex items-center space-x-1">
                    <Shield className="w-3 h-3" />
                    <span>Service Areas:</span>
                    <span className="text-orange-600">(داخلي و خارجي)</span>
                    <Star className="w-3 h-3 text-yellow-500" />
                  </span>
                </div>

                <div className="text-[11px] leading-tight text-gray-700 font-medium">
                  القريات • طريف • عرعر • خرابطين • جليل • ربعجانة
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href="https://wa.me/0507962866?text=Hello%2C%20I%27m%20contacting%20you%20regarding%20towing%20services"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative">
                  {isMenuOpen ? (
                    <X className="w-5 h-5 transform rotate-0 transition-transform duration-300" />
                  ) : (
                    <Menu className="w-5 h-5 transform rotate-0 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-gradient-to-b from-white to-gray-50 border-t border-orange-200 shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:translate-x-2 ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile Emergency Buttons */}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <a
                    href="tel:+966507300655"
                    className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 0507962866
                  </a>
                  <a
                    href="https://wa.me/0507962866?text=Hello%2C%20I%27m%20contacting%20you%20regarding%20towing%20services"
                    className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href="tel:+966556602997"
                    className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Alt: 0507962866
                  </a>
                  <a
                    href="https://wa.me/0507962866?text=Hello%2C%20I%27m%20contacting%20you%20regarding%20towing%20services"
                    className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Mobile Service Areas */}
              <div className="mt-4 p-4 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-200 rounded-2xl">
                <div className="text-xs text-orange-800 font-bold mb-2 flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  Service Areas:{" "}
                  <span className="text-orange-600 ml-1">(داخلي و خارجي)</span>
                </div>
                <div className="text-xs text-gray-700 font-medium">
                  القريات • طريف • عرعر • خرابطين • جليل • ربعجانة
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ProfessionalHeader;
