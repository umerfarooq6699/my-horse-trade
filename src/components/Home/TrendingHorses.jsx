"use client";

import { useRef } from "react";
import HorseCard from "./HorseCard";

const trendingHorses = [
    {
        id: 1,
        name: "Thunder Bolt",
        breed: "Hanoverian",
        age: 5,
        price: 28500,
        location: "Kentucky, USA",
        image: "/images/home-trending1.png",
        tag: "Trending"
    },
    {
        id: 2,
        name: "Silver Spirit",
        breed: "Arabian",
        age: 3,
        price: 42000,
        location: "Dubai, UAE",
        image: "/images/home-trending1.png",
        tag: "Trending"
    },
    {
        id: 3,
        name: "Nightshade",
        breed: "Thoroughbred",
        age: 4,
        price: 55000,
        location: "Netherlands",
        image: "/images/home-trending1.png",
        tag: "Trending"
    },
    {
        id: 4,
        name: "Royal Gaze",
        breed: "Friesian",
        age: 6,
        price: 88000,
        location: "Texas, USA",
        image: "/images/home-trending1.png",
        tag: "Trending"
    },
    {
        id: 5,
        name: "Apollo",
        breed: "Andalusian",
        age: 5,
        price: 32000,
        location: "Spain",
        image: "/images/home-trending1.png",
        tag: "Trending"
    }
];

export default function TrendingHorses() {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 350; // Approx card width + gap
            const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container-width px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3.3.9.6 1.7.9 2.8zm7 6.8c0-1.2-.6-2.3-1.6-3-.9.7-1.4 1.8-1.4 3a3 3 0 1 0 3 0z" /></svg>
                            </span>
                            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">Hot Right Now</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900">Trending Horses</h2>
                    </div>

                    {/* Slider Controls */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-all hover:shadow-md bg-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-all hover:shadow-md bg-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {trendingHorses.map((horse) => (
                        <div key={horse.id} className="min-w-[300px] md:min-w-[340px] snap-center">
                            <HorseCard horse={horse} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
