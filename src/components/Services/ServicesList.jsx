export default function ServicesList() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive legal solutions tailored to your specific needs
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <nav className="flex flex-col space-y-2">
            <a
              href="#gst-filing"
              className="px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-blue-50 border border-gray-200 flex items-center justify-between"
            >
              <span className="font-medium text-gray-900">GST Filing</span>
              <span className="text-blue-600">→</span>
            </a>
            <a
              href="#tender-applications"
              className="px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-blue-50 border border-gray-200 flex items-center justify-between"
            >
              <span className="font-medium text-gray-900">Tender Applications</span>
              <span className="text-blue-600">→</span>
            </a>
            <a
              href="#court-hearings"
              className="px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-blue-50 border border-gray-200 flex items-center justify-between"
            >
              <span className="font-medium text-gray-900">Court Hearings</span>
              <span className="text-blue-600">→</span>
            </a>
            <a
              href="#rental-agreements"
              className="px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-blue-50 border border-gray-200 flex items-center justify-between"
            >
              <span className="font-medium text-gray-900">Rental Agreements</span>
              <span className="text-blue-600">→</span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  )
}
