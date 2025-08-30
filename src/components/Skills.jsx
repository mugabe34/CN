import React from 'react'
import { motion } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTypescript,
  SiPython, SiTailwindcss, SiGit, SiDocker, SiAmazon,
  SiNextdotjs, SiExpress, SiPostgresql, SiRedis, SiGraphql
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "GraphQL", icon: SiGraphql, color: "#E10098" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" }
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "AWS", icon: SiAmazon, color: "#FF9900" }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-black">
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
              Skills & Tech Stack
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-6 text-center">
                {category.title}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        x: 10,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 cursor-pointer group"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                      >
                        <IconComponent 
                          size={24} 
                          style={{ color: skill.color }}
                          className="group-hover:drop-shadow-lg"
                        />
                      </motion.div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 relative h-32 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-64 h-64"
            >
              {[SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiPython, SiTailwindcss].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border border-purple-500/30"
                  style={{
                    top: `${50 + 40 * Math.cos((index * 60 * Math.PI) / 180)}%`,
                    left: `${50 + 40 * Math.sin((index * 60 * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon size={24} className="text-purple-400" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "15+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" }
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
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
