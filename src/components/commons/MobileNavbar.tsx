'use client';

import { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';

import { useSidebar } from '@/components/ui/sidebar';

export default function MobileNavbar({ value, onChange }: any) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const { toggleSidebar } = useSidebar();

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-md md:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        <button className="p-2" aria-label="Menu">
          <Menu className="size-6" onClick={toggleSidebar} />
        </button>
        <div className="flex items-center">
          <button className="p-2" onClick={toggleSearch} aria-label="Search">
            <Search className="size-6" />
          </button>
        </div>
      </div>
      <div
        className={`absolute left-0 top-0 h-16 w-full bg-white transition-transform duration-300 ease-in-out ${
          isSearchOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex h-full items-center px-4">
          <button className="mr-2 p-2" aria-label="Menu">
            <Menu className="size-6" />
          </button>
          <input
            type="text"
            value={value}
            placeholder="Search..."
            className="h-10 grow rounded-md border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={onChange}
          />
          <button className="ml-2 p-2" onClick={toggleSearch} aria-label="Close search">
            <X className="size-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
