"use client";

export default function TwoFactorAuthSection() {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-gray-900">Two-Factor Authentication</h3>
                <span className="bg-red-50 text-red-500 text-[10px] font-bold px-2 py-1 rounded border border-red-100 uppercase tracking-wide">
                    DISABLED
                </span>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 p-6 border border-gray-50 rounded-xl bg-gray-50/30">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text_color">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7" y="4" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M11 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">Secure your account</h4>
                        <p className="text-sm text-gray-500 max-w-md leading-relaxed">
                            Two-factor authentication adds an extra layer of security to your account. We recommend using an authenticator app like Google Authenticator.
                        </p>
                    </div>
                </div>
                <button className="w-full md:w-auto px-6 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap shadow-sm">
                    Enable 2FA
                </button>
            </div>
        </div>
    );
}
