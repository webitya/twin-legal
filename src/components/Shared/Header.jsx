"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import PhoneIcon from "@mui/icons-material/Phone"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ]

  const isActive = (href) => pathname === href

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br from-blue-600 to-blue-700 group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300">
              <AccountBalanceIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                KUMAR Fin. Consultant
              </h1>
              <p className="text-sm text-gray-600 hidden sm:block">Pappu Kumar Consultant</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-white bg-blue-600 shadow-lg"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Call Button */}
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-200 active:scale-95 ml-4"
            >
              <PhoneIcon className="h-5 w-5" />
              <span className="hidden xl:inline">+91 98765 43210</span>
              <span className="xl:hidden">Call Now</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 bg-white rounded-b-2xl shadow-xl">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-white bg-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Call Button */}
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-xl font-semibold mt-4 mx-2 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Call +91 98765 43210</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
