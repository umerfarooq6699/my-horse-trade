"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { fetchSingleHorse, clearCurrentListing } from "@/redux/slices/horseSlice";
import { API_BASE_URL } from "@/utils/urls";

import ImageGallery from "@/components/marketplace/detail/ImageGallery";
import HorseMainInfo from "@/components/marketplace/detail/HorseMainInfo";
import SpecsRibbon from "@/components/marketplace/detail/SpecsRibbon";
import PerformanceSidebar from "@/components/marketplace/detail/PerformanceSidebar";
import PedigreeSection from "@/components/marketplace/detail/PedigreeSection";

export default function HorseDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState("Overview");

    const { currentListing, loadingCurrentListing, errorCurrentListing } = useSelector((state) => state.horse);

    useEffect(() => {
        if (id) {
            dispatch(fetchSingleHorse(id));
        }
        return () => {
            dispatch(clearCurrentListing());
        };
    }, [id, dispatch]);

    // Helper to ensure URL is absolute
    const getAbsoluteUrl = (url) => {
        if (!url) return "";
        if (url.startsWith("http")) return url;
        const baseUrl = API_BASE_URL || "http://localhost:8000";
        return `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
    };

    if (loadingCurrentListing) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
                    <p className="text-gray-500 font-medium">Loading horse profile...</p>
                </div>
            </div>
        );
    }

    if (errorCurrentListing) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-4">
                <div className="text-center max-w-md">
                    <div className="bg-red-50 text-red-600 p-6 rounded-[32px] mb-6">
                        <h2 className="text-2xl font-bold mb-2">Profile Not Found</h2>
                        <p className="text-sm">{typeof errorCurrentListing === 'string' ? errorCurrentListing : "Failed to load horse details."}</p>
                    </div>
                    <Link href="/marketplace" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
                        Back to Marketplace <ChevronRight size={16} />
                    </Link>
                </div>
            </div>
        );
    }

    if (!currentListing) return null;

    // Map API data to the format expected by the UI components
    const horse = {
        name: currentListing.name || currentListing.horse_name || "Untitled Horse",
        price: currentListing.price || 0,
        breed: currentListing.breed || "Horse",
        height: currentListing.height || 16.2,
        foaled: currentListing.age ? `${currentListing.age} Years` : (currentListing.foaled || "N/A"),
        gender: currentListing.gender || "Gelding",
        tags: currentListing.tags || (currentListing.discipline ? [currentListing.discipline] : ["FEATURED"]),
        // Map images: ensure all URLs are absolute
        images: (Array.isArray(currentListing.photos) && currentListing.photos.length > 0 
                ? currentListing.photos 
                : (currentListing.image ? [currentListing.image] : [])).map(url => getAbsoluteUrl(url)),
        description: currentListing.description || currentListing.listing_step3?.description || "No description available for this horse.",
        location: currentListing.location || "N/A"
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
                            <div className="border-b border-gray-100 flex gap-6 sm:gap-12 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
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
                                        <h2 className="text-xl sm:text-2xl font-[600] text-gray-900 mb-4 sm:mb-6 font-display tracking-tight">About {horse.name}</h2>
                                        <div className="text-gray-500 leading-relaxed space-y-4 text-justify md:font-medium">
                                            <p>{horse.description}</p>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "Pedigree" && (
                                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <PedigreeSection />
                                    </div>
                                )}
                                {/* Other tabs */}
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

            </div>
        </main>
    );
}


