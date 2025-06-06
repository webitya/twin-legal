"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
  Send,
  CheckCircle,
  Error,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  WhatsApp,
  Security,
  Verified,
  Star,
} from "@mui/icons-material"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [newsletterStatus, setNewsletterStatus] = useState(null) // null, 'loading', 'success', 'error'

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setNewsletterStatus("loading")

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes("@")) {
        setNewsletterStatus("success")
        setEmail("")
      } else {
        setNewsletterStatus("error")
      }
    }, 1000)
  }

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  const services = [
    { name: "GST Filing", href: "/services#gst-filing" },
    { name: "Tender Applications", href: "/services#tender-applications" },
    { name: "Court Hearings", href: "/services#court-hearings" },
    { name: "Rental Agreements", href: "/services#rental-agreements" },
    { name: "Legal Consultation", href: "/services" },
    { name: "Document Review", href: "/services" },
  ]

  const legalAreas = [
    { name: "Corporate Law", href: "/services" },
    { name: "Civil Litigation", href: "/services" },
    { name: "Property Law", href: "/services" },
    { name: "Tax Law", href: "/services" },
    { name: "Contract Law", href: "/services" },
    { name: "Business Law", href: "/services" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">LegalPro</h2>
                <p className="text-sm text-gray-400">Professional Legal Services</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing exceptional legal services for over 15 years. Our experienced team is dedicated to protecting
              your rights and achieving the best outcomes for your legal matters.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <Verified className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">Licensed & Certified</span>
              </div>
              <div className="flex items-center text-sm">
                <Security className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">100% Confidential</span>
              </div>
              <div className="flex items-center text-sm">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-gray-300">4.9/5 Client Rating</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 group"
                >
                  <Facebook className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-200 group"
                >
                  <Twitter className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-200 group"
                >
                  <LinkedIn className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 group"
                >
                  <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-200 group"
                >
                  <YouTube className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-md font-medium mb-4 text-gray-200">Legal Areas</h4>
              <ul className="space-y-2">
                {legalAreas.slice(0, 4).map((area, index) => (
                  <li key={index}>
                    <Link
                      href={area.href}
                      className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Call Us</p>
                  <a
                    href="tel:+919876543210"
                    className="text-white font-medium hover:text-blue-400 transition-colors duration-200"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Email className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Email Us</p>
                  <a
                    href="mailto:info@legalpro.com"
                    className="text-white font-medium hover:text-blue-400 transition-colors duration-200"
                  >
                    info@legalpro.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <LocationOn className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Visit Us</p>
                  <p className="text-white text-sm leading-relaxed">
                    123 Legal Street, Ranchi, Jharkhand, India - 834001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Schedule className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Business Hours</p>
                  <p className="text-white text-sm">
                    Mon - Fri: 9:00 AM - 6:00 PM
                    <br />
                    Sat: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-md font-semibold mb-3 text-white">Legal Updates</h4>
              <p className="text-sm text-gray-300 mb-4">Get the latest legal insights delivered to your inbox.</p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={newsletterStatus === "loading"}
                  className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {newsletterStatus === "loading" ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {newsletterStatus === "success" && (
                  <div className="flex items-center text-green-400 text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Successfully subscribed!</span>
                  </div>
                )}

                {newsletterStatus === "error" && (
                  <div className="flex items-center text-red-400 text-sm">
                    <Error className="h-4 w-4 mr-2" />
                    <span>Please enter a valid email.</span>
                  </div>
                )}
              </form>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <button
                onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 group"
              >
                <WhatsApp className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} LegalPro. All rights reserved.</p>
              <div className="flex items-center space-x-4 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Sitemap
                </Link>
              </div>
            </div>

            {/* Professional Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-400">
                <Verified className="h-4 w-4 text-green-400 mr-1" />
                <span>Bar Council Certified</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Security className="h-4 w-4 text-blue-400 mr-1" />
                <span>ISO 27001 Compliant</span>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Legal Disclaimer:</strong> The information provided on this website is for general informational
              purposes only and does not constitute legal advice. No attorney-client relationship is formed by the use
              of this website. For specific legal advice, please consult with a qualified attorney. Past results do not
              guarantee future outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <button
          onClick={() => window.enquireModal.showModal()}
          className="w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-200 hover:scale-110"
        >
          <Phone className="h-6 w-6" />
        </button>
      </div>
    </footer>
  )
}
