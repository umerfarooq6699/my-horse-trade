"use client";

import WalletHeader from "@/components/profile/settings/Billing/Wallet/WalletHeader";
import BalanceCards from "@/components/profile/settings/Billing/Wallet/BalanceCards";
import TransactionTable from "@/components/profile/settings/Billing/Wallet/TransactionTable";
import PromoBanners from "@/components/profile/settings/Billing/Wallet/PromoBanners";

export default function WalletPage() {
    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <main className="container-width mx-auto px-4 py-8 md:px-8 lg:px-12">
                <WalletHeader />
                <BalanceCards />
                <TransactionTable />
                <PromoBanners />
            </main>
        </div>
    );
}
