"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Menu,
  Close,
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Facebook,
  Twitter,
  LinkedIn,
  ArrowForward,
} from "@mui/icons-material"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    {
      name: "Home",
      href: "/",
      isActive: pathname === "/",
    },
    {
      name: "About",
      href: "/about",
      isActive: pathname === "/about",
    },
    {
      name: "Services",
      href: "/services",
      isActive: pathname === "/services" || pathname?.startsWith("/services/"),
    },
    {
      name: "Contact",
      href: "/contact",
      isActive: pathname === "/contact",
    },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center group">
                <Phone className="h-3.5 w-3.5 mr-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                <span className="group-hover:text-blue-200 transition-colors duration-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center group">
                <Email className="h-3.5 w-3.5 mr-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                <span className="group-hover:text-blue-200 transition-colors duration-200">info@legalpro.com</span>
              </div>
              <div className="flex items-center group">
                <LocationOn className="h-3.5 w-3.5 mr-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                <span className="group-hover:text-blue-200 transition-colors duration-200">
                  123 Legal Street, Ranchi, Jharkhand, India - 834001
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center group">
                <AccessTime className="h-3.5 w-3.5 mr-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                <span className="text-gray-300 group-hover:text-blue-200 transition-colors duration-200">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex space-x-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-3.5 w-3.5 text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="h-3.5 w-3.5 text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <LinkedIn className="h-3.5 w-3.5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg border-b border-gray-200 py-2" : "bg-white border-b border-gray-100 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <div
                  className={`w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:shadow-lg transition-all duration-300 ${isScrolled ? "scale-90" : ""}`}
                >
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <div>
                  <h1
                    className={`font-bold text-gray-900 transition-all duration-300 ${isScrolled ? "text-lg" : "text-xl"}`}
                  >
                    LegalPro
                  </h1>
                  <p
                    className={`text-gray-500 leading-none transition-all duration-300 ${isScrolled ? "text-[10px]" : "text-xs"}`}
                  >
                    Professional Legal Services
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1 lg:space-x-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                        link.isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${link.isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                      ></span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => window.open("tel:+919876543210")}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm px-3 py-1.5 border border-transparent hover:border-blue-100 rounded-md hover:bg-blue-50"
              >
                <Phone className="h-3.5 w-3.5 mr-1.5" />
                <span className="font-medium">Call Now</span>
              </button>
              <button
                onClick={() => window.enquireModal.showModal()}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center"
              >
                Free Consultation
                <ArrowForward className="ml-1.5 h-3.5 w-3.5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[80vh] opacity-100 visible overflow-y-auto" : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
            {/* Mobile Contact Info */}
            <div className="px-3 py-2 border-b border-gray-100 mb-2 bg-gray-50 rounded-md">
              <div className="flex items-center text-sm text-gray-600 mb-1.5">
                <Phone className="h-4 w-4 mr-2 text-blue-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-1.5">
                <Email className="h-4 w-4 mr-2 text-blue-600" />
                <span>info@legalpro.com</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <LocationOn className="h-4 w-4 mr-2 text-blue-600" />
                <span>123 Legal Street, Ranchi, Jharkhand, India - 834001</span>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 last:border-0">
                <Link
                  href={link.href}
                  className={`block px-3 py-3 text-base font-medium ${
                    link.isActive ? "text-blue-600 bg-blue-50" : "text-gray-700"
                  } hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="px-3 py-4 space-y-3 border-t border-gray-100 mt-2">
              <button
                onClick={() => {
                  setIsOpen(false)
                  window.open("tel:+919876543210")
                }}
                className="w-full flex items-center justify-center px-4 py-3 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </button>
              <button
                onClick={() => {
                  setIsOpen(false)
                  window.enquireModal.showModal()
                }}
                className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md font-medium hover:from-blue-700 hover:to-blue-800 transition-colors duration-200"
              >
                Free Consultation
                <ArrowForward className="ml-1.5 h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  setIsOpen(false)
                  window.open("https://wa.me/919876543210", "_blank")
                }}
                className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Mobile Social Links */}
            <div className="px-3 py-3 border-t border-gray-100 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500 mb-2">Follow us:</p>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedIn className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
