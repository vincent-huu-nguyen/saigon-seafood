'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type ContactFormData = {
    name: string
    email: string
    message: string
}

export default function ContactPage() {
    const [form, setForm] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
    })

    const [errors, setErrors] = useState<Partial<ContactFormData>>({})

    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

    const handleSubmit = () => {
        const newErrors: Partial<ContactFormData> = {}

        if (!form.name) newErrors.name = 'Name is required'
        if (!form.email) newErrors.email = 'Email is required'
        else if (!isValidEmail(form.email)) newErrors.email = 'Enter a valid email'
        if (!form.message) newErrors.message = 'Message is required'

        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            return
        }

        alert('Form submitted! (Email sending not set up yet)')
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-start pt-12 p-8 bg-white text-gray-800">
            <motion.div
                className="max-w-xl w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h1 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h1>

                <div className="mb-6 text-left">
                    <p><strong>Phone:</strong> (714) 785-2526</p>
                    <p><strong>Address:</strong> 12732 Anabel Avenue, Garden Grove, CA 92843</p>
                </div>

                <form
                    className="space-y-4 text-left"
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}
                >
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                            placeholder="Your name"
                        />
                        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                            placeholder="you@example.com"
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                            rows={4}
                            placeholder="Your message..."
                        />
                        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
                    >
                        Send
                    </button>
                </form>
            </motion.div>
        </main>
    )
}
