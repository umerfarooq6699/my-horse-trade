"use client";

export default function SecurityActivity() {
    const activities = [
        {
            title: "Password Changed",
            time: "Today at 10:23 AM • IP 192.168.1.1",
            color: "green"
        },
        {
            title: "New Device Login (iPhone 13 Pro)",
            time: "Yesterday at 4:15 PM • New York, USA",
            color: "blue"
        },
        {
            title: "Email Address Verified",
            time: "Oct 24, 2023",
            color: "blue"
        }
    ];

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Security Activity</h3>

            <div className="ml-2 space-y-6 border-l-2 border-gray-100 pl-6 relative">
                {activities.map((activity, index) => (
                    <div key={index} className="relative">
                        <div className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white ring-1 ring-gray-100 ${activity.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                            }`} />
                        <h4 className="text-sm font-bold text-gray-900 mb-0.5">{activity.title}</h4>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
