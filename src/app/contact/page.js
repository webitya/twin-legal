import ContactHero from "@/components/Contact/ContactHero"
import ContactForm from "@/components/Contact/ContactForm"
import ContactOffices from "@/components/Contact/ContactOffices"
import ContactFAQ from "@/components/Contact/ContactFAQ"
import WhatsAppButton from "@/components/Shared/WhatsAppButton"

export default function Contact() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactOffices />
      <ContactFAQ />
      <WhatsAppButton />
    </div>
  )
}
