"use client"

export default function ServiceDetails() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* GST Filing */}
          <div id="gst-filing" className="scroll-mt-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">GST Filing</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Our comprehensive GST filing services ensure compliance with all tax regulations while maximizing your
                  benefits.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">GST Registration for businesses</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Monthly and quarterly GST return filing</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">GST reconciliation and compliance management</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">GST audit support and representation</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => window.enquireModal.showModal()}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Enquire About GST Filing
                  </button>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="GST Filing Service"
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tender Applications */}
          <div id="tender-applications" className="scroll-mt-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="lg:order-2">
                <h2 className="text-3xl font-extrabold text-gray-900">Tender Applications</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Our expert team helps you navigate the complex process of tender applications to increase your chances
                  of success.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Tender document preparation and review</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Technical and financial bid preparation</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Compliance with tender requirements</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Representation during tender opening and negotiations</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => window.enquireModal.showModal()}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Enquire About Tender Applications
                  </button>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:order-1">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Tender Application Service"
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Court Hearings */}
          <div id="court-hearings" className="scroll-mt-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Court Hearings</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Our experienced legal team provides professional representation for all types of court proceedings.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Civil and criminal case representation</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Case preparation and documentation</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Legal advice and strategy development</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Court appearance and representation</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => window.enquireModal.showModal()}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Enquire About Court Hearings
                  </button>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Court Hearing Service"
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rental Agreements */}
          <div id="rental-agreements" className="scroll-mt-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="lg:order-2">
                <h2 className="text-3xl font-extrabold text-gray-900">Rental Agreements</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Our comprehensive rental agreement services ensure that your property interests are protected with
                  legally sound documentation.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Customized rental agreement drafting</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Rental agreement review and consultation</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Agreement registration and documentation</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-700">Legal advice on rental disputes</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => window.enquireModal.showModal()}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Enquire About Rental Agreements
                  </button>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:order-1">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Rental Agreement Service"
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
