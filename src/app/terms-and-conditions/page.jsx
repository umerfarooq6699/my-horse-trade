"use client";

import React from 'react';
import {
    Info,
    User,
    ShoppingBag,
    CreditCard,
    ShieldAlert,
    Scale,
    ArrowRight,
    AlertTriangle,
    Tag,
    Percent,
    Shield
} from 'lucide-react';

export default function TermsAndConditions() {
    const tocItems = [
        { id: 'introduction', label: 'Introduction', icon: Info },
        { id: 'account', label: 'Account & Reg', icon: User },
        { id: 'buying', label: 'Buying & Selling', icon: ShoppingBag },
        { id: 'fees', label: 'Fees & Payments', icon: CreditCard },
        { id: 'animal', label: 'Animal Welfare', icon: ShieldAlert },
        { id: 'liability', label: 'Liability', icon: Scale },
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg uppercase tracking-wider">
                            Legal
                        </span>
                        <span className="text-gray-400 text-sm">
                            Last updated: October 24, 2023
                        </span>
                    </div>
                    <h1 className="mobile_heading lg_heading mb-4">
                        Terms and Conditions
                    </h1>
                    <p className="mobile_para">
                        Welcome to MyHorseTrade. Please read these terms carefully before using
                        our platform. They govern your access to and use of our marketplace and
                        services.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <div className="sticky top-24">
                            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
                                Table of Contents
                            </h2>
                            <nav className="space-y-1">
                                {tocItems.map((item, index) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group ${index === 0
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        <item.icon size={18} className={index === 0 ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-900'} />
                                        {item.label}
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-xs text-gray-400 mb-4">Need clarification?</p>
                                <button className="w-full py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-900 hover:border-blue-600 hover:text-blue-600 transition-all">
                                    Contact Legal
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <main className="flex-1 space-y-16">
                        {/* 01 Introduction */}
                        <section id="introduction" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full font-bold text-sm">
                                    01
                                </span>
                                <h2 className="sm:text-[20px] font-[700] text-gray-900">Introduction</h2>
                                <div className="flex-1 h-px bg-gray-100 hidden md:block"></div>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-sm">
                                <p className="mobile_para mb-6">
                                    These Terms and Conditions constitute a legally binding agreement made between you,
                                    whether personally or on behalf of an entity ("you") and MyHorseTrade.com ("we," "us" or
                                    "our"), concerning your access to and use of the MyHorseTrade.com website as well as any
                                    other media form, media channel, mobile website or mobile application related, linked, or
                                    otherwise connected thereto.
                                </p>
                                <p className="mobile_para">
                                    You agree that by accessing the Site, you have read, understood, and agree to be bound by all
                                    of these Terms and Conditions. If you do not agree with all of these terms, then you are
                                    expressly prohibited from using the Site and must discontinue use immediately.
                                </p>
                            </div>
                        </section>

                        {/* 02 Account Registration */}
                        <section id="account" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full font-bold text-sm">
                                    02
                                </span>
                                <h2 className="sm:text-[20px] font-[700] text-gray-900">Account Registration</h2>
                                <div className="flex-1 h-px bg-gray-100 hidden md:block"></div>
                            </div>
                            <div className="space-y-6">
                                <p className="mobile_para">
                                    To access certain features of the Platform, you must register for an account. You agree to provide
                                    accurate, current, and complete information during the registration process and to update such
                                    information to keep it accurate, current, and complete.
                                </p>
                                <ul className="space-y-4">
                                    {['You are responsible for safeguarding your password.', 'You agree not to disclose your password to any third party.', 'You must take sole responsibility for any activities or actions under your account.'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-500">
                                            <span className="mt-2 w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex gap-4">
                                    <AlertTriangle className="text-red-500 flex-shrink-0" size={24} />
                                    <p className="text-sm text-red-900 leading-relaxed">
                                        <span className="font-bold">Important:</span> MyHorseTrade reserves the right to suspend or terminate your account if any information
                                        provided during the registration process or thereafter proves to be inaccurate, not current, or incomplete.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 03 Buying & Selling Obligations */}
                        <section id="buying" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full font-bold text-sm">
                                    03
                                </span>
                                <h2 className="sm:text-[20px] font-[700] text-gray-900">Buying & Selling Obligations</h2>
                                <div className="flex-1 h-px bg-gray-100 hidden md:block"></div>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-sm space-y-10">
                                <div>
                                    <h3 className="sm:text-[17px] font-[600] sm:font-[700] text-gray-900 mb-4">Seller Obligations</h3>
                                    <p className="mobile_para">
                                        By listing a horse on this platform, you certify that you are the legal owner or authorized
                                        agent of the animal. You agree to provide truthful and accurate information regarding the
                                        health, pedigree, temperament, and training history of any horses listed for sale. Falsification
                                        of veterinary records will result in immediate account suspension and potential legal action.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="sm:text-[17px] font-[600] sm:font-[700] text-gray-900 mb-4">Buyer Obligations</h3>
                                    <p className="mobile_para">
                                        Buyers are responsible for conducting their own due diligence, including pre-purchase
                                        veterinary examinations. MyHorseTrade.com facilitates the connection between buyer and
                                        seller but does not guarantee the condition of any animal sold.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 04 Fees & Payments */}
                        <section id="fees" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full font-bold text-sm">
                                    04
                                </span>
                                <h2 className="sm:text-[20px] font-[700] text-gray-900">Fees & Payments</h2>
                                <div className="flex-1 h-px bg-gray-100 hidden md:block"></div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                                    <Tag className="text-blue-600 mb-6" size={32} />
                                    <h3 className="sm:text-[17px] font-[600] sm:font-[700] text-gray-900 mb-4">Listing Fees</h3>
                                    <p className="mobile_para">
                                        Standard listings are free. Premium listings, which include homepage placement and social media
                                        promotion, are subject to a fee of $49.99 per 30 days.
                                    </p>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                                    <Percent className="text-blue-600 mb-6" size={32} />
                                    <h3 className="sm:text-[17px] font-[600] sm:font-[700] text-gray-900 mb-4">Transaction Fees</h3>
                                    <p className="mobile_para">
                                        For auctions conducted securely through the platform, MyHorseTrade charges a 5% final value
                                        fee, capped at $5,000.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 05 Animal Welfare Banner */}
                        <section id="animal" className="scroll-mt-24">
                            <div className="bg-[#2D4791] rounded-[32px] overflow-hidden p-8 md:p-16 text-center text-white relative">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <ShieldAlert size={120} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                                    We maintain a zero-tolerance policy towards animal cruelty.
                                </h2>
                                <div className="grid md:grid-cols-2 gap-12 text-left mb-12">
                                    <p className="text-blue-100 leading-relaxed text-sm">
                                        Any listing suspected of involving an animal in poor condition, distress, or subject to abuse will be
                                        removed immediately. We cooperate fully with law enforcement and animal control agencies.
                                    </p>
                                    <p className="text-blue-100 leading-relaxed text-sm">
                                        Sellers must ensure all horses have adequate space, nutrition, and veterinary care while listed.
                                        Buyers agree to continue providing a standard of care consistent with local animal welfare laws.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-3 py-4 border-t border-white/10 uppercase tracking-widest text-xs font-bold text-blue-200">
                                    <Shield size={16} />
                                    Verified Standards
                                </div>
                            </div>
                        </section>

                        {/* 06 Limitation of Liability */}
                        <section id="liability" className="scroll-mt-24 pb-20">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full font-bold text-sm">
                                    06
                                </span>
                                <h2 className="sm:text-[20px] font-[700] text-gray-900">Limitation of Liability</h2>
                                <div className="flex-1 h-px bg-gray-100 hidden md:block"></div>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-sm">
                                <p className="mobile_para">
                                    In no event shall MyHorseTrade.com, nor its directors, employees, partners, agents, suppliers,
                                    or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
                                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                                    resulting from (i) your access to or use of or inability to access or use the Service; (ii) any
                                    conduct or content of any third party on the Service; (iii) any content obtained from the
                                    Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
                                </p>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
