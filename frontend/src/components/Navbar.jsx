import { Link, useLocation } from "react-router";
import { BookOpenIcon, LayoutDashboardIcon, TerminalIcon } from "lucide-react";
import { UserButton } from "@clerk/react";

function Navbar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
                
                {/* 1. Logo section identical to HomePage */}
                <Link
                    to="/"
                    className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
                >
                    <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                        <TerminalIcon className="size-6 text-white" />
                    </div>

                    <span className="font-black text-2xl sm:text-3xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-serif tracking-wide drop-shadow-sm">
                        SyncHire
                    </span>
                </Link>

                {/* 2. Navigation Links & Auth */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link
                        to={"/problems"}
                        className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2
                            ${isActive("/problems")
                                ? "bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20"
                                : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
                            }
                        `}
                    >
                        <BookOpenIcon className="size-4.5" />
                        <span className="hidden sm:inline">Problems</span>
                    </Link>

                    <Link
                        to={"/dashboard"}
                        className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2
                            ${isActive("/dashboard")
                                ? "bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20"
                                : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
                            }
                        `}
                    >
                        <LayoutDashboardIcon className="size-4.5" />
                        <span className="hidden sm:inline">Dashboard</span>
                    </Link>

                    {/* 3. User Button (Fixed alignment and import) */}
                    <div className="ml-2 flex items-center justify-center">
                        <UserButton 
                            appearance={{
                                elements: {
                                    avatarBox: "size-10 shadow-md border border-primary/20 hover:scale-105 transition-transform duration-200"
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;