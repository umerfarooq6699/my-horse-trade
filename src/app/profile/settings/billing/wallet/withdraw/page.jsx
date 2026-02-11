"use client";

import Link from "next/link";
import WithdrawForm from "@/components/profile/settings/Billing/Withdraw/WithdrawForm";
import WithdrawSummary from "@/components/profile/settings/Billing/Withdraw/WithdrawSummary";
import BalanceCards from "@/components/profile/settings/Billing/Wallet/BalanceCards";

export default function WithdrawPage() {
    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <main className="container-width mx-auto px-4 py-8 md:px-8 lg:px-12">
                {/* Header Section */}
                <div className="mb-8">
                    <nav className="flex mb-4" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase">
                            <li>
                                <Link href="/profile/settings/billing/wallet" className="text_color">WALLET</Link>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-300">
                                <span>/</span>
                                <span className="text-gray-400">WITHDRAW</span>
                            </li>
                        </ol>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Withdraw Funds</h1>
                            <p className="text-gray-500 font-medium">Secure ACH transfer to your bank account.</p>
                        </div>

                        {/* Compact Balance Box */}
                        <div className="bg-white px-8 py-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">AVAILABLE BALANCE</p>
                            <p className="text-2xl font-bold text-gray-900">$12,500.00</p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-7">
                        <WithdrawForm />
                    </div>

                    {/* Right Column: Summary */}
                    <div className="lg:col-span-5">
                        <WithdrawSummary />
                    </div>
                </div>

                {/* Footer Section: Balance Cards Reused */}
                <div className="pt-12 border-t border-gray-100">
                    <BalanceCards />
                </div>
            </main>
        </div>
    );
}
