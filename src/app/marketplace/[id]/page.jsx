"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ImageGallery from "@/components/marketplace/detail/ImageGallery";
import HorseMainInfo from "@/components/marketplace/detail/HorseMainInfo";
import SpecsRibbon from "@/components/marketplace/detail/SpecsRibbon";
import PerformanceSidebar from "@/components/marketplace/detail/PerformanceSidebar";
import PedigreeSection from "@/components/marketplace/detail/PedigreeSection";

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
            "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071",
            "https://images.unsplash.com/photo-1537151672256-6cab2e7f7c8d?q=80&w=2070",
            "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=1974",
            "https://images.unsplash.com/photo-1517436073-3b102283a005?q=80&w=2074"
        ]
    };

    return (
        <main className="min-h-screen bg-white">
            <div className="container-width px-6 py-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">
                    <Link href="/marketplace" className="hover:text-blue-600 transition-colors">MARKETPLACE</Link>
                    <ChevronRight size={12} strokeWidth={3} />
                    <span className="hover:text-blue-600 cursor-pointer">WARMBLOODS</span>
                    <ChevronRight size={12} strokeWidth={3} />
                    <span className="text-gray-900">{horse.name}</span>
                </nav>

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
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 font-display">About Nebula Strider V</h2>
                                        <div className="text-gray-500 leading-relaxed space-y-4 font-medium">
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
                <div className="mt-24">
                    <div className="flex justify-between items-end mb-10">
                        <h2 className="text-3xl font-black text-gray-900">More from this Lineage</h2>
                        <Link href="/marketplace" className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1">
                            View All <ChevronRight size={16} />
                        </Link>
                    </div>
                    {/* Placeholder for related horses grid - Reuse HorseCard if possible */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-white border border-gray-100 rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-gray-100 transition-all p-2">
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 mb-4 relative">
                                    <img src={`https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&w=500&sig=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
