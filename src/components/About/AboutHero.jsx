"use client"

import { useState, useEffect } from "react"
import { Star, People, EmojiEvents, Verified, Schedule, LocationOn, Phone, Email, PlayArrow } from "@mui/icons-material"

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "15+", label: "Years Experience", icon: <Schedule className="h-6 w-6 text-blue-600" /> },
    { number: "2000+", label: "Happy Clients", icon: <People className="h-6 w-6 text-green-600" /> },
    { number: "98%", label: "Success Rate", icon: <EmojiEvents className="h-6 w-6 text-yellow-500" /> },
    { number: "50+", label: "Legal Experts", icon: <Verified className="h-6 w-6 text-purple-600" /> },
  ]

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%232563eb' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm border border-gray-200">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm font-medium text-gray-700">4.9/5 Rated</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm border border-gray-200">
                <Verified className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm font-medium text-gray-700">Bar Council Certified</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm border border-gray-200">
                <EmojiEvents className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-sm font-medium text-gray-700">Award Winning</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About{" "}
              <span className="text-blue-600 relative">
                LegalPro
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full transform scale-x-0 animate-pulse"></div>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              With over 15 years of unwavering commitment to justice, LegalPro has been the trusted legal partner for
              individuals and businesses across India. Our team of expert legal professionals is dedicated to delivering
              exceptional results with integrity and professionalism.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Expert Legal Team</h3>
                  <p className="text-gray-600 text-sm">
                    50+ qualified lawyers with specialized expertise across various legal domains
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Client-Centric Approach</h3>
                  <p className="text-gray-600 text-sm">
                    Personalized legal solutions tailored to meet your specific needs and objectives
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Proven Track Record</h3>
                  <p className="text-gray-600 text-sm">
                    98% success rate with over 2000 satisfied clients and counting
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.enquireModal.showModal()}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Free Consultation
              </button>
              <button
                onClick={() => document.getElementById("our-story").scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200"
              >
                <PlayArrow className="h-5 w-5 mr-2" />
                Our Story
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2 text-blue-600" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Email className="h-4 w-4 mr-2 text-blue-600" />
                  <span>info@legalpro.com</span>
                </div>
                <div className="flex items-center text-gray-600 sm:col-span-2">
                  <LocationOn className="h-4 w-4 mr-2 text-blue-600" />
                  <span>123 Legal Street, Law City, Karnataka, India - 560001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image and Stats */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="LegalPro Office"
                  className="w-full h-96 sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 right-6">
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 bg-gray-50 rounded-lg">{stat.icon}</div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-60"></div>
              <div className="absolute top-10 -left-2 w-12 h-12 bg-green-100 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
