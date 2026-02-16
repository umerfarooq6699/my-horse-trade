"use client";

import { X, Gavel, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

export default function OfferPopup({ isOpen, onClose, horse }) {
    const [bidAmount, setBidAmount] = useState("");

    // Disable background scroll when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Bid of $${bidAmount} placed for ${horse.name}! (Simulation)`);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Popup Content */}
            <div className="relative bg-white w-[calc(100%-2rem)] max-w-md lg:max-w-[380px] rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 mx-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/70 hover:text-white cursor-pointer transition-colors z-20 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col">
                    {/* Header Image Section - Adjusted height for small screens */}
                    <div className="relative h-40 sm:h-32 bg-gray-100">
                        <img
                            src={horse.images?.[0]?.src || horse.image}
                            alt={horse.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-6">
                            <h2 className="text-xl font-black text-white">{horse.name}</h2>
                            <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">{horse.breed}</p>
                        </div>
                    </div>

                    {/* Form Section - Improved responsiveness */}
                    <div className="p-5 sm:p-6 pb-8 sm:pb-6">
                        <div className="flex items-center justify-between mb-4 p-3 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                            <div>
                                <p className="text-[8px] sm:text-[9px] font-black text_color uppercase tracking-widest mb-0.5">Previous Highest Bid</p>
                                <p className="text-base sm:text-lg font-black text-gray-900">
                                    ${(horse.price - 5000).toLocaleString()} <span className="text-[9px] font-bold text-gray-400">USD</span>
                                </p>
                            </div>
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl flex items-center justify-center text_color shadow-sm flex-shrink-0 ml-2">
                                <Gavel size={18} />
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-3.5">
                            <div className="space-y-1">
                                <label className="text-[11px] sm:text-xs font-bold text-gray-700 ml-1">Your Offer Amount</label>
                                <div className="relative group">
                                    <input
                                        type="number"
                                        required
                                        value={bidAmount}
                                        onChange={(e) => setBidAmount(e.target.value)}
                                        placeholder="Enter amount"
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white transition-all text-base font-bold"
                                    />
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text_color transition-colors">
                                        <DollarSign size={16} strokeWidth={3} />
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-400 font-medium ml-1">Min next bid: ${(horse.price - 4000).toLocaleString()}</p>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg_color text-white py-3.5 rounded-xl text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-blue-100 transform active:scale-[0.98] mt-2 sm:mt-0"
                            >
                                Place a Bid
                                <Gavel size={16} />
                            </button>

                            <p className="text-center text-[10px] text-gray-400 font-medium px-4 leading-tight mt-4 sm:mt-0">
                                By placing a bid, you agree to our Terms of Use and acknowledge that this is a binding offer.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
