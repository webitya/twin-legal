"use client"
import {
  LocationOn,
  Phone,
  Email,
  Schedule,
  Directions,
  Business,
  LocalParking,
  Accessible,
  Wifi,
} from "@mui/icons-material"

export default function ContactOffices() {
  const office = {
    name: "LegalPro - Ranchi Office",
    address: "123 Legal Street, Ranchi, Jharkhand, India - 834001",
    phone: "+91 98765 43210",
    email: "info@legalpro.com",
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Emergency Only",
    },
    image: "/placeholder.svg?height=400&width=600",
    features: ["Free Parking", "Wheelchair Accessible", "WiFi Available", "Conference Rooms", "Client Lounge"],
    specialties: ["GST Services", "Tender Applications", "Court Hearings", "Property Law", "Corporate Law"],
    mapUrl: "https://maps.google.com",
    isHeadquarters: true,
  }

  const getFeatureIcon = (feature) => {
    switch (feature) {
      case "Free Parking":
        return <LocalParking className="h-4 w-4 text-blue-600" />
      case "Wheelchair Accessible":
        return <Accessible className="h-4 w-4 text-green-600" />
      case "WiFi Available":
        return <Wifi className="h-4 w-4 text-purple-600" />
      case "Conference Rooms":
      case "Client Lounge":
        return <Business className="h-4 w-4 text-orange-600" />
      default:
        return <Business className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Ranchi, our office is equipped with modern facilities and staffed with expert legal
            professionals ready to assist you.
          </p>
        </div>

        {/* Office Details */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Office Image */}
            <div className="relative">
              <img
                src={office.image || "/placeholder.svg"}
                alt={office.name}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Main Office
              </div>
            </div>

            {/* Office Information */}
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{office.name}</h3>

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <LocationOn className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">Address</p>
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">Phone</p>
                    <a
                      href={`tel:${office.phone}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Email className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Schedule className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">Business Hours</p>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>{office.hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>{office.hours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>{office.hours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Office Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {office.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      {getFeatureIcon(feature)}
                      <span className="ml-2">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {office.specialties.map((specialty, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.open(office.mapUrl, "_blank")}
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Directions className="h-5 w-5 mr-2" />
                  Get Directions
                </button>
                <button
                  onClick={() => window.open(`tel:${office.phone}`)}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Office
                </button>
                <button
                  onClick={() => window.enquireModal.showModal()}
                  className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  <Schedule className="h-5 w-5 mr-2" />
                  Book Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <LocalParking className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Free Parking</h4>
            <p className="text-sm text-gray-600">Ample parking space available for all visitors</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <Accessible className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Accessible</h4>
            <p className="text-sm text-gray-600">Wheelchair accessible with modern facilities</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <Business className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Professional Environment</h4>
            <p className="text-sm text-gray-600">Modern conference rooms and consultation spaces</p>
          </div>
        </div>
      </div>
    </section>
  )
}
