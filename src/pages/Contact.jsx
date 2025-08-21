import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Truck,
  MessageCircle,
} from "lucide-react";
import TruckingFooter from "../components/Footer";

export default function ContactPage({ showFooter = true }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(
        "شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.\nThank you for contacting us! We will respond as soon as possible."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Truck className="h-12 w-12 text-blue-200" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                تواصل معنا
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                نحن هنا لخدمتك على مدار الساعة. تواصل معنا للحصول على أفضل خدمات
                النقل في المملكة العربية السعودية
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  اتصل بنا مباشرة
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                    <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">
                        خدمة العملاء
                      </p>
                      <p className="text-blue-600 font-medium">
                        +966 50 123 4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-green-50 rounded-xl">
                    <MessageCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">واتساب</p>
                      <p className="text-green-600 font-medium">
                        +966 55 987 6543
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Information */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  معلومات المكتب
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">العنوان</p>
                      <p className="text-gray-600">
                        شارع الملك فهد، الرياض
                        <br />
                        المملكة العربية السعودية
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">
                        البريد الإلكتروني
                      </p>
                      <p className="text-blue-600">info@truckingsa.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">ساعات العمل</p>
                      <p className="text-gray-600">
                        الأحد - الخميس: 8:00 - 18:00
                        <br />
                        الجمعة - السبت: 9:00 - 15:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Phone className="h-6 w-6 mr-3" />
                  خدمة الطوارئ
                </h3>
                <p className="mb-3">متاح 24/7 لحالات الطوارئ</p>
                <p className="text-2xl font-bold">+966 50 999 8888</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">
                    أرسل لنا رسالة
                  </h2>
                  <p className="text-gray-600">
                    املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        رقم الهاتف *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+966 5X XXX XXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        نوع الخدمة
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">اختر نوع الخدمة</option>
                        <option value="local">نقل محلي</option>
                        <option value="national">نقل وطني</option>
                        <option value="international">نقل دولي</option>
                        <option value="heavy">نقل ثقيل</option>
                        <option value="specialized">نقل مختص</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      تفاصيل الرسالة *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="اكتب تفاصيل طلبك أو استفسارك هنا..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        جاري الإرسال...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-5 w-5 ml-2" />
                        إرسال الرسالة
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                موقعنا
              </h3>
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.025837904662!2d39.16527901533403!3d21.54333398571215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d9a72a3f8e1d%3A0x2d47c6e7f2a7c2b4!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1692510444454!5m2!1sen!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showFooter && <TruckingFooter />}{" "}
    </>
  );
}
