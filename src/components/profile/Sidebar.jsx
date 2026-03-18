"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";

const navItems = [
    {
        name: "Dashboard", href: "/profile", icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="15" rx="1" /></svg>
        )
    },
    {
        name: "My Horse", href: "/profile/my-horse", icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22l-4-4 4-4" /><path d="M16 18H8" /><path d="M3 3h10a2 2 0 0 1 2 2v1" /><path d="M3 21h10a2 2 0 0 0 2-2v-1" /><path d="M21 8H7" /><path d="M21 16H7" /></svg>
        )
    },
    {
        name: "Trade History", href: "/profile/trade-history", icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
        )
    },
    {
        name: "Favorites", href: "/profile/favorites", icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
        )
    },
    {
        name: "Settings", href: "/profile/settings", icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
        )
    },
];

export default function Sidebar({ isOpen, onClose }) {
    const pathname = usePathname();
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        router.push("/login");
    };

    return (
        <>
            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[85] lg:hidden transition-opacity duration-300"
                    onClick={onClose}
                />
            )}

            <aside className={`w-64 bg-white border-r border-gray-100 flex flex-col h-screen fixed left-0 top-0 pt-20 overflow-y-auto z-[90] 
                transition-all duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                [&::-webkit-scrollbar]:w-1.5
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-gray-500
                [&::-webkit-scrollbar-thumb]:rounded-full
                hover:[&::-webkit-scrollbar-thumb]:bg-gray-400`}>
                {/* User Profile Info */}
                <div className="p-2 pb-2 flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 mb-4">
                        <div className="w-full h-full rounded-full border-2 border-gray-50 flex items-center justify-center p-1 bg-white shadow-sm overflow-hidden">
                            <img
                                src="https://avatar.iran.liara.run/public/boy?username=Alex"
                                alt="Alex Rider"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-1 right-2 bg_color text-white p-1 rounded-full border-2 border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                    </div>
                    <h3 className="font-extrabold text-gray-900 text-base mb-0.5">Alex Rider</h3>
                    <p className="text-gray-400 text-xs font-bold mb-1.5 uppercase tracking-wide">Verified Seller</p>
                    <div className="flex items-center gap-1.5 text-yellow-400 text-xs font-black bg-yellow-50 px-3 py-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        <span>4.9</span>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="px-6 grid grid-cols-2 gap-3 mt-6 mb-5">
                    <div className="bg-gray-50/50 border border-gray-100/50 rounded-2xl p-2 text-center">
                        <div className="text-xl font-black text-gray-900 leading-none mb-1.5">14</div>
                        <div className="text-[9px] uppercase font-black text-gray-400 tracking-widest">Sold</div>
                    </div>
                    <div className="bg-gray-50/50 border border-gray-100/50 rounded-2xl p-2 text-center">
                        <div className="text-xl font-black text-gray-900 leading-none mb-1.5">5</div>
                        <div className="text-[9px] uppercase font-black text-gray-400 tracking-widest">Active</div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 px-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href === '/profile' && pathname === '/profile');
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-300 group ${isActive
                                    ? "bg-blue-50 text_color"
                                    : "text-slate-600 hover:bg-gray-50/50"
                                    }`}
                            >
                                <span className={`${isActive ? "text_color" : "text-slate-500 group-hover:text-slate-600"}`}>
                                    {item.icon}
                                </span>
                                <span className="text-[13px] font-semibold tracking-tight">{item.name}</span>
                            </Link>
                        )
                    })}
                </nav>

                {/* Footer Actions */}
                <div className="p-6 border-t border-gray-50">
                    <div className="bg_color rounded-[24px] p-5 mb-8 group cursor-pointer hover:scale-[1.02] transition-transform">
                        <h4 className="text-white font-black text-xs mb-1.5 tracking-tight">Premium Seller</h4>
                        <p className="text-blue-100 text-[10px] font-bold leading-normal mb-4 opacity-80">
                            Upgrade to get lower fees and featured listings.
                        </p>
                        <button className="bg-white text_color w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-colors">
                            View Plans
                        </button>
                    </div>

                    <button 
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-3 w-full py-2 text-gray-400 hover:text-red-500 transition-colors group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-500"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                        <span className="text-xs font-black uppercase tracking-widest">Log Out</span>
                    </button>
                </div>
            </aside>
        </>
    );
}
