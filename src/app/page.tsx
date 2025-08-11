'use client'

import { motion } from 'framer-motion'
import crabBg from '@/assets/crabBackground.png'
import '@/styles/background.css' // We'll put the animation here

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-8 text-gray-800">
      {/* Animated background */}
      <div
        className="absolute inset-0 bg-repeat animated-bg"
        style={{
          backgroundImage: `url(${crabBg.src})`,
          backgroundSize: '150px 150px', // Adjust tile density
        }}
      />

      {/* Foreground content */}
      <motion.div
        className="relative z-10 max-w-xl text-center -mt-[50px] bg-white/80 rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-5xl font-bold text-blue-900">SAIGON SEAFOOD</h1>
        <p className="mt-4 text-lg">
          Wholesale supplier of live seafood to supermarkets across the U.S. Based in Garden Grove, CA.
        </p>
      </motion.div>
    </main>
  )
}
