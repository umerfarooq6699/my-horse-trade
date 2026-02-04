"use client";

import { ChevronRight, LayoutGrid, List, Search } from "lucide-react";

export default function MarketplaceHeader({ activeFilters, onRemoveFilter, viewMode, setViewMode }) {
    return (
        <div className="mb-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <span className="hover:text-gray-900 cursor-pointer">Marketplace</span>
                <ChevronRight size={14} />
                <span className="text-gray-900 font-medium">Browse Horses</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Next Champion</h1>
                    <p className="text-gray-500">
                        Explore our curated selection of elite equines. Filter by performance metrics, lineage, and capability.
                    </p>
                </div>
            </div>

            {/* Active Filters and Controls */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-100">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-gray-700 mr-2">Active Filters:</span>
                    {activeFilters.map((filter) => (
                        <div
                            key={filter.id}
                            className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer group"
                            onClick={() => onRemoveFilter(filter.id)}
                        >
                            {filter.label}
                            <span className="text-gray-400 group-hover:text-gray-600">×</span>
                        </div>
                    ))}
                    {activeFilters.length === 0 && (
                        <span className="text-xs text-gray-400 italic">No filters applied</span>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:border-transparent cursor-pointer">
                            <option>Sort by: Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest Arrivals</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <ChevronRight size={16} className="rotate-90" />
                        </div>
                    </div>

                    <div className="flex items-center border border-gray-200 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-blue-50 text-[var(--theme-color)]' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <LayoutGrid size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-blue-50 text-[var(--theme-color)]' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <List size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
