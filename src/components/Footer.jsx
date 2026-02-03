import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="container-width px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18a7 7 0 0 0 14 0c0-4.4-1.6-4.9-6-5.5C10 12 10 10 9 8c-1-2-1-3-2-3-1 0-1 2-2 3-1 1-1 2-1 3 0 4-1 6-2 7 0 0 1 0 2 0" /></svg>
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                MyHorse<span className="text-blue-500">Trade</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            The world's premier marketplace for buying and selling elite horses. Trusted by thousands of breeders and riders globally.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Platform</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/horses" className="hover:text-white transition-colors">Browse Horses</Link></li>
                            <li><Link href="/auctions" className="hover:text-white transition-colors">Live Auctions</Link></li>
                            <li><Link href="/sell" className="hover:text-white transition-colors">Sell a Horse</Link></li>
                            <li><Link href="/transport" className="hover:text-white transition-colors">Transport</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Stay Updated</h4>
                        <p className="text-xs text-gray-500 mb-4">Subscribe to our newsletter for the latest top listings.</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Email address" className="bg-gray-800 border border-gray-700 text-white px-4 py-2.5 rounded-lg text-sm w-full focus:outline-none focus:border-blue-600 transition-colors" />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2026 Valueans Software. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
