"use client"
import { useState } from "react";
import { FiMenu, FiX, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "Shop",
            path: '/shop'
        },
        {
            title: "About us",
            path: '/about-us'
        },
        {
            title: "Blog",
            path: '/blog'
        },
    ]

    return (
        <nav className="fixed w-full z-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Left Column - Logo */}
                    <div className="text-2xl font-bold">
                        <Link href="/">
                            <Image src='/assets/Logo.png'
                                alt="Logo"
                                width={225}
                                height={40}
                                priority />
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-6 text-black">
                        {
                            links.map(link =>
                                <Link href={link.path} key={link.title}>{link.title}</Link>
                            )
                        }
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <button className="flex items-center justify-between gap-2 p-2 text-black">
                            <FiHeart className="text-xl" />
                            <span>Favorites</span>
                        </button>
                        <button className="flex items-center justify-between gap-2 p-2 text-black">
                            <FiShoppingCart className="text-xl" />
                            <span>Cart</span>
                        </button>
                        <button className="p-2 px-4 text-black rounded border border-black">
                            Sign In
                        </button>
                    </div>

                    <div className="md:hidden text-black">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>


                {isOpen && (
                    <div className="md:hidden flex flex-col items-center py-4 space-y-4 text-black bg-white shadow-md">
                        {
                            links.map(link =>
                                <Link href={link.path} key={link.title}>{link.title}</Link>
                            )
                        }
                        <div className="flex space-x-4">
                            <button className="p-2 rounded-full hover:bg-gray-100">
                                <FiHeart className="text-xl" />
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100">
                                <FiShoppingCart className="text-xl" />
                            </button>
                            <button className="p-2 px-4 text-black rounded border border-black">
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
