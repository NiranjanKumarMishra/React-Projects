import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {
  const Servicesdata = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.ads_icon
    },
    {
      title: 'Content Marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.marketing_icon
    },
    {
      title: 'Content Writing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.content_icon
    },
    {
      title: 'Social Media',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.social_icon
    }
  ]

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { staggerChildren: 0.2 } // ✅ stagger here
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="services" 
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-[30px] text-gray-700 dark:text-white w-full"
    >
      {/* Background Decoration */}
      <img 
        src={assets.bgImage2} 
        alt="background decoration" 
        className="absolute -top-[110px] -left-[70px] -z-10 dark:hidden"
      />

      {/* Section Title */}
      <Title 
        title="How can we help?" 
        desc="From strategy to execution we craft digital solutions that move your business forward"
      />
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
        {Servicesdata.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services
