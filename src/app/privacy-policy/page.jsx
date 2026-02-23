"use client";

import React from 'react';
import {
    ChevronRight,
    Printer,
    Calendar,
    ShieldCheck,
    Eye,
    UserCircle,
    CheckCircle2,
    Database,
    CreditCard,
    Activity,
    Truck,
    Stethoscope,
    Gavel,
    Download,
    Edit3,
    Trash2,
    Lock,
    Mail,
    MapPin
} from 'lucide-react';

export default function PrivacyPolicy() {
    const navItems = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'collection', label: '1. Data Collection' },
        { id: 'usage', label: '2. How We Use Data' },
        { id: 'sharing', label: '3. Third-Party Sharing' },
        { id: 'rights', label: '4. User Rights' },
        { id: 'security', label: '5. Security Measures' },
        { id: 'contact', label: '6. Contact Us' },
    ];

    const highlights = [
        {
            icon: ShieldCheck,
            title: 'Encrypted Data',
            desc: 'We use industry-standard encryption to protect your sensitive payment and personal data.',
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        {
            icon: Eye,
            title: 'Transparent Usage',
            desc: 'We never sell your personal data to third parties for marketing purposes without consent.',
            color: 'text-[#5E5EDD]',
            bg: 'bg-[#F5F5FF]'
        },
        {
            icon: UserCircle,
            title: 'User Control',
            desc: 'You have full control over your data, including the right to access, export, and delete it.',
            color: 'text-[#2563EB]',
            bg: 'bg-blue-50'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-8 sm:mb-12">
                    <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
                    <ChevronRight size={14} />
                    <span className="hover:text-gray-900 transition-colors cursor-pointer">Legal</span>
                    <ChevronRight size={14} />
                    <span className="text-gray-900">Privacy Policy</span>
                </nav>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
                    <div>
                        <h1 className="mobile_heading lg_heading mb-4">
                            Privacy Policy
                        </h1>
                        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                            <Calendar size={16} />
                            Last Updated: October 24, 2023
                        </div>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-200 rounded-xl text-gray-700 text-sm font-bold hover:bg-gray-50 transition-all shadow-sm">
                        <Printer size={18} />
                        Print Policy
                    </button>
                </div>

                {/* Key Privacy Highlights Card */}
                <div className="bg-white border border-gray-100 rounded-[32px] p-6 sm:p-10 shadow-sm mb-16 sm:mb-24">
                    <h2 className="text-xl sm:text-2xl font-[700] text-gray-900 mb-2">Key Privacy Highlights</h2>
                    <p className="mobile_para text-blue-600 mb-8 sm:mb-12 font-medium">
                        A quick summary of our commitment to your data security.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {highlights.map((item, i) => (
                            <div key={i} className={`${item.bg} rounded-2xl p-6 transition-transform hover:scale-[1.02]`}>
                                <item.icon className={`${item.color} mb-4`} size={24} />
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sticky Sidebar Navigation */}
                    <aside className="lg:w-56 flex-shrink-0">
                        <div className="sticky top-24">
                            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                                On This Page
                            </h3>
                            <nav className="space-y-1">
                                {navItems.map((item, index) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`block py-2.5 text-sm font-medium border-l-2 transition-all ${index === 0
                                                ? 'text-blue-600 border-blue-600 pl-4'
                                                : 'text-gray-400 border-transparent pl-4 hover:text-gray-900 hover:border-gray-200'
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100/50">
                                <h4 className="text-xs font-bold text-blue-900 mb-2">Questions?</h4>
                                <p className="text-[11px] text-blue-700 mb-4 leading-relaxed">Our DPO is here to help.</p>
                                <button className="w-full py-2.5 bg-white border border-blue-100 rounded-xl text-xs font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                    Contact DPO
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Sections */}
                    <div className="flex-1 space-y-20 sm:space-y-24">
                        <section id="introduction" className="scroll-mt-24">
                            <p className="mobile_para leading-relaxed">
                                At MyHorseTrade, we are committed to maintaining the trust and confidence of our visitors to our web site.
                                In this Privacy Policy, we've provided detailed information on when and why we collect your personal
                                information, how we use it, the limited conditions under which we may disclose it to others and how we
                                keep it secure.
                            </p>
                        </section>

                        <section id="collection" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg font-bold text-sm">
                                    01
                                </span>
                                <h2 className="text-xl sm:text-[20px] font-[700] text-gray-900">Information We Collect</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="mobile_para">
                                    We collect information to provide better services to all our users. The types of information we
                                    collect include:
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        {
                                            icon: CheckCircle2,
                                            title: 'Account Information',
                                            text: 'When you sign up, we collect your name, email address, phone number, and secure password hash.'
                                        },
                                        {
                                            icon: Database,
                                            title: 'Transaction Data',
                                            text: 'Details about payments to and from you and other details of horses and services you have purchased from us.'
                                        },
                                        {
                                            icon: Activity,
                                            title: 'Usage Data',
                                            text: 'Information about how you use our website, products, and services, collected via cookies and log files.'
                                        }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <item.icon size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <span className="font-bold text-gray-900 block mb-1">{item.title}:</span>
                                                <span className="mobile_para !text-gray-500">{item.text}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section id="usage" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg font-bold text-sm">
                                    02
                                </span>
                                <h2 className="text-xl sm:text-[20px] font-[700] text-gray-900">How We Use Your Data</h2>
                            </div>
                            <p className="mobile_para mb-8">
                                Your data powers the MyHorseTrade ecosystem. We use it to verify listings, facilitate secure
                                payments, and ensure the community remains safe.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { title: 'Service Delivery', text: 'Processing transactions and managing your account and horse listings.' },
                                    { title: 'Verification', text: 'Validating the authenticity of horse pedigrees and seller identities.' },
                                    { title: 'Communication', text: 'Sending you updates, security alerts, and support messages.' },
                                    { title: 'Improvement', text: 'Analyzing platform usage to improve UI/UX and develop new features.' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-blue-100 transition-colors">
                                        <h4 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h4>
                                        <p className="text-xs text-gray-400 leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="sharing" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg font-bold text-sm">
                                    03
                                </span>
                                <h2 className="text-xl sm:text-[20px] font-[700] text-gray-900">Sharing with Third Parties</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="mobile_para">
                                    We do not sell your personal data. We only share your data with trusted third parties who assist us
                                    in operating our website, conducting our business, or serving our users, so long as those parties
                                    agree to keep this information confidential.
                                </p>
                                <p className="text-sm font-bold text-gray-600">Specific instances include:</p>
                                <ul className="space-y-4">
                                    {[
                                        { title: 'Payment Processors', text: 'To facilitate secure credit card and bank transfer transactions.' },
                                        { title: 'Veterinary Services', text: 'If you request a vet check, we share necessary details with the licensed professional.' },
                                        { title: 'Legal Obligations', text: 'When required by law to comply with a subpoena or similar legal process.' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 mobile_para !text-gray-500">
                                            <span className="mt-2.5 w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0"></span>
                                            <div>
                                                <span className="font-bold text-gray-700">{item.title}:</span> {item.text}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section id="rights" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg font-bold text-sm">
                                    04
                                </span>
                                <h2 className="text-xl sm:text-[20px] font-[700] text-gray-900">Your Data Rights</h2>
                            </div>
                            <div className="bg-blue-50/50 border border-blue-100/50 rounded-[32px] p-8 sm:p-10 shadow-sm">
                                <h4 className="text-sm font-bold text-gray-900 mb-8">
                                    Under GDPR and CCPA, you have specific rights regarding your personal information:
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: Download, label: 'Right to Access' },
                                        { icon: Edit3, label: 'Right to Rectify' },
                                        { icon: Trash2, label: 'Right to Erase' },
                                        { icon: Eye, label: 'Right to Restrict' }
                                    ].map((btn, i) => (
                                        <button key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-blue-50 shadow-sm group hover:border-blue-300 transition-all">
                                            <btn.icon size={18} className="text-blue-500 group-hover:scale-110 transition-transform" />
                                            <span className="text-sm font-bold text-gray-700">{btn.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="security" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg font-bold text-sm">
                                    05
                                </span>
                                <h2 className="text-xl sm:text-[20px] font-[700] text-gray-900">Security Measures</h2>
                            </div>
                            <div className="space-y-10">
                                <p className="mobile_para">
                                    We implement a variety of security measures to maintain the safety of your personal information.
                                    Your personal information is contained behind secured networks and is only accessible by a limited
                                    number of persons who have special access rights to such systems.
                                </p>
                                <div className="bg-green-50 rounded-2xl p-6 border border-green-100 flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white rounded-xl border border-green-200 flex items-center justify-center shadow-sm">
                                        <Lock size={24} className="text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-green-900 text-sm mb-1">SSL Encryption</h4>
                                        <p className="text-green-700 text-[11px] leading-relaxed">
                                            All sensitive/credit information you supply is transmitted via Secure Socket Layer (SSL) technology.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Contact Us Card */}
                        <section id="contact" className="scroll-mt-24 pb-20">
                            <div className="bg-[#0F172A] rounded-[32px] p-8 sm:p-16 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110 group-hover:bg-blue-500/20"></div>
                                <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                                <p className="text-gray-400 text-sm mb-12 max-w-md leading-relaxed">
                                    If you have any questions about this Privacy Policy, please contact our Data Protection Officer.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                            <Mail size={20} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
                                            <p className="font-bold text-sm">privacy@myhorsetrade.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                            <MapPin size={20} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Office</p>
                                            <p className="font-bold text-sm">123 Equestrian Way, KY 40502</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
