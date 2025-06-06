"use client"

import { useState, useEffect } from "react"
import { X, User, Mail, Phone, Briefcase, MessageSquare, Send } from "lucide-react"

export default function EnquireModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    // Make the modal available globally
    if (typeof window !== "undefined") {
      window.enquireModal = {
        showModal: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-8">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-auto">
        {/* Compact Header */}
        <div className="bg-blue-600 rounded-t-lg px-4 py-3 flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">Quick Enquiry</h3>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-blue-200 transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-3">
            {/* Name Field */}
            <div>
              <div className="relative">
                <User className="absolute left-2 top-2 h-3 w-3 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-7 pr-2 py-2.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Full Name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <div className="relative">
                <Mail className="absolute left-2 top-2 h-3 w-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-7 pr-2 py-2.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email Address"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <div className="relative">
                <Phone className="absolute left-2 top-2 h-3 w-3 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-7 pr-2 py-2.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Service Field */}
            <div>
              <div className="relative">
                <Briefcase className="absolute left-2 top-2 h-3 w-3 text-gray-400" />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full pl-7 pr-6 py-2.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
                >
                  <option value="">Select Service</option>
                  <option value="GST Filing">GST Filing</option>
                  <option value="Tender Applications">Tender Applications</option>
                  <option value="Court Hearings">Court Hearings</option>
                  <option value="Rental Agreements">Rental Agreements</option>
                  <option value="Other">Other</option>
                </select>
                <svg
                  className="absolute right-2 top-2 h-3 w-3 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <div className="relative">
                <MessageSquare className="absolute left-2 top-2 h-3 w-3 text-gray-400" />
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-7 pr-2 py-2.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Your Message"
                />
              </div>
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mt-3 p-2 bg-green-50 border border-green-200 text-green-800 rounded text-xs">
              Enquiry submitted successfully!
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-3 p-2 bg-red-50 border border-red-200 text-red-800 rounded text-xs">
              Error submitting enquiry. Please try again.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-3 flex items-center justify-center space-x-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 transition-colors"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-3 w-3" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="h-3 w-3" />
                <span>Submit</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
