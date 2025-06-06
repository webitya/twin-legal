import AboutHero from "@/components/About/AboutHero"
import AboutStory from "@/components/About/AboutStory"
import AboutTeam from "@/components/About/AboutTeam"
import AboutAchievements from "@/components/About/AboutAchievements"
import WhatsAppButton from "@/components/Shared/WhatsAppButton"

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutAchievements />
      <WhatsAppButton />
    </div>
  )
}
