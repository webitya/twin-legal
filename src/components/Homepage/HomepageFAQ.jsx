"use client"

import { useState } from "react"
import { ExpandMore, ExpandLess } from "@mui/icons-material"

export default function HomepageFAQ() {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      question: "What types of legal services do you provide?",
      answer:
        "We provide comprehensive legal services including GST filing, tender applications, court hearings, rental agreements, and more.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing is transparent and competitive. We provide a free initial consultation with detailed quotes and no hidden charges.",
    },
    {
      question: "How long does it take to resolve a case?",
      answer:
        "Timeline varies by case complexity. Simple documentation takes 24-48 hours, while court cases may take several months.",
    },
    {
      question: "Do you provide services across India?",
      answer:
        "Yes, we provide legal services across India with our network of associate lawyers and online consultation services.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                {openFAQ === index ? (
                  <ExpandLess className="h-5 w-5 text-gray-500" />
                ) : (
                  <ExpandMore className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
