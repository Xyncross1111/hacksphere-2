"use client"

import type React from "react"
import { useState } from "react"
import { Github, Send, Code, Star, Instagram } from "lucide-react"
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
    <footer className="relative overflow-hidden bg-black py-12 px-6 md:px-8">
      {/* Nebula background elements */}
      <div className="nebula bottom-1/4 left-1/4 w-96 h-96 opacity-40"
        style={{
          position: "absolute",
          zIndex: 0,
          background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)"
        }}
      />

      <div className="nebula top-1/3 right-1/3 w-96 h-96"
        style={{
          position: "absolute",
          zIndex: 0,
          background: "linear-gradient(45deg, rgba(19, 51, 234, 0.1), #3b82f6)"
        }}
      />

      {/* Star particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="star absolute h-1 w-1 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#9d4edd] via-[#ff9daa] to-[#9b5197] text-transparent bg-clip-text mb-3">
                HackSphere 2.0
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="md:text-gray-400 text-center md:text-left text-white"
            >
              RBU's only student-run hackathon bringing together tech enthusiasts for 8 hours of innovation and problem-solving.
            </motion.p>
          </div>

          {/* Quick links */}
          {/* <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Timeline", href: "#schedule" },
                { name: "Prizes", href: "#prizes" },
                { name: "Gallery", href: "#gallery" },
                { name: "FAQ", href: "#faq" },
              ].map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-purple-300 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div> */}

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Curious? Know more about us</h3>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-full"
            >
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="h-10 bg-gray-900 border border-gray-700 rounded-l px-4 w-full text-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none"
                  required
                />
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-[#9d4edd] to-[#9b5197] h-10 px-4 rounded-r text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-green-400 mt-2 text-sm"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>

            <motion.div
              className="flex mt-6 space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {[
                { icon: <Github className="h-5 w-5" />, href: "https://github.com/TheCodeBeakers", label: "GitHub" },
                { icon: <Instagram className="h-5 w-5" />, href: "https://github.com/TheCodeBeakers", label: "Instagram" },
                { icon: <Code className="h-5 w-5" />, href: "https://unstop.com/hackathons/hacksphere-20-shri-ramdeobaba-college-of-engineering-and-management-rcoem-nagpur-1427361", label: "Devfolio" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom credits */}
        <motion.div
          className="border-t border-gray-800 pt-6 mt-6 text-center text-white text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-white">
            <p>© {new Date().getFullYear()} HackSphere. All rights reserved.</p>
            <div className="flex items-center mt-3 md:mt-0">
              <p>Made with </p>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mx-1"
              >
                <Star className="h-4 w-4 text-purple-500 inline" />
              </motion.div>
              <p>by TheCodeBreakers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}