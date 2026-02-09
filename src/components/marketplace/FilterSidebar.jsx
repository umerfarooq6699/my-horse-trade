"use client";

import { useState, useEffect } from "react";
import { Filter, X, ChevronDown, Check } from "lucide-react";

const breeds = [
    { name: "Thoroughbred", count: 124 },
    { name: "Warmblood", count: 86 },
    { name: "Arabian", count: 42 },
    { name: "Quarter Horse", count: 33 },
];

const temperaments = [
    { name: "Calm/Beginner Friendly", count: 124 },
    { name: "Energetic/Performance", count: 85 },
    { name: "Reliable/Amateur", count: 62 },
];

const disciplines = ["Jumping", "Dressage", "Eventing", "Racing"];
const colors = [
    { name: "Black", code: "#000000" },
    { name: "Bay", code: "#5D4037" },
    { name: "Chestnut", code: "#D84315" },
    { name: "Gray", code: "#F5F5F5" },
];

export default function FilterSidebar() {
    const [minPrice, setMinPrice] = useState(5000);
    const [maxPrice, setMaxPrice] = useState(50000);
    const [height, setHeight] = useState(17.2);
    const [age, setAge] = useState(12);

    const handleMinPriceChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 1000);
        setMinPrice(value);
    };

    const handleMaxPriceChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 1000);
        setMaxPrice(value);
    };

    return (
        <aside className="w-full md:w-64 flex-shrink-0 bg-white md:border-r border-gray-100 pr-0 md:pr-8 py-0 md:py-4">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 hidden md:flex">
                <div className="flex items-center gap-2">
                    <Filter size={18} className="text-gray-900" />
                    <h2 className="font-bold text-gray-900 text-lg">Filters</h2>
                </div>
                <button
                    onClick={() => {
                        setMinPrice(5000);
                        setMaxPrice(50000);
                        setHeight(17.2);
                        setAge(12);
                    }}
                    className="text-xs font-medium text-[var(--theme-color)] hover:underline"
                >
                    Reset All
                </button>
            </div>

            {/* Price Range */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900 text-sm">Price Range</h3>
                    <span className="text-xs font-medium text-[var(--theme-color)]">
                        ${(minPrice / 1000).toFixed(0)}k - ${(maxPrice / 1000).toFixed(0)}k
                    </span>
                </div>

                <div className="relative h-6 mb-6 flex items-center">
                    {/* Track Background */}
                    <div className="absolute w-full h-1.5 bg-gray-100 rounded-full z-0"></div>

                    {/* Active Fill */}
                    <div
                        className="absolute h-1.5 bg-[var(--theme-color)] rounded-full z-10"
                        style={{
                            left: `${(minPrice / 100000) * 100}%`,
                            right: `${100 - (maxPrice / 100000) * 100}%`
                        }}
                    ></div>

                    <input
                        type="range"
                        min="0"
                        max="100000"
                        step="1000"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="absolute w-full h-1.5 bg-transparent appearance-none pointer-events-none z-30 accent-[var(--theme-color)]"
                        style={{
                            WebkitAppearance: 'none',
                            pointerEvents: 'auto'
                        }}
                    />
                    <input
                        type="range"
                        min="0"
                        max="100000"
                        step="1000"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        className="absolute w-full h-1.5 bg-transparent appearance-none pointer-events-none z-40 accent-[var(--theme-color)]"
                        style={{
                            WebkitAppearance: 'none',
                            pointerEvents: 'auto'
                        }}
                    />
                </div>

                <div className="flex gap-2">
                    <div className="flex-1 relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                        <input
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                            className="w-full pl-6 pr-2 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--theme-color)]"
                        />
                    </div>
                    <div className="flex-1 relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="w-full pl-6 pr-2 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--theme-color)]"
                        />
                    </div>
                </div>
            </div>

            {/* Breed */}
            <div className="mb-8 pt-6 border-t border-gray-50">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">Breed</h3>
                <div className="space-y-3">
                    {breeds.map((breed) => (
                        <label key={breed.name} className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border border-gray-200 rounded flex items-center justify-center group-hover:border-[var(--theme-color)] transition-colors">
                                    <Check size={12} className="text-white bg-[var(--theme-color)] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{breed.name}</span>
                            </div>
                            <span className="text-xs text-gray-400">{breed.count}</span>
                        </label>
                    ))}
                </div>
                <button className="mt-4 text-xs font-medium text-[var(--theme-color)] hover:underline">+ Show more breeds</button>
            </div>

            {/* Temperament */}
            <div className="mb-8 pt-6 border-t border-gray-50">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">Temperament</h3>
                <div className="space-y-3">
                    {temperaments.map((temp) => (
                        <label key={temp.name} className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border border-gray-200 rounded flex items-center justify-center group-hover:border-[var(--theme-color)] transition-colors">
                                    <Check size={12} className="text-white bg-[var(--theme-color)] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{temp.name}</span>
                            </div>
                            <span className="text-xs text-gray-400">{temp.count}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Height - Single Range */}
            <div className="mb-8 pt-6 border-t border-gray-50">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900 text-sm">Max Height (hh)</h3>
                    <span className="text-xs font-medium text-[var(--theme-color)]">{height.toFixed(1)} hh</span>
                </div>
                <div className="px-1 relative h-6 flex items-center">
                    <input
                        type="range"
                        min="10"
                        max="20"
                        step="0.1"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-full h-1.5 bg-gray-100 rounded-full appearance-none accent-[var(--theme-color)] cursor-pointer"
                        style={{
                            background: `linear-gradient(to right, var(--theme-color) 0%, var(--theme-color) ${((height - 10) / (20 - 10)) * 100}%, #f3f4f6 ${((height - 10) / (20 - 10)) * 100}%, #f3f4f6 100%)`
                        }}
                    />
                </div>
                <div className="flex justify-between px-1 mt-2 text-[10px] text-gray-400">
                    <span>10.0 hh</span>
                    <span>20.0 hh</span>
                </div>
            </div>

            {/* Age - Single Range */}
            <div className="mb-8 pt-6 border-t border-gray-50">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900 text-sm">Max Age</h3>
                    <span className="text-xs font-medium text-[var(--theme-color)]">{age} years</span>
                </div>
                <div className="px-1 relative h-6 flex items-center">
                    <input
                        type="range"
                        min="0"
                        max="30"
                        step="1"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className="w-full h-1.5 bg-gray-100 rounded-full appearance-none accent-[var(--theme-color)] cursor-pointer"
                        style={{
                            background: `linear-gradient(to right, var(--theme-color) 0%, var(--theme-color) ${(age / 30) * 100}%, #f3f4f6 ${(age / 30) * 100}%, #f3f4f6 100%)`
                        }}
                    />
                </div>
                <div className="flex justify-between px-1 mt-2 text-[10px] text-gray-400">
                    <span>0 yrs</span>
                    <span>30 yrs</span>
                </div>
            </div>

            {/* Discipline */}
            <div className="mb-8 pt-6 border-t border-gray-50">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">Discipline</h3>
                <div className="flex flex-wrap gap-2">
                    {disciplines.map((discipline) => (
                        <button key={discipline} className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${discipline === 'Jumping' ? 'bg-blue-50 border_color text_color' : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                            {discipline}
                        </button>
                    ))}
                </div>
            </div>

            {/* Color */}
            <div className="mb-8 pt-6 border-t border-gray-50">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">Color</h3>
                <div className="flex gap-4">
                    {colors.map((color) => (
                        <div key={color.name} className="flex flex-col items-center gap-2 cursor-pointer group">
                            <div
                                className={`w-8 h-8 rounded-full border-2 transition-all group-hover:scale-110 ${color.name === 'Black' ? 'border-[var(--theme-color)]' : 'border-transparent'}`}
                                style={{ backgroundColor: color.code }}
                            ></div>
                            <span className="text-[10px] text-gray-500 font-medium">{color.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Location */}
            <div className="mb-8 pt-6 border-t border-gray-50">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">Location</h3>
                <div className="relative">
                    <input type="text" placeholder="Enter city, country" className="w-full px-4 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--theme-color)]" />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                </div>
            </div>

            <button className="w-full bg_color text-white py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-colors shadow-sm shadow-blue-100">
                Show 324 Horses
            </button>
        </aside>
    );
}
