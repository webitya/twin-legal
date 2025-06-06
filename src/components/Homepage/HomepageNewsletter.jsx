"use client"

import { useState } from "react"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Email } from "@mui/icons-material"

export default function HomepageNewsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState(null) // null, 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes("@")) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    }, 1000)
  }

  return (
    <section className="py-16 bg-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm-30 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-20 right-20 w-16 h-16 bg-blue-300 bg-opacity-20 rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-12 h-12 bg-green-300 bg-opacity-20 rounded-full animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex items-center justify-center mb-6">
          <Email className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Legal Insights</h2>
        <p className="text-xl text-blue-100 mb-8">Get the latest legal updates and insights delivered to your inbox.</p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <div className="flex items-center justify-center text-green-300 bg-green-900 bg-opacity-20 rounded-lg p-4">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Successfully subscribed! Check your email for confirmation.</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center justify-center text-red-300 bg-red-900 bg-opacity-20 rounded-lg p-4">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>Please enter a valid email address.</span>
            </div>
          )}
        </form>

        {/* Privacy Note */}
        <p className="text-gray-400 text-sm mt-4">We respect your privacy. Unsubscribe at any time. No spam, ever.</p>

        {/* Social Proof */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-3">
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="/placeholder.svg?height=32&width=32"
                alt="Subscriber"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="/placeholder.svg?height=32&width=32"
                alt="Subscriber"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="/placeholder.svg?height=32&width=32"
                alt="Subscriber"
              />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                +
              </div>
            </div>
            <span className="text-sm">Join 2,500+ subscribers</span>
          </div>
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
