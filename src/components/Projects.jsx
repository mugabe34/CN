import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: "Muhali Coffee",
      description: "A modern coffee shop website with elegant design and smooth user experience. Features online ordering, menu showcase, and responsive design.",
      image: "/muhari.jpg",
      link: "https://muhali-coffee.vercel.app/",
      github: "https://github.com/mugabe34",
      tags: ["React", "Next.js", "Tailwind CSS", "E-commerce"]
    },
    {
      title: "Pharmacie",
      description: "Comprehensive pharmacy management system with inventory tracking, prescription management, and customer portal.",
      image: "/pharm.jpg",
      link: "https://pharamacie.vercel.app/",
      github: "https://github.com/mugabe34",
      tags: ["React", "Node.js", "MongoDB", "Healthcare"]
    },
    {
      title: "Sokogo Platform",
      description: "Advanced platform with API integration and modern UI. Features real-time data fetching and interactive components.",
      image: "/sokogo.jpg",
      link: "https://sokogo-test-git-feature-fetch-api-mugabe-herves-projects.vercel.app/",
      github: "https://github.com/mugabe34",
      tags: ["React", "API Integration", "Real-time", "Modern UI"]
    },
    {
      title: "Croshet Website",
      description: "Elegant portfolio website showcasing creative work with stunning animations and responsive design.",
      image: "/croshet.jpg",
      link: "https://claire-kveq.vercel.app/",
      github: "https://github.com/mugabe34",
      tags: ["React", "Framer Motion", "Portfolio", "Creative"]
    },
    {
      title: "Murugo",
      description: "Dynamic web application with modern features and intuitive user interface. Built with latest web technologies.",
      image: "/murugo.jpg",
      link: "https://murugo.vercel.app/",
      github: "https://github.com/mugabe34",
      tags: ["React", "Modern UI", "Responsive", "Dynamic"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200"
                  >
                    <FiExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-200"
                  >
                    <FiGithub size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    View Live
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                  >
                    <FiGithub size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
