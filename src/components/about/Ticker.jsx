export default function Ticker() {
    const items = [
        "INNOVATION",
        "HERITAGE",
        "TRUST",
        "PERFORMANCE",
        "INTEGRITY",
        "INNOVATION"
    ];

    return (
        <div className="w-full bg-white py-8 border-y border-gray-100 overflow-hidden select-none">
            <div className="flex animate-marquee whitespace-nowrap">
                {/* Double the items for seamless loop if using pure CSS animation */}
                {[...items, ...items, ...items].map((item, index) => (
                    <div key={index} className="flex items-center mx-8">
                        <span className="text-[#E2E8F0] text-3xl font-black tracking-widest italic flex items-center gap-4">
                            <span className="w-2 h-2 bg_color rounded-full"></span>
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
