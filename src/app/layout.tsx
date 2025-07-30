import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { ReactNode } from 'react'

export const metadata = {
  title: 'Saigon Seafood',
  description: 'Wholesale seafood supplier',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
