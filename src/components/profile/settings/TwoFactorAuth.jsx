"use client";

export default function TwoFactorAuth() {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500 max-w-lg">
                    Add an extra layer of security to your account by requiring a verification code in addition to your password.
                </p>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="12" height="20" x="6" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                </svg>
                Enable 2FA
            </button>
        </div>
    );
}
