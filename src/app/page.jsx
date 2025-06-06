import HomepageHero from "@/components/Homepage/HomepageHero"
import HomepageStats from "@/components/Homepage/HomepageStats"
import HomepageServices from "@/components/Homepage/HomepageServices"
import HomepageWhyChooseUs from "@/components/Homepage/HomepageWhyChooseUs"
import HomepageProcess from "@/components/Homepage/HomepageProcess"
import HomepageTestimonials from "@/components/Homepage/HomepageTestimonials"
import HomepageFAQ from "@/components/Homepage/HomepageFAQ"
import HomepageNewsletter from "@/components/Homepage/HomepageNewsletter"
import HomepageCTA from "@/components/Homepage/HomepageCTA"
import WhatsAppButton from "@/components/Shared/WhatsAppButton"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomepageHero />
      <HomepageStats />
      <HomepageServices />
      <HomepageWhyChooseUs />
      <HomepageProcess />
      <HomepageTestimonials />
      <HomepageFAQ />
      <HomepageNewsletter />
      <HomepageCTA />
      <WhatsAppButton />
    </div>
  )
}
