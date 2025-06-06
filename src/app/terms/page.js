import Link from "next/link"
import WhatsAppButton from "@/components/Shared/WhatsAppButton"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Terms of Service</h1>
          <p className="mt-4 text-lg text-gray-600">Last Updated: June 4, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to LegalPro (ompany, we, our, us). These Terms of Service (Terms, Terms of Service)
              govern your use of our website located at www.legalpro.com (together or individually Service) operated
              by LegalPro.
            </p>
            <p className="mb-4">
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and
              disclose information that results from your use of our web pages. Your agreement with us includes these
              Terms and our Privacy Policy (Agreements). You acknowledge that you have read and understood Agreements,
              and agree to be bound by them.
            </p>
            <p>
              If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please
              let us know by emailing at{" "}
              <a href="mailto:support@legalpro.com" className="text-blue-600 hover:text-blue-800">
                support@legalpro.com
              </a>{" "}
              so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access
              or use Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Communications</h2>
            <p className="mb-4">
              By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other
              information we may send. However, you may opt out of receiving any, or all, of these communications from
              us by following the unsubscribe link or by emailing at{" "}
              <a href="mailto:support@legalpro.com" className="text-blue-600 hover:text-blue-800">
                support@legalpro.com
              </a>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Legal Disclaimer</h2>
            <p className="mb-4">
              The information provided on this website is for general informational purposes only and does not
              constitute legal advice. No attorney-client relationship is formed by the use of this website or by
              contacting us through the website. For specific legal advice, please consult with a qualified attorney.
            </p>
            <p>
              Past results do not guarantee future outcomes. Every case is unique and must be evaluated on its own
              merits. The outcome of a particular case cannot be predicated upon a lawyer s or a law firm s past
              results.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Purchases</h2>
            <p className="mb-4">
              If you wish to purchase any product or service made available through Service (Purchase), you may be
              asked to supply certain information relevant to your Purchase including, without limitation, your credit
              card number, the expiration date of your credit card, your billing address, and your shipping information.
            </p>
            <p className="mb-4">
              You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment
              method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct
              and complete.
            </p>
            <p>
              We reserve the right to refuse or cancel your order at any time for reasons including but not limited to:
              product or service availability, errors in the description or price of the product or service, error in
              your order or other reasons.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              Service and its original content (excluding Content provided by users), features and functionality are and
              will remain the exclusive property of LegalPro and its licensors. Service is protected by copyright,
              trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be
              used in connection with any product or service without the prior written consent of LegalPro.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and bar access to Service immediately, without prior notice or
              liability, under our sole discretion, for any reason whatsoever and without limitation, including but not
              limited to a breach of Terms.
            </p>
            <p className="mb-4">
              If you wish to terminate your account, you may simply discontinue using Service. All provisions of Terms
              which by their nature should survive termination shall survive termination, including, without limitation,
              ownership provisions, warranty disclaimers, indemnity and limitations of liability.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of India, which governing law
              applies to agreement without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
              rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
              provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us
              regarding our Service and supersede and replace any prior agreements we might have had between us
              regarding Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes To Service</h2>
            <p className="mb-4">
              We reserve the right to withdraw or amend our Service, and any service or material we provide via Service,
              in our sole discretion without notice. We will not be liable if for any reason all or any part of Service
              is unavailable at any time or for any period. From time to time, we may restrict access to some parts of
              Service, or the entire Service, to users, including registered users.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@legalpro.com" className="text-blue-600 hover:text-blue-800">
                  legal@legalpro.com
                </a>
              </p>
              <p className="mb-2">
                <strong>Address:</strong> 123 Legal Street, Ranchi, Jharkhand, India - 834001
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-800">
                  +91 98765 43210
                </a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600">
            By using our website, you acknowledge that you have read and understood our{" "}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
              Privacy Policy
            </Link>{" "}
            and agree to these Terms of Service.
          </p>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  )
}
