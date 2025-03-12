"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiHeart, FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import Modal from "./Modal/Modal";
import LoginFormModal from "./Modal/LoginFormModal";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

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

                    <div className="font-bold">
                        <Link href="/" className="course-pointer
                        ">
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
                        <button className="p-2 px-4 text-black rounded border border-black"
                            onClick={() => setModalOpen(!isModalOpen)}>
                            Sign In
                        </button>
                        <Modal
                            title={"Sing In"}
                            isOpen={isModalOpen}
                            setIsOpen={setModalOpen}>
                            <LoginFormModal title="Sing In"  />
                        </Modal>
                    </div>

                    <div className="md:hidden text-black flex items-center gap-2">
                        <button className="flex items-center justify-between gap-2 p-2 text-black">
                            <FiShoppingCart className="text-xl" />
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>


                {isOpen && (
                    <div className="md:hidden flex flex-col items-center py-4 space-y-4 text-black bg-white ">
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
