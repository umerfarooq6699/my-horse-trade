"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
    LayoutGrid,
    Users,
    ListTodo,
    ReceiptText,
    Monitor,
    Gavel,
    Layers,
    MessageSquare,
    Settings,
    LogOut,
    ChevronDown,
    Layout,
    PawPrint
} from "lucide-react";

const mainItems = [
    { name: "Dashboard", href: "/admin", icon: <LayoutGrid className="w-5 h-5" /> },
    { name: "Users", href: "/admin/users", icon: <Users className="w-5 h-5" /> },
    { name: "Listings", href: "/admin/listings", icon: <ListTodo className="w-5 h-5" /> },
    { name: "Transactions", href: "/admin/transactions", icon: <ReceiptText className="w-5 h-5" /> },
    { name: "Subscriptions", href: "/admin/subscriptions", icon: <Monitor className="w-5 h-5" /> },
    { name: "Disputes", href: "/admin/disputes", icon: <Gavel className="w-5 h-5" />, badge: 3 },
];

const contentItems = [
    { name: "Pages", href: "/admin/content/pages", icon: <Layout className="w-5 h-5" /> },
    {
        name: "Legal Docs",
        href: "/admin/legal",
        icon: <Gavel className="w-5 h-5" />,
        hasDropdown: true,
        subItems: [
            { name: "Privacy Policy", href: "/admin/legal/privacy-policy" },
            { name: "Terms of Service", href: "/admin/legal/terms-of-service" },
            { name: "Cookie Policy", href: "/admin/legal/cookie-policy" }
        ]
    },
    { name: "Forum Categories", href: "/admin/content/forums", icon: <MessageSquare className="w-5 h-5" /> },
];

const systemItems = [
    { name: "Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
    { name: "Logout", href: "#", icon: <LogOut className="w-5 h-5" /> },
];

export default function AdminSidebar({ isOpen, onClose }) {
    const pathname = usePathname();
    const [openDropdowns, setOpenDropdowns] = useState({ "Legal Docs": true });

    // Keep dropdowns open if child is active
    useEffect(() => {
        const initialStates = {};
        [...mainItems, ...contentItems, ...systemItems].forEach(item => {
            if (item.hasDropdown && item.subItems.some(sub => pathname === sub.href)) {
                initialStates[item.name] = true;
            }
        });
        setOpenDropdowns(prev => ({ ...prev, ...initialStates }));
    }, [pathname]);

    const toggleDropdown = (name, e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenDropdowns(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const NavItem = ({ name, href, icon, badge, hasDropdown, subItems }) => {
        const isSelfActive = pathname === href;
        const isChildActive = subItems && subItems.some(sub => pathname === sub.href);
        const isActive = isSelfActive; // Highlight only if exactly this route is active
        const isExpanded = openDropdowns[name];

        return (
            <div className="mb-1">
                <Link
                    href={hasDropdown ? "#" : href}
                    onClick={(e) => hasDropdown && toggleDropdown(name, e)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                        ? "bg-[#2563EB] text-white shadow-lg shadow-blue-100"
                        : "text-[#64748B] hover:bg-gray-50 hover:text-gray-900"
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <span className={`${isActive ? "text-white" : "group-hover:text-gray-900"} ${isChildActive && !isActive ? "text-[#2563EB]" : ""}`}>{icon}</span>
                        <span className={`text-sm font-semibold tracking-tight ${isChildActive && !isActive ? "text-[#1E293B]" : ""}`}>{name}</span>
                    </div>
                    {badge && (
                        <span className="bg-[#EF4444] text-white text-[10px] font-bold px-2 py-0.5 rounded-full ring-2 ring-white">
                            {badge}
                        </span>
                    )}
                    {hasDropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-0" : "-rotate-90 opacity-50"} ${isChildActive && !isActive ? "text-[#1E293B]" : ""}`} />
                    )}
                </Link>
                {hasDropdown && (
                    <div className={`pl-12 mt-1 space-y-1 relative transition-all duration-200 before:absolute before:left-[26px] before:top-0 before:bottom-4 before:w-[1px] before:bg-[#F1F5F9] ${isExpanded ? "block" : "hidden"}`}>
                        {subItems.map((sub, i) => {
                            const isSubActive = pathname === sub.href;
                            return (
                                <Link
                                    key={i}
                                    href={sub.href}
                                    className={`block py-2 text-sm font-medium transition-colors ${isSubActive ? "text-[#2563EB]" : "text-[#94A3B8] hover:text-[#2563EB]"}`}
                                >
                                    {sub.name}
                                </Link>
                            );
                        })}
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
                    <Link href="/admin" className="flex items-center gap-3">
                        <PawPrint className="w-8 h-8 text-[#2563EB] fill-[#2563EB]" />
                        <h1 className="text-[20px] font-black tracking-tighter text-[#1e293b]">MyHorseTrade</h1>
                    </Link>
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
