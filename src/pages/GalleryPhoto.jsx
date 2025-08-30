import React, { useState } from "react";
import { ArrowRight, Play, Eye, ArrowLeft, X } from "lucide-react";
import truck1 from "../../src/assets/truck1.png";
import truck2 from "../../src/assets/truck2.png";
import truck3 from "../../src/assets/truck3.png";
import truck4 from "../../src/assets/truck4.png";

// Mock Footer Component (replace with your actual import)
const TruckingFooter = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <h3 className="text-2xl font-bold text-red-500 mb-4">
            TowPro Services
          </h3>
          <p className="text-gray-300 mb-4">
            Professional towing and transportation services available 24/7. Your
            trusted partner for all vehicle transportation needs.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              📞
            </div>
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              ✉️
            </div>
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              📍
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Emergency Towing</li>
            <li>Car Transport</li>
            <li>Heavy Duty Towing</li>
            <li>Roadside Assistance</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="text-gray-300 space-y-2">
            <p>📞 (555) 123-4567</p>
            <p>✉️ info@towpro.com</p>
            <p>📍 123 Main St, City</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 TowPro Services. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Gallery = ({ showFooter = true }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery images with placeholder URLs (replace with your actual images)
  const galleryImages = [
    {
      id: 1,
      src: truck1,
      alt: "Professional Towing Service",
      title: "Heavy Duty Transport",
      description:
        "Professional heavy-duty vehicle transportation with specialized equipment",
      category: "Heavy Duty",
    },
    {
      id: 2,
      src: truck2,
      alt: "Car Transport on Flatbed",
      title: "Secure Car Transport",
      description:
        "Safe and secure vehicle transportation services with GPS tracking",
      category: "Car Transport",
    },
    {
      id: 3,
      src: truck3,
      alt: "Emergency Towing Service",
      title: "Emergency Response",
      description: "24/7 emergency towing and roadside assistance nationwide",
      category: "Emergency",
    },
    {
      id: 4,
      src: truck4,
      alt: "Premium Vehicle Transport",
      title: "Premium Vehicle Transport",
      description: "Specialized transport for luxury and exotic vehicles",
      category: "Luxury",
    },
    {
      id: 5,
      src: truck4,
      alt: "Professional Fleet",
      title: "Professional Fleet",
      description: "State-of-the-art equipment and certified operators",
      category: "Fleet",
    },
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentSlide(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % galleryImages.length;
    setCurrentSlide(next);
    setSelectedImage(galleryImages[next]);
  };

  const prevSlide = () => {
    const prev =
      (currentSlide - 1 + galleryImages.length) % galleryImages.length;
    setCurrentSlide(prev);
    setSelectedImage(galleryImages[prev]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyPress);
      return () => document.removeEventListener("keydown", handleKeyPress);
    }
  }, [selectedImage, currentSlide]);

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-red-500/3 to-orange-500/3 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-lg"></div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Photo
                </span>{" "}
                <span className="text-gray-800">Gallery</span>
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Explore our professional fleet and witness our expert towing
              services in action. Every image tells a story of reliability and
              excellence.
            </p>
          </div>

          {/* Professional Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 mb-16">
            {/* Hero Featured Image */}
            <div className="sm:col-span-2 lg:col-span-6 lg:row-span-2 group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-700 hover:scale-[1.02] shadow-xl hover:shadow-2xl bg-white">
              <div className="relative h-80 sm:h-96 lg:h-full min-h-[500px]">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Professional Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Subtle Brand Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10 opacity-60"></div>

                {/* Hover Enhancement */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-orange-600/0 group-hover:from-red-600/15 group-hover:to-orange-600/15 transition-all duration-700"></div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Featured Service
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                    {galleryImages[0].title}
                  </h3>
                  <p className="text-gray-200 text-lg mb-6 opacity-90 leading-relaxed">
                    {galleryImages[0].description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                      {galleryImages[0].category}
                    </span>
                  </div>
                </div>

                {/* Enhanced View Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(galleryImages[0], 0);
                  }}
                  className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-4 rounded-2xl text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-400 hover:bg-white/30 border border-white/30 shadow-lg hover:shadow-xl"
                >
                  <Eye size={24} className="drop-shadow-sm" />
                </button>

                {/* Enhanced Play Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(galleryImages[0], 0);
                    }}
                    className="bg-white/25 backdrop-blur-md p-8 rounded-full text-white hover:bg-white/35 transition-all duration-400 group-hover:scale-110 border-2 border-white/40 shadow-2xl hover:shadow-red-500/25"
                  >
                    <Play size={40} fill="white" className="ml-1" />
                  </button>
                </div>

                {/* Professional Number Badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-4 py-2 rounded-2xl text-lg font-black shadow-lg border border-red-400/50">
                  01
                </div>
              </div>
            </div>

            {/* Grid Images - Perfect Alignment */}
            {galleryImages.slice(1).map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-700 hover:scale-105 shadow-lg hover:shadow-xl bg-white ${
                  index < 2 ? "lg:col-span-3" : "lg:col-span-6"
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    index < 2 ? "h-60" : "h-80"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Professional Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>

                  {/* Hover Enhancement */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-transparent to-orange-600/0 group-hover:from-red-600/20 group-hover:to-orange-600/20 transition-all duration-600"></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-2">
                      <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/30">
                        {image.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 leading-tight">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                      {image.description}
                    </p>
                  </div>

                  {/* Working View Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(image, index + 1);
                    }}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-xl text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-400 hover:bg-white/30 border border-white/30 shadow-lg hover:shadow-xl z-20"
                  >
                    <Eye size={20} className="drop-shadow-sm" />
                  </button>

                  {/* Professional Number Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-xl text-sm font-bold shadow-md border border-red-400/50">
                    {String(index + 2).padStart(2, "0")}
                  </div>

                  {/* Corner Accent Design */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-b-[60px] border-l-transparent border-b-red-500/15 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[40px] border-t-[40px] border-r-transparent border-t-orange-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Call-to-Action Button */}
          <div className="text-center">
            <button
              onClick={() => {
                console.log("Navigate to complete gallery");
                // Add your navigation logic here
              }}
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-red-500 via-red-600 to-orange-600 hover:from-red-600 hover:via-red-700 hover:to-orange-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-400 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 border border-red-400/50 overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

              {/* Button Content */}
              <span className="relative z-10 font-black tracking-wide">
                View Complete Gallery
              </span>
              <ArrowRight
                size={24}
                className="relative z-10 group-hover:translate-x-2 transition-transform duration-400"
              />

              {/* Shine Animation Effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-full group-hover:translate-x-full"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-all duration-300 z-20 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30 group-hover:scale-110 shadow-lg">
                <X size={24} className="drop-shadow-sm" />
              </div>
            </button>

            {/* Enhanced Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-2xl text-white hover:bg-white/30 transition-all duration-300 z-20 border border-white/30 hover:scale-110 shadow-lg"
            >
              <ArrowLeft size={28} className="drop-shadow-sm" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-2xl text-white hover:bg-white/30 transition-all duration-300 z-20 border border-white/30 hover:scale-110 shadow-lg"
            >
              <ArrowRight size={28} className="drop-shadow-sm" />
            </button>

            {/* Enhanced Image Container */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[70vh] object-contain"
                />

                {/* Professional Image Frame */}
                <div className="absolute inset-4 border-2 border-white/20 rounded-2xl pointer-events-none"></div>
              </div>

              {/* Enhanced Image Information Panel */}
              <div className="p-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-t border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        {selectedImage.category}
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-gray-300 via-gray-200 to-transparent"></div>
                    </div>
                    <h3 className="text-3xl font-black text-gray-800 mb-4 leading-tight">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {selectedImage.description}
                    </p>
                  </div>
                  <div className="text-right ml-8">
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-3 rounded-2xl border border-gray-200 shadow-sm">
                      <span className="text-sm font-bold text-gray-700 block">
                        Image
                      </span>
                      <span className="text-lg font-black text-red-500">
                        {currentSlide + 1} / {galleryImages.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(index);
                    setSelectedImage(galleryImages[index]);
                  }}
                  className={`transition-all duration-400 rounded-full border-2 shadow-lg hover:shadow-xl ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-red-500 to-orange-500 w-12 h-4 border-red-400 shadow-red-500/50"
                      : "bg-white/60 hover:bg-white/80 w-4 h-4 border-white/50 hover:scale-125"
                  }`}
                />
              ))}
            </div>

            {/* Image Title in Modal */}
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <h4 className="text-white text-xl font-bold drop-shadow-lg">
                {selectedImage.title}
              </h4>
            </div>
          </div>

          {/* Enhanced Modal Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      )}

      {/* Footer Component */}
      {showFooter && <TruckingFooter />}
    </>
  );
};

export default Gallery;
