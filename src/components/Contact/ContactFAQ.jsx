"use client"

import { useState } from "react"
import { ExpandMore, ExpandLess, HelpOutline, Phone, Email, Schedule } from "@mui/icons-material"

export default function ContactFAQ() {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      category: "General Inquiries",
      questions: [
        {
          question: "How quickly can I expect a response to my inquiry?",
          answer:
            "We respond to all inquiries within 2 hours during business hours (9 AM - 6 PM, Monday to Friday). For urgent matters, we offer 24/7 emergency support. WhatsApp messages typically receive responses within 30 minutes.",
        },
        {
          question: "Do you offer free consultations?",
          answer:
            "Yes, we provide a complimentary 30-minute initial consultation for all new clients. This allows us to understand your legal needs and provide preliminary advice on your case.",
        },
        {
          question: "What information should I prepare before contacting you?",
          answer:
            "Please prepare relevant documents, a brief description of your legal matter, any important dates or deadlines, and your preferred contact method. This helps us provide more accurate and efficient assistance.",
        },
      ],
    },
    {
      category: "Services & Pricing",
      questions: [
        {
          question: "What types of legal services do you provide?",
          answer:
            "We offer comprehensive legal services including GST filing, tender applications, court hearings, rental agreements, property law, corporate law, family law, criminal defense, and intellectual property matters.",
        },
        {
          question: "How do you structure your fees?",
          answer:
            "Our fee structure varies by service type. We offer transparent pricing with no hidden charges. Simple documentation services have fixed fees, while complex litigation matters are billed hourly. We provide detailed cost estimates during the initial consultation.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes, we understand that legal services can be a significant investment. We offer flexible payment plans for larger cases and can discuss payment options during your consultation.",
        },
      ],
    },
    {
      category: "Appointments & Meetings",
      questions: [
        {
          question: "How can I schedule an appointment?",
          answer:
            "You can schedule an appointment by calling us, filling out our contact form, sending a WhatsApp message, or visiting our office directly. We also offer video consultations for your convenience.",
        },
        {
          question: "Do you offer virtual consultations?",
          answer:
            "Yes, we provide secure video consultations via various platforms. This is especially convenient for initial consultations, follow-up meetings, and clients who cannot visit our office in person.",
        },
        {
          question: "What if I need to cancel or reschedule my appointment?",
          answer:
            "Please provide at least 24 hours notice for cancellations or rescheduling. You can contact us via phone, email, or WhatsApp to make changes to your appointment.",
        },
      ],
    },
    {
      category: "Emergency & Urgent Matters",
      questions: [
        {
          question: "Do you handle emergency legal matters?",
          answer:
            "Yes, we provide 24/7 emergency legal support for urgent matters such as arrests, court deadlines, and time-sensitive legal issues. Call our emergency hotline for immediate assistance.",
        },
        {
          question: "What constitutes a legal emergency?",
          answer:
            "Legal emergencies include arrests, court deadlines within 24-48 hours, restraining orders, emergency injunctions, and situations requiring immediate legal intervention to prevent harm or loss.",
        },
      ],
    },
  ]

  const contactOptions = [
    {
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+91 98765 43210",
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      action: () => window.open("tel:+919876543210"),
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Email Us",
      description: "Send us your questions",
      value: "info@legalpro.com",
      icon: <Email className="h-6 w-6 text-green-600" />,
      action: () => window.open("mailto:info@legalpro.com"),
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Schedule Meeting",
      description: "Book a consultation",
      value: "Book Now",
      icon: <Schedule className="h-6 w-6 text-purple-600" />,
      action: () => window.enquireModal.showModal(),
      color: "bg-purple-50 border-purple-200",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpOutline className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Find quick answers to common questions about our legal services, consultation process, and how to get
            started with LegalPro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* FAQ Content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <div className="space-y-3">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 10 + faqIndex // Create unique index
                      return (
                        <div key={faqIndex} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                          <button
                            onClick={() => setOpenFAQ(openFAQ === globalIndex ? -1 : globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                          >
                            <h4 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h4>
                            {openFAQ === globalIndex ? (
                              <ExpandLess className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ExpandMore className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            )}
                          </button>
                          {openFAQ === globalIndex && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Still Have Questions */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Can't find the answer you're looking for? Our legal experts are here to help you with personalized
                assistance.
              </p>
              <div className="space-y-3">
                {contactOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={option.action}
                    className={`w-full ${option.color} border rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:transform hover:-translate-y-0.5`}
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-white rounded-lg mr-3">{option.icon}</div>
                      <div className="text-left">
                        <h4 className="font-medium text-gray-900">{option.title}</h4>
                        <p className="text-sm text-gray-600">{option.description}</p>
                        <p className="text-sm font-medium text-gray-900">{option.value}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Emergency Legal Support</h3>
              <p className="text-red-700 text-sm mb-4">
                For urgent legal matters requiring immediate attention, our emergency hotline is available 24/7.
              </p>
              <button
                onClick={() => window.open("tel:+919876543210")}
                className="w-full bg-red-600 text-white rounded-lg py-3 px-4 font-medium hover:bg-red-700 transition-colors duration-200"
              >
                <Phone className="h-5 w-5 inline mr-2" />
                Emergency Hotline
              </button>
            </div>

            {/* Business Hours */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-900">Emergency Only</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency Support</span>
                    <span className="font-medium text-green-600">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Times */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Expected Response Times</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Email/Contact Form</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                    Less than 2 hours
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Phone Call</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Immediate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">WhatsApp</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                    Less than 30 mins
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Emergency</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full font-medium">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
