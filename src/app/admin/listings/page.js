"use client";

import {
    Search, Filter, Plus, FileDown, MoreVertical,
    Eye, CheckCircle, XCircle, Pencil, Trash2,
    ChevronRight, ChevronDown, AlertTriangle, Calendar, X
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ListingDetailsModal from "@/components/admin/listings/ListingDetailsModal";
import DeleteListingModal from "@/components/admin/listings/DeleteListingModal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllListings, fetchListingStats } from "@/redux/slices/adminSlice";

export default function ListingManagement() {
    const dispatch = useDispatch();
    const { allListings, listingStats, loading, error, listingPagination: pagination } = useSelector((state) => state.admin);

    const [selectedListing, setSelectedListing] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [listingToDelete, setListingToDelete] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [searchValue, setSearchValue] = useState("");
    const searchTimer = useRef(null);
    console.log(allListings, "admin listings")


    useEffect(() => {
        dispatch(fetchAllListings({ page: 1, searchValue: "" }));
        dispatch(fetchListingStats());
    }, [dispatch]);

    // Auto-navigate to previous page when current page becomes empty
    useEffect(() => {
        if (!loading && allListings?.length === 0 && pagination?.currentPage > 1) {
            dispatch(fetchAllListings({ page: pagination.currentPage - 1, searchValue }));
        }
    }, [allListings, loading, pagination, dispatch, searchValue]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        clearTimeout(searchTimer.current);
        searchTimer.current = setTimeout(() => {
            dispatch(fetchAllListings({ page: 1, searchValue: value }));
        }, 300);
    };

    const handlePageChange = (page) => {
        dispatch(fetchAllListings({ page, searchValue }));
    };

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    };

    const getSellerDisplay = (item) => {
        if (!item) return "Unknown Seller";

        // Handle seller based on the new structure
        const seller = item.seller;
        if (seller && typeof seller === 'object') {
            return seller.name || seller.user_name || "Unknown Seller";
        }
        if (typeof seller === 'string') return seller;

        return "Unknown Seller";
    };

    const stats = [
        {
            label: "Total Listings",
            value: listingStats.totalListings.value.toLocaleString() || "0",
            trend: listingStats.totalListings.trend,
            type: "listings"
        },
        {
            label: "Pending Review",
            value: listingStats.pendingReview.value.toLocaleString() || "0",
            trend: listingStats.pendingReview.trend,
            type: "pending",
            icon: AlertTriangle
        },
        {
            label: "Active Auctions",
            value: listingStats.activeAuctions.value.toLocaleString() || "0",
            trend: listingStats.activeAuctions.trend,
            type: "auctions"
        },
    ];

    return (
        <div className="space-y-5 sm:space-y-8 pb-10">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-4">
                        <span>Home</span>
                        <ChevronRight className="w-3 h-3" />
                        <span>Dashboard</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-[#1E293B]">Listing Management</span>
                    </div>
                    <h1 className="text-[24px] sm:text-[32px] font-[600] text-[#1E293B] tracking-tight mb-2">Listing Management</h1>
                    <p className="text-gray-400">
                        Manage, review, and moderate horse listings.
                    </p>
                </div>
                <div className="flex">
                    <Link
                        href="/sell-horse"
                        className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-[#2563EB] text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 w-fit cursor-pointer"
                    >
                        <Plus className="w-4 h-4" />
                        Add New Listing
                    </Link>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {loading ? (
                    // Stats Skeletons
                    [...Array(3)].map((_, i) => (
                        <div key={i} className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm animate-pulse h-[140px] flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-4">
                                <div className="h-4 w-24 bg-gray-100 rounded-md" />
                                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                                    <div className="w-6 h-6 bg-gray-100 rounded-md" />
                                </div>
                            </div>
                            <div className="flex items-end gap-2">
                                <div className="h-8 w-16 bg-gray-100 rounded-md" />
                                <div className="h-4 w-8 bg-gray-50 rounded-md" />
                            </div>
                        </div>
                    ))
                ) : (
                    stats.map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm relative overflow-hidden flex flex-col justify-between group h-[140px]">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-semibold text-[#64748B]">{stat.label}</span>
                                {stat.icon && (
                                    <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] flex items-center justify-center text-[#F97316]">
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                )}
                                {!stat.icon && i === 0 && (
                                    <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                                        <FileDown className="w-24 h-24" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="flex items-end gap-2">
                                    <span className="text-[28px] font-bold text-[#1E293B] leading-none">{stat.value}</span>
                                    {stat.trend && (
                                        <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-lg ${stat.trend.startsWith('+') ? 'text-[#22C55E] bg-green-50' : 'text-[#EF4444] bg-red-50'}`}>
                                            {stat.trend}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Filters & Search */}
            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm p-4 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="relative w-full lg:max-w-[280px]">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                    <input
                        type="text"
                        onChange={handleSearch}
                        placeholder="Search listings..."
                        className="w-full pl-12 pr-6 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium transition-all outline-none focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full lg:w-auto">
                    <div className="relative flex-1 sm:flex-none min-w-[120px] sm:min-w-[140px]">
                        <select className="appearance-none w-full sm:w-36 px-5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm font-bold text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/10 transition-all cursor-pointer pr-10">
                            <option>Status: All</option>
                            <option>Active</option>
                            <option>Pending</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
                    </div>
                    <div className="relative flex-1 sm:flex-none min-w-[120px] sm:min-w-[140px]">
                        <select className="appearance-none w-full sm:w-36 px-5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm font-bold text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/10 transition-all cursor-pointer pr-10">
                            <option>Type: All</option>
                            <option>Auction</option>
                            <option>Fixed</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
                    </div>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm font-bold text-[#1E293B] hover:bg-gray-50 transition-all cursor-pointer">
                        <Calendar className="w-4 h-4 text-[#64748B]" />
                        <span className="whitespace-nowrap text-xs sm:text-sm">Date: Last 30 Days</span>
                    </button>
                    <button className="flex-shrink-0 flex items-center gap-2 text-sm font-bold text-[#94A3B8] hover:text-[#EF4444] transition-colors ml-auto sm:ml-2 cursor-pointer">
                        <X className="w-4 h-4" />
                        Clear
                    </button>
                </div>
            </div>

            {/* Listings Table */}
            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
                <div className="overflow-x-auto min-h-[400px]">
                    {loading ? (
                        <table className="w-full text-left border-collapse min-w-[800px] lg:min-w-full">
                            <thead>
                                <tr className="border-b border-[#F8FAFC]">
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest pl-4 sm:pl-8">Horse Details</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Seller</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Type & Price</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Status</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#93A3B8] uppercase tracking-widest px-4 sm:px-8">Date Posted</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-right pr-4 sm:pr-8">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F8FAFC]">
                                {[...Array(6)].map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="py-5 pl-4 sm:pl-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-12 rounded-xl bg-gray-100 flex-shrink-0" />
                                                <div className="space-y-2">
                                                    <div className="h-4 w-32 bg-gray-100 rounded-md" />
                                                    <div className="h-3 w-24 bg-gray-50 rounded-md" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5 px-4 sm:px-8">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-gray-100" />
                                                <div className="h-4 w-20 bg-gray-100 rounded-md" />
                                            </div>
                                        </td>
                                        <td className="py-5 px-4 sm:px-8">
                                            <div className="space-y-2">
                                                <div className="h-4 w-12 bg-gray-100 rounded-md" />
                                                <div className="h-4 w-16 bg-gray-50 rounded-md" />
                                            </div>
                                        </td>
                                        <td className="py-5 px-4 sm:px-8">
                                            <div className="h-7 w-20 bg-gray-100 rounded-full" />
                                        </td>
                                        <td className="py-5 px-4 sm:px-8">
                                            <div className="h-4 w-24 bg-gray-100 rounded-md" />
                                        </td>
                                        <td className="py-5 text-right pr-4 sm:pr-8">
                                            <div className="flex justify-end gap-2">
                                                <div className="w-8 h-8 bg-gray-100 rounded-lg" />
                                                <div className="w-8 h-8 bg-gray-100 rounded-lg" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : error ? (
                        <div className="flex flex-col items-center justify-center h-64 gap-4 text-center px-4">
                            <AlertTriangle className="w-10 h-10 text-red-500" />
                            <p className="text-[#EF4444] font-medium">{typeof error === 'string' ? error : "Failed to fetch listings"}</p>
                            <button
                                onClick={() => dispatch(fetchAllListings({ page: pagination.currentPage, searchValue }))}
                                className="px-4 py-2 bg-[#2563EB] text-white rounded-xl text-sm font-bold"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : (
                        <table className="w-full text-left border-collapse min-w-[800px] lg:min-w-full">
                            <thead>
                                <tr className="border-b border-[#F8FAFC]">
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest pl-4 sm:pl-8">Horse Details</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Seller</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Type & Price</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Status</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#93A3B8] uppercase tracking-widest px-4 sm:px-8">Date Posted</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-right pr-4 sm:pr-8">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F8FAFC]">
                                {allListings?.length > 0 ? (
                                    allListings.map((item, i) => (
                                        <tr key={item.id || i} className={`group hover:bg-gray-50 transition-all ${item.status?.toLowerCase() === "pending" || item.status === "Pending Review" ? "bg-[#FFFBF2]/30 hover:bg-[#FFFBF2]/50" : ""}`}>
                                            <td className="py-5 pl-4 sm:pl-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-[#F1F5F9] bg-gray-50">
                                                        <img
                                                            src={item.horse_details?.image || "/placeholder-horse.png"}
                                                            alt={item.horse_details?.name}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                if (e.target.src.includes("/placeholder-horse.png")) {
                                                                    e.target.onerror = null;
                                                                    e.target.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                                                                } else {
                                                                    e.target.src = "/placeholder-horse.png";
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">{item.horse_details?.name || "Unnamed Horse"}</h4>
                                                        <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">ID: {item.horse_details?.id_ref || "N/A"} • {item.horse_details?.breed || "Breed N/A"}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-5 px-4 sm:px-8">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 rounded-full bg-[#2563EB]/10 flex items-center justify-center overflow-hidden text-[10px] font-bold text-[#2563EB]">
                                                        {item.seller?.avatar ? (
                                                            <img src={item.seller.avatar} className="w-full h-full object-cover" />
                                                        ) : (
                                                            <span>{getSellerDisplay(item).charAt(0).toUpperCase()}</span>
                                                        )}
                                                    </div>
                                                    <span className="text-sm font-bold text-[#64748B]">{getSellerDisplay(item)}</span>
                                                </div>
                                            </td>
                                            <td className="py-5 px-4 sm:px-8">
                                                <div className="space-y-1">
                                                    <span className="px-2 py-0.5 rounded-lg bg-[#F5F3FF] text-[#7C3AED] text-[10px] font-bold">{item.type_and_price?.type || "Fixed"}</span>
                                                    <p className="text-sm font-black text-[#1E293B]">{item.type_and_price?.amount || "$0"}</p>
                                                </div>
                                            </td>
                                            <td className="py-5 px-4 sm:px-8">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-2 h-2 rounded-full ${item.status?.toLowerCase() === "active" ? "bg-[#22C55E]" :
                                                        item.status?.toLowerCase() === "pending" || item.status === "Pending Review" ? "bg-[#F97316]" :
                                                            item.status?.toLowerCase() === "sold" ? "bg-[#CBD5E1]" : "bg-[#EF4444]"
                                                        }`} />
                                                    <span className={`text-[11px] font-black uppercase tracking-wider ${item.status?.toLowerCase() === "active" ? "text-[#22C55E]" :
                                                        item.status?.toLowerCase() === "pending" || item.status === "Pending Review" ? "text-[#F97316]" :
                                                            item.status?.toLowerCase() === "sold" ? "text-[#94A3B8]" : "text-[#EF4444]"
                                                        }`}>
                                                        {item.status || "Pending"}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-5 px-4 sm:px-8">
                                                <span className="text-sm text-[#64748B] font-medium">{formatDate(item.date_posted)}</span>
                                            </td>
                                            <td className="py-5 text-right pr-4 sm:pr-8">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => { setSelectedListing(item); setIsModalOpen(true); }}
                                                        className="p-2 text-[#94A3B8] hover:text-[#2563EB] hover:bg-blue-50 rounded-lg transition-all cursor-pointer"
                                                    >
                                                        <Eye className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => { setListingToDelete(item); setIsDeleteModalOpen(true); }}
                                                        className="p-2 text-[#EF4444] hover:bg-red-50 rounded-lg transition-all cursor-pointer"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="py-10 text-center text-[#64748B] font-medium">No listings found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Pagination */}
                {!loading && allListings?.length > 0 && (
                    <div className="p-4 sm:p-8 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs font-bold text-[#94A3B8]">
                            Showing {allListings?.length || 0} of {pagination?.totalListings || 0} results
                        </p>
                        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto max-w-full">
                            <button
                                onClick={() => handlePageChange(pagination.currentPage - 1)}
                                disabled={pagination?.currentPage === 1 || loading}
                                className="text-[11px] sm:text-xs font-bold text-[#94A3B8] hover:text-[#1E293B] disabled:opacity-50 whitespace-nowrap cursor-pointer"
                            >
                                Previous
                            </button>
                            <div className="flex items-center gap-1 sm:gap-2">
                                {[...Array(pagination?.totalPages || 0)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${pagination?.currentPage === i + 1
                                            ? "bg-[#2563EB] text-white"
                                            : "hover:bg-white text-[#64748B] border border-transparent hover:border-[#E2E8F0]"
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => handlePageChange(pagination.currentPage + 1)}
                                disabled={pagination?.currentPage === pagination?.totalPages || loading}
                                className="text-[11px] sm:text-xs font-bold text-[#64748B] hover:text-[#1E293B] whitespace-nowrap cursor-pointer"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <ListingDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                listing={selectedListing}
            />
            <DeleteListingModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                listing={listingToDelete}
            />
        </div>
    );
}
