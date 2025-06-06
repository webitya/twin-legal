"use client"

import { useState, useEffect } from "react"
import { Phone, Email, Schedule, WhatsApp, VideoCall, Star, Verified, AccessTime } from "@mui/icons-material"

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Call Us",
      description: "Speak directly with our legal experts",
      value: "+91 98765 43210",
      action: () => window.open("tel:+919876543210"),
      available: "24/7 Emergency Support",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <WhatsApp className="h-6 w-6 text-green-600" />,
      title: "WhatsApp",
      description: "Quick consultation via WhatsApp",
      value: "Chat Now",
      action: () => window.open("https://wa.me/919876543210", "_blank"),
      available: "Instant Response",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: <Email className="h-6 w-6 text-purple-600" />,
      title: "Email Us",
      description: "Send us your legal queries",
      value: "info@legalpro.com",
      action: () => window.open("mailto:info@legalpro.com"),
      available: "Response within 2 hours",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: <VideoCall className="h-6 w-6 text-orange-600" />,
      title: "Video Consultation",
      description: "Face-to-face online consultation",
      value: "Book Now",
      action: () => window.enquireModal.showModal(),
      available: "Available Mon-Sat",
      color: "bg-orange-50 border-orange-200",
    },
  ]

  const quickStats = [
    { number: "< 2 hrs", label: "Response Time", icon: <AccessTime className="h-5 w-5 text-blue-600" /> },
    { number: "24/7", label: "Emergency Support", icon: <Phone className="h-5 w-5 text-green-600" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="h-5 w-5 text-yellow-500" /> },
    { number: "15+", label: "Years Experience", icon: <Verified className="h-5 w-5 text-purple-600" /> },
  ]

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb' fillOpacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm border border-gray-200">
                <Verified className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm font-medium text-gray-700">Verified Lawyers</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm border border-gray-200">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm font-medium text-gray-700">4.9/5 Rated</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm border border-gray-200">
                <AccessTime className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-sm font-medium text-gray-700">Quick Response</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get in{" "}
              <span className="text-blue-600 relative">
                Touch
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full"></div>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to discuss your legal needs? Our expert team is here to help you navigate complex legal matters with
              confidence. Reach out to us through your preferred communication method.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Free Initial Consultation</h3>
                  <p className="text-gray-600 text-sm">30-minute complimentary consultation to understand your case</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Multiple Communication Channels</h3>
                  <p className="text-gray-600 text-sm">Choose from phone, email, WhatsApp, or video consultation</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Confidential & Secure</h3>
                  <p className="text-gray-600 text-sm">All communications are protected by attorney-client privilege</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-center mb-1">{stat.icon}</div>
                  <div className="text-lg font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-red-600 mr-2" />
                <h3 className="font-semibold text-red-900">Emergency Legal Support</h3>
              </div>
              <p className="text-red-700 text-sm mb-2">
                For urgent legal matters requiring immediate attention, call our emergency hotline.
              </p>
              <button
                onClick={() => window.open("tel:+919876543210")}
                className="text-red-600 font-medium text-sm hover:text-red-800 transition-colors duration-200"
              >
                Call Emergency Line: +91 98765 43210
              </button>
            </div>
          </div>

          {/* Right Content - Contact Methods */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`${method.color} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer`}
                  onClick={method.action}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">{method.icon}</div>
                    <div className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">{method.available}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <div className="text-gray-900 font-medium">{method.value}</div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Schedule className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-900">Emergency Only</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency Support</span>
                    <span className="font-medium text-green-600">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
