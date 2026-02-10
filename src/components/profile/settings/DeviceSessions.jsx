"use client";

import { LogOut, Monitor, Smartphone, Laptop } from "lucide-react";

export default function DeviceSessions() {
    const sessions = [
        {
            device: "Chrome on Windows",
            type: "desktop",
            location: "New York, USA • 192.168.1.1",
            status: "Active now",
            isCurrent: true
        },
        {
            device: "iPhone 13 Pro",
            type: "mobile",
            location: "New York, USA • 192.168.1.5 • Last active 2 hours ago",
            status: null,
            isCurrent: false
        },
        {
            device: "MacBook Pro",
            type: "laptop",
            location: "London, UK • 10.0.0.42 • Last active 3 days ago",
            status: null,
            isCurrent: false
        }
    ];

    const getIcon = (type) => {
        switch (type) {
            case "mobile": return <Smartphone size={20} />;
            case "laptop": return <Laptop size={20} />;
            default: return <Monitor size={20} />;
        }
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-gray-900">Where You're Logged In</h3>
                <button className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors">
                    Log out of all devices
                </button>
            </div>

            <div className="space-y-6">
                {sessions.map((session, index) => (
                    <div key={index} className="flex items-start gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                        <div className="text-gray-400 mt-1">
                            {getIcon(session.type)}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-sm font-bold text-gray-900">{session.device}</h4>
                                {session.isCurrent && (
                                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded border border-green-200 uppercase tracking-wide">
                                        THIS DEVICE
                                    </span>
                                )}
                            </div>
                            <p className="text-xs text-gray-500">
                                {session.location} {session.status && <span className="text-green-600">• {session.status}</span>}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
