import { Security, Schedule, People, EmojiEvents, Headset, TrendingUp } from "@mui/icons-material"

export default function HomepageWhyChooseUs() {
  const features = [
    {
      icon: <Security className="h-6 w-6" />,
      title: "100% Confidential",
      description: "Your information is completely secure with us.",
    },
    {
      icon: <Schedule className="h-6 w-6" />,
      title: "Quick Response",
      description: "Get responses within 2 hours for urgent matters.",
    },
    {
      icon: <People className="h-6 w-6" />,
      title: "Expert Team",
      description: "Highly qualified lawyers with specialized expertise.",
    },
    {
      icon: <EmojiEvents className="h-6 w-6" />,
      title: "Proven Results",
      description: "98% success rate with 1000+ resolved cases.",
    },
    {
      icon: <Headset className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock support for urgent assistance.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Cost Effective",
      description: "Transparent pricing with maximum value.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose LegalPro?</h2>
          <p className="mt-4 text-lg text-gray-600">Experience and technology for exceptional legal services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
