"use client"

import Link from "next/link"
import { CheckCircle, Star, People, EmojiEvents, PlayArrow, ArrowForward } from "@mui/icons-material"
import { useState, useEffect } from "react"

export default function HomepageHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentText, setCurrentText] = useState(0)

  const dynamicTexts = [
    "Professional Legal Services",
    "Expert Legal Consultation",
    "Trusted Legal Solutions",
    "Comprehensive Legal Support",
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-1/2 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-bounce opacity-60"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-indigo-500 rounded-full animate-bounce opacity-60"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-2 h-2 bg-purple-500 rounded-full animate-bounce opacity-60"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            {/* Trust Badges */}
            {/* <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white border-opacity-20">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm font-semibold text-gray-700">4.9/5 Rating</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white border-opacity-20">
                <People className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-gray-700">500+ Clients</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white border-opacity-20">
                <EmojiEvents className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm font-semibold text-gray-700">15+ Years</span>
              </div>
            </div> */}

            {/* Dynamic Heading */}
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {dynamicTexts[currentText]}
                </span>
                <span className="block text-gray-800 text-4xl lg:text-5xl mt-2">You Can Trust</span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Expert legal assistance for individuals and businesses in Ranchi, Jharkhand. Comprehensive solutions with
              guaranteed results and dedicated support.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-10">
              {[
                "Free initial consultation",
                "Transparent pricing with no hidden costs",
                "Expert team with 15+ years experience",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center transform transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  Our Services
                  <ArrowForward className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              <button
                onClick={() => window.enquireModal.showModal()}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white bg-opacity-90 backdrop-blur-sm border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:bg-opacity-100 transform hover:scale-105 transition-all duration-300"
              >
                <PlayArrow className="mr-2 h-5 w-5 text-blue-600 group-hover:text-blue-700" />
                Get Consultation
              </button>
            </div>

            {/* Quick Stats */}
            {/* <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { number: "1000+", label: "Cases Solved" },
                { number: "98%", label: "Success Rate" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Content - Enhanced Image Section */}
          <div
            className={`relative transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                  src="/placeholder.svg?height=500&width=600"
                  alt="Legal professionals in Ranchi"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              </div>

              {/* Floating Cards */}
              <div
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-pulse"
                style={{ animationDuration: "3s" }}
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-semibold text-gray-700">Available Now</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">4.9/5</div>
                    <div className="text-xs text-gray-600">Client Rating</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-8 left-1/2 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
