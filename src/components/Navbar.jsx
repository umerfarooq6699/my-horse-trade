"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { getUserDetails } from "@/redux/slices/profileSlice";
import { API_BASE_URL } from "@/utils/urls";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { isAuthenticated: isLoggedIn, user } = useSelector((state) => state.auth);
    const profileUser = useSelector((state) => state.profile.user);
    const pathname = usePathname();
    const dispatch = useDispatch();

    useEffect(() => {
        setMounted(true);
        if (isLoggedIn && !profileUser) {
            dispatch(getUserDetails());
        }
    }, [isLoggedIn, profileUser, dispatch]);

    const getImageUrl = (imagePath, fallbackName) => {
        if (!imagePath) return "https://avatar.iran.liara.run/public/boy?username=" + fallbackName;
        if (imagePath.startsWith("http")) return imagePath.replace("http://hassanakhtar.pythonanywhere.com", "https://hassanakhtar.pythonanywhere.com");
        return `${API_BASE_URL || "http://localhost:8000"}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
    };

    const displayName = profileUser?.user_name || profileUser?.name || user?.user_name || "User";
    const shortName = displayName.split(" ")[0];
    const displayImage = getImageUrl(profileUser?.profile_photo || user?.avatar, displayName);

    if (!mounted) {
        return (
            <nav className="w-full bg-white border-b border-gray-100 fixed top-0 left-0 z-[100]">
                <div className="container-width mx-auto flex items-center justify-between h-20 px-6 lg:px-14">
                    {/* Placeholder for SEO/Initial Load to avoid jumps if possible, 
                        but usually we just return the basic structure */}
                    <div className="flex items-center gap-2">
                        <div className="bg_color p-1.5 rounded-lg shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 18a7 7 0 0 0 14 0c0-4.4-1.6-4.9-6-5.5C10 12 10 10 9 8c-1-2-1-3-2-3-1 0-1 2-2 3-1 1-1 2-1 3 0 4-1 6-2 7 0 0 1 0 2 0" /></svg>
                        </div>
                        <span className="text-xl font-black text-[#1e293b] tracking-tight">
                            MyHorse<span className="text_color">Trade</span>
                        </span>
                    </div>
                </div>
            </nav>
        );
    }

    // Links for Guest
    const guestLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Marketplace", href: "/marketplace" },
        { name: "Subscriptions", href: "/subscriptions" },
        { name: "Contact Us", href: "/contact" },
    ];

    // Links for Logged In
    const authLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Subscription", href: "/subscriptions" },
        { name: "Buy Horses", href: "/marketplace" },
        { name: "Sell Horse", href: "/sell-horse" },
        { name: "Profile", href: "/profile" },
        { name: "Contact Us", href: "/contact" },
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

                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {currentLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[13px] font-bold transition-all ${isActive
                                    ? 'text_color'
                                    : 'text-gray-400 hover:text_color'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-8">
                    {isLoggedIn ? (
                        <div className="flex items-center gap-6">
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
                                <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform group">
                                    <div className="w-9 h-9 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-100">
                                        <img
                                            src={displayImage}
                                            alt={displayName}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://avatar.iran.liara.run/public/boy?username=" + displayName;
                                            }}
                                        />
                                    </div>
                                    <span className="text-[11px] font-bold text-gray-600 group-hover:text_color mt-1">{shortName}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4 xl:gap-6">
                            {/* Login Button with Icon */}
                            <Link href="/signup" className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-gray-700 bg-white border border_color rounded-xl hover:bg-theme-50 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
                                Sign up
                            </Link>
                            {/* Sign In Button (Filled) */}
                            <Link href="/login" className="px-8 py-3 text-sm font-bold text-white bg_color rounded-xl hover:opacity-90 transition-all shadow-lg shadow-blue-100 transform active:scale-[0.98]">
                                Sign in
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
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-t border-gray-100 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 flex flex-col gap-5">
                    {currentLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`font-bold uppercase tracking-wider text-sm flex justify-between items-center group transition-all ${isActive
                                    ? 'text_color'
                                    : 'text-gray-500 hover:text_color'
                                    }`}
                            >
                                {link.name}
                                <span className={`w-1.5 h-1.5 rounded-full bg_color transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                    }`}></span>
                            </Link>
                        );
                    })}

                    <div className="flex flex-col gap-3 pt-4 border-t border-gray-50">
                        {isLoggedIn ? (
                            <div className="flex items-center justify-between bg-gray-50/50 p-4 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-gray-100">
                                        <img
                                            src={displayImage}
                                            alt={displayName}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://avatar.iran.liara.run/public/boy?username=" + displayName;
                                            }}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-gray-900 line-clamp-1">{displayName}</span>
                                        <span className="text-[10px] text-gray-500 line-clamp-1">{profileUser?.email || user?.email || "View Profile"}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="relative p-2 bg-white rounded-lg text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8z" /><path d="m22 7-10 7L2 7" /></svg>
                                        <span className="absolute -top-1 -right-1 w-4 h-4 bg_color rounded-full text-[8px] text-white flex items-center justify-center font-black">3</span>
                                    </button>
                                    <button className="relative p-2 bg-white rounded-lg text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Link href="/signup" onClick={() => setIsOpen(false)} className="text-center py-4 text-gray-900 font-bold text-sm border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                                    Signup
                                </Link>
                                <Link href="/login" onClick={() => setIsOpen(false)} className="text-center py-4 bg_color text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98]">
                                    Login
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
