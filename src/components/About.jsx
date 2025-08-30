import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Animated background circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full opacity-20 blur-lg"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full opacity-30 blur-md"
              />
              
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl"
              >
                <img
                  src="/me.jpg"
                  alt="Mugabe - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Passionate Developer & Problem Solver
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I'm a dedicated Full Stack Developer with a passion for creating innovative web solutions 
              that make a real impact. With expertise spanning modern web technologies, I bring ideas to 
              life through clean, efficient code and intuitive user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              My journey in tech has led me to specialize in <span className="text-purple-400 font-semibold">Web Development</span>, 
              <span className="text-purple-400 font-semibold"> AI integration</span>, and creating engaging 
              <span className="text-purple-400 font-semibold"> Basketball Web Apps</span>. I believe in the power of 
              technology to solve real-world problems and enhance user experiences.
            </motion.p>

            {/* Tech Focus Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
            >
              {[
                { icon: "🌐", title: "Web Dev", desc: "Modern web applications" },
                { icon: "🤖", title: "AI", desc: "Intelligent solutions" },
                { icon: "🏀", title: "Sports Apps", desc: "Basketball web platforms" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="text-purple-400 font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Personal Touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 p-6 rounded-lg border border-purple-500/20 mt-8"
            >
              <p className="text-gray-300 italic mb-4">
                "When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects,
                or enjoying a good basketball game. I believe that continuous learning and staying curious are the keys to
                growth in this ever-evolving field."
              </p>

              {/* CV Download Button */}
              <motion.a
                href="/cv.pdf"
                download="Mugabe_Herve_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
