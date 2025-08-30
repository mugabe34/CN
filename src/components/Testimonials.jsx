import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Dialo",
      role: "Project Manager",
      company: "Tech Solutions Inc.",
      content: "Mugabe delivered exceptional work on our web application. His attention to detail and technical expertise made our project a huge success. The final product exceeded our expectations!",
      rating: 5,
      avatar: "/dialo.jpg"
    },
    {
      name: "Babu",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "Working with Mugabe was a game-changer for our startup. He transformed our ideas into a beautiful, functional web platform. His communication and delivery timeline were outstanding.",
      rating: 5,
      avatar: "/babu.jpg"
    },
    {
      name: "Claire",
      role: "Creative Director",
      company: "Design Studio",
      content: "Mugabe brought our creative vision to life with pixel-perfect precision. His understanding of modern web technologies and design principles is impressive. Highly recommended!",
      rating: 5,
      avatar: "/claire.jpg"
    },
    {
      name: "Charles",
      role: "Business Owner",
      company: "Local Business",
      content: "The e-commerce solution Mugabe built for us increased our online sales by 200%. His expertise in full-stack development and user experience design is remarkable.",
      rating: 5,
      avatar: "/dialo.jpg"
    },
    {
      name: "Kabera",
      role: "Tech Lead",
      company: "Digital Agency",
      content: "Mugabe's code quality and problem-solving skills are top-notch. He delivered a complex web application on time and within budget. A true professional developer.",
      rating: 5,
      avatar: "/babu.jpg"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-purple-500/20 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-purple-500">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full opacity-20 blur-sm"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center md:justify-start mb-4"
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <FiStar className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-300 mb-6 italic leading-relaxed"
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.blockquote>

                  {/* Client Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-xl font-bold text-purple-400 mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-gray-800 text-purple-400 rounded-full border border-purple-500/30 hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              <FiChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-gray-800 text-purple-400 rounded-full border border-purple-500/30 hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "5.0", label: "Average Rating" },
            { number: "100%", label: "Project Success Rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-lg border border-purple-500/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-purple-400 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
