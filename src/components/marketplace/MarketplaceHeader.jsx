"use client";

import { ChevronRight, LayoutGrid, List, Search, Filter, ChevronDown } from "lucide-react";

export default function MarketplaceHeader({ activeFilters, onRemoveFilter, viewMode, setViewMode, onOpenFilters }) {
    return (
        <div className="mb-[14px] sm:mb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="mobile_heading lg_heading">Find Your Next Champion</h1>
                    <p className="mobile_para text-sm text-gray-400 mt-1">
                        Explore our curated selection of elite equines. Filter by performance metrics, lineage, and capability.
                    </p>
                </div>
            </div>

            {/* Mobile-Only Section (Matches Screenshot) */}
            <div className="md:hidden mt-4 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">Active Filters:</span>
                    <div className="flex flex-wrap gap-2">
                        {activeFilters.map((filter) => (
                            <div
                                key={filter.id}
                                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-100 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:border-gray-200 transition-all cursor-pointer group"
                                onClick={() => onRemoveFilter(filter.id)}
                            >
                                {filter.label}
                                <span className="text-gray-300 group-hover:text-gray-900 leading-none">×</span>
                            </div>
                        ))}
                    </div>
                    {activeFilters.length === 0 && (
                        <span className="text-xs text-gray-400 italic">No filters applied</span>
                    )}
                </div>

                <div className="flex items-center justify-between gap-3">
                    <button
                        onClick={onOpenFilters}
                        className="flex items-center justify-center gap-2 px-6 py-[10px] bg-white border border-gray-200 rounded-xl text-gray-800 font-bold text-sm hover:bg-blue-50 transition-all"
                    >
                        <Filter size={20} />
                    </button>

                    <div className="flex-1 relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <List size={18} />
                        </div>
                        <select className="appearance-none w-full bg-white border border-gray-200 rounded-xl pl-11 pr-10 py-[10px] text-sm font-semibold text-gray-800 focus:outline-none shadow-sm">
                            <option>Sort by</option>
                            <option>Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Newest Arrivals</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <ChevronDown size={18} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop-Only Section */}
            <div className="hidden md:flex flex-wrap items-center justify-between gap-4 py-4 mt-8 pt-6 border-t border-gray-100">
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

                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none">
                        <select className="appearance-none w-full bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:border-transparent cursor-pointer">
                            <option>Sort by: Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest Arrivals</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <ChevronDown size={16} />
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
