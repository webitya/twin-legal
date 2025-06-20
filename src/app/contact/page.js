import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
