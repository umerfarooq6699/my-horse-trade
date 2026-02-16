"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();

    // Define routes where Navbar and Footer should be hidden
    const hideHeaderFooterRoutes = ["/signup", "/login", "/forgot-password"];
    const hideFooterOnlyRoutes = ["/profile"];

    const isAdminRoute = pathname.startsWith("/admin");
    const shouldHideAll = hideHeaderFooterRoutes.includes(pathname) || isAdminRoute;
    const shouldHideFooter = shouldHideAll || pathname.startsWith("/profile");

    return (
        <>
            <div className={shouldHideAll ? "absolute top-0 left-0 w-full z-50" : ""}>
                <Navbar />
            </div>
            <main className={shouldHideAll ? "" : "pt-20"}>
                {children}
            </main>
            {!shouldHideFooter && <Footer />}
        </>
    );
}
