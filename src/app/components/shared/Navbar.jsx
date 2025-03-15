"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiHeart, FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import LoginFormModal from "../Modal/LoginFormModal";
import Modal from "../Modal/Modal";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("decoded-user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("decoded-user");
        localStorage.removeItem("token");
        setUser(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const pathname = usePathname()
    if (pathname.startsWith("/dashboard")) return null;

    const links = [
        { title: "Home", path: "/" },
        { title: "Shop", path: "/products" },
        { title: "About us", path: "/aboutus" },
        { title: "Blog", path: "/" },
    ];

    const isHomeRoute = pathname === "/";

    const textColor = isHomeRoute
        ? (isScrolled ? "text-black" : "text-white")
        : "text-black";

    return (
        <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4 px-4 md:px-0">
                    <div className="font-bold">
                        <Link href="/">
                            <Image src="/assets/Logo.png" alt="Logo" width={225} height={40} priority />
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-6 text-black">
                        {links.map(link => (
                            <Link href={link.path} key={link.title}>{link.title}</Link>
                        ))}
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <button className={`flex items-center gap-2 p-2 ${textColor}`}>
                            <FiHeart className="text-xl" />
                            <span>Favorites</span>
                        </button>
                        <button className={`flex items-center gap-2 p-2 ${textColor}`}>
                            <FiShoppingCart className="text-xl" />
                            <span>Cart</span>
                        </button>


                        {user?.email ? (
                            <div className="relative">
                                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center">
                                    <Image
                                        src={user.profilePic || "/assets/user-icon.png"}
                                        alt="User Profile"
                                        width={40}
                                        height={40}
                                        className="rounded-full "
                                    />
                                </button>


                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 p-3 bg-white rounded text-black">
                                        <Link href="/dashboard">
                                            <div className="block px-4 py-2  cursor-pointer">Dashboard</div>
                                        </Link>
                                        <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-500">
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button className={`p-2 px-4 rounded border ${textColor}`} onClick={() => setModalOpen(!isModalOpen)}>
                                Sign In
                            </button>
                        )}

                        <Modal title="Sign In" isOpen={isModalOpen} setIsOpen={setModalOpen}>
                            <LoginFormModal title="Sign In" />
                        </Modal>
                    </div>


                    <div className="md:hidden text-black flex items-center gap-2">
                        <button className={`flex items-center p-2 ${isScrolled ? 'text-black' : 'text-white'}`}>
                            <FiShoppingCart className="text-xl" />
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className={`text-2xl ${isScrolled ? 'text-black' : 'text-white'}`}>
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>


                {isOpen && (
                    <div className="md:hidden flex flex-col items-center py-4 space-y-4 text-black bg-white">
                        {links.map(link => (
                            <Link href={link.path} key={link.title}>{link.title}</Link>
                        ))}
                        <div className="flex space-x-4">
                            <button className="p-2 rounded-full ">
                                <FiHeart className="text-xl" />
                            </button>
                            <button className="p-2 rounded-full ">
                                <FiShoppingCart className="text-xl" />
                            </button>
                            {user?.email ? (
                                <div className="relative">
                                    <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center">
                                        <Image
                                            src={user.profilePic || "/assets/default-avatar.png"}
                                            alt="User Profile"
                                            width={40}
                                            height={40}
                                            className="rounded-full border"
                                        />
                                    </button>
                                    {dropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                                            <Link href="/dashboard">
                                                <div className="block px-4 py-2  cursor-pointer">Dashboard</div>
                                            </Link>
                                            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 ">
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button className="p-2 px-4 text-black rounded border border-black" onClick={() => setModalOpen(!isModalOpen)}>
                                    Sign In
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
