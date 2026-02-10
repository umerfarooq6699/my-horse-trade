"use client";

import { useState } from "react";

export default function ChangePassword() {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Password Management</h3>

            <div className="space-y-5">
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 ml-1">
                        Current Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#F8FAFC]"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-2 ml-1">
                            New Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#F8FAFC]"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-2 ml-1">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#F8FAFC]"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-4 gap-4">

                    <div className="flex items-center gap-6 w-full md:w-auto justify-end">
                        <button className="bg_color text-white px-8 py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-sm">
                            Update Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
