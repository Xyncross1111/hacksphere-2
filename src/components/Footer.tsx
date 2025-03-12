"use client"

import type React from "react"
import { useState } from "react"
import { Rocket, Stars, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribed with:", email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black p-6 shadow-xl md:p-8 ">
      {/* Animated stars background */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gray-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2 + Math.random() * 3,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center gap-8 md:flex-row">
        {/* Rocket illustration */}
        <div className="flex-shrink-0">
          <div className="relative h-32 w-32">
            <motion.div
              className="absolute bottom-0 left-1/2 h-20 w-10 -translate-x-1/2 rounded-full bg-orange-600/50 blur-2xl"
              animate={{ opacity: [0.5, 0.8, 0.5], height: ["5rem", "6rem", "5rem"] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-1/2 top-0 -translate-x-1/2 rotate-45"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            >
              <Rocket className="h-24 w-24 text-gray-300 rotate-270" strokeWidth={1.2} />
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-orange-500"
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h3
            className="mb-2 flex items-center justify-center gap-2 text-xl font-bold text-gray-200 md:justify-start"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
            >
              <Stars className="h-5 w-5 text-gray-400" />
            </motion.div>
            Join Our Cosmic Journey
          </motion.h3>

          <motion.p
            className="mb-4 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Subscribe to our interstellar newsletter for the latest discoveries, space missions, and cosmic wonders.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 sm:flex-row"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 w-full rounded-md border border-gray-600 bg-gray-900/50 px-4 text-gray-300 placeholder-gray-500 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/20"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-gray-700 to-gray-800 px-4 font-medium text-gray-200 transition-colors hover:from-gray-600 hover:to-gray-700"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
              <motion.div
                className="ml-2"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
              >
                <Sparkles className="h-4 w-4 text-gray-400" />
              </motion.div>
            </motion.button>
          </motion.form>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                className="mt-2 text-sm font-medium text-green-400"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                Thank you! Your cosmic journey begins soon.
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p
            className="mt-3 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Stay connected with the latest space updates, insights, and astronomical events from Cosmic Explorers.
          </motion.p>
        </div>
      </div>
    </div>
  )
}
