"use client";

export default function ActionButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-2">
            <button className="text-xs font-bold text-gray-500 hover:text-gray-700">
                Unsubscribe from all marketing emails
            </button>
            <div className="flex items-center gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-6 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                </button>
                <button className="flex-1 sm:flex-none px-6 py-2.5 text-sm font-bold text-white bg_color rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
