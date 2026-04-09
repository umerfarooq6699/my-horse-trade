"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentActivity } from "@/redux/slices/adminSlice";
import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

export default function RecentActivity() {
    const dispatch = useDispatch();
    const { recentActivity, loading } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(fetchRecentActivity());
    }, [dispatch]);

    const formatActivityDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);

        if (diffInSeconds < 60) return "Just now";
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    return (
        <div className="bg-white p-4 sm:p-8 rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
            <div className="sm:flex items-center justify-between mb-8">
                <h3 className="text-[18px] sm:text-[22px] font-bold text-[#1E293B]">Recent Activity</h3>
                <button className="mt-3 sm:mt-0 text-[#2563EB] text-sm font-bold hover:underline cursor-pointer">View All Activity</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="border-b border-[#F8FAFC]">
                            <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest pl-2">User</th>
                            <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">User ID</th>
                            <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Activity</th>
                            <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">ID/REF</th>
                            <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Date</th>
                            <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest pr-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F8FAFC]">
                        {loading ? (
                            [...Array(4)].map((_, i) => (
                                <tr key={i} className="animate-pulse">
                                    <td className="py-5 pl-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-100 flex-shrink-0" />
                                            <div className="h-4 w-24 bg-gray-100 rounded-md" />
                                        </div>
                                    </td>
                                    <td className="py-5">
                                        <div className="h-4 w-16 bg-gray-100 rounded-md" />
                                    </td>
                                    <td className="py-5">
                                        <div className="h-4 w-32 bg-gray-100 rounded-md" />
                                    </td>
                                    <td className="py-5">
                                        <div className="h-4 w-12 bg-gray-100 rounded-md" />
                                    </td>
                                    <td className="py-5">
                                        <div className="h-4 w-20 bg-gray-100 rounded-md" />
                                    </td>
                                    <td className="py-5 pr-2">
                                        <div className="h-6 w-20 bg-gray-100 rounded-full" />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            recentActivity.map((item, i) => (
                                <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                                    <td className="py-5 pl-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full border border-[#F1F5F9] overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center">
                                                {item.avatar ? (
                                                    <img src={item.avatar} alt={item.user} className="w-full h-full object-cover" />
                                                ) : (
                                                    <span className="text-xs font-bold text-[#2563EB]">{item.user?.charAt(0).toUpperCase()}</span>
                                                )}
                                            </div>
                                            <span className="text-sm font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">{item.user}</span>
                                        </div>
                                    </td>
                                    <td className="py-5">
                                        <span className="text-sm text-[#94A3B8] font-bold">{item.userId}</span>
                                    </td>
                                    <td className="py-5">
                                        <span className="text-sm text-[#64748B] font-medium">{item.activity}</span>
                                    </td>
                                    <td className="py-5">
                                        <span className="text-sm text-[#1E293B] font-bold">{item.idRef}</span>
                                    </td>
                                    <td className="py-5">
                                        <span className="text-sm text-[#64748B] font-medium">{formatActivityDate(item.date)}</span>
                                    </td>
                                    <td className="py-5 pr-2">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${item.statusColor || 'bg-gray-100 text-gray-500'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                        {!loading && recentActivity.length === 0 && (
                            <tr>
                                <td colSpan="6" className="py-10 text-center text-sm font-bold text-[#94A3B8]">No recent activity found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
