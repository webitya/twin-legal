"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Get in touch with our legal experts for professional assistance
          </p>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              <p className="mt-3 text-lg text-gray-500">Reach out to us through any of the following channels:</p>

              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Phone</p>
                    <p className="mt-1 text-base text-gray-500">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Email</p>
                    <p className="mt-1 text-base text-gray-500">info@legalpro.com</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Office Address</p>
                    <p className="mt-1 text-base text-gray-500">
                      123 Legal Street, Law City
                      <br />
                      Karnataka, India - 560001
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Business Hours</p>
                    <p className="mt-1 text-base text-gray-500">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => window.enquireModal.showModal()}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-700 hover:bg-primary-800"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            <div className="bg-gray-100 p-0">
              <div className="h-full w-full">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Office location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
