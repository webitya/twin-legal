"use client"

import { useState, useEffect } from "react"
import { Search, Filter, MessageCircle } from "lucide-react"

export default function ServicesPage() {
  const allServices = [
    {
      id: "gst-filing",
      title: "GST Filing",
      category: "Tax",
      description: "Professional assistance with GST registration, filing returns, and compliance management.",
      icon: "FileText",
    },
    {
      id: "gst-registration",
      title: "GST Registration",
      category: "Tax",
      description: "Complete assistance with GST registration for businesses of all sizes.",
      icon: "FileText",
    },
    {
      id: "gst-returns",
      title: "GST Returns",
      category: "Tax",
      description: "Monthly, quarterly, and annual GST return filing services.",
      icon: "FileText",
    },
    {
      id: "tender-applications",
      title: "Tender Applications",
      category: "Business",
      description: "Expert guidance for preparing and submitting winning tender applications.",
      icon: "FileCheck",
    },
    {
      id: "tender-documentation",
      title: "Tender Documentation",
      category: "Business",
      description: "Preparation of comprehensive tender documentation that meets all requirements.",
      icon: "FileCheck",
    },
    {
      id: "bid-preparation",
      title: "Bid Preparation",
      category: "Business",
      description: "Strategic bid preparation to maximize chances of winning government contracts.",
      icon: "FileCheck",
    },
    {
      id: "court-hearings",
      title: "Court Hearings",
      category: "Litigation",
      description: "Professional representation and support for all types of court proceedings.",
      icon: "Gavel",
    },
    {
      id: "civil-litigation",
      title: "Civil Litigation",
      category: "Litigation",
      description: "Expert representation in civil litigation matters.",
      icon: "Gavel",
    },
    {
      id: "criminal-defense",
      title: "Criminal Defense",
      category: "Litigation",
      description: "Professional defense in criminal proceedings.",
      icon: "Gavel",
    },
    {
      id: "rental-agreements",
      title: "Rental Agreements",
      category: "Property",
      description: "Comprehensive rental agreement drafting, review, and registration services.",
      icon: "FileSignature",
    },
    {
      id: "lease-agreements",
      title: "Lease Agreements",
      category: "Property",
      description: "Drafting and review of commercial and residential lease agreements.",
      icon: "FileSignature",
    },
    {
      id: "property-documentation",
      title: "Property Documentation",
      category: "Property",
      description: "Legal documentation services for property transactions.",
      icon: "FileSignature",
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredServices, setFilteredServices] = useState(allServices)

  // Get unique categories
  const categories = ["All", ...new Set(allServices.map((service) => service.category))]

  useEffect(() => {
    // Filter services based on search term and category
    const filtered = allServices.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || service.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    setFilteredServices(filtered)
  }, [searchTerm, selectedCategory])

  const handleWhatsAppClick = (service) => {
    window.open(`https://wa.me/919876543210?text=I'm interested in your ${service} service`, "_blank")
  }

  const handleEnquireClick = (service) => {
    // Set the service in the modal if needed
    window.enquireModal.showModal()
  }

  // Function to get the appropriate icon component
  const getIcon = (iconName) => {
    switch (iconName) {
      case "FileText":
        return (
          <div className="p-2 rounded-full bg-primary-100 text-primary-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
          </div>
        )
      case "FileCheck":
        return (
          <div className="p-2 rounded-full bg-primary-100 text-primary-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="m9 15 2 2 4-4" />
            </svg>
          </div>
        )
      case "Gavel":
        return (
          <div className="p-2 rounded-full bg-primary-100 text-primary-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10" />
              <path d="m16 16 6-6" />
              <path d="m8 8 6-6" />
              <path d="m9 7 8 8" />
              <path d="m21 11-8-8" />
            </svg>
          </div>
        )
      case "FileSignature":
        return (
          <div className="p-2 rounded-full bg-primary-100 text-primary-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5" />
              <path d="M8 18h1" />
              <path d="M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z" />
            </svg>
          </div>
        )
      default:
        return (
          <div className="p-2 rounded-full bg-primary-100 text-primary-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
        )
    }
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive legal solutions tailored to your specific needs
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 appearance-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {getIcon(service.icon)}
                    <h3 className="ml-3 text-lg font-medium text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex space-x-2 mt-auto">
                    <button
                      onClick={() => handleEnquireClick(service.title)}
                      className="flex-1 py-2 px-3 bg-primary-700 hover:bg-primary-800 text-white text-sm font-medium rounded-md"
                    >
                      Enquire Now
                    </button>
                    <button
                      onClick={() => handleWhatsAppClick(service.title)}
                      className="py-2 px-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md flex items-center justify-center"
                      aria-label="Chat on WhatsApp"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="px-6 py-2 bg-gray-50 border-t border-gray-200">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
