"use client"

import { Description, Assignment, Gavel, Article, ArrowForward, TrendingUp } from "@mui/icons-material"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomepageServices() {
  const [hoveredService, setHoveredService] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("services-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "GST Filing",
      description:
        "Professional assistance with GST registration, filing returns, and compliance management for businesses.",
      icon: <Description className="h-8 w-8" />,
      link: "/services#gst-filing",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      stats: "200+ Filed",
      popular: true,
    },
    {
      title: "Tender Applications",
      description: "Expert guidance for preparing and submitting winning tender applications with high success rates.",
      icon: <Assignment className="h-8 w-8" />,
      link: "/services#tender-applications",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      stats: "150+ Won",
    },
    {
      title: "Court Hearings",
      description: "Professional representation and support for all types of court proceedings and legal disputes.",
      icon: <Gavel className="h-8 w-8" />,
      link: "/services#court-hearings",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      stats: "98% Success",
    },
    {
      title: "Rental Agreements",
      description:
        "Comprehensive rental agreement drafting, review, and registration services for landlords and tenants.",
      icon: <Article className="h-8 w-8" />,
      link: "/services#rental-agreements",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      stats: "500+ Drafted",
    },
  ]

  return (
    <section
      id="services-section"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Legal Services
            </span>
            <br />
            <span className="text-gray-800">We Provide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal solutions tailored to your needs in Ranchi, Jharkhand. From business compliance to
            personal legal matters, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <Link href={service.link} className="block h-full">
                <div
                  className={`relative h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden ${hoveredService === index ? "transform scale-105" : ""}`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </div>
                  )}

                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Icon Container */}
                  <div
                    className={`relative flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

                    {/* Stats */}
                    <div className="flex items-center justify-center mb-4">
                      <div
                        className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                      >
                        {service.stats}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      <span className="mr-2">Learn More</span>
                      <ArrowForward
                        className={`h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300`}
                      />
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Legal Solution?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We provide customized legal services tailored to your specific
              requirements.
            </p>
            <button
              onClick={() => window.enquireModal.showModal()}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Discuss Your Case</span>
              <ArrowForward className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
