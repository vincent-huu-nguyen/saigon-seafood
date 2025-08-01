'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

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
    <>
      <nav className="bg-blue-900 text-white px-6 py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xl font-semibold tracking-wide">SAIGON SEAFOOD</span>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:underline ${pathname === item.href ? 'font-bold underline' : ''
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Hamburger icon */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile nav */}
        <div
          className={`transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
        >
          <div className="flex flex-col gap-4 mt-4 px-6 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`hover:underline ${pathname === item.href ? 'font-bold underline' : ''
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Inverted wavy bottom below navbar */}
      <div className="wave-container -scale-y-100 -mt-1">
        <div className="wave-strip">
          <svg
            className="w-full h-full"
            viewBox="0 0 1620 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#1e3a8a"
              d="M0,160 C180,80 360,240 540,160 C720,80 900,240 1080,160 C1260,80 1440,240 1620,160 L1620,320 L0,320 Z"
            />
          </svg>
          <svg
            className="w-full h-full"
            viewBox="0 0 1620 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#1e3a8a"
              d="M0,160 C180,80 360,240 540,160 C720,80 900,240 1080,160 C1260,80 1440,240 1620,160 L1620,320 L0,320 Z"
            />
          </svg>
        </div>
      </div>
    </>
  )
}
