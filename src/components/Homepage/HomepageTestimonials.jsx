"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "@mui/icons-material"

export default function HomepageTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      text: "LegalPro helped us with our GST registration and compliance. Professional and knowledgeable team.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Property Investor",
      text: "Excellent service for rental agreement drafting. They explained everything clearly.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Contractor",
      text: "Won a major tender with their help! Outstanding expertise in tender applications.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
          {/* Rating */}
          <div className="flex items-center justify-center mb-6">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400" />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl text-gray-800 text-center mb-8">
            "{testimonials[currentTestimonial].text}"
          </blockquote>

          {/* Client Info */}
          <div className="text-center mb-8">
            <h4 className="text-lg font-medium text-gray-900">{testimonials[currentTestimonial].name}</h4>
            <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <button onClick={prevTestimonial} className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full ${index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"}`}
                />
              ))}
            </div>

            <button onClick={nextTestimonial} className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
