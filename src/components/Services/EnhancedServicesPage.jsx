"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import {
  Search,
  FilterList,
  Clear,
  Star,
  People,
  Schedule,
  WhatsApp,
  Phone,
  KeyboardArrowDown,
  KeyboardArrowUp,
  TrendingUp,
  Verified,
  Close,
  ArrowBack,
  CheckCircle,
  Info,
  AccessTime,
  AttachMoney,
  Gavel,
} from "@mui/icons-material"
import { servicesData, categories, subcategories, sortOptions } from "@/data/services"

export default function EnhancedServicesPage() {
  // State management
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Services")
  const [selectedSubcategory, setSelectedSubcategory] = useState("All")
  const [sortBy, setSortBy] = useState("popular")
  const [showFilters, setShowFilters] = useState(false)
  const [flippedCards, setFlippedCards] = useState({})
  const [isMobile, setIsMobile] = useState(false)
  const cardsRef = useRef({})

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle click outside to reset flipped cards
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOnCard = Object.keys(cardsRef.current).some((id) => {
        const cardRef = cardsRef.current[id]
        return cardRef && cardRef.contains(event.target)
      })

      if (!clickedOnCard) {
        setFlippedCards({})
      }
    }

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setFlippedCards({})
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscKey)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [])

  // Get available subcategories based on selected category
  const availableSubcategories = useMemo(() => {
    if (selectedCategory === "All Services") return ["All"]
    return ["All", ...(subcategories[selectedCategory] || [])]
  }, [selectedCategory])

  // Reset subcategory when category changes
  useEffect(() => {
    setSelectedSubcategory("All")
  }, [selectedCategory])

  // Filter and sort services
  const filteredAndSortedServices = useMemo(() => {
    const filtered = servicesData.filter((service) => {
      // Search filter
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      // Category filter
      const matchesCategory = selectedCategory === "All Services" || service.category === selectedCategory

      // Subcategory filter
      const matchesSubcategory = selectedSubcategory === "All" || service.subcategory === selectedSubcategory

      return matchesSearch && matchesCategory && matchesSubcategory
    })

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || b.clientsServed - a.clientsServed
        case "rating":
          return b.rating - a.rating
        case "clients":
          return b.clientsServed - a.clientsServed
        case "alphabetical":
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedSubcategory, sortBy])

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All Services")
    setSelectedSubcategory("All")
    setSortBy("popular")
    setShowFilters(false)
  }

  // Handle WhatsApp click with custom message
  const handleWhatsAppClick = (service) => {
    const message = `Hi! I'm interested in your ${service.title} service. Could you please provide more information about the process, timeline, and pricing? I would also like to schedule a consultation to discuss my specific requirements.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank")
  }

  // Toggle card flip
  const toggleCardFlip = (serviceId, event) => {
    event.stopPropagation()
    setFlippedCards((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }))
  }

  // Get service icon
  const getServiceIcon = (iconName) => {
    const iconProps = { className: "h-6 w-6 sm:h-8 sm:w-8 text-blue-600" }
    switch (iconName) {
      case "Description":
        return <Search {...iconProps} />
      case "Assignment":
        return <FilterList {...iconProps} />
      case "Gavel":
        return <Star {...iconProps} />
      case "Article":
        return <People {...iconProps} />
      case "Business":
        return <Schedule {...iconProps} />
      case "Security":
        return <Verified {...iconProps} />
      case "Psychology":
        return <TrendingUp {...iconProps} />
      default:
        return <Search {...iconProps} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Our Legal Services</h1>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Comprehensive legal solutions tailored to your specific needs
            </p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mr-1" />
                <span>4.8/5 Average Rating</span>
              </div>
              <div className="flex items-center">
                <People className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-1" />
                <span>2000+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <Verified className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-1" />
                <span>Licensed Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8">
          {/* Search Bar */}
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search services, keywords, or legal areas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base lg:text-lg"
            />
          </div>

          {/* Filter Toggle Button (Mobile) */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <FilterList className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Filters & Sort</span>
              {showFilters ? (
                <KeyboardArrowUp className="h-5 w-5 ml-2" />
              ) : (
                <KeyboardArrowDown className="h-5 w-5 ml-2" />
              )}
            </button>
          </div>

          {/* Filters */}
          <div
            className={`${
              showFilters || !isMobile ? "block" : "hidden"
            } md:block transition-all duration-300 ease-in-out`}
          >
            {/* Mobile Filter Header */}
            {isMobile && showFilters && (
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Filters & Sort</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-1 rounded-md text-gray-400 hover:text-gray-500"
                >
                  <Close className="h-5 w-5" />
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subcategory Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Subcategory</label>
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  {availableSubcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 text-sm"
                >
                  <Clear className="h-4 w-4 mr-2" />
                  Clear All
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600">
                Showing {filteredAndSortedServices.length} of {servicesData.length} services
                {searchTerm && <span className="ml-2 text-blue-600 font-medium">for "{searchTerm}"</span>}
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {filteredAndSortedServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredAndSortedServices.map((service) => (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[service.id] = el)}
                className="h-[420px] sm:h-[450px] w-full"
                style={{ perspective: "1000px" }}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 ${
                    flippedCards[service.id] ? "" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedCards[service.id] ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute w-full h-full bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col p-4 sm:p-6"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="p-2 rounded-lg bg-blue-50 mr-3 flex-shrink-0">
                          {getServiceIcon(service.icon)}
                        </div>
                        <div className="min-w-0 flex-1">
                          {service.popular && (
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full mb-1">
                              Popular
                            </span>
                          )}
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3 flex-1">
                      {service.description}
                    </p>

                    {/* Service Stats */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 mr-1" />
                        <span>{service.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <People className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 mr-1" />
                        <span>{service.clientsServed}+ clients</span>
                      </div>
                      <div className="flex items-center">
                        <Schedule className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-1" />
                        <span className="truncate">{service.duration}</span>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-3 sm:mb-4">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                        {service.category}
                      </span>
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={(e) => toggleCardFlip(service.id, e)}
                      className="w-full text-center py-2 px-4 bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 rounded-lg transition-colors duration-200 text-sm font-medium flex items-center justify-center mb-3"
                    >
                      <span>View Details</span>
                      <KeyboardArrowDown className="h-4 w-4 ml-1" />
                    </button>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => window.enquireModal.showModal()}
                        className="flex-1 flex items-center justify-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Enquire Now
                      </button>
                      <button
                        onClick={() => handleWhatsAppClick(service)}
                        className="flex-1 sm:flex-none flex items-center justify-center px-3 sm:px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                      >
                        <WhatsApp className="h-4 w-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">WhatsApp</span>
                        <span className="sm:hidden">Chat</span>
                      </button>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute w-full h-full bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden flex flex-col"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {/* Back Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold truncate flex-1">{service.title}</h3>
                        <button
                          onClick={(e) => toggleCardFlip(service.id, e)}
                          className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
                          aria-label="Close details"
                        >
                          <Close className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Back Content - Scrollable */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {/* Service Description */}
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Info className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700 text-sm">{service.detailedDescription}</p>
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center mb-1">
                            <AccessTime className="h-4 w-4 text-blue-600 mr-1" />
                            <span className="text-xs font-medium text-gray-700">Timeline</span>
                          </div>
                          <p className="text-xs text-gray-600">{service.duration}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center mb-1">
                            <AttachMoney className="h-4 w-4 text-green-600 mr-1" />
                            <span className="text-xs font-medium text-gray-700">Pricing</span>
                          </div>
                          <p className="text-xs text-gray-600">Customized quote</p>
                        </div>
                      </div>

                      {/* What's Included */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                          What's Included:
                        </h4>
                        <ul className="space-y-2 pl-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                              <span className="flex-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Legal Process */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900 text-sm flex items-center">
                          <Gavel className="h-4 w-4 text-blue-600 mr-1" />
                          Legal Process:
                        </h4>
                        <ol className="space-y-2 pl-2">
                          <li className="flex items-start text-xs text-gray-600">
                            <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-2 text-xs font-medium">
                              1
                            </span>
                            <span className="flex-1">Initial consultation to understand your requirements</span>
                          </li>
                          <li className="flex items-start text-xs text-gray-600">
                            <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-2 text-xs font-medium">
                              2
                            </span>
                            <span className="flex-1">Document preparation and legal research</span>
                          </li>
                          <li className="flex items-start text-xs text-gray-600">
                            <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-2 text-xs font-medium">
                              3
                            </span>
                            <span className="flex-1">Filing and representation as needed</span>
                          </li>
                          <li className="flex items-start text-xs text-gray-600">
                            <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-2 text-xs font-medium">
                              4
                            </span>
                            <span className="flex-1">Regular updates and case management</span>
                          </li>
                        </ol>
                      </div>
                    </div>

                    {/* Back Footer */}
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          onClick={() => window.enquireModal.showModal()}
                          className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Enquire Now
                        </button>
                        <button
                          onClick={() => handleWhatsAppClick(service)}
                          className="flex-1 flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                        >
                          <WhatsApp className="h-4 w-4 mr-2" />
                          WhatsApp
                        </button>
                      </div>
                      <button
                        onClick={(e) => toggleCardFlip(service.id, e)}
                        className="w-full mt-2 flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 text-sm"
                      >
                        <ArrowBack className="h-4 w-4 mr-2" />
                        Back to Service
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // No Results
          <div className="text-center py-8 sm:py-12">
            <div className="max-w-md mx-auto px-4">
              <Search className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-500 mb-6 text-sm sm:text-base">
                We couldn't find any services matching your criteria. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-8 sm:mt-12 bg-blue-600 rounded-lg p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Need a Custom Solution?</h2>
          <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Can't find exactly what you're looking for? Our legal experts can provide customized solutions for your
            specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => window.enquireModal.showModal()}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base"
            >
              Get Custom Quote
            </button>
            <button
              onClick={() => window.open("tel:+919876543210")}
              className="px-4 sm:px-6 py-2 sm:py-3 border border-white text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
            >
              Call: +91 98765 43210
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
