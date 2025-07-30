'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start pt-15 p-8 bg-white text-gray-800">
            <motion.div
                className="max-w-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}>
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">About Us</h1>
                    <p className="mb-2">
                        SAIGON SEAFOOD is a wholesale seafood supplier based in Garden Grove, CA. We provide live seafood to supermarkets across the U.S.
                    </p>
                    <p className="mb-2">📍 12732 Anabel Avenue, Garden Grove, CA 92843</p>
                    <p className="mb-2">📞 (714) 785-2526</p>

                    <div className="mt-6">
                        <h2 className="font-semibold">Leadership</h2>
                        <p>CEO: Joseph Ngo</p>
                        <p>CFO & Secretary: Thanh Ha</p>
                    </div>

                    <div className="mt-6">
                        <h2 className="font-semibold">Drivers</h2>
                        <p>Tai Pham</p>
                        <p>Dung Vu</p>
                        <p>Jimmy Dam</p>
                    </div>
            </motion.div>
        </main>
    )
}
