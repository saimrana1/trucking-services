import React, { useState, useEffect, useRef } from "react";
import {
  Truck,
  Clock,
  Shield,
  Car,
  AlertTriangle,
  Cog,
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";
import TruckingFooter from "../components/Footer";

const ModernTowingServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: Truck,
      title: "The Best Towing Service",
      description:
        "If you are looking for best, lowest rate and professional car towing service, towing service, towing a tow truck, car towing service near me.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: [
        "Professional Equipment",
        "Lowest Rates",
        "Expert Technicians",
      ],
      delay: "0ms",
    },
    {
      icon: Clock,
      title: "24 Hours of Towing Service",
      description:
        "We have Car Towing Vehicles are ready to serve you 24 hours 7 days a week.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: ["24/7 Availability", "Quick Response", "Always Ready"],
      delay: "200ms",
    },
    {
      icon: Shield,
      title: "Reliable Towing Service",
      description:
        "We offer fast and reliable response to emergency rehabilitation in Satha Dammam.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      features: ["Fast Response", "Emergency Service", "Reliable Team"],
      delay: "400ms",
    },
    {
      icon: Car,
      title: "Vehicle Towing Service",
      description:
        "We can tow or transport any vehicle, we have the necessary equipment and expertise to pull all types of cars and motorcycles, 4×4 cars, trucks and buses and pickup towing a tow truck.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: [
        "All Vehicle Types",
        "Professional Equipment",
        "Expert Service",
      ],
      delay: "600ms",
    },
    {
      icon: AlertTriangle,
      title: "Accidental Towing Service",
      description:
        "God saves everyone from the accident. But if you have some incidents of roads you want to move the vehicle, bus or pick-up truck, you will also quickly to your vehicle moves to your favorite destination.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      features: ["Emergency Response", "Accident Recovery", "Safe Transport"],
      delay: "800ms",
    },
    {
      icon: Cog,
      title: "Machinery Transportation",
      description:
        "With a massive fleet of towing a tow trucks ranging from 1 tonne to 2.5 tonnes, heavy haulage towing a tow trucks, spread decks and mega lifts we can transport anything up to 2.5 tonnes. Please contact us: 0507300655",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      features: ["Heavy Machinery", "Up to 2.5 Tonnes", "Specialized Fleet"],
      delay: "1000ms",
    },
  ];

  return (
    <>
      <div
        ref={sectionRef}
        className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-15 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200 rounded-full opacity-10 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Star className="w-5 h-5 mr-2" />
              Premium Services
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive towing and transportation solutions available 24/7.
              Professional, reliable, and trusted by thousands of customers
              across Saudi Arabia.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-2 ${
                    service.borderColor
                  } transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isVisible ? service.delay : "0ms",
                    animationFillMode: "both",
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute top-6 right-8 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600 transform transition-all duration-300"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}
                          ></div>
                          <span className="group-hover:text-gray-800 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <a
                        href="tel:0507300655"
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group-hover:animate-pulse`}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-500">
                          24/7
                        </div>
                        <div className="text-xs text-gray-500">Available</div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div
            className={`mt-20 transform transition-all duration-1000 delay-1200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -skew-x-12 animate-pulse"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-orange-400 mr-3 animate-bounce" />
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Need Emergency Towing?
                  </h3>
                </div>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our professional team is ready to assist you 24/7. Fast
                  response, reliable service, and competitive rates guaranteed.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:0507300655"
                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                    Call: 0507300655
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>

                  <a
                    href="tel:0556602997"
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Alt: 0556602997
                  </a>
                </div>

                <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    24/7 Service
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Licensed & Insured
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    5-Star Rated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `}</style>
      </div>
      <TruckingFooter />
    </>
  );
};

export default ModernTowingServices;
