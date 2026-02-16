"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BarChart3,
    Users,
    FileText,
    DollarSign,
    CreditCard,
    AlertTriangle,
    Layers,
    Scale,
    MessageSquare,
    Settings,
    LogOut,
    ChevronDown,
    Layout
} from "lucide-react";

const mainItems = [
    { name: "Dashboard", href: "/admin", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Users", href: "/admin/users", icon: <Users className="w-5 h-5" /> },
    { name: "Listings", href: "/admin/listings", icon: <FileText className="w-5 h-5" /> },
    { name: "Transactions", href: "/admin/transactions", icon: <DollarSign className="w-5 h-5" /> },
    { name: "Subscriptions", href: "/admin/subscriptions", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Disputes", href: "/admin/disputes", icon: <AlertTriangle className="w-5 h-5" />, badge: 3 },
];

const contentItems = [
    { name: "Pages", href: "/admin/content/pages", icon: <Layout className="w-5 h-5" /> },
    {
        name: "Legal Docs",
        href: "#",
        icon: <Scale className="w-5 h-5" />,
        hasDropdown: true,
        subItems: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
    },
    { name: "Forum Categories", href: "/admin/content/forums", icon: <Layers className="w-5 h-5" /> },
];

const systemItems = [
    { name: "Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
    { name: "Logout", href: "#", icon: <LogOut className="w-5 h-5" /> },
];

export default function AdminSidebar({ isOpen, onClose }) {
    const pathname = usePathname();

    const NavItem = ({ name, href, icon, badge, hasDropdown, subItems }) => {
        const isActive = pathname === href;
        return (
            <div className="mb-1">
                <Link
                    href={href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                            ? "bg-[#2563EB] text-white shadow-lg shadow-blue-100"
                            : "text-[#64748B] hover:bg-gray-50 hover:text-gray-900"
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <span className={`${isActive ? "text-white" : "group-hover:text-gray-900"}`}>{icon}</span>
                        <span className="text-sm font-semibold tracking-tight">{name}</span>
                    </div>
                    {badge && (
                        <span className="bg-[#EF4444] text-white text-[10px] font-bold px-2 py-0.5 rounded-full ring-2 ring-white">
                            {badge}
                        </span>
                    )}
                    {hasDropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${isActive ? "rotate-0" : "-rotate-90 opacity-50"}`} />
                    )}
                </Link>
                {hasDropdown && (
                    <div className="pl-12 mt-1 space-y-1">
                        {subItems.map((sub, i) => (
                            <Link
                                key={i}
                                href="#"
                                className="block py-2 text-xs font-medium text-[#64748B] hover:text-[#2563EB] transition-colors"
                            >
                                {sub}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
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

            <aside className={`w-72 bg-white border-r border-[#F1F5F9] flex flex-col h-screen fixed left-0 top-0 overflow-y-auto z-[90] 
        transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        [&::-webkit-scrollbar]:w-1.5
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:bg-gray-200
        [&::-webkit-scrollbar-thumb]:rounded-full`}>

                {/* Logo */}
                <div className="p-8 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L4 9V21L12 17L20 21V9L12 2Z" fill="white" />
                            </svg>
                        </div>
                        <h1 className="text-[20px] font-black tracking-tighter text-[#1e293b]">MyHorseTrade</h1>
                    </div>
                </div>

                {/* Navigation Sections */}
                <div className="flex-1 px-4 py-4 space-y-8">
                    <div>
                        <p className="px-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.15em] mb-4">Main Menu</p>
                        {mainItems.map((item, i) => <NavItem key={i} {...item} />)}
                    </div>

                    <div>
                        <p className="px-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.15em] mb-4">Content Manager</p>
                        {contentItems.map((item, i) => <NavItem key={i} {...item} />)}
                    </div>

                    <div>
                        <p className="px-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.15em] mb-4">System</p>
                        {systemItems.map((item, i) => <NavItem key={i} {...item} />)}
                    </div>
                </div>

                {/* User Profile */}
                <div className="p-6 border-t border-[#F8FAFC]">
                    <div className="flex items-center gap-3 p-2">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                            <img src="https://avatar.iran.liara.run/public/boy?username=Admin" alt="Admin" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-[#1E293B] truncate leading-tight">Admin User</h4>
                            <p className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider truncate">Super Admin</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
