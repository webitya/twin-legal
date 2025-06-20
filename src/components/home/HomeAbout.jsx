import Link from "next/link"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import PersonIcon from "@mui/icons-material/Person"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import StarIcon from "@mui/icons-material/Star"
import GroupsIcon from "@mui/icons-material/Groups"

export default function HomeAbout() {
  const highlights = [
    "Expert in Accounting & Taxation",
    "GST Compliance Specialist",
    "Legal & Regulatory Support",
    "Government Tender Assistance",
    "Professional Consultation",
    "Timely Service Delivery",
  ]

  const stats = [
    { icon: <PersonIcon className="h-6 w-6" />, number: "500+", label: "Happy Clients" },
    { icon: <BusinessCenterIcon className="h-6 w-6" />, number: "10+", label: "Years Experience" },
    { icon: <StarIcon className="h-6 w-6" />, number: "50+", label: "Services Offered" },
    { icon: <GroupsIcon className="h-6 w-6" />, number: "100%", label: "Client Satisfaction" },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
              <TrendingUpIcon className="h-5 w-5" />
              <span className="font-semibold">About Our Company</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-gray-900">
              About <span className="text-blue-600">KUMAR Fin. Consultant</span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Led by <strong className="text-blue-600">Pappu Kumar</strong>, our consultancy provides comprehensive
                financial and legal services to businesses and individuals. With years of experience in accounting,
                taxation, and legal compliance, we ensure your financial matters are handled with utmost professionalism
                and guaranteed results.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                From simple PAN card applications to complex tax audits and government tender processes, we offer
                end-to-end solutions that help you focus on growing your business while we handle the compliance
                requirements with 100% accuracy and professional excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="flex justify-center text-blue-600 mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95"
            >
              📖 Learn More About Us
            </Link>
          </div>

          {/* Why Choose Us Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-10 border-t-4 border-blue-600 relative">
            <div className="absolute -top-6 left-8 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Why Choose Us?
            </div>

            <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-8 text-blue-600 mt-4">Our Key Strengths</h3>

            <ul className="space-y-6">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                    <CheckCircleIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <span className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors">
                      {highlight}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">"</span>
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-2">
                    "Your success is our priority. We guarantee 100% satisfaction with our professional services."
                  </p>
                  <p className="text-sm text-blue-600 font-semibold">- Pappu Kumar, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
