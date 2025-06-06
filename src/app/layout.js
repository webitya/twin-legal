import { Inter } from "next/font/google"
import Navbar from "@/components/Shared/Navbar"
import Footer from "@/components/Shared/Footer"
import EnquireModal from "@/components/Shared/EnquireModal"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LegalPro Services",
  description: "Professional legal services for all your needs",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <EnquireModal />
      </body>
    </html>
  )
}
