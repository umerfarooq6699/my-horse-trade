"use client";

import SectionHeader from "./SectionHeader";
import HorseCard from "./HorseCard";
import image1 from "../../assets/images/marketplace1.png";
import image2 from "../../assets/images/marketplace2.png";
import image3 from "../../assets/images/marketplace3.png";
import image4 from "../../assets/images/marketplace4.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketplaceHorses } from "@/redux/slices/horseSlice";

const featuredHorses = [
    {
        id: 5,
        name: "Midnight Runner",
        breed: "Clydesdale",
        age: 5,
        price: 32000,
        location: "Scotland, UK",
        height: "17.2",
        image: image1.src,
        tag: "Featured",
        isPremium: true
    },
    {
        id: 6,
        name: "Apollo",
        breed: "Andalusian",
        age: 6,
        price: 45000,
        location: "Spain",
        height: "15.3",
        image: image2.src,
        tag: "Active",
        isVerified: true
    },
    {
        id: 7,
        name: "Star Light",
        breed: "Hanoverian",
        age: 7,
        price: 28000,
        location: "Germany",
        height: "16.2",
        image: image3.src,
        tag: "Best Deal",
        isNew: true
    },
    {
        id: 8,
        name: "Chestnut",
        breed: "Quarter Horse",
        age: 4,
        price: 18500,
        location: "Texas, USA",
        height: "15.0",
        image: image4.src,
        tag: null
    }
];

export default function FeaturedHorses() {
    const dispatch = useDispatch();
    const { data: marketplaceHorses, loading } = useSelector((state) => state.horse.marketplace);

    useEffect(() => {
        dispatch(fetchMarketplaceHorses());
    }, [dispatch]);

    const horsesToDisplay = marketplaceHorses && marketplaceHorses.length > 0
        ? marketplaceHorses.slice(0, 4).map(horse => ({
            ...horse,
            image: horse.image || image1.src,
            category: horse.breed,
            tag: "Featured"
        }))
        : featuredHorses;

    return (
        <section className="mobile_spaces lg_spaces bg-white">
            <div className="container-width">
                <SectionHeader
                    title="Featured Horses"
                    subtitle="Hand-Picked For You"
                    linkText="View All Featured"
                    linkUrl="/marketplace"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {horsesToDisplay.map((horse) => (
                        <HorseCard key={horse.id} horse={horse} />
                    ))}
                </div>
            </div>
        </section>
    );
}
