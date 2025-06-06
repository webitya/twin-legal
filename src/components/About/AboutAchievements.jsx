"use client"

import { EmojiEvents, Star, Verified, TrendingUp, People, Security, School, Business } from "@mui/icons-material"

export default function AboutAchievements() {
  const awards = [
    {
      title: "Best Legal Services Provider 2023",
      organization: "State Bar Council",
      year: "2023",
      icon: <EmojiEvents className="h-8 w-8 text-yellow-500" />,
      description: "Recognized for outstanding legal services and client satisfaction",
    },
    {
      title: "Excellence in Corporate Law",
      organization: "Indian Legal Awards",
      year: "2022",
      icon: <Star className="h-8 w-8 text-blue-600" />,
      description: "Awarded for exceptional expertise in corporate legal matters",
    },
    {
      title: "Client Choice Award",
      organization: "Legal Services Review",
      year: "2023",
      icon: <People className="h-8 w-8 text-green-600" />,
      description: "Voted by clients as the most trusted legal services provider",
    },
    {
      title: "Innovation in Legal Technology",
      organization: "LegalTech India",
      year: "2022",
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      description: "Recognized for implementing cutting-edge legal technology solutions",
    },
  ]

  const certifications = [
    {
      title: "ISO 27001 Certified",
      description: "Information Security Management",
      icon: <Security className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Bar Council Registered",
      description: "All lawyers are registered with respective Bar Councils",
      icon: <Verified className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Continuing Legal Education",
      description: "Regular training and skill development programs",
      icon: <School className="h-6 w-6 text-purple-600" />,
    },
    {
      title: "Business Excellence",
      description: "Certified for business process excellence",
      icon: <Business className="h-6 w-6 text-orange-600" />,
    },
  ]

  const stats = [
    { number: "2000+", label: "Satisfied Clients", color: "text-blue-600" },
    { number: "98%", label: "Success Rate", color: "text-green-600" },
    { number: "15+", label: "Years Experience", color: "text-purple-600" },
    { number: "50+", label: "Legal Experts", color: "text-orange-600" },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and satisfied clients across India
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">{award.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900">{award.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{award.organization}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Our Impact in Numbers</h3>
            <p className="text-blue-100 text-lg">Measurable results that speak for our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Certifications & Compliance</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of professional excellence and regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition-all duration-200 hover:transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {cert.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Ready to Experience Excellence?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have trusted us with their legal needs. Get started with a free
              consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.enquireModal.showModal()}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => window.open("tel:+919876543210")}
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Call: +91 98765 43210
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
