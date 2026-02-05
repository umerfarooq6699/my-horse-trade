"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();

    // Define routes where Navbar and Footer should be hidden
    const hideLayoutRoutes = ["/signup", "/login", "/forgot-password"];
    const shouldHide = hideLayoutRoutes.includes(pathname);

    return (
        <>
            <div className={shouldHide ? "absolute top-0 left-0 w-full z-50" : ""}>
                <Navbar />
            </div>
            {children}
            {!shouldHide && <Footer />}
        </>
    );
}
