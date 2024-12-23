'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"

export default function NoResponsePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white p-8 rounded-xl shadow-xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold mb-6">
            You've shared access to your photos.
          </h1>
          <p className="text-xl mb-4">
            'DaddysFone' now has full access to your photo albums.
          </p>
        </motion.div>
      </Card>
    </motion.div>
  )
}

