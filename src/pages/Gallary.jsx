import React, { useState } from "react";
import { ArrowRight, Play, Eye, ArrowLeft } from "lucide-react";
import image11 from "../../src/assets/image11.png";
import image2 from "../../src/assets/image2.png";
import image3 from "../../src/assets/image3.png";
import image5 from "../../src/assets/image5.png";
import TruckingFooter from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ModernGallerySection = ({ showFooter = true }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  // Your actual images - replace these URLs with your images
  const galleryImages = [
    {
      id: 1,
      src: image11,
      alt: "Professional Towing Service",
      title: "Heavy Duty Transport",
      description: "Professional heavy-duty vehicle transportation",
    },
    {
      id: 2,
      src: image2,
      alt: "Car Transport on Flatbed",
      title: "Secure Car Transport",
      description: "Safe and secure vehicle transportation services",
    },
    {
      id: 3,
      src: image3,
      alt: "Emergency Towing Service",
      title: "Emergency Response",
      description: "24/7 emergency towing and roadside assistance",
    },
    {
      id: 4,
      src: image5,
      alt: "Luxury Car Transport",
      title: "Luxury Vehicle Care",
      description: "Specialized transport for luxury and sports cars",
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

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden pt-30 sm:pt-0">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-red-500">Photo</span>{" "}
                <span className="text-gray-800">Gallery</span>
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our professional fleet and see our expert towing services
              in action
            </p>
          </div>

          {/* Modern Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "h-96 md:h-full" : "h-64"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-500"></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {image.description}
                    </p>
                  </div>

                  {/* View Button */}
                  <button
                    onClick={() => openModal(image, index)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-white/30"
                  >
                    <Eye size={20} />
                  </button>

                  {/* Play Icon for Main Image */}
                  {index === 0 && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <button
                        onClick={() => openModal(image, index)}
                        className="bg-white/20 backdrop-blur-sm p-6 rounded-full text-white hover:bg-white/30 transition-all duration-300 group-hover:scale-110"
                      >
                        <Play size={32} fill="white" />
                      </button>
                    </div>
                  )}

                  {/* Image Number Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Gallery Button */}
          <div className="text-center">
            <button
              onClick={() => navigate("/gallery")}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View Complete Gallery
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                  ×
                </div>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/30 transition-all duration-300 z-10"
              >
                <ArrowLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/30 transition-all duration-300 z-10"
              >
                <ArrowRight size={24} />
              </button>

              {/* Image Container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full max-h-[70vh] object-contain bg-gray-100"
                  />
                </div>

                {/* Image Info */}
                <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {selectedImage.title}
                      </h3>
                      <p className="text-gray-600">
                        {selectedImage.description}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      {currentSlide + 1} / {galleryImages.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Counter Dots */}
              <div className="flex justify-center mt-6 gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setSelectedImage(galleryImages[index]);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-red-500 w-8"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
      {showFooter && <TruckingFooter />}{" "}
    </>
  );
};

export default ModernGallerySection;
