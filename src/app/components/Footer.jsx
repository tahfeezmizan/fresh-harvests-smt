'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-10">
                    <div className='col-span-3 flex flex-col justify-between'> 
                        <Link href="/">
                            <Image src='/assets/Logo.png' alt="Logo" width={225} height={40} priority />
                        </Link>
                        <div className="">
                            <p className='text-black pb-4'>Download App:</p>
                            <div className="flex items-center gap-5">
                                <Image
                                    src="/assets/appstore.png"
                                    alt='banner subject image'
                                    className=''
                                    width={138}
                                    height={40}
                                    priority />
                                <Image
                                    src="/assets/googleplay.png"
                                    alt='banner subject image'
                                    className=''
                                    width={138}
                                    height={40}
                                    priority />
                            </div>
                        </div>
                    </div>

                    <div className='col-span-2'>
                        <h3 className="text-lg font-semibold text-[#212337]">Quick Links 1</h3>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Shop</a></li>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">Detail Blog</a></li>
                        </ul>
                    </div>

                    <div className='col-span-2'>
                        <h3 className="text-lg font-semibold text-[#212337]">Quick Links 2</h3>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li><a href="#" className="hover:underline">Favorites</a></li>
                            <li><a href="#" className="hover:underline">Cart</a></li>
                            <li><a href="#" className="hover:underline">Sign In</a></li>
                            <li><a href="#" className="hover:underline">Register</a></li>
                        </ul>
                    </div>

                    <div className='col-span-2'>
                        <h3 className="text-lg font-semibold text-[#212337]">Contact Us</h3>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li className="flex items-center gap-2"><MdPhone /> 1234 5678 90</li>
                            <li className="flex items-center gap-2"><MdEmail /> freshharvests@gmail.com</li>
                            <li className="flex items-center gap-2"><MdLocationOn /> Tanjung Sari Street, Pontianak, Indonesia</li>
                        </ul>
                        <p className="mt-6 text-[#212337] font-semibold">Accepted Payment Methods:</p>
                        <div className="flex space-x-3 mt-2">
                            <Image src="/assets/Visa.png" alt="Visa" width={69} height={48} />
                            <Image src="/assets/Paypal.png" alt="PayPal" width={69} height={48} />
                            <Image src="/assets/ApplePay.png" alt="Apple Pay" width={69} height={48} />
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
                    <p className='font-medium'>© Copyright 2024, All Rights Reserved by Banana Studio</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-white p-2 rounded-4xl bg-[#212337] hover:bg-[#FF6A1A]"><FaFacebookF size={18} /></a>
                        <a href="#" className="text-white p-2 rounded-4xl bg-[#212337] hover:bg-[#FF6A1A]"><FaTwitter size={18} /></a>
                        <a href="#" className="text-white p-2 rounded-4xl bg-[#212337] hover:bg-[#FF6A1A]"><FaInstagram size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
