"use client"

import Link from "next/link"
import WhatsAppButton from "@/components/Shared/WhatsAppButton"

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Legal Services",
      links: [
        { name: "GST Filing", href: "/services#gst-filing" },
        { name: "Tender Applications", href: "/services#tender-applications" },
        { name: "Court Hearings", href: "/services#court-hearings" },
        { name: "Rental Agreements", href: "/services#rental-agreements" },
        { name: "Legal Consultation", href: "/services" },
        { name: "Document Review", href: "/services" },
      ],
    },
    {
      title: "Legal Areas",
      links: [
        { name: "Corporate Law", href: "/services" },
        { name: "Civil Litigation", href: "/services" },
        { name: "Property Law", href: "/services" },
        { name: "Tax Law", href: "/services" },
        { name: "Contract Law", href: "/services" },
        { name: "Business Law", href: "/services" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Our Team", href: "/about#team" },
        { name: "Our Mission", href: "/about#mission" },
        { name: "Careers", href: "/careers" },
        { name: "Testimonials", href: "/#testimonials" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "FAQ", href: "/#faq" },
        { name: "Blog", href: "/blog" },
        { name: "Legal Resources", href: "/resources" },
        { name: "Case Studies", href: "/case-studies" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Disclaimer", href: "/terms#disclaimer" },
        { name: "Sitemap", href: "/sitemap" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Sitemap</h1>
          <p className="mt-4 text-lg text-gray-600">A complete overview of all pages on our website</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Contact Information</h2>
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Office Address</h3>
                <p className="text-gray-700">
                  123 Legal Street
                  <br />
                  Ranchi, Jharkhand
                  <br />
                  India - 834001
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Contact Details</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-800">
                    +91 98765 43210
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@legalpro.com" className="text-blue-600 hover:text-blue-800">
                    info@legalpro.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Hours:</strong> Mon-Fri: 9AM-6PM, Sat: 10AM-2PM
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => window.enquireModal.showModal()}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Enquire Now
              </button>
              <button
                onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  )
}
