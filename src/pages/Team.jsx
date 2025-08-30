import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Star,
  Award,
  MapPin,
  Clock,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react";
import TruckingFooter from "../components/Footer";
import driver1 from "../../src/assets/driver1.png";
import driver2 from "../../src/assets/driver2.png";
import driver3 from "../../src/assets/driver3.png";
import driver4 from "../../src/assets/driver4.png";

const ExpertTeamSection = ({ showFooter = true }) => {
  const [animatedCards, setAnimatedCards] = useState([]);

  // Team members data with placeholder avatars
  const teamMembers = [
    {
      id: 1,
      name: "جبران  افضل",
      position: "Lead Towing Specialist",
      experience: "8+ Years Experience",
      phone: "0507962866",
      email: "ijaz@towingservice.com",
      specialties: [
        "Heavy Duty Towing",
        "Emergency Response",
        "Fleet Management",
      ],
      avatar: driver1,
      rating: 4.9,
      completedJobs: 1200,
      certifications: ["ASE Certified", "DOT Certified"],
      bgColor: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      name: "شبیر احمد",
      position: "Senior Transport Operator",
      experience: "6+ Years Experience",
      phone: "0507962866",
      email: "naeem@towingservice.com",
      specialties: [
        "Car Transport",
        "Roadside Assistance",
        "Equipment Operation",
      ],
      avatar: driver2,
      rating: 4.8,
      completedJobs: 950,
      certifications: ["CDL Licensed", "Safety Certified"],
      bgColor: "from-red-500 to-pink-600",
    },
    {
      id: 3,
      name: "نعیم صدیقی",
      position: "Emergency Response Expert",
      experience: "5+ Years Experience",
      phone: "0507962866",
      email: "ahmed@towingservice.com",
      specialties: ["24/7 Emergency", "Accident Recovery", "Quick Response"],
      avatar: driver3,
      rating: 4.9,
      completedJobs: 800,
      certifications: ["Emergency Response", "First Aid Certified"],
      bgColor: "from-green-500 to-teal-600",
    },
    {
      id: 4,
      name: "بشارت دیو",
      position: "Fleet Coordinator",
      experience: "7+ Years Experience",
      phone: "0507962866",
      email: "hassan@towingservice.com",
      specialties: ["Fleet Management", "Route Planning", "Customer Service"],
      avatar: driver4,
      rating: 4.7,
      completedJobs: 1100,
      certifications: ["Fleet Management", "Logistics Certified"],
      bgColor: "from-yellow-500 to-orange-600",
    },
  ];

  // Animation effect on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedCards(teamMembers.map((member) => member.id));
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden pt-30 sm:pt-0">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-bounce"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-red-500 animate-bounce">Our</span>{" "}
                <span className="text-gray-800">Expert Team</span>
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet our highly skilled and certified professionals who are
              dedicated to providing you with the best towing and transport
              services 24/7
            </p>
          </div>

          {/* Animated Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Users,
                label: "Expert Team Members",
                value: "10+",
                color: "text-blue-500",
                delay: "0ms",
              },
              {
                icon: Star,
                label: "Average Rating",
                value: "4.9",
                color: "text-yellow-500",
                delay: "100ms",
              },
              {
                icon: Clock,
                label: "Years of Experience",
                value: "15+",
                color: "text-green-500",
                delay: "200ms",
              },
              {
                icon: Shield,
                label: "Certified Professionals",
                value: "100%",
                color: "text-red-500",
                delay: "300ms",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg transform transition-all duration-700 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="relative">
                  <stat.icon
                    className={`w-8 h-8 ${stat.color} mx-auto mb-3 animate-bounce`}
                  />
                  <div className="absolute inset-0 bg-current opacity-20 rounded-full animate-ping"></div>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1 animate-count-up">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`group relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  animatedCards.includes(member.id)
                    ? "animate-fade-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-200 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                <div className="relative z-10">
                  {/* Avatar with Creative Design */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 mx-auto relative">
                      {/* Animated Ring */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${member.bgColor} rounded-full animate-spin-slow opacity-20`}
                      ></div>
                      <div className="absolute inset-2 bg-white rounded-full"></div>

                      {/* Avatar Image */}
                      <div className="absolute inset-3 rounded-full overflow-hidden">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full transform group-hover:rotate-6 transition-transform duration-500"
                        />
                      </div>

                      {/* Online Status with Animation */}
                      <div className="absolute bottom-1 right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                        <CheckCircle className="absolute w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Floating Badge with Animation */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold transform rotate-12 animate-bounce shadow-lg">
                      ⭐ Pro
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-red-500 font-semibold text-sm mb-2">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm">{member.experience}</p>
                  </div>

                  {/* Animated Rating */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(member.rating)
                              ? "text-yellow-400 fill-current animate-twinkle"
                              : "text-gray-300"
                          }`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 animate-pulse">
                      {member.rating}
                    </span>
                  </div>

                  {/* Jobs Counter with Animation */}
                  <div className="text-center mb-6 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                    <div className="text-2xl font-bold text-gray-800 animate-count-up">
                      {member.completedJobs}+
                    </div>
                    <div className="text-xs text-gray-600">Jobs Completed</div>
                  </div>

                  {/* Specialties with Animated Tags */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 px-3 py-1 rounded-full border border-blue-200 transform transition-all duration-300 hover:scale-105 animate-fade-in"
                          style={{ animationDelay: `${specIndex * 100}ms` }}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Certifications:
                    </h4>
                    <div className="space-y-2">
                      {member.certifications.map((cert, certIndex) => (
                        <div
                          key={certIndex}
                          className="flex items-center justify-center gap-2 animate-fade-in"
                          style={{ animationDelay: `${certIndex * 150}ms` }}
                        >
                          <Award
                            size={14}
                            className="text-yellow-500 animate-bounce"
                          />
                          <span className="text-xs text-gray-600">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons with Enhanced Animation */}
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/0507962866?text=Hello%2C%20I%27m%20contacting%20you%20regarding%20towing%20services"
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-110 hover:rotate-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl animate-pulse"
                    >
                      <Phone size={16} className="animate-bounce" />
                      {member.phone}
                    </a>

                    <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                      <Mail size={16} className="animate-pulse" />
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float-delayed"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 animate-bounce">
                  🚨 Need Emergency Towing Service?
                </h3>
                <p className="text-red-100 mb-6 max-w-2xl mx-auto animate-fade-in">
                  Our expert team is available 24/7 to assist you with all your
                  towing and transport needs. Professional, reliable, and fast
                  response guaranteed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/0507962866?text=Hello%2C%20I%27m%20contacting%20you%20regarding%20towing%20services"
                    className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:rotate-2 shadow-xl animate-pulse"
                  >
                    📞 Call Now: 0507962866
                  </a>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-110 hover:-rotate-2 shadow-lg">
                    Get Free Quote ✨
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

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

          @keyframes twinkle {
            0%,
            100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.2);
            }
          }

          @keyframes count-up {
            from {
              transform: scale(0.8);
            }
            to {
              transform: scale(1);
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(20px);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out;
          }
          .animate-twinkle {
            animation: twinkle 2s ease-in-out infinite;
          }
          .animate-count-up {
            animation: count-up 0.8s ease-out;
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 6s ease-in-out infinite 3s;
          }
        `}</style>
      </section>
      {showFooter && <TruckingFooter />}{" "}
    </>
  );
};

export default ExpertTeamSection;
