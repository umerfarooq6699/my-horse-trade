"use client";

import Link from "next/link";

export default function WalletHeader() {
    return (
        <div className="mb-8">
            <nav className="flex mb-4" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm text-gray-500">
                    <li>
                        <Link href="/" className="hover:text-gray-700">Home</Link>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span>/</span>
                        <Link href="/profile" className="hover:text-gray-700">Profile</Link>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span>/</span>
                        <Link href="/profile/settings/billing" className="hover:text-gray-700 whitespace-nowrap">Billing & Invoices</Link>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span>/</span>
                        <span className="font-bold text_color">Wallet</span>
                    </li>
                </ol>
            </nav>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wallet</h1>
                    <p className="text-gray-500 max-w-2xl">
                        Manage your funds, track escrow payments, and withdraw your earnings securely.
                    </p>
                </div>
                <div className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 border border-green-100">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                        <path d="M8 11L11 14L16 9" />
                    </svg>
                    Payments Secured via SSL
                </div>
            </div>
        </div>
    );
}
