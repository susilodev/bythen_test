
'use client'

import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'

import { useSidebar } from "@/components/ui/sidebar"

export default function MobileNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const { toggleSidebar } = useSidebar()

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md md:hidden">
      <div className="flex items-center justify-between h-16 px-4">
        <button className="p-2" aria-label="Menu">
          <Menu className="w-6 h-6" onClick={toggleSidebar} />
        </button>
        <div className="flex items-center">
          <button className="p-2" onClick={toggleSearch} aria-label="Search">
            <Search className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-16 bg-white transition-transform duration-300 ease-in-out ${isSearchOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center h-full px-4">
          <button className="p-2 mr-2" aria-label="Menu">
            <Menu className="w-6 h-6" />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow h-10 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 ml-2" onClick={toggleSearch} aria-label="Close search">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}

