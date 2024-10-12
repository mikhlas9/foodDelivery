'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, Mail, CheckCircle } from 'lucide-react'

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          controls.start('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [controls])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission, e.g., send data to a server
    setIsSubmitted(true)
  }

  const inputFields = [
    { name: 'name', type: 'text', placeholder: 'Your Name', icon: User },
    { name: 'email', type: 'email', placeholder: 'Your Email', icon: Mail },
    { name: 'date', type: 'date', placeholder: 'Select Date', icon: Calendar },
    { name: 'time', type: 'time', placeholder: 'Select Time', icon: Clock }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Reserve Your Table
          </motion.h2>
          <motion.div 
            className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg relative overflow-hidden"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                >
                  {inputFields.map((field, index) => (
                    <motion.div 
                      key={field.name}
                      className="relative"
                      variants={itemVariants}
                    >
                      <field.icon className="absolute top-3 left-3 text-gray-400" />
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500 transition duration-300"
                        required
                      />
                    </motion.div>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-red-500 text-white p-3 rounded font-semibold transition duration-300 hover:bg-red-600"
                    type="submit"
                  >
                    Reserve Now
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, loop: Infinity, ease: "linear" }}
                  >
                    <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Thank You, {formData.name}!</h3>
                  <p>Your reservation for {formData.date} at {formData.time} has been submitted. We'll contact you shortly to confirm.</p>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div 
              className="absolute -bottom-16 -right-16 w-32 h-32 bg-red-500 rounded-full opacity-20"
              animate={isVisible ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-16 -left-16 w-32 h-32 bg-yellow-500 rounded-full opacity-20"
              animate={isVisible ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}