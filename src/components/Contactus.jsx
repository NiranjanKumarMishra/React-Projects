import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from "motion/react"

const Contactus = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "0301755c-c58f-4224-a2ca-524185701af5");
   
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        toast.success('Thank you for your submission');
        event.target.reset(); // ✅ clear form after success
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

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
      id="contact-us" 
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-[30px] text-gray-700 dark:text-white"
    >
      <Title 
        title="Reach out to us" 
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        {/* Name Field */}
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="person icon" className="w-5 h-5 mr-2" />
            <input 
              name="name"
              type="text" 
              placeholder="Enter your name" 
              className="w-full p-3 text-sm outline-none bg-transparent" 
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <p className="mb-2 text-sm font-medium">Your email</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="email icon" className="w-5 h-5 mr-2" />
            <input 
              name="email"
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 text-sm outline-none bg-transparent" 
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Your message</p>
          <textarea 
            name="message"   // ✅ lowercase
            placeholder="Write your message..." 
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent h-32 resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 flex justify-center">
          <button 
            type="submit" 
            className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition-all"
          >
            Send Message  
          </button>
        </div>
      </motion.form>
    </motion.div>
  )
}

export default Contactus
