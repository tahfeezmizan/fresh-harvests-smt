"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiHeart, FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import Modal from "./Modal/Modal";
import LoginFormModal from "./Modal/LoginFormModal";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = [
        { title: "Home", path: '/' },
        { title: "Shop", path: '/shop' },
        { title: "About us", path: '/about-us' },
        { title: "Blog", path: '/blog' },
    ];

    return (
        <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4 px-4 md:px-0">
                    <div className="font-bold">
                        <Link href="/">
                            <Image src='/assets/Logo.png' alt="Logo" width={225} height={40} priority />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-6 text-black">
                        {links.map(link => (
                            <Link href={link.path} key={link.title}>{link.title}</Link>
                        ))}
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <button className={`flex items-center gap-2 p-2 ${isScrolled ? 'text-black' : 'text-white'}`}>
                            <FiHeart className="text-xl" />
                            <span>Favorites</span>
                        </button>
                        <button className={`flex items-center gap-2 p-2 ${isScrolled ? 'text-black' : 'text-white'}`}>
                            <FiShoppingCart className="text-xl" />
                            <span>Cart</span>
                        </button>
                        <button className={`p-2 px-4 rounded border ${isScrolled ? ' border-black text-black' : 'text-white border-white'}`} onClick={() => setModalOpen(!isModalOpen)}>
                            Sign In
                        </button>
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
