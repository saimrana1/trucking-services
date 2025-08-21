import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Clock,
  MapPin,
  Truck,
  Shield,
  Star,
} from "lucide-react";
import ModernSathaTowingAbout from "./About";
import ModernTowingServices from "./Service";
import ModernGallerySection from "./Gallary";
import ExpertTeamSection from "./Team";
import image6 from "../../src/assets/image6.png";
import image2 from "../../src/assets/image2.png";
import image1 from "../../src/assets/image1.png";
import ContactPage from "./Contact";
import TruckingFooter from "../components/Footer";

const TowingHeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const slides = [
    {
      id: 1,
      image: image6,
      title: "Professional Towing Services",
      subtitle: "24/7 Emergency Roadside Assistance",
      description:
        "Fast, reliable, and professional towing services across the city. We're here when you need us most.",
    },
    {
      id: 2,
      image: image2,
      title: "Expert Car Recovery",
      subtitle: "Safe & Secure Vehicle Transportation",
      description:
        "Our experienced team handles your vehicle with care, ensuring safe transport to your destination.",
    },
    {
      id: 3,
      image: image1,
      title: "Emergency Response Team",
      subtitle: "Quick Response Time Guaranteed",
      description:
        "Available 24/7 for all your emergency towing needs. Professional service you can trust.",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <div className="relative h-screen overflow-hidden bg-gray-900 ">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="text-white space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl text-orange-400 font-semibold">
                    {slides[currentSlide].subtitle}
                  </h2>
                  <p className="text-lg text-gray-300 max-w-xl">
                    {slides[currentSlide].description}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:0507300655"
                    className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: 0507300655
                  </a>
                  <a
                    href="tel:0556602997"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Alt: 0556602997
                  </a>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">24/7 Service</p>
                      <p className="text-xs text-gray-400">Always Available</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Fast Response</p>
                      <p className="text-xs text-gray-400">Quick Arrival</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Licensed</p>
                      <p className="text-xs text-gray-400">Fully Insured</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Service Card */}
              <div className="lg:justify-self-end">
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl max-w-md">
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full">
                      <Truck className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        سطحة الدمام
                      </h3>
                      <p className="text-orange-400 font-semibold">
                        Dammam Towing Service
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-white">
                        <MapPin className="w-5 h-5 text-orange-400 mr-3" />
                        <span>Dammam, Saudi Arabia</span>
                      </div>
                      <div className="flex items-center text-white">
                        <Star className="w-5 h-5 text-orange-400 mr-3" />
                        <span>5.0 Rating • Trusted Service</span>
                      </div>
                    </div>

                    <div className="pt-4 space-y-3">
                      <a
                        href="tel:0507300655"
                        className="block w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300"
                      >
                        0507300655
                      </a>
                      <a
                        href="tel:0556602997"
                        className="block w-full py-3 px-6 bg-transparent border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
                      >
                        0556602997
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-orange-500 w-8"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 z-20">
          <div
            className="h-full bg-orange-500 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
      <ModernSathaTowingAbout />
      <ModernTowingServices />
      <ModernGallerySection />
      <ExpertTeamSection />
      <ContactPage />
      <TruckingFooter />
    </>
  );
};

export default TowingHeroCarousel;
