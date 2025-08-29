import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import TruckingFooter from "../components/Footer";
import Layout from "../layout";

const ModernSathaTowingAbout = ({ showFooter = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
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

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock availability for all your towing needs",
      color: "bg-blue-500",
    },
    {
      icon: Zap,
      title: "Quick Response Time",
      description: "Fast arrival and efficient service guaranteed",
      color: "bg-orange-500",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed professionals you can trust",
      color: "bg-green-500",
    },
  ];

  const stats = [
    { number: "5000+", label: "Vehicles Towed" },
    { number: "24/7", label: "Service Hours" },
    { number: "15min", label: "Avg Response" },
    { number: "100%", label: "Customer Satisfaction" },
  ];

  return (
    <>
      <div
        ref={sectionRef}
        className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden "
        id="about"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
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
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4 mr-2" />
              Premium Towing Service
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to{" "}
              <span className="text-orange-500">Satha Towing Service</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Main Description */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We have been providing{" "}
                  <span className="font-semibold text-orange-600">
                    "Satha Car Towing Service near me"
                  </span>{" "}
                  for a long time in Dammam. Whether you face an emergency
                  vehicle malfunction or need towing services, we're here to
                  help.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Simply give us a call, and we can tow your vehicle or assist
                  with any roadside issue, even beyond the typical range. We
                  offer reliable, up-to-date services, available 24/7 to ensure
                  you're always covered.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    You can count on exceptional towing service from us. We'll
                    thoroughly assess your situation and respond quickly.
                    There's no need to endure any more delays—once you contact
                    our hydraulic car towing service, we'll be on our way to
                    your location.
                  </p>
                </div>

                <div className="bg-gray-900 text-white p-6 rounded-2xl">
                  <p className="text-lg leading-relaxed mb-4">
                    Whenever you are in need of vehicle, car towing service,
                    just call:
                  </p>
                  <a
                    href="tel:0507962866"
                    className="inline-flex items-center text-2xl font-bold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    0507962866
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-orange-200 mt-2">
                    We would come running to you right away.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        activeFeature === index
                          ? "border-orange-400 bg-orange-50 shadow-lg"
                          : "border-gray-200 bg-white hover:border-orange-200"
                      }`}
                      onMouseEnter={() => setActiveFeature(index)}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center mb-3`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0507962866"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Call Now: 0507962866
                </a>
                <a
                  href="tel:0507962866"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 font-semibold rounded-xl hover:border-orange-400 hover:text-orange-600 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Alt: 0507962866
                </a>
              </div>
            </div>

            {/* Right Content - Image and Stats */}
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {/* Towing Illustration */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
                  <div className="relative">
                    {/* Towing truck illustration placeholder */}
                    <div className="w-full h-64 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 animate-pulse"></div>
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                          <Users className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          Professional Team
                        </h3>
                        <p className="text-blue-100">
                          Expert towing service professionals
                        </p>
                      </div>
                    </div>

                    {/* Floating badges */}
                    <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="text-3xl font-bold text-orange-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl text-center">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 mr-2" />
                  <span className="text-xl font-bold">Trusted & Licensed</span>
                </div>
                <p className="text-blue-100">
                  Fully insured and certified towing professionals serving
                  Dammam and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12">
            <path
              d="M0,60 C300,120 600,0 900,60 C1050,90 1125,90 1200,60 L1200,120 L0,120 Z"
              fill="url(#wave-gradient)"
            />
            <defs>
              <linearGradient
                id="wave-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {showFooter && <TruckingFooter />}{" "}
    </>
  );
};

export default ModernSathaTowingAbout;
