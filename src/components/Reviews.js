'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

// Remove the TypeScript interface and directly use the array of objects
const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Food Critic",
    content: "The flavors here are absolutely incredible. Each dish is a work of art!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Customer",
    content: "I've been coming here for years, and the quality has never wavered. Simply the best!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    name: "Sarah Thompson",
    role: "Food Blogger",
    content: "The ambiance, service, and food create an unforgettable dining experience.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const sectionRef = useRef(null)

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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
    <section ref={sectionRef} className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold mb-8 text-center text-white"
            variants={itemVariants}
          >
            What Our Customers Say
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg relative"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-8"
              >
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-600 italic mb-4">&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
                  <h3 className="text-xl font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                  <div className="flex mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
