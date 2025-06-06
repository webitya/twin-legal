"use client"

import { Description, Search, People, CheckCircle } from "@mui/icons-material"

export default function HomepageProcess() {
  const steps = [
    {
      step: "01",
      icon: <Description className="h-6 w-6" />,
      title: "Initial Consultation",
      description: "Free 30-minute consultation to understand your case and provide preliminary advice.",
    },
    {
      step: "02",
      icon: <Search className="h-6 w-6" />,
      title: "Case Analysis",
      description: "Thorough analysis, research, and strategic approach development for your case.",
    },
    {
      step: "03",
      icon: <People className="h-6 w-6" />,
      title: "Expert Assignment",
      description: "Assignment of the most suitable lawyer based on your specific requirements.",
    },
    {
      step: "04",
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Resolution",
      description: "Diligent work to achieve the best outcome with regular progress updates.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How We Work</h2>
          <p className="mt-4 text-lg text-gray-600">Our streamlined process for efficient legal solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {step.step}
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => window.enquireModal.showModal()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium"
          >
            Start Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
