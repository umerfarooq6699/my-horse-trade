"use client";

import HorseCard from "./HorseCard";
import image1 from "../../assets/images/marketplace1.png"
import image2 from "../../assets/images/marketplace2.png"
import image3 from "../../assets/images/marketplace3.png"
import image4 from "../../assets/images/marketplace4.png"
import image5 from "../../assets/images/marketplace5.png"
import image6 from "../../assets/images/marketplace6.png"

export const mockHorses = [
    {
        id: 1,
        name: "Midnight Star",
        breed: "Friesian • Stallion",
        age: 6,
        height: 16.2,
        location: "Kentucky, USA",
        price: 45000,
        image: image1.src,
        isPremium: true,
        seller: "Alex Rider",
        sellerAvatar: "https://avatar.iran.liara.run/public/boy?username=Alex",
        type: "Fixed Price",
        status: "Active",
        date: "Oct 24, 2023"
    },
    {
        id: 2,
        name: "Cyber Spirit",
        breed: "Arabian • Mare",
        age: 7,
        height: 15.1,
        location: "Dubai, UAE",
        price: 125000,
        image: image2.src,
        isVerified: true,
        seller: "Sarah Miller",
        sellerAvatar: "https://avatar.iran.liara.run/public/girl?username=Sarah",
        type: "Auction",
        status: "Pending Review",
        date: "Oct 24, 2023"
    },
    {
        id: 3,
        name: "Apollo's Flight",
        breed: "Warmblood • Gelding",
        age: 9,
        height: 17.0,
        location: "Berlin, Germany",
        price: 62000,
        image: image3.src,
        seller: "John Doe",
        sellerAvatar: "https://avatar.iran.liara.run/public/boy?username=John",
        type: "Fixed Price",
        status: "Sold",
        date: "Oct 20, 2023"
    },
    {
        id: 4,
        name: "Silver Mist",
        breed: "Andalusian • Mare",
        age: 6,
        height: 16.0,
        location: "Madrid, Spain",
        price: 85000,
        image: image4.src,
        isPremium: true,
        seller: "Robert James",
        sellerAvatar: "https://avatar.iran.liara.run/public/boy?username=Robert",
        type: "Fixed Price",
        status: "Rejected",
        date: "Oct 18, 2023",
        rejectionReason: "Image quality is too low and missing health certificates."
    },
    {
        id: 5,
        name: "Red Comet",
        breed: "Thoroughbred • Stallion",
        age: 4,
        height: 16.3,
        location: "Ocala, FL, USA",
        price: 38500,
        image: image5.src,
        seller: "Mike K.",
        sellerAvatar: "https://avatar.iran.liara.run/public/boy?username=Mike",
        type: "Auction",
        status: "Active",
        date: "Oct 15, 2023"
    },
    {
        id: 6,
        name: "Shadow Dancer",
        breed: "Dutch Warmblood • Mare",
        age: 10,
        height: 16.1,
        location: "Amsterdam, NL",
        price: 55000,
        image: image6.src,
        isNew: true,
        seller: "Unknown User",
        sellerAvatar: "https://avatar.iran.liara.run/public/boy?username=Unknown",
        type: "Fixed Price",
        status: "Active",
        date: "Oct 12, 2023"
    }
];

export default function HorseGrid({ viewMode }) {
    return (
        <div>
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {mockHorses.map((horse) => (
                    <HorseCard key={horse.id} horse={horse} />
                ))}
            </div>

            <div className="mt-7 sm:mt-12 flex justify-center">
                <button className="flex items-center justify-center cursor-pointer gap-3 w-full sm:w-auto px-8 py-3 bg_color text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-100/50">
                    <div className="w-5 h-5 flex items-center justify-center border-2 border-white/30 rounded-md">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    Load More Horses
                </button>
            </div>

        </div>
    );
}
