'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import dungcrab from '@/assets/dungcrab.JPEG';
import bluecrab from '@/assets/bluecrab.webp';
import rshrimp from '@/assets/rshrimp.JPEG';
import crawfish from '@/assets/crawfish.jpg';
import rockcrab from '@/assets/rockcrab.webp';
import fishfry from '@/assets/fishfry.jpg';

const products = [
    {
        name: 'Dungeness Crab',
        location: 'Canada / San Francisco',
        image: dungcrab,
    },
    {
        name: 'Blue Crabs',
        location: 'Louisiana',
        image: bluecrab,
    },
    {
        name: 'Crawfish',
        location: 'Louisiana',
        image: crawfish,
        
    },
    {
        name: 'Rock Crabs',
        location: 'California',
        image: rockcrab,
    },
    {
        name: 'Ridgeback Shrimps',
        location: 'California',
        image: rshrimp,
    },
    {
        name: 'Louisiana Fish Fry',
        location: '',
        image: fishfry,
    },
]

export default function ProductsPage() {
    return (
        <main className="bg-white text-gray-800 min-h-screen p-8">
            <motion.h1
                className="text-4xl font-bold text-blue-900 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}>
                Our Products
            </motion.h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                            width={300}
                            height={200}
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-blue-900">{product.name}</h2>
                            {product.location && (
                                <p className="text-sm text-gray-600"> {product.location}</p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    )
}
