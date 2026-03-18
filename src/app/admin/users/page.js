"use client";

import { Search, Filter, FileDown, MoreVertical, Edit2, ChevronRight, Eye, Trash2, UserPlus, Hourglass, Ban, Users, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import UserDetailsModal from "@/components/admin/users/UserDetailsModal";
import DeleteUserModal from "@/components/admin/users/DeleteUserModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "@/redux/slices/adminSlice";

export default function UsersManagement() {
    const dispatch = useDispatch();
    const { users: userList, loading, error, pagination } = useSelector((state) => state.admin);

    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [userToDelete, setUserToDelete] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const searchTimer = useRef(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useRef(null);

    useEffect(() => {
        dispatch(fetchAllUsers({ page: 1, searchValue: "" }));
    }, [dispatch]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsFilterOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Auto-navigate to previous page when current page becomes empty
    useEffect(() => {
        if (!loading && userList?.length === 0 && pagination?.currentPage > 1) {
            dispatch(fetchAllUsers({ page: pagination.currentPage - 1, searchValue }));
        }
    }, [userList, loading]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        // Debounce: wait 300ms after user stops typing before sending request
        clearTimeout(searchTimer.current);
        searchTimer.current = setTimeout(() => {
            dispatch(fetchAllUsers({ page: 1, searchValue: value }));
        }, 300);
    };

    const handleViewDetails = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (user) => {
        setUserToDelete(user);
        setIsDeleteModalOpen(true);
    };


    const handleRefresh = () => {
        dispatch(fetchAllUsers({ page: pagination.currentPage, searchValue }));
    };

    const handlePageChange = (page) => {
        dispatch(fetchAllUsers({ page, searchValue }));
    };

    const stats = [
        { label: "Total Users", value: pagination?.totalUsers?.toLocaleString() || "0", icon: <Users size={18} className="text-[#2563EB]" />, iconBg: "bg-blue-50" },
        { label: "New Today", value: "+45", change: "12%", icon: <UserPlus size={18} className="text-[#22C55E]" />, iconBg: "bg-green-50" },
        { label: "Pending Approval", value: "12", sub: "Requires immediate attention", icon: <Hourglass size={18} className="text-[#F59E0B]" />, iconBg: "bg-orange-50", border: "border-l-4 border-l-[#F59E0B]" },
        { label: "Suspended", value: "89", sub: "Due to policy violations", icon: <Ban size={18} className="text-[#EF4444]" />, iconBg: "bg-red-50" },
    ];

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    };

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
                        <span className="text-[#1E293B]">User Management</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <h1 className="text-[24px] sm:text-[32px] font-[600] text-[#1E293B] tracking-tight mb-2">User Management</h1>
                        <button
                            onClick={handleRefresh}
                            className={`p-2 rounded-full hover:bg-gray-100 transition-all ${loading ? 'animate-spin' : ''}`}
                            disabled={loading}
                        >
                            <RefreshCcw size={18} className="text-gray-400" />
                        </button>
                    </div>
                    <p className="text-gray-400 font-medium">
                        Manage user access, view details, and update statuses.
                    </p>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className={`bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm relative overflow-hidden flex flex-col justify-between h-full min-h-[140px] ${stat.border || ""}`}>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[14px] font-[600] text-gray-400">{stat.label}</span>
                            <div className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
                                {stat.icon}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-end gap-2">
                                <span className="text-[28px] font-[700] text-[#1E293B] leading-none tracking-tight">{stat.value}</span>
                                {stat.change && (
                                    <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-lg mb-1 ${stat.change.startsWith('+') ? 'text-[#22C55E] bg-green-50/50' : 'text-[#22C55E] bg-green-50/50'}`}>
                                        ↑ {stat.change}
                                    </span>
                                )}
                            </div>
                            {stat.sub && (
                                <p className="text-[11px] text-gray-400 mt-2 font-medium">{stat.sub}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Users Table Card */}
            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
                {/* Table Filters */}
                <div className="p-4 sm:p-8 border-b border-[#F8FAFC] flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="relative max-w-md w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                            onChange={handleSearch}
                            type="text"
                            placeholder="Search by name or email..."
                            className="w-full pl-12 pr-6 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium transition-all outline-none focus:ring-2 focus:ring-[#2563EB]/10"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative" ref={filterRef}>
                            <button 
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                                    isFilterOpen 
                                        ? "bg-white border border-[#CBD5E1] text-[#1E293B] shadow-sm" 
                                        : "bg-[#F8FAFC] border border-transparent text-[#64748B] hover:text-[#1E293B]"
                                }`}
                            >
                                <Filter className="w-4 h-4" />
                                Filters
                            </button>

                            {isFilterOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-[#F1F5F9] overflow-hidden z-20">
                                    <div className="p-2 space-y-1">
                                        <button className="w-full text-left px-3 py-2.5 text-sm font-medium text-[#64748B] hover:text-[#2563EB] hover:bg-blue-50/50 rounded-lg transition-colors">
                                            Today
                                        </button>
                                        <button className="w-full text-left px-3 py-2.5 text-sm font-medium text-[#64748B] hover:text-[#2563EB] hover:bg-blue-50/50 rounded-lg transition-colors">
                                            Last Week
                                        </button>
                                        <button className="w-full text-left px-3 py-2.5 text-sm font-medium text-[#64748B] hover:text-[#2563EB] hover:bg-blue-50/50 rounded-lg transition-colors">
                                            Last Month
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto min-h-[400px]">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center h-64 gap-4">
                            <RefreshCcw className="w-10 h-10 text-[#2563EB] animate-spin" />
                            <p className="text-[#64748B] font-medium">Fetching users...</p>
                        </div>
                    ) : error ? (
                        <div className="flex flex-col items-center justify-center h-64 gap-4 text-center px-4">
                            <Ban className="w-10 h-10 text-red-500" />
                            <p className="text-[#EF4444] font-medium">{typeof error === 'string' ? error : "Failed to fetch users"}</p>
                            <button
                                onClick={handleRefresh}
                                className="px-4 py-2 bg-[#2563EB] text-white rounded-xl text-sm font-bold"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : (
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="border-b border-[#F8FAFC]">
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest pl-4 sm:pl-8">User</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Role</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Status</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Joined Date</th>
                                    <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-right pr-4 sm:pr-8">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F8FAFC]">
                                {userList?.length > 0 ? (
                                    userList.map((user, i) => (
                                        <tr key={user._id || i} className="group hover:bg-gray-50/50 transition-all">
                                            <td className="py-5 pl-4 sm:pl-8">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full border border-[#F1F5F9] overflow-hidden flex-shrink-0 bg-[#2563EB]/10 flex items-center justify-center">
                                                        {user.avatar ? (
                                                            <img src={user.avatar} alt={user.user_name} className="w-full h-full object-cover" />
                                                        ) : (
                                                            <Users className="text-[#2563EB] w-5 h-5" />
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">{user.user_name}</span>
                                                        <span className="text-[11px] text-[#64748B] font-medium">{user.email}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-5 px-4 sm:px-8">
                                                <span className="text-sm text-[#64748B] font-medium">{user.user_type}</span>
                                            </td>
                                            <td className="py-5 px-4 sm:px-8">
                                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${user.status === "Active" || !user.status ? "bg-[#F0FDF4] text-[#22C55E]" : "bg-[#FEF2F2] text-[#EF4444]"
                                                    }`}>
                                                    {user.status || "Active"}
                                                </span>
                                            </td>
                                            <td className="py-5 px-4 sm:px-8">
                                                <span className="text-sm text-[#64748B] font-medium">{formatDate(user.createdAt)}</span>
                                            </td>
                                            <td className="py-5 text-right pr-4 sm:pr-8">
                                                <div className="flex items-center justify-end gap-1">
                                                    <button
                                                        onClick={() => handleViewDetails(user)}
                                                        className="cursor-pointer p-2 text-[#CBD5E1] hover:text-[#2563EB] rounded-lg hover:bg-blue-50 transition-all"
                                                        title="View Details"
                                                    >
                                                        <Eye className="w-4.5 h-4.5 text-blue-500" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteClick(user)}
                                                        className="cursor-pointer p-2 text-[#CBD5E1] hover:text-red-500 rounded-lg hover:bg-red-50 transition-all"
                                                        title="Delete User"
                                                    >
                                                        <Trash2 className="w-4.5 h-4.5 text-red-500" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="py-10 text-center text-[#64748B] font-medium">No users found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Pagination */}
                {!loading && !error && (
                    <div className="p-4 sm:p-8 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs font-bold text-[#94A3B8]">
                            Showing {userList?.length || 0} of {pagination?.totalUsers || 0} users
                        </p>
                        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto max-w-full">
                            <button
                                onClick={() => handlePageChange(pagination.currentPage - 1)}
                                className="text-[11px] sm:text-xs font-bold text-[#94A3B8] hover:text-[#1E293B] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 whitespace-nowrap"
                                disabled={pagination?.currentPage === 1 || loading}
                            >
                                Previous
                            </button>
                            <div className="flex items-center gap-1 sm:gap-2">
                                {[...Array(pagination?.totalPages || 0)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${pagination.currentPage === i + 1
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
                                className="text-[11px] sm:text-xs font-bold text-[#64748B] hover:text-[#1E293B] cursor-pointer disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50"
                                disabled={pagination?.currentPage === pagination?.totalPages || loading}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Modals */}
            <UserDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                user={selectedUser}
            />

            <DeleteUserModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                user={userToDelete}
            />
        </div>
    );
}

