'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import NoResponsePage from './no-response-page'

const AnimatedText = ({ children }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.span>
)

const AnimatedButton = ({ children, onClick, className }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button onClick={onClick} className={className}>
      {children}
    </Button>
  </motion.div>
)

export default function ThankYouPage() {
  const [answer, setAnswer] = useState<string | null>(null)
  const router = useRouter()

  if (answer === 'no') {
    return <NoResponsePage />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white p-8 rounded-xl shadow-xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6">
            <AnimatedText>Thank you for taking the time!</AnimatedText>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl mb-8">Your feedback is greatly appreciated.</p>
            <h2 className="text-2xl font-semibold mb-6">Would you want to go out with me?</h2>
            <div className="flex justify-center space-x-4">
              <AnimatedButton
                onClick={() => setAnswer('yes')}
                className="px-8 py-3 bg-green-500 text-white font-bold rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Yes
              </AnimatedButton>
              <AnimatedButton
                onClick={() => setAnswer('no')}
                className="px-8 py-3 bg-red-500 text-white font-bold rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                No
              </AnimatedButton>
            </div>
            {answer === 'yes' && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-lg"
              >
                Great! I'm looking forward to it!
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  )
}

