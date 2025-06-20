import ReceiptIcon from "@mui/icons-material/Receipt"
import BusinessIcon from "@mui/icons-material/Business"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import AssignmentIcon from "@mui/icons-material/Assignment"

export default function ServicesGrid() {
  const serviceCategories = [
    {
      title: "Accounting & Taxation",
      icon: <ReceiptIcon className="h-12 w-12 text-blue-600" />,
      description: "Complete accounting and taxation services for individuals and businesses",
      services: [
        "PAN Card Application & Services",
        "Professional Accounting & Bookkeeping",
        "ITR (Income Tax Return) Filing",
        "Tax Audit & Compliance",
        "Strategic Tax Planning",
        "Legal Compliance Support",
      ],
    },
    {
      title: "GST Services",
      icon: <BusinessIcon className="h-12 w-12 text-green-600" />,
      description: "Comprehensive GST solutions and compliance management",
      services: [
        "GST Registration & Setup",
        "GST Return Filing (GSTR-1, GSTR-3B)",
        "GST Audit & Assessment",
        "GST Legal Compliance",
        "GST Refund Processing",
        "GST Advisory Services",
      ],
    },
    {
      title: "Other Professional Services",
      icon: <VerifiedUserIcon className="h-12 w-12 text-purple-600" />,
      description: "Wide range of professional and legal services",
      services: [
        "DSC (Digital Signature Certificate)",
        "EPF Registration & Return Filing",
        "ESI Registration & Return Filing",
        "Trade Mark Registration",
        "ISO Certificate Processing",
        "NGO/Society/Trust/Section 8 Registration",
        "Legal/Notary Services",
        "FSSAI License & Registration",
        "Drafting License & Support",
        "Trade License Processing",
        "MSME / Udyam Registration",
        "Regulatory Compliance",
      ],
    },
    {
      title: "Tender Services",
      icon: <AssignmentIcon className="h-12 w-12 text-orange-600" />,
      description: "Expert assistance with government and private tenders",
      services: [
        "Central Government Tender Support",
        "State Government Tender Assistance",
        "GEM Portal Registration & Bidding",
        "Coal E-Auction Services",
        "Railway Tender Processing",
        "Tender Documentation",
        "Bid Preparation & Submission",
      ],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{category.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <ul className="space-y-3">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
