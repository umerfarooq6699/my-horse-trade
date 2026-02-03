"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-width flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-horse-head"><path d="M5 18a7 7 0 0 0 14 0c0-4.4-1.6-4.9-6-5.5C10 12 10 10 9 8c-1-2-1-3-2-3-1 0-1 2-2 3-1 1-1 2-1 3 0 4-1 6-2 7 0 0 1 0 2 0"/></svg>
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            MyHorse<span className="text-blue-600">Trade</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="text-blue-600">Home</Link>
          <Link href="/horses" className="hover:text-blue-600 transition-colors">Horses</Link>
          <Link href="/marketplace" className="hover:text-blue-600 transition-colors">Marketplace</Link>
          <Link href="/events" className="hover:text-blue-600 transition-colors">Events</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          
          <Link href="/login" className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Login
          </Link>
          <Link href="/signup" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white absolute w-full p-4 flex flex-col gap-4 shadow-xl">
           <Link href="/" className="text-blue-600 font-medium">Home</Link>
           <Link href="/horses" className="text-gray-600 font-medium">Horses</Link>
           <Link href="/marketplace" className="text-gray-600 font-medium">Marketplace</Link>
           <Link href="/events" className="text-gray-600 font-medium">Events</Link>
           <Link href="/contact" className="text-gray-600 font-medium">Contact Us</Link>
           <div className="flex gap-2 pt-2">
             <Link href="/login" className="flex-1 text-center py-2 border border-gray-200 rounded-lg">Login</Link>
             <Link href="/signup" className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg">Sign Up</Link>
           </div>
        </div>
      )}
    </nav>
  );
}
