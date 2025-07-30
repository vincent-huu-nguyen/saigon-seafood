'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-xl font-semibold tracking-wide">SAIGON SEAFOOD</span>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`hover:underline ${
                pathname === item.href ? 'font-bold underline' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger icon */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile nav with animation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 mt-4 px-6 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`hover:underline ${
                pathname === item.href ? 'font-bold underline' : ''
              }`}
              onClick={() => setIsOpen(false)} // close on click
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
