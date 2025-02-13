"use client"

import React from 'react'
import { useState } from 'react'

type Props = {}

const ContactUs = (props: Props) => {
  const [selectedInterest, setSelectedInterest] = useState("UX/UI design");
  const interests = [
    "UX/UI design",
    "Web design",
    "Design system",
    "Graphic design",
    "Other",
  ];

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
    <div className="grid w-full max-w-4xl grid-cols-1 gap-8 rounded-lg p-8 md:grid-cols-2">
      {/* Left Section */}
      <div className="text-white">
        <h2 className="text-3xl font-semibold">
          Let’s talk on something{" "}
          <span className="text-[#4FC1A6]">great</span> together
        </h2>
        <div className="mt-6 space-y-4">
          <p className="flex items-center space-x-4">
            <span className="text-lg">📧</span>
            <span>andreaDesign@gmail.com</span>
          </p>
          <p className="flex items-center space-x-4">
            <span className="text-lg">📞</span>
            <span>+34 123 456 789</span>
          </p>
          <p className="flex items-center space-x-4">
            <span className="text-lg">📍</span>
            <span>123 Street 487 House</span>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex space-x-4">
          <span className="text-xl">🔗</span>
          <span className="text-xl">🖌️</span>
          <span className="text-xl">📷</span>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          I’m interested in:
        </h3>
        <div className="mb-4 flex flex-wrap gap-2">
          {interests.map((interest) => (
            <button
              key={interest}
              onClick={() => setSelectedInterest(interest)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                selectedInterest === interest
                  ? "bg-[#123142] text-white"
                  : "border border-gray-300 text-gray-600"
              }`}
            >
              {interest}
            </button>
          ))}
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Your name
            </label>
            <input
              type="text"
              className="w-full rounded border-b border-gray-400 p-2 outline-none focus:border-[#123142]"
              placeholder="Jhon Smith"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Your email
            </label>
            <input
              type="email"
              className="w-full rounded border-b border-gray-400 p-2 outline-none focus:border-[#123142]"
              placeholder="email@gmail.com"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Your message
            </label>
            <textarea
              rows={4}
              className="w-full rounded border border-gray-300 p-2 outline-none focus:border-[#123142]"
              placeholder="Type your message here..."
            />
          </div>

          {/* Send Message Button */}
          <button className="w-full rounded bg-[#123142] px-4 py-3 text-white">
            Send message
          </button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default ContactUs