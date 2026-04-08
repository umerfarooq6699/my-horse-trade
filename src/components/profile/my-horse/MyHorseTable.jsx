"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Trash2, Pencil, AlertCircle, CheckCircle, Clock, X } from "lucide-react";
import React, { useState } from "react";

export default function MyHorseTable({ horses, onView }) {
    console.log(horses, "horses bbbbbbbbbbbbbbbbbb")
    const [rejectionMessage, setRejectionMessage] = useState(null);

    if (!horses || horses.length === 0) {
        return (
            <div className="bg-white rounded-[30px] border border-gray-100 p-12 text-center">
                <p className="text-gray-500 font-medium">No horses found.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-[30px] border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[12px] uppercase font-black text-gray-600 tracking-[0.2em] border-b border-gray-50">
                            <th className="pb-5 pt-6 px-6">Horse</th>
                            <th className="pb-5 pt-6 text-center">Gender</th>
                            <th className="pb-5 pt-6 text-center">Breed</th>
                            <th className="pb-5 pt-6 text-center">Price</th>
                            <th className="pb-5 pt-6 text-center">Age</th>
                            <th className="pb-5 pt-6 text-center">Height</th>
                            <th className="pb-5 pt-6 text-right px-6">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50/50">
                        {horses.map((horse) => (
                            <React.Fragment key={horse.id}>
                                <tr className="group hover:bg-gray-50/30 transition-all duration-300">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm flex-shrink-0 border border-gray-100">
                                                <img
                                                    src={horse.image}
                                                    alt={horse.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-[16px] font-bold text-[#1E293B] mb-0.5 tracking-tight">{horse.name}</div>
                                                <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">ID: {horse.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 text-center">
                                        <span className="text-[13px] font-semibold text-slate-700 capitalize tracking-tight">{horse.gender}</span>
                                    </td>
                                    <td className="py-4 text-center">
                                        <span className="text-[13px] font-semibold text-slate-700 capitalize tracking-tight">{horse.breed}</span>
                                    </td>
                                    <td className="py-4 text-center text-[16px] font-bold text-[#1E293B] tracking-tight">
                                        ${new Intl.NumberFormat('en-US').format(horse.price)}
                                    </td>
                                    <td className="py-4 text-center text-[13px] font-semibold text-slate-700 tracking-tight">
                                        {horse.age} Years
                                    </td>
                                    <td className="py-4 text-center text-[13px] font-semibold text-slate-700 tracking-tight">
                                        {horse.height} hh
                                    </td>
                                    <td className="py-4 text-right px-6">
                                        <div className="flex items-center justify-end gap-2">
                                            {horse.status === "Rejected" && (
                                                <button
                                                    onClick={() => setRejectionMessage(horse.rejectionReason)}
                                                    className="p-2.5 bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all cursor-pointer border-[1.5px] border-transparent hover:border-red-100"
                                                    title="View Reject Message"
                                                >
                                                    <AlertCircle size={18} />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => onView(horse)}
                                                className="p-2.5 bg-gray-50 text-gray-500 hover:text_color hover:bg-gray-100 rounded-2xl transition-all cursor-pointer"
                                                title="View Details"
                                            >
                                                <Eye size={20} className="stroke-[2.5]" />
                                            </button>
                                            <Link
                                                href={`/sell-horse?horse_id=${horse.id}`}
                                                className="p-2.5 bg-gray-50 text-[#0fb478] hover:bg-green-50 rounded-2xl transition-all cursor-pointer"
                                                title="Edit"
                                            >
                                                <Pencil size={20} className="stroke-[2.5]" />
                                            </Link>
                                            <button className="p-2.5 bg-gray-50 text-red-500 hover:bg-red-50 rounded-2xl transition-all cursor-pointer" title="Delete">
                                                <Trash2 size={20} className="stroke-[2.5]" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Rejection Message Popup */}
            {rejectionMessage && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in"
                        onClick={() => setRejectionMessage(null)}
                    ></div>
                    <div className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl p-8 animate-in zoom-in-95 duration-200 border border-red-50">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 shadow-sm ring-8 ring-red-50/50">
                                <AlertCircle size={32} />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-[20px] font-black text-[#1E293B] tracking-tight">Listing Rejected</h3>
                                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em]">Quality Control Feedback</p>
                            </div>

                            <div className="w-full bg-red-50/50 rounded-[24px] p-6 border border-red-100/50 mt-4 relative group">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full border border-red-100 shadow-sm">
                                    <span className="text-[10px] font-black text-red-500 uppercase tracking-widest whitespace-nowrap">Admin Message</span>
                                </div>
                                <p className="text-[14px] text-red-600 font-bold leading-relaxed">
                                    "{rejectionMessage}"
                                </p>
                            </div>

                            <button
                                onClick={() => setRejectionMessage(null)}
                                className="w-full py-4 bg-[#1E293B] text-white rounded-[16px] text-[13px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 mt-4"
                            >
                                Close Message
                            </button>
                        </div>

                        <button
                            onClick={() => setRejectionMessage(null)}
                            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

