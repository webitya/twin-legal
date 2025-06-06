"use client"

import { useState, useEffect } from "react"
import { TrendingUp, People, CheckCircle, Schedule } from "@mui/icons-material"

export default function HomepageStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState([0, 0, 0, 0])

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied customers across Jharkhand",
      icon: <People className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      number: 1000,
      suffix: "+",
      label: "Cases Resolved",
      description: "Successfully handled legal matters",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      number: 98,
      suffix: "%",
      label: "Success Rate",
      description: "Winning track record",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-purple-500",
    },
    {
      number: 15,
      suffix: "+",
      label: "Years Experience",
      description: "Decades of legal expertise",
      icon: <Schedule className="h-6 w-6" />,
      color: "bg-orange-500",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          stats.forEach((stat, index) => {
            let start = 0
            const end = stat.number
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = end
                  return newCounters
                })
                clearInterval(timer)
              } else {
                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = Math.floor(start)
                  return newCounters
                })
              }
            }, 16)
          })
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="stats-section"
      className="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Track Record Speaks</h2>
          <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
            Numbers that demonstrate our commitment to excellence and client satisfaction in Ranchi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-8 h-full flex flex-col items-center">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} rounded-lg mb-6 text-white`}
                >
                  {stat.icon}
                </div>

                {/* Number - Intentionally left out to match the screenshot */}
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 opacity-0 h-0">
                  {counters[index]}
                  {stat.suffix}
                </div>

                {/* Description */}
                <div className="text-gray-600 text-sm leading-relaxed text-center mt-auto">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-600 mb-6">
              Let us help you achieve the legal outcomes you deserve with our proven expertise.
            </p>
            <button
              onClick={() => window.enquireModal.showModal()}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Case Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
