"use client";

export default function StoragePayment() {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6">
            <div className="pb-5 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Storage/Payment</h3>
                <p className="text-xs text-gray-500">Manage your storage and payment methods</p>
            </div>

            <div className="pt-5 space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-900">Current Plan</p>
                        <p className="text-xs text-gray-500">Free Plan - 5GB Storage</p>
                    </div>
                    <button className="px-4 py-2 text-xs font-semibold text_color bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                        Upgrade
                    </button>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-700">Storage Used</span>
                        <span className="text-xs font-semibold text-gray-900">2.5GB / 5GB</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg_color h-2 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
