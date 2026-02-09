"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="h-24 bg-transparent flex items-center justify-between px-10">
            {/* Nav Links */}
            <div className="flex items-center gap-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <Link href="/" className="hover:text_color transition-colors">Home</Link>
                <Link href="/about" className="hover:text_color transition-colors">About</Link>
                <Link href="/marketplace" className="hover:text_color transition-colors text_color font-extrabold">Marketplace</Link>
                <Link href="/subscriptions" className="hover:text_color transition-colors">Subscription</Link>
                <Link href="/buy" className="hover:text_color transition-colors">Buy Horses</Link>
                <Link href="/sell" className="hover:text_color transition-colors">Sell Horse</Link>
                <Link href="/auctions" className="hover:text_color transition-colors">Auctions</Link>
                <Link href="/community" className="hover:text_color transition-colors">Community</Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
                {/* Search Bar */}
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Search listings..."
                        className="bg-gray-50 border border-gray-100 rounded-xl px-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring_color focus:bg-white transition-all w-64 group-hover:w-72"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <button className="relative p-2.5 bg-gray-50 rounded-xl text-gray-500 hover:text_color hover:bg-blue-50 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-orange-500 border-2 border-white rounded-full text-[10px] text-white flex items-center justify-center font-bold italic">2</span>
                    </button>
                    <button className="p-2.5 bg-gray-50 rounded-xl text-gray-500 hover:text_color hover:bg-blue-50 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                    </button>
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border_color flex items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                        <img
                            src="https://avatar.iran.liara.run/public/boy?username=Alex"
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
