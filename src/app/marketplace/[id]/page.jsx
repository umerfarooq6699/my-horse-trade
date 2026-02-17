"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ImageGallery from "@/components/marketplace/detail/ImageGallery";
import HorseMainInfo from "@/components/marketplace/detail/HorseMainInfo";
import SpecsRibbon from "@/components/marketplace/detail/SpecsRibbon";
import PerformanceSidebar from "@/components/marketplace/detail/PerformanceSidebar";
import PedigreeSection from "@/components/marketplace/detail/PedigreeSection";
import image1 from "@/assets/images/marketplace1.png"
import image2 from "@/assets/images/marketplace2.png"
import image3 from "@/assets/images/marketplace3.png"
import image4 from "@/assets/images/marketplace4.png"

export default function HorseDetailPage({ params }) {
    const [activeTab, setActiveTab] = useState("Overview");

    // Mock data based on the screenshot
    const horse = {
        name: "Nebula Strider V",
        price: 125000,
        breed: "KWPN",
        height: 17.2,
        foaled: "2018 (6yo)",
        gender: "Stallion",
        tags: ["PREMIUM", "FEATURED"],
        images: [
            image1,
            image2,
            image3,
            image4,
        ]
    };

    return (
        <main className="min-h-screen bg-white">
            <div className="container-width px-4 sm:px-6 py-6 sm:py-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Media and Tabs */}
                    <div className="lg:col-span-8">
                        <ImageGallery images={horse.images} tags={horse.tags} />

                        <div className="mt-16">
                            <SpecsRibbon horse={horse} />

                            {/* Tabs */}
                            <div className="border-b border-gray-100 flex gap-12 mb-10">
                                {["Overview", "Pedigree", "Health Records", "Training Logs"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 text-sm font-bold transition-all relative ${activeTab === tab ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                                    >
                                        {tab}
                                        {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></div>}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="prose prose-blue max-w-none">
                                {activeTab === "Overview" && (
                                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                        <h2 className="text-xl sm:text-2xl font-[600] text-gray-900 mb-4 sm:mb-6 font-display tracking-tight">About Nebula Strider V</h2>
                                        <div className="text-gray-500 leading-relaxed space-y-4 text-justify md:font-medium">
                                            <p>Nebula Strider V is a top-tier prospect for international show jumping. With a calm temperament and explosive power off the ground, he represents the future of the sport. Currently training at 1.40m with scope for more. His lateral work is exceptional, and he demonstrates a rare intelligence in the ring, often correcting stride distance autonomously.</p>
                                            <p>Originally imported from the Netherlands, he has been under the saddle of Olympic-level trainers for the past 18 months. He is fully sound, requires no maintenance, and travels exceptionally well. Perfect for an ambitious Young Rider or professional looking to add a Grand Prix prospect to their string.</p>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "Pedigree" && (
                                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <PedigreeSection />
                                    </div>
                                )}
                                {/* Other tabs can be implemented similarly */}
                                {(activeTab === "Health Records" || activeTab === "Training Logs") && (
                                    <div className="p-12 bg-gray-50 rounded-[32px] border border-dashed border-gray-200 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <p className="text-gray-400 font-bold">Additional records are available upon request from the seller.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Pricing and Stats */}
                    <div className="lg:col-span-4">
                        <div className="flex flex-col gap-12">
                            <HorseMainInfo horse={horse} />
                            <PerformanceSidebar />
                        </div>
                    </div>
                </div>

                {/* Related Horses Section */}
                <div className="mt-16 sm:mt-24">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 sm:mb-10">
                        <h2 className="text-2xl sm:text-3xl font-[600] text-gray-900 tracking-tight">More from this Lineage</h2>
                        <Link href="/marketplace" className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1">
                            View All <ChevronRight size={16} />
                        </Link>
                    </div>
                    {/* Placeholder for related horses grid - Reuse HorseCard if possible */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {horse.images.map((e, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-gray-100 transition-all p-2">
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 mb-4 relative">
                                    <img src={e.src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Related Horse" />
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                        <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-black text-gray-900 shadow-sm">$85k</div>
                                    </div>
                                </div>
                                <div className="px-2 pb-2">
                                    <h4 className="font-bold text-gray-900">Stellar Wind</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}


