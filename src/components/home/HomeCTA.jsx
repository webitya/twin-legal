import Link from "next/link"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import EmailIcon from "@mui/icons-material/Email"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

export default function HomeCTA() {
  return (
    <section className="py-20 lg:py-28 bg-red-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg bg-white/20 backdrop-blur-sm mx-auto mb-8">
            <RocketLaunchIcon className="h-10 w-10 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Ready to <span className="text-yellow-400">Transform</span> Your Business?
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-red-100 mb-12">
            Contact us today for professional consultation and let us handle your financial and legal requirements with
            expertise, dedication, and guaranteed results. Join our family of 500+ satisfied clients!
          </p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-12 py-5 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl text-lg focus:outline-none focus:ring-4 focus:ring-white/30 active:scale-95"
            >
              🎯 Get Free Consultation
            </Link>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-200 active:scale-95"
              >
                <PhoneIcon className="h-6 w-6" />
                <span className="font-semibold">+91 98765 43210</span>
              </a>

              <a
                href="https://wa.me/919876543210"
                className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-200 active:scale-95"
              >
                <WhatsAppIcon className="h-6 w-6" />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <PhoneIcon className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Call Us</h4>
              <p className="text-red-100 text-sm">Available 24/7 for urgent queries</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <EmailIcon className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Email Us</h4>
              <p className="text-red-100 text-sm">Get detailed responses within 2 hours</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <AccessTimeIcon className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Quick Response</h4>
              <p className="text-red-100 text-sm">Guaranteed response within 30 minutes</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-red-100 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-red-100 font-medium">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-red-100 font-medium">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
