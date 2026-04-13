"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "@/redux/slices/profileSlice";
import { API_BASE_URL } from "@/utils/urls";

const settingsNavItems = [
    {
        name: "General",
        href: "/profile/settings/general",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                <path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" />
            </svg>
        )
    },
    {
        name: "Login & Security",
        href: "/profile/settings/security",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        )
    },
    {
        name: "Notifications",
        href: "/profile/settings/notifications",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
        )
    },
    {
        name: "Billing",
        href: "/profile/settings/billing",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
        )
    },
];

export default function SettingsSidebar() {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.profile);

    useEffect(() => {
        if (!user) {
            dispatch(getUserDetails());
        }
    }, [dispatch, user]);

    const getImageUrl = (imagePath) => {
        if (!imagePath) return "https://avatar.iran.liara.run/public/boy?username=" + (user?.name || user?.user_name || "User");
        if (imagePath.startsWith("http")) return imagePath.replace("http://hassanakhtar.pythonanywhere.com", "https://hassanakhtar.pythonanywhere.com");
        return `${API_BASE_URL || "http://localhost:8000"}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
    };

    const displayName = user?.name || user?.user_name || "User";

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
            {/* Profile Section */}
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                    <img
                        src={getImageUrl(user?.profile_photo)}
                        alt={displayName}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://avatar.iran.liara.run/public/boy?username=" + displayName;
                        }}
                    />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-1">{displayName}</h3>
                    <p className="text-xs text-gray-500">Member</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
                {settingsNavItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 ${isActive
                                ? "bg-blue-50 text_color font-semibold"
                                : "text-slate-600 hover:bg-gray-50 font-medium"
                                }`}
                        >
                            <span className={isActive ? "text_color" : "text-slate-500"}>
                                {item.icon}
                            </span>
                            <span className="text-[13px] font-semibold">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

