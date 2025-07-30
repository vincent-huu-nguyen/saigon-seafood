'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-gray-800">
      <motion.div
        className="max-w-xl text-center -mt-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}>
        <h1 className="text-5xl font-bold text-blue-900 text-center">SAIGON SEAFOOD</h1>
        <p className="mt-4 text-lg text-center max-w-xl">
          Wholesale supplier of live seafood to supermarkets across the U.S. Based in Garden Grove, CA.
        </p>
      </motion.div>
    </main>
  );
}
