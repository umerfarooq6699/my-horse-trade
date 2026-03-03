"use client";

import { useState, useRef } from "react";

export default function PersonalInformation() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        bio: ""
    });

    const [bioLength, setBioLength] = useState(0);
    const [profileImage, setProfileImage] = useState(null);
    const maxBioLength = 500;
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "bio") {
            setBioLength(value.length);
        }
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const handleRemovePhoto = () => {
        setProfileImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">General Settings</h2>
            </div>

            {/* Profile Photo Section */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100 overflow-hidden">
                        {profileImage ? (
                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        )}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-sm font-bold text-gray-900 mb-1">Profile Photo</h3>
                        <p className="text-xs text-gray-500 mb-4 max-w-sm">
                            This image will be shown on your profile and next to your listings. PNG, JPG or GIF, max 10MB.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-2">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept="image/*"
                                className="hidden"
                            />
                            <button
                                onClick={handleRemovePhoto}
                                className="w-full sm:w-auto px-6 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Remove
                            </button>
                            <button
                                onClick={handleUploadClick}
                                className="w-full sm:w-auto px-6 py-2 text-sm font-bold text-white bg_color rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Upload New
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Personal Information Section */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-base font-semibold text-gray-900">Personal Information</h3>
                    <button className="text-sm font-medium text_color hover:underline">
                        Edit
                    </button>
                </div>

                <div className="space-y-5">
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                            />
                        </div>
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m2 7 8.97 5.7a1.94 1.94 0 0 0 2.06 0L22 7" />
                                </svg>
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                            />
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Bio
                        </label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows="4"
                            maxLength={maxBioLength}
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-gray-50"
                        />
                        <p className="text-xs text-gray-500 mt-2 text-right">
                            {bioLength}/{maxBioLength}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
