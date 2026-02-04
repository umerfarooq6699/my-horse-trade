"use client";

import { Heart, Send, CheckCircle2, Globe } from "lucide-react";

export default function HorseMainInfo({ horse }) {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                        {horse.name}
                    </h1>
                </div>
                <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-red-500 hover:shadow-lg hover:shadow-red-50 transition-all">
                    <Heart size={24} />
                </button>
            </div>

            <div className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">ASKING PRICE</span>
                <p className="text-4xl font-black text-blue-600">
                    ${horse.price.toLocaleString()} <span className="text-lg font-bold text-gray-400">USD</span>
                </p>
            </div>

            <p className="text-xs text-green-600 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Waiting entries until Nov 16, 2023
            </p>

            <div className="flex flex-col gap-3">
                <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                    Make an Offer
                    <Send size={18} />
                </button>
                <button className="w-full py-4 bg-white border border-gray-100 text-gray-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                    Contact Seller
                    <Globe size={18} />
                </button>
            </div>

            {/* Seller Card */}
            <div className="p-4 bg-white border border-gray-100 rounded-3xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-12 h-12 bg-gray-200 rounded-2xl overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=200" alt="Seller" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white w-5 h-5 rounded-full flex items-center justify-center">
                            <CheckCircle2 size={12} className="text-white" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">Vanguard Stables</h4>
                        <div className="flex items-center gap-1">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => <span key={i} className="text-[10px]">★</span>)}
                            </div>
                            <span className="text-[10px] text-gray-400 font-medium">4.8 (256)</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 text-gray-400">
                        <Globe size={14} />
                        <span className="text-xs font-bold">Berlin, DE</span>
                    </div>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50/50 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">STATUS</p>
                        <p className="text-xs font-bold text-gray-900">Vet Checked</p>
                    </div>
                </div>
                <div className="p-4 bg-blue-50/50 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                        <Globe size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">SHIPPING</p>
                        <p className="text-xs font-bold text-gray-900">Global Ready</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
