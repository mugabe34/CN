import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiInstagram, 
  FiArrowUp, FiHeart 
} from 'react-icons/fi'
import { 
  SiSnapchat, SiTwitch, SiTiktok, SiWhatsapp 
} from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/mugabe34', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mugabe-herve-279448373/', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter/X' },
    { icon: SiSnapchat, href: 'https://www.snapchat.com/mugabe716yourus', label: 'Snapchat' },
    { icon: SiTwitch, href: 'https://www.twitch.tv/ntare34', label: 'Twitch' },
    { icon: FiFacebook, href: 'https://www.facebook.com/mugabeherve', label: 'Facebook' },
    { icon: FiInstagram, href: 'https://www.instagram.com/mugabe34', label: 'Instagram' },
    { icon: SiWhatsapp, href: 'https://wa.me/0781908314', label: 'WhatsApp' },
    { icon: SiTiktok, href: 'https://www.tiktok.com/@yourusername', label: 'TikTok' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.png"
                  alt="Mugabe Logo"
                  className="h-10 w-10"
                />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Mugabe
                </h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Full Stack Developer passionate about creating innovative web solutions. 
                Specializing in modern web technologies, AI integration, and user-centric design.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FiHeart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>and lots of coffee ☕</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <motion.a
                  href="mailto:mugabeherve7@gmail.com"
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  mugabeherve7@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+250781908314"
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  +250 781 908 314
                </motion.a>
                <motion.p
                  whileHover={{ x: 5 }}
                  className="text-gray-400"
                >
                  Rwanda
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-gray-800"
          >
            <h4 className="text-lg font-semibold text-white mb-4 text-center md:text-left">
              Follow Me
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-600 transition-all duration-300 group"
                  title={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} Mugabe | All Rights Reserved.
            </motion.p>

            <div className="flex items-center space-x-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                Built with React & Tailwind CSS
              </motion.p>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-all duration-300 group"
                title="Back to top"
              >
                <FiArrowUp className="w-4 h-4 text-white group-hover:animate-bounce" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
    </footer>
  )
}

export default Footer
