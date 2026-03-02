"use client";

import { useRef } from "react";
import Link from "next/link";
import HorseCard from "./HorseCard";
import image1 from "../../assets/images/marketplace1.png";
import image2 from "../../assets/images/marketplace2.png";
import image3 from "../../assets/images/marketplace3.png";
import image4 from "../../assets/images/marketplace4.png";
import image5 from "../../assets/images/marketplace5.png";
import image6 from "../../assets/images/marketplace6.png";

const trendingHorses = [
    {
        id: 1,
        name: "Thunder Bolt",
        breed: "Hanoverian",
        age: 5,
        price: 28500,
        location: "Kentucky, USA",
        height: "16.2",
        image: image2.src,
        tag: "Trending",
        isPremium: true
    },
    {
        id: 2,
        name: "Silver Spirit",
        breed: "Arabian",
        age: 3,
        price: 42000,
        location: "Dubai, UAE",
        height: "15.1",
        image: image3.src,
        tag: "Trending",
        isVerified: true
    },
    {
        id: 3,
        name: "Nightshade",
        breed: "Thoroughbred",
        age: 4,
        price: 55000,
        location: "Netherlands",
        height: "16.1",
        image: image4.src,
        tag: "Trending"
    },
    {
        id: 4,
        name: "Royal Gaze",
        breed: "Friesian",
        age: 6,
        price: 88000,
        location: "Texas, USA",
        height: "15.2",
        image: image5.src,
        tag: "Trending"
    },
    {
        id: 5,
        name: "Apollo",
        breed: "Andalusian",
        age: 5,
        price: 32000,
        location: "Spain",
        height: "15.3",
        image: image6.src,
        tag: "Trending"
    }
];

export default function TrendingHorses() {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 350;
            const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-white mobile_spaces lg_spaces">
            <div className="container-width">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3.3.9.6 1.7.9 2.8zm7 6.8c0-1.2-.6-2.3-1.6-3-.9.7-1.4 1.8-1.4 3a3 3 0 1 0 3 0z" /></svg>
                            </span>
                            <span className="text_color font-bold text-xs tracking-widest uppercase">Hot Right Now</span>
                        </div>
                        <h2 className="mobile_heading lg_heading">Trending Horses</h2>
                    </div>

                    {/* Slider Controls */}
                    <div className="flex items-center gap-8">
                        <Link href="/marketplace" className="hidden md:flex items-center gap-1 text_color font-semibold hover:text-[var(--theme-color)] transition-colors group">
                            See Trending Horses
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6" /></svg>
                        </Link>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-600 hover:border-[var(--theme-color)] hover:text-[var(--theme-color)] transition-all hover:shadow-md bg-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-600 hover:border-[var(--theme-color)] hover:text-[var(--theme-color)] transition-all hover:shadow-md bg-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slider Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
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
