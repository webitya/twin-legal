import Link from "next/link"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import SecurityIcon from "@mui/icons-material/Security"
import StarIcon from "@mui/icons-material/Star"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

export default function HomeHero() {
  return (
    <section className="bg-blue-600 text-white py-12 lg:py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
              <span className="text-yellow-400 font-semibold text-sm">Trusted by 500+ Clients</span>
              <CheckCircleIcon className="h-4 w-4 text-green-400" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Professional <span className="text-yellow-400">Financial</span> &{" "}
              <span className="text-red-300">Legal</span> Consulting
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-blue-100 mb-6 max-w-2xl mx-auto lg:mx-0">
              Expert solutions for accounting, taxation, GST compliance, and legal services. Trust KUMAR Fin. Consultant
              for guaranteed results and professional excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Link
                href="/services"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95"
              >
                🚀 Explore Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30 active:scale-95"
              >
                📞 Get Consultation
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-blue-100">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="font-medium text-sm">24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="font-medium text-sm">Quick Response</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="font-medium text-sm">Expert Team</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="font-medium text-sm">100% Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Feature Cards - Compact Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg bg-blue-500 mx-auto mb-3">
                <AccountBalanceIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-sm font-bold mb-2">Expert Accounting</h3>
              <p className="text-blue-100 text-xs leading-relaxed">Professional accounting with 100% accuracy</p>
            </div>

            <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg bg-red-500 mx-auto mb-3">
                <TrendingUpIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-sm font-bold mb-2">Tax Planning</h3>
              <p className="text-blue-100 text-xs leading-relaxed">Strategic tax solutions to maximize savings</p>
            </div>

            <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 col-span-2">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg bg-purple-500 mx-auto mb-3">
                <SecurityIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-sm font-bold mb-2">Legal Compliance</h3>
              <p className="text-blue-100 text-xs leading-relaxed">
                Complete legal and regulatory compliance support with guaranteed results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
