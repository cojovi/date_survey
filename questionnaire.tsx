'use client'

import React, { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import ThankYouPage from './thank-you-page'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const EmojiReaction = ({ emoji, label, selected, onClick }) => (
  <button
    type="button"
    className={`p-2 rounded-full transition-colors ${
      selected ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
    }`}
    onClick={onClick}
  >
    <span className="text-2xl" role="img" aria-label={label}>
      {emoji}
    </span>
  </button>
)

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          className={`text-2xl transition-colors ${
            star <= rating ? 'text-yellow-400' : 'text-gray-600'
          }`}
          onClick={() => setRating(star)}
        >
          ★
        </button>
      ))}
    </div>
  )
}

export default function Questionnaire() {
  const [enjoyment, setEnjoyment] = useState('')
  const [topic, setTopic] = useState('')
  const [engaging, setEngaging] = useState(0)
  const [again, setAgain] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Process the form data
    console.log({ enjoyment, topic, engaging, again })
    // Set submitted to true to navigate to the next page
    setSubmitted(true)
  }

  if (submitted) {
    return <ThankYouPage />
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit}>
        <Card className="w-full max-w-2xl bg-gray-800 text-gray-100 p-8 rounded-xl shadow-xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Post-Conversation Feedback</h1>
          
          <div className="space-y-6">
            <div>
              <Label className="block mb-2">Did you enjoy the conversation you had with me today?</Label>
              <div className="flex justify-between">
                <EmojiReaction emoji="😞" label="Very Unsatisfied" selected={enjoyment === 'unsatisfied'} onClick={() => setEnjoyment('unsatisfied')} />
                <EmojiReaction emoji="😐" label="Neutral" selected={enjoyment === 'neutral'} onClick={() => setEnjoyment('neutral')} />
                <EmojiReaction emoji="😊" label="Satisfied" selected={enjoyment === 'satisfied'} onClick={() => setEnjoyment('satisfied')} />
                <EmojiReaction emoji="😄" label="Very Satisfied" selected={enjoyment === 'very satisfied'} onClick={() => setEnjoyment('very satisfied')} />
              </div>
            </div>

            <div>
              <Label htmlFor="topic" className="block mb-2">What did we talk about?</Label>
              <Textarea
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-gray-700 text-gray-100 border-gray-600 focus:border-gray-500"
                rows={4}
              />
            </div>

            <div>
              <Label className="block mb-2">Did I seem engaging in our conversation?</Label>
              <StarRating rating={engaging} setRating={setEngaging} />
            </div>

            <div>
              <Label className="block mb-2">Would you care to have a conversation with me again?</Label>
              <RadioGroup value={again} onValueChange={setAgain}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" className="border-gray-600 text-gray-100" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" className="border-gray-600 text-gray-100" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <p className="mt-8 text-center text-lg font-semibold">Thank you for completing this questionnaire!</p>
          <motion.div
            className="mt-8 flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Submit
            </Button>
          </motion.div>
        </Card>
      </form>
    </div>
  )
}

