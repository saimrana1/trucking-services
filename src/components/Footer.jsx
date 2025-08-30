import {
  Truck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Shield,
  Award,
  Users,
  ArrowUp,
} from "lucide-react";

export default function TruckingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Logo and Description */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-blue-600 p-3 rounded-xl mr-3">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">شركة النقل السعودية</h3>
              <p className="text-sm text-gray-400">Saudi Trucking Co.</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نحن شركة رائدة في مجال خدمات النقل والشحن في المملكة العربية
            السعودية، نقدم حلول نقل متكاملة وموثوقة منذ أكثر من 15 عاماً.
          </p>
        </div>

        {/* Main Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">خدماتنا</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  النقل المحلي
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  النقل الوطني
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  النقل الدولي
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  نقل البضائع الثقيلة
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  النقل المختص
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  خدمات التخزين
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  خدماتنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  المشاريع
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  الأخبار
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">
              معلومات التواصل
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 mr-2" />
                <p className="text-gray-400 text-sm">
                  شارع الملك فهد، الرياض
                  <br />
                  المملكة العربية السعودية
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-green-400 mr-2" />
                <div>
                  <a
                    href="https://wa.me/0507962866?text=Hello%2C%20I%27m%20contacting%20you%20regarding%20towing%20services"
                    className="text-white font-medium"
                  >
                    0507962866
                  </a>
                  <p className="text-gray-400 text-xs">خدمة العملاء</p>
                </div>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 text-green-400 mr-2" />
                <div>
                  <a
                    href="https://wa.me/0507962866?text=Hello%2C%20I%27m%20contacting%20you%20regarding%20towing%20services"
                    className="text-white font-medium"
                  >
                    0507962866
                  </a>
                  <p className="text-gray-400 text-xs">واتساب</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-2" />
                <p className="text-white font-medium">info@truckingsa.com</p>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                <p className="text-gray-400 text-sm">
                  الأحد - الخميس: 8:00 - 18:00
                  <br />
                  الجمعة - السبت: 9:00 - 15:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-bold mb-6 text-center text-white">
            شهاداتنا ومعايير الجودة
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center bg-gray-800 px-6 py-3 rounded-xl">
              <Shield className="h-6 w-6 text-blue-400 mr-3" />
              <span className="text-gray-300">ISO 9001:2015</span>
            </div>
            <div className="flex items-center bg-gray-800 px-6 py-3 rounded-xl">
              <Award className="h-6 w-6 text-green-400 mr-3" />
              <span className="text-gray-300">معتمد من وزارة النقل</span>
            </div>
            <div className="flex items-center bg-gray-800 px-6 py-3 rounded-xl">
              <Shield className="h-6 w-6 text-yellow-400 mr-3" />
              <span className="text-gray-300">HACCP معتمد</span>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h4 className="text-lg font-bold mb-4 text-white">
                تابعنا على وسائل التواصل
              </h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a
                  href="https://www.facebook.com/share/1C9vU6394x/"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-sky-500 hover:bg-sky-600 p-3 rounded-xl transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 hover:bg-pink-700 p-3 rounded-xl transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-blue-800 hover:bg-blue-900 p-3 rounded-xl transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="text-center lg:text-right">
              <p className="text-gray-400 mb-2">خدمة الطوارئ 24/7</p>
              <div className="flex items-center justify-center lg:justify-end">
                <Phone className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-xl font-bold text-red-400">
                  0507962866
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-right mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 شركة النقل السعودية. جميع الحقوق محفوظة.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Saudi Trucking Company - All Rights Reserved
              </p>
            </div>
            <div className="flex space-x-6 rtl:space-x-reverse text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                الشروط والأحكام
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                ملفات تعريف الارتباط
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
}
