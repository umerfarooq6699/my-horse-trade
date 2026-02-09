"use client";

import { useState } from "react";

export default function ProfileDetails() {
    const [notifications, setNotifications] = useState({
        messages: true,
        listings: true
    });

    return (
        <div className="bg-white rounded-[32px] p-4 sm:p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-[600] text-gray-900 tracking-tight">Profile Details</h2>
                <button className="text-sm font-bold text_color hover:opacity-80">Save Changes</button>
            </div>

            <div className="space-y-6">
                {/* Display Name */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-widest pl-1">Display Name</label>
                    <input
                        type="text"
                        defaultValue="Alex Rider"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-sans"
                    />
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-widest pl-1">Email Address</label>
                    <input
                        type="email"
                        defaultValue="alex.rider@example.com"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-sans"
                    />
                </div>

                {/* Location */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-widest pl-1">Location</label>
                    <div className="relative">
                        <input
                            type="text"
                            defaultValue="Lexington, KY"
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-12 py-4 text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-sans"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                </div>

                {/* Notifications */}
                <div className="pt-6 space-y-5">
                    <h4 className="text-sm font-extrabold text-gray-900 pl-1">Notifications</h4>

                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-500">New messages</span>
                        <button
                            onClick={() => setNotifications({ ...notifications, messages: !notifications.messages })}
                            className={`w-12 h-6 px-1 rounded-full flex items-center transition-all ${notifications.messages ? 'bg_color' : 'bg-gray-200'
                                }`}
                        >
                            <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${notifications.messages ? 'translate-x-6' : 'translate-x-0'
                                }`}></div>
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-500">Listing updates</span>
                        <button
                            onClick={() => setNotifications({ ...notifications, listings: !notifications.listings })}
                            className={`w-12 h-6 px-1 rounded-full flex items-center transition-all ${notifications.listings ? 'bg_color' : 'bg-gray-200'
                                }`}
                        >
                            <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${notifications.listings ? 'translate-x-6' : 'translate-x-0'
                                }`}></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
