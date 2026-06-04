import React, { useState, useRef } from 'react'
import { motion } from "motion/react"

const ServiceCard = ({ service, index }) => {   // ✅ index prop add kiya
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const divRef = useRef(null)

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}   // ✅ index now valid
      viewport={{ once: true }}
      ref={divRef}
      className="relative overflow-hidden w-full m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-white/10 transition-transform hover:scale-105"
      onMouseEnter={() => setVisible(true)} 
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Gradient Blur Background */}
      <div 
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 ease-out mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />

      {/* Card Content */}
      <div className="flex flex-col items-center text-center gap-6 p-8 bg-white dark:bg-gray-900 z-10 relative rounded-[10px]">
        <img 
          src={service.icon} 
          alt={`${service.title} icon`} 
          className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full"
        />
        <h3 className="font-bold text-lg">{service.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
      </div>
    </motion.div>
  )
}

export default ServiceCard
