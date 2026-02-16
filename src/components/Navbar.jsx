"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // Mock authentication state
    const isLoggedIn = false;

    // Links for Guest
    const guestLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Marketplace", href: "/marketplace" },
        { name: "Subscriptions", href: "/subscriptions" },
        { name: "Profile", href: "/profile" },
        { name: "Contact Us", href: "/contact" },
    ];

    // Links for Logged In
    const authLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Marketplace", href: "/marketplace" },
        { name: "Subscription", href: "/subscriptions" },
        { name: "Buy Horses", href: "/marketplace" },
        { name: "Sell Horse", href: "/sell-horse" },
        { name: "Auctions", href: "/marketplace" },
        { name: "Community", href: "/marketplace" },
    ];

    const currentLinks = isLoggedIn ? authLinks : guestLinks;

    return (
        <nav className="w-full bg-white border-b border-gray-100 fixed top-0 left-0 z-[100] transition-all duration-300">
            <div className={`container-width mx-auto flex items-center justify-between h-20 px-6 lg:px-14 ${isLoggedIn ? 'max-w-[1600px]' : ''}`}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg_color p-1.5 rounded-lg shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-horse-head"><path d="M5 18a7 7 0 0 0 14 0c0-4.4-1.6-4.9-6-5.5C10 12 10 10 9 8c-1-2-1-3-2-3-1 0-1 2-2 3-1 1-1 2-1 3 0 4-1 6-2 7 0 0 1 0 2 0" /></svg>
                    </div>
                    <span className="text-xl font-black text-[#1e293b] tracking-tight">
                        MyHorse<span className="text_color">Trade</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {currentLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-[13px] font-bold transition-colors ${link.name === 'Home' || (isLoggedIn && link.name === 'Marketplace') ? 'text_color' : 'text-gray-400 hover:text_color'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-8">
                    {isLoggedIn ? (
                        <div className="flex items-center gap-6">
                            {/* Full Search Bar */}
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-gray-50/50 border border-gray-100 rounded-2xl px-12 py-3 text-[13px] font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring_color focus:ring-opacity-20 transition-all w-56 xl:w-80"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </div>

                            {/* Icons Collection */}
                            <div className="flex items-center gap-4">
                                <button className="relative p-3 bg-gray-50/50 rounded-2xl text-gray-400 hover:text_color transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8z" /><path d="m22 7-10 7L2 7" /></svg>
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg_color border-2 border-white rounded-full text-[10px] text-white flex items-center justify-center font-black">3</span>
                                </button>
                                <button className="relative p-3 bg-gray-50/50 rounded-2xl text-gray-400 hover:text_color transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                    <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
                                </button>
                                <div className="w-11 h-11 rounded-full border-2 border-white shadow-md overflow-hidden cursor-pointer hover:scale-110 transition-transform">
                                    <img
                                        src="https://avatar.iran.liara.run/public/boy?username=Alex"
                                        alt="Alex Rider"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4 xl:gap-6">
                            {/* Search Icon Only */}
                            <button className="p-2 text-gray-400 hover:text_color transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </button>
                            {/* Login Button with Icon */}
                            <Link href="/signup" className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-gray-700 bg-white border border_color rounded-xl hover:bg-theme-50 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
                                Signup
                            </Link>
                            {/* Sign In Button (Filled) */}
                            <Link href="/login" className="px-8 py-3 text-sm font-bold text-white bg_color rounded-xl hover:opacity-90 transition-all shadow-lg shadow-blue-100 transform active:scale-[0.98]">
                                Signin
                            </Link>
                        </div>
                    )}
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
                        Home <span className="w-1.5 h-1.5 rounded-full bg_color opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-500 font-bold uppercase tracking-wider text-sm hover:text_color transition-colors">About</Link>
                    <Link href="/marketplace" onClick={() => setIsOpen(false)} className="text-gray-500 font-bold uppercase tracking-wider text-sm hover:text_color transition-colors">Marketplace</Link>
                    <Link href="/subscriptions" onClick={() => setIsOpen(false)} className="text-gray-500 font-bold uppercase tracking-wider text-sm hover:text_color transition-colors">Subscriptions</Link>
                    <Link href="/profile" onClick={() => setIsOpen(false)} className="text-gray-500 font-bold uppercase tracking-wider text-sm hover:text_color transition-colors">Profile</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-500 font-bold uppercase tracking-wider text-sm hover:text_color transition-colors">Contact Us</Link>

                    <div className="flex flex-col gap-3 pt-4 border-t border-gray-50">
                        <Link href="/signup" onClick={() => setIsOpen(false)} className="text-center py-4 text-gray-900 font-bold text-sm border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                            Signup
                        </Link>
                        <Link href="/login" onClick={() => setIsOpen(false)} className="text-center py-4 bg_color text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98]">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
