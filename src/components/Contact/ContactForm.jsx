"use client"
import { useState } from "react"
import SendIcon from "@mui/icons-material/Send"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import BusinessIcon from "@mui/icons-material/Business"
import MessageIcon from "@mui/icons-material/Message"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your inquiry! We will get back to you within 30 minutes.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const services = ["Accounting & Taxation", "GST Services", "Legal Services", "Tender Services", "Other Services"]

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-gray-900">Send us a Message</h2>
        <p className="text-gray-600">Fill out the form below and we'll get back to you within 30 minutes</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
            <PersonIcon className="h-4 w-4 inline mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
            <EmailIcon className="h-4 w-4 inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
            placeholder="Enter your email address"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
            <PhoneIcon className="h-4 w-4 inline mr-2" />
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Service Field */}
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-3">
            <BusinessIcon className="h-4 w-4 inline mr-2" />
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
            <MessageIcon className="h-4 w-4 inline mr-2" />
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white resize-none"
            placeholder="Tell us about your requirements in detail..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-5 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 text-lg"
        >
          {isSubmitting ? (
            <>
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <SendIcon className="h-6 w-6" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>

      {/* Trust Indicators */}
      <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">30min</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-gray-600">Confidential</div>
          </div>
        </div>
      </div>
    </div>
  )
}
