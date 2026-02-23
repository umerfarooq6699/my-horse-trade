"use client";

import { useState } from "react";
import FilterSidebar from "@/components/marketplace/FilterSidebar";
import MarketplaceHeader from "@/components/marketplace/MarketplaceHeader";
import HorseGrid from "@/components/marketplace/HorseGrid";

export default function MarketplacePage() {
    const [viewMode, setViewMode] = useState('grid');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState([
        { id: 1, label: "Price: $5k-$25k" },
        { id: 2, label: "Warmblood" },
        { id: 3, label: "Jumping" },
        { id: 4, label: "Bay" },
    ]);

    const removeFilter = (id) => {
        setActiveFilters(activeFilters.filter(filter => filter.id !== id));
    };

    return (
        <main className="min-h-screen bg-white">
            <div className="container-width px-3 sm:px-6 py-4 sm:py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

                    {/* Main Content */}
                    <div className="flex-1">
                        <MarketplaceHeader
                            activeFilters={activeFilters}
                            onRemoveFilter={removeFilter}
                            viewMode={viewMode}
                            setViewMode={setViewMode}
                            onOpenFilters={() => setIsFilterOpen(true)}
                        />
                        <HorseGrid viewMode={viewMode} />
                    </div>
                </div>
            </div>
        </main>
    );
}
