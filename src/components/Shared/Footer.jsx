import Link from "next/link"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import XIcon from "@mui/icons-material/X"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-600 rounded-xl">
                <AccountBalanceIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">KUMAR Fin. Consultant</h3>
                <p className="text-gray-300">Pappu Kumar Consultant</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional financial and legal consulting services with expertise in accounting, taxation, GST, and
              compliance solutions for businesses and individuals. Your trusted partner for guaranteed results.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/kumarfinconsultant"
                className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 bg-blue-600 hover:bg-blue-700"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/kumarfinconsultant"
                className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 bg-purple-600 hover:bg-purple-700"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919876543210"
                className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 bg-green-600 hover:bg-green-700"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/kumarfinconsult"
                className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 bg-black hover:bg-gray-800"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-red-600 transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-red-600 transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-red-600 transition-colors"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-red-600 transition-colors"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <PhoneIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <EmailIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">info@kumarfin.com</span>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="p-2 bg-blue-600 rounded-lg mt-1">
                  <LocationOnIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Your Business Address, City, State
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} KUMAR Fin. Consultant. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
