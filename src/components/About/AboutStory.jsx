"use client"

import { useState } from "react"
import {
  Timeline,
  Business,
  EmojiEvents,
  TrendingUp,
  People,
  Verified,
  Star,
  KeyboardArrowRight,
} from "@mui/icons-material"

export default function AboutStory() {
  const [activeTab, setActiveTab] = useState("history")

  const timeline = [
    {
      year: "2009",
      title: "Foundation",
      description: "LegalPro was founded with a vision to provide accessible and high-quality legal services.",
      icon: <Business className="h-6 w-6" />,
      color: "bg-blue-600",
    },
    {
      year: "2012",
      title: "First Major Milestone",
      description: "Reached 100 successful cases and expanded our team to 10 legal professionals.",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-green-600",
    },
    {
      year: "2015",
      title: "Recognition & Awards",
      description: "Received 'Best Legal Services Provider' award from the State Bar Council.",
      icon: <EmojiEvents className="h-6 w-6" />,
      color: "bg-yellow-500",
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Launched online consultation services and digital case management system.",
      icon: <Timeline className="h-6 w-6" />,
      color: "bg-purple-600",
    },
    {
      year: "2021",
      title: "Expansion",
      description: "Opened new offices in 3 major cities and grew our team to 50+ professionals.",
      icon: <People className="h-6 w-6" />,
      color: "bg-indigo-600",
    },
    {
      year: "2024",
      title: "Excellence Continues",
      description: "Serving 2000+ clients with 98% success rate and industry-leading satisfaction.",
      icon: <Star className="h-6 w-6" />,
      color: "bg-orange-600",
    },
  ]

  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our professional dealings.",
      icon: <Verified className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every case, ensuring the best possible outcomes.",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      color: "bg-yellow-50",
    },
    {
      title: "Client Focus",
      description: "Our clients' needs and objectives are at the center of everything we do.",
      icon: <People className="h-8 w-8 text-green-600" />,
      color: "bg-green-50",
    },
    {
      title: "Innovation",
      description: "We embrace technology and innovative approaches to deliver better legal services.",
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      color: "bg-purple-50",
    },
  ]

  const tabs = [
    { id: "history", label: "Our History", icon: <Timeline className="h-5 w-5" /> },
    { id: "mission", label: "Mission & Vision", icon: <EmojiEvents className="h-5 w-5" /> },
    { id: "values", label: "Our Values", icon: <Star className="h-5 w-5" /> },
  ]

  return (
    <section id="our-story" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a leading legal services provider, discover the journey that shaped
            LegalPro into the trusted partner we are today.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {tab.icon}
                <span className="ml-2 hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {/* History Tab */}
          {activeTab === "history" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">15 Years of Excellence</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our journey from a small legal practice to a comprehensive legal services provider
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform sm:-translate-x-0.5"></div>

                <div className="space-y-8 sm:space-y-12">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div
                        className={`absolute left-4 sm:left-1/2 w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white transform sm:-translate-x-1/2 z-10`}
                      >
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div
                        className={`ml-16 sm:ml-0 sm:w-1/2 ${
                          index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
                        } transition-all duration-500 hover:transform hover:scale-105`}
                      >
                        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="flex items-center mb-3">
                            <span className="text-2xl font-bold text-blue-600 mr-3">{item.year}</span>
                            <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mission & Vision Tab */}
          {activeTab === "mission" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <EmojiEvents className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To provide accessible, affordable, and high-quality legal services to individuals and businesses,
                  ensuring their rights are protected and their legal needs are met with integrity and professionalism.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <KeyboardArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Deliver exceptional legal outcomes</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <KeyboardArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Maintain highest ethical standards</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <KeyboardArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Foster long-term client relationships</span>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To be the most trusted and respected legal services provider in India, known for our expertise,
                  innovation, and unwavering commitment to justice and client satisfaction.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <KeyboardArrowRight className="h-5 w-5 text-green-600 mr-2" />
                    <span>Lead through innovation and technology</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <KeyboardArrowRight className="h-5 w-5 text-green-600 mr-2" />
                    <span>Expand access to quality legal services</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <KeyboardArrowRight className="h-5 w-5 text-green-600 mr-2" />
                    <span>Set industry standards for excellence</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Values Tab */}
          {activeTab === "values" && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  The principles that guide our actions and define our character as a legal services provider
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                  >
                    <div
                      className={`w-16 h-16 ${value.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                    >
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
