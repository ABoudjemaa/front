import Navbar from "@/components/ui/Navbar";
import {Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen-hero">
            <Navbar />

            {/* Main content */}
            <Outlet />
        </div>
    );
};

export default RootLayout;
