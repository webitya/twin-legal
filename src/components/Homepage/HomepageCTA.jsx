"use client"

export default function HomepageCTA() {
  return (
    <section className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block text-gray-300">Contact us today for a consultation.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
          <button
            onClick={() => window.enquireModal.showModal()}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
          >
            Enquire Now
          </button>
          <button
            onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
