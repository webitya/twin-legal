import Link from "next/link"
import ReceiptIcon from "@mui/icons-material/Receipt"
import BusinessIcon from "@mui/icons-material/Business"
import GavelIcon from "@mui/icons-material/Gavel"
import AssignmentIcon from "@mui/icons-material/Assignment"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

export default function HomeServices() {
  const services = [
    {
      icon: <ReceiptIcon className="h-8 w-8 text-white" />,
      title: "Accounting & Taxation",
      description: "Complete accounting solutions, ITR filing, tax audit, and strategic tax planning services.",
      features: ["PAN Card Services", "ITR Filing", "Tax Audit", "Tax Planning"],
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      badge: "Most Popular",
      badgeColor: "bg-yellow-500",
    },
    {
      icon: <BusinessIcon className="h-8 w-8 text-white" />,
      title: "GST Services",
      description: "Comprehensive GST registration, return filing, audit, and compliance services.",
      features: ["GST Registration", "GST Return", "GST Audit", "Compliance"],
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      badge: "Essential",
      badgeColor: "bg-green-500",
    },
    {
      icon: <GavelIcon className="h-8 w-8 text-white" />,
      title: "Legal Services",
      description: "Professional legal and notary services for various business requirements.",
      features: ["Trade Mark", "ISO Certificate", "Legal/Notary", "FSSAI"],
      bgColor: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
      badge: "Professional",
      badgeColor: "bg-blue-500",
    },
    {
      icon: <AssignmentIcon className="h-8 w-8 text-white" />,
      title: "Tender Services",
      description: "Expert assistance with government tenders and procurement processes.",
      features: ["Central Govt", "State Govt", "GEM Portal", "Railway"],
      bgColor: "bg-orange-600",
      hoverColor: "hover:bg-orange-700",
      badge: "Specialized",
      badgeColor: "bg-purple-500",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
            <CheckCircleIcon className="h-5 w-5" />
            <span className="font-semibold">Our Services</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Our <span className="text-blue-600">Professional Services</span>
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
            Comprehensive financial and legal solutions tailored to meet your business and personal needs with
            guaranteed satisfaction, timely delivery, and professional excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} ${service.hoverColor} p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer text-white relative overflow-hidden group transition-all duration-300`}
            >
              {/* Badge */}
              <div
                className={`absolute top-4 right-4 ${service.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
              >
                {service.badge}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg bg-white/20 backdrop-blur-sm mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircleIcon className="h-4 w-4 mr-3 text-white/80" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white/90">Learn More</span>
                  <ArrowForwardIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-12 rounded-3xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-gray-900">Need a Custom Solution?</h3>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer personalized consulting services tailored to your specific business requirements. Get in touch with
            our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95"
            >
              🔍 View All Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95"
            >
              💬 Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
