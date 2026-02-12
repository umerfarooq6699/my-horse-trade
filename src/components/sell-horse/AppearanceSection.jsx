"use client";

import { Paintbrush } from "lucide-react";
import { useState } from "react";

const colors = [
    { name: "Black", color: "#000000" },
    { name: "Bay", color: "#8B4513" },
    { name: "Chestnut", color: "#D2691E" },
    { name: "Grey", color: "#D1D5DB" },
];

const temperaments = [
    "Calm", "Reliable", "Spirited", "Energetic", "Beginner-Safe", "Gentle"
];

export default function AppearanceSection() {
    const [selectedColor, setSelectedColor] = useState("Black");
    const [selectedTemperaments, setSelectedTemperaments] = useState(["Calm", "Spirited"]);

    const toggleTemperament = (temp) => {
        if (selectedTemperaments.includes(temp)) {
            setSelectedTemperaments(selectedTemperaments.filter(t => t !== temp));
        } else {
            setSelectedTemperaments([...selectedTemperaments, temp]);
        }
    };

    return (
        <section className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <Paintbrush size={20} strokeWidth={2} />
                </div>
                <h2 className="text-xl font-bold text-[#1e293b]">Appearance</h2>
            </div>

            <div className="flex flex-col gap-8">
                {/* Color Selection */}
                <div className="flex flex-col gap-4">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Coat Color</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {colors.map((c) => (
                            <button
                                key={c.name}
                                onClick={() => setSelectedColor(c.name)}
                                className={`flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all ${selectedColor === c.name
                                    ? 'border_color bg-blue-50/30'
                                    : 'border-gray-100 hover:border-gray-200 bg-gray-50/30'
                                    }`}
                            >
                                <div
                                    className="w-8 h-8 rounded-full border border-white shadow-sm"
                                    style={{ backgroundColor: c.color }}
                                />
                                <span className={`text-[11px] font-bold uppercase tracking-wider ${selectedColor === c.name ? 'text_color' : 'text-gray-400'
                                    }`}>
                                    {c.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Distinguishing Marks */}
                <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Distinguishing Marks</label>
                    <textarea
                        placeholder="e.g. White socks on back legs, star on forehead..."
                        rows={3}
                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-[13px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all resize-none"
                    />
                </div>

                {/* Temperament Tags */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Temperament</label>
                        <p className="text-[10px] font-medium text-gray-400 ml-1">Select all that apply to your horse's personality</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {temperaments.map((temp) => (
                            <button
                                key={temp}
                                onClick={() => toggleTemperament(temp)}
                                className={`px-6 py-2.5 rounded-full text-[11px] font-bold transition-all ${selectedTemperaments.includes(temp)
                                    ? 'bg_color text-white shadow-lg shadow-blue-100'
                                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                                    }`}
                            >
                                {temp}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
