import Link from "next/link"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"

export default function ServicesCTA() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Need Professional Assistance?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Our team of experts is ready to help you with any of our services. Contact us today for a free consultation
          and personalized solution.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </Link>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5" />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <EmailIcon className="h-5 w-5" />
              <span>info@kumarfin.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
