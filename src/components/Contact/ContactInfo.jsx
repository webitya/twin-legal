import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <PhoneIcon className="h-6 w-6 text-blue-600" />,
      title: "Phone Number",
      details: ["+91 XXXXX XXXXX", "+91 XXXXX XXXXX"],
    },
    {
      icon: <EmailIcon className="h-6 w-6 text-blue-600" />,
      title: "Email Address",
      details: ["info@kumarfin.com", "contact@kumarfin.com"],
    },
    {
      icon: <LocationOnIcon className="h-6 w-6 text-blue-600" />,
      title: "Office Address",
      details: ["Your Business Address", "City, State - PIN Code"],
    },
    {
      icon: <AccessTimeIcon className="h-6 w-6 text-blue-600" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
    },
  ]

  return (
    <div>
      <div className="bg-blue-600 text-white p-8 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          <AccountBalanceIcon className="h-8 w-8 mr-3" />
          <div>
            <h2 className="text-2xl font-bold">KUMAR Fin. Consultant</h2>
            <p className="text-blue-100">Pappu Kumar Consultant</p>
          </div>
        </div>
        <p className="text-blue-100">
          Professional financial and legal consulting services with expertise and dedication. We're here to help you
          with all your business and personal requirements.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Response Guarantee</h3>
        <p className="text-gray-600 mb-4">
          We understand the importance of timely service. Our team is committed to responding to all inquiries within 24
          hours during business days.
        </p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Free initial consultation</li>
          <li>• Transparent pricing</li>
          <li>• Professional service guarantee</li>
          <li>• Confidential handling of all documents</li>
        </ul>
      </div>
    </div>
  )
}
