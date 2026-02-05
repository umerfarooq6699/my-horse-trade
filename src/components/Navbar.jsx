"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100] transition-all duration-300">
            <div className="container-width mx-auto flex items-center justify-between h-20 px-6 lg:px-14">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg_color p-1.5 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-horse-head"><path d="M5 18a7 7 0 0 0 14 0c0-4.4-1.6-4.9-6-5.5C10 12 10 10 9 8c-1-2-1-3-2-3-1 0-1 2-2 3-1 1-1 2-1 3 0 4-1 6-2 7 0 0 1 0 2 0" /></svg>
                    </div>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">
                        MyHorse<span className="text_color">Trade</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-gray-500 uppercase tracking-wider">
                    <Link href="/" className="text_color">Home</Link>
                    <Link href="/about" className="hover:text-[var(--theme-color)] transition-colors">About</Link>
                    <Link href="/marketplace" className="hover:text-[var(--theme-color)] transition-colors">Marketplace</Link>
                    <Link href="/subscriptions" className="hover:text-[var(--theme-color)] transition-colors">Subscriptions</Link>
                    <Link href="/profile" className="hover:text-[var(--theme-color)] transition-colors">Profile</Link>
                    <Link href="/contact" className="hover:text-[var(--theme-color)] transition-colors">Contact Us</Link>
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <button className="p-2 text-gray-400 hover:text-[var(--theme-color)] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </button>
                    <Link href="/login" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
                        Login
                    </Link>
                    <Link href="/signup" className="px-7 py-3 text-sm font-bold text-white bg_color rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 transform active:scale-[0.98]">
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-gray-900 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-5">
                        <span className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
                        <span className={`absolute w-full h-0.5 bg-current transition-all duration-300 top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-t border-gray-100 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 flex flex-col gap-5">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-900 font-bold uppercase tracking-wider text-sm flex justify-between items-center group">
                        Home <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-500 font-bold uppercase tracking-wider text-sm hover:text-blue-600 transition-colors">About</Link>
                    <Link href="/marketplace" onClick={() => setIsOpen(false)} className="text-gray-500 font-bold uppercase tracking-wider text-sm hover:text-blue-600 transition-colors">Marketplace</Link>
                    <Link href="/subscriptions" onClick={() => setIsOpen(false)} className="text-gray-500 font-bold uppercase tracking-wider text-sm hover:text-blue-600 transition-colors">Subscriptions</Link>
                    <Link href="/profile" onClick={() => setIsOpen(false)} className="text-gray-500 font-bold uppercase tracking-wider text-sm hover:text-blue-600 transition-colors">Profile</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-500 font-bold uppercase tracking-wider text-sm hover:text-blue-600 transition-colors">Contact Us</Link>

                    <div className="flex flex-col gap-3 pt-4 border-t border-gray-50">
                        <Link href="/login" onClick={() => setIsOpen(false)} className="text-center py-4 text-gray-900 font-bold text-sm border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                            Login
                        </Link>
                        <Link href="/signup" onClick={() => setIsOpen(false)} className="text-center py-4 bg_color text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98]">
                            Join Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
