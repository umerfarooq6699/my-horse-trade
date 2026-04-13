"use client";

import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateProfile } from "@/redux/slices/profileSlice";
import { API_BASE_URL } from "@/utils/urls";

export default function PersonalInformation() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.profile.user)
    const loading = useSelector((state) => state.profile.loading)
    console.log(data, "profile data")

    useEffect(() => {
        dispatch(getUserDetails())
    }, [dispatch])

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        bio: ""
    });

    const [imageFile, setImageFile] = useState(null);


    useEffect(() => {
        if (data) {
            setFormData(prev => ({
                ...prev,
                name: data.name || "",
                email: data.email || "",
                bio: data.bio || ""
            }));
            if (data.profile_photo) {
                setProfileImage(data.profile_photo);
            }
        }
    }, [data]);

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
            setImageFile(file);
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

    const handleUpdateProfile = () => {
        const payload = new FormData();
        payload.append('user_name', formData.name);
        payload.append('email', formData.email);
        payload.append('bio', formData.bio || "");

        // Only send the image if it's a new file. Sending a URL string will cause backend errors.
        if (imageFile) {
            payload.append('profile_photo', imageFile);
        }

        dispatch(updateProfile(payload));
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
                            <img 
                                src={
                                    profileImage.startsWith("blob:") ? profileImage : 
                                    (profileImage.startsWith("http") 
                                        ? profileImage.replace("http://hassanakhtar.pythonanywhere.com", "https://hassanakhtar.pythonanywhere.com") 
                                        : `${API_BASE_URL || "http://localhost:8000"}${profileImage.startsWith("/") ? "" : "/"}${profileImage}`)
                                } 
                                alt="Profile" 
                                className="w-full h-full object-cover" 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/placeholder-user.jpg"; 
                                    // Make sure you have a fallback or hide it.
                                }}
                            />
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
            <div className="bg-white rounded-2xl border border-gray-100 px-3 py-5 md:px-6 md:py-6">
                <div className="mb-6">
                    <h3 className="text-base font-semibold text-gray-900">Personal Information</h3>
                </div>

                <div className="space-y-2 md:space-y-5">
                    {/* First Name & Email Address */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                            />
                        </div>
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-5 border-t border-gray-100">
                <button className="px-4 md:px-6 py-3 text-sm font-bold text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-colors w-full sm:w-auto">
                    Deactivate Account
                </button>
                <div className="grid grid-cols-2 sm:flex items-center gap-2 md:gap-3 w-full sm:w-auto">
                    <button className="px-2 md:px-6 py-3 text-[13px] md:text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                        Discard
                    </button>
                    <button
                        onClick={handleUpdateProfile}
                        disabled={loading}
                        className="px-2 md:px-6 py-3 text-[13px] md:text-sm font-bold text-white bg_color rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30 whitespace-nowrap disabled:opacity-50"
                    >
                        {loading ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>
        </div>
    );
}
