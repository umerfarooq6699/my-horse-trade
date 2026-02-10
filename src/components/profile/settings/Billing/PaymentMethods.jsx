"use client";

export default function PaymentMethods() {
    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">Payment Methods</h3>
                    <button className="text-sm font-bold text_color">+ Add New</button>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-[#1A1F71] rounded-md flex items-center justify-center text-white text-[10px] font-bold tracking-widest">VISA</div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-gray-900">.... 4242</span>
                                <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-1.5 py-0.5 rounded border border-gray-200">DEFAULT</span>
                            </div>
                            <p className="text-xs text-gray-500">Expires 10/24</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-[#EB001B] rounded-md flex items-center justify-center text-white text-[10px] font-bold tracking-widest bg-gradient-to-r from-[#FF5F00] to-[#EB001B]">
                            <div className="flex -space-x-1.5">
                                <div className="w-3 h-3 rounded-full bg-white/50"></div>
                                <div className="w-3 h-3 rounded-full bg-white/50"></div>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-gray-900">.... 8839</span>
                            <p className="text-xs text-gray-500">Expires 12/25</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">Billing Address</h3>
                    <button className="text-sm font-bold text_color">Edit</button>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 flex gap-4 h-auto">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0 text-gray-400">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">Alex Rider</h4>
                        <div className="text-sm text-gray-500 leading-relaxed">
                            <p>123 Stallion Way</p>
                            <p>Suite 400</p>
                            <p>Lexington, KY 40507</p>
                            <p>United States</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
