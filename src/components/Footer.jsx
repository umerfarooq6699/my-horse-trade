"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[rgb(15,23,42)] border-t border-gray-100 pt-16 pb-8">
            <div className="container-width px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg_color p-1.5 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-horse-head"><path d="M5 18a7 7 0 0 0 14 0c0-4.4-1.6-4.9-6-5.5C10 12 10 10 9 8c-1-2-1-3-2-3-1 0-1 2-2 3-1 1-1 2-1 3 0 4-1 6-2 7 0 0 1 0 2 0" /></svg>
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">
                                MyHorse<span className="text_color">Trade</span>
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The world's premier marketplace for buying and selling elite horses. Trusted by thousands of breeders and riders globally.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-[var(--theme-color)] transition-colors">Home</Link></li>
                            <li><Link href="#" className="hover:text-[var(--theme-color)] transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-[var(--theme-color)] transition-colors">Marketplace</Link></li>
                            <li><Link href="#" className="hover:text-[var(--theme-color)] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-[var(--theme-color)] transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-[var(--theme-color)] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-[var(--theme-color)] transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-[var(--theme-color)] transition-colors">Trust & Safety</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Newsletter</h4>
                        <p className="text-sm text-gray-500 mb-4">Subscribe to get the latest horse listings.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:border-transparent"
                            />
                            <button className="bg_color text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© 2024 MyHorseTrade. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-gray-600">Facebook</Link>
                        <Link href="#" className="hover:text-gray-600">Instagram</Link>
                        <Link href="#" className="hover:text-gray-600">Twitter</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
