"use client"

import { useState } from "react"
import {
  LinkedIn,
  Email,
  Phone,
  Star,
  EmojiEvents,
  School,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material"

export default function AboutTeam() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Managing Partner & Senior Advocate",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 20 years of experience in corporate law, Rajesh leads our team with expertise in GST compliance, business law, and commercial litigation. He has successfully handled over 500 complex cases.",
      education: "LLM from National Law School, Bangalore",
      experience: "20+ Years",
      specialization: ["Corporate Law", "GST Compliance", "Commercial Litigation"],
      achievements: ["Best Lawyer Award 2023", "500+ Successful Cases", "Bar Council Recognition"],
      email: "rajesh@legalpro.com",
      phone: "+91 98765 43210",
      linkedin: "https://linkedin.com/in/rajeshkumar",
      rating: 4.9,
      cases: 500,
    },
    {
      name: "Priya Sharma",
      role: "Senior Legal Advisor",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Priya specializes in contract law and property matters. She has handled over 800 rental agreement cases and property disputes throughout her 15-year career with an exceptional success rate.",
      education: "LLB from Delhi University, LLM in Property Law",
      experience: "15+ Years",
      specialization: ["Property Law", "Contract Law", "Rental Agreements"],
      achievements: ["Property Law Expert 2022", "800+ Cases Resolved", "Client Choice Award"],
      email: "priya@legalpro.com",
      phone: "+91 98765 43211",
      linkedin: "https://linkedin.com/in/priyasharma",
      rating: 4.8,
      cases: 800,
    },
    {
      name: "Amit Patel",
      role: "Court Representation Specialist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Amit has represented clients in over 300 court hearings with a success rate of 85% in civil litigation cases. His expertise in courtroom advocacy is unmatched in the region.",
      education: "LLB from Gujarat University, Diploma in Criminal Law",
      experience: "12+ Years",
      specialization: ["Civil Litigation", "Criminal Defense", "Court Advocacy"],
      achievements: ["85% Success Rate", "300+ Court Appearances", "Advocacy Excellence Award"],
      email: "amit@legalpro.com",
      phone: "+91 98765 43212",
      linkedin: "https://linkedin.com/in/amitpatel",
      rating: 4.7,
      cases: 300,
    },
    {
      name: "Neha Gupta",
      role: "Tender Application Expert",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Neha has helped businesses secure government contracts worth over ₹500 crores through expert tender application assistance. Her strategic approach has revolutionized our tender services.",
      education: "LLB from Mumbai University, MBA in Business Law",
      experience: "10+ Years",
      specialization: ["Tender Applications", "Government Contracts", "Business Compliance"],
      achievements: ["₹500 Cr+ Contracts Secured", "Tender Expert 2023", "Business Law Specialist"],
      email: "neha@legalpro.com",
      phone: "+91 98765 43213",
      linkedin: "https://linkedin.com/in/nehagupta",
      rating: 4.9,
      cases: 200,
    },
    {
      name: "Dr. Vikram Singh",
      role: "Intellectual Property Counsel",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Vikram specializes in intellectual property law with expertise in trademark, copyright, and patent matters. He has successfully registered over 1000 trademarks and copyrights.",
      education: "PhD in IP Law, LLM from IIT Delhi",
      experience: "18+ Years",
      specialization: ["Intellectual Property", "Trademark Law", "Patent Registration"],
      achievements: ["1000+ IP Registrations", "IP Law Pioneer", "Research Publications"],
      email: "vikram@legalpro.com",
      phone: "+91 98765 43214",
      linkedin: "https://linkedin.com/in/vikramsingh",
      rating: 4.8,
      cases: 1000,
    },
    {
      name: "Kavya Reddy",
      role: "Family Law Specialist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Kavya handles sensitive family matters with compassion and expertise. She has successfully resolved over 400 family disputes including divorce, custody, and domestic violence cases.",
      education: "LLM in Family Law from Hyderabad University",
      experience: "8+ Years",
      specialization: ["Family Law", "Divorce Proceedings", "Child Custody"],
      achievements: ["400+ Family Cases", "Compassionate Advocate Award", "Women's Rights Champion"],
      email: "kavya@legalpro.com",
      phone: "+91 98765 43215",
      linkedin: "https://linkedin.com/in/kavyareddy",
      rating: 4.9,
      cases: 400,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(team.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(team.length / 3)) % Math.ceil(team.length / 3))
  }

  const getVisibleTeamMembers = () => {
    const startIndex = currentSlide * 3
    return team.slice(startIndex, startIndex + 3)
  }

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced legal professionals are dedicated to providing you with the best legal services. Each team
            member brings unique expertise and a commitment to excellence.
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <KeyboardArrowLeft className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <KeyboardArrowRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {getVisibleTeamMembers().map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                {/* Member Image */}
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-sm">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-900">{member.rating}</span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">{member.experience}</div>
                      <div className="text-xs text-gray-600">Experience</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">{member.cases}+</div>
                      <div className="text-xs text-gray-600">Cases</div>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialization.map((spec, specIndex) => (
                        <span key={specIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <School className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{member.education}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Achievements:</h4>
                    <div className="space-y-1">
                      {member.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-xs text-gray-600">
                          <EmojiEvents className="h-3 w-3 mr-2 text-yellow-500" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex space-x-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                      >
                        <Email className="h-4 w-4 text-blue-600" />
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors duration-200"
                      >
                        <Phone className="h-4 w-4 text-green-600" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                      >
                        <LinkedIn className="h-4 w-4 text-white" />
                      </a>
                    </div>
                    <button
                      onClick={() => window.enquireModal.showModal()}
                      className="px-4 py-2 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Consult Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Next
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(team.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Team Excellence</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Legal Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Average Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Legal Specializations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
