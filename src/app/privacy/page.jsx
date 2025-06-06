import WhatsAppButton from "@/components/Shared/WhatsAppButton"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-600">Last Updated: June 4, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="mb-4">
              At LegalPro, we respect your privacy and are committed to protecting your personal data. This privacy
              policy will inform you about how we look after your personal data when you visit our website and tell you
              about your privacy rights and how the law protects you.
            </p>
            <p>
              This privacy policy aims to give you information on how LegalPro collects and processes your personal data
              through your use of this website, including any data you may provide through this website when you sign up
              for our newsletter, request a consultation, or use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Data We Collect About You</h2>
            <p className="mb-4">
              Personal data, or personal information, means any information about an individual from which that person
              can be identified. It does not include data where the identity has been removed (anonymous data).
            </p>
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped
              together as follows:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.
              </li>
              <li>
                <strong>Contact Data</strong> includes billing address, delivery address, email address and telephone
                numbers.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type
                and version, time zone setting and location, browser plug-in types and versions, operating system and
                platform, and other technology on the devices you use to access this website.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you use our website, products and services.
              </li>
              <li>
                <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from
                us and our third parties and your communication preferences.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Personal Data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal
              data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>
                Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                fundamental rights do not override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            <p>
              Generally, we do not rely on consent as a legal basis for processing your personal data although we will
              get your consent before sending third party direct marketing communications to you via email or text
              message. You have the right to withdraw consent to marketing at any time by contacting us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally
              lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your
              personal data to those employees, agents, contractors and other third parties who have a business need to
              know. They will only process your personal data on our instructions and they are subject to a duty of
              confidentiality.
            </p>
            <p>
              We have put in place procedures to deal with any suspected personal data breach and will notify you and
              any applicable regulator of a breach where we are legally required to do so.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Legal Rights</h2>
            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data.
              These include the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            <p>
              If you wish to exercise any of the rights set out above, please contact us at{" "}
              <a href="mailto:privacy@legalpro.com" className="text-blue-600 hover:text-blue-800">
                privacy@legalpro.com
              </a>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact our Data
              Privacy Manager:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="mb-2">
                <strong>Email address:</strong>{" "}
                <a href="mailto:privacy@legalpro.com" className="text-blue-600 hover:text-blue-800">
                  privacy@legalpro.com
                </a>
              </p>
              <p className="mb-2">
                <strong>Postal address:</strong> 123 Legal Street, Ranchi, Jharkhand, India - 834001
              </p>
              <p>
                <strong>Telephone number:</strong>{" "}
                <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-800">
                  +91 98765 43210
                </a>
              </p>
            </div>
            <p className="mt-6">
              You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the
              Indian supervisory authority for data protection issues. We would, however, appreciate the chance to deal
              with your concerns before you approach the ICO so please contact us in the first instance.
            </p>
          </section>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  )
}
