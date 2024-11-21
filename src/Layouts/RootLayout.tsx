import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen-hero">
            {/* Navbar */}
            <nav className="bg-blue-500 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-lg font-semibold">
                        <Link to="/" className="hover:text-gray-200">
                            MyApp
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="px-4 hover:text-gray-200">
                            Login
                        </Link>
                        <Link to="/modules" className="px-4 hover:text-gray-200">
                            Modules
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main content */}
            <Outlet />
        </div>
    );
};

export default RootLayout;
