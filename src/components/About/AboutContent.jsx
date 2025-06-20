import PersonIcon from "@mui/icons-material/Person"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import StarIcon from "@mui/icons-material/Star"
import GroupsIcon from "@mui/icons-material/Groups"

export default function AboutContent() {
  const stats = [
    { icon: <PersonIcon className="h-8 w-8" />, number: "500+", label: "Happy Clients" },
    { icon: <BusinessCenterIcon className="h-8 w-8" />, number: "10+", label: "Years Experience" },
    { icon: <StarIcon className="h-8 w-8" />, number: "50+", label: "Services Offered" },
    { icon: <GroupsIcon className="h-8 w-8" />, number: "100%", label: "Client Satisfaction" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Excellence in Financial Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              KUMAR Fin. Consultant, under the leadership of Pappu Kumar, has been providing exceptional financial and
              legal consulting services to businesses and individuals. Our commitment to excellence and client
              satisfaction has made us a trusted name in the industry.
            </p>
            <p className="text-gray-600 mb-6">
              We specialize in a comprehensive range of services including accounting, taxation, GST compliance, legal
              documentation, and government tender assistance. Our team stays updated with the latest regulations and
              best practices to ensure our clients receive accurate and timely services.
            </p>
            <p className="text-gray-600">
              Whether you're a small business owner, a large corporation, or an individual seeking financial guidance,
              we provide personalized solutions tailored to your specific needs and requirements.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide reliable, efficient, and professional financial and legal consulting services that help our
              clients achieve their business goals while maintaining full compliance with regulatory requirements.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted financial consulting firm, known for our expertise, integrity, and commitment to
              client success.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-blue-600 mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
