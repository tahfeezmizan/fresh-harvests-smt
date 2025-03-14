"use client";
import { use } from "react";
import { useGetProductsByIdQuery } from "@/app/redux/api/auth/authApi";
import React from "react";
import Image from "next/image";

export default function ProductsDetailspage({ params }) {
    const { id } = use(params); // ✅ Unwrap params with use()

    const { data: item, error, isLoading } = useGetProductsByIdQuery(id);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading product</p>;

    const img = item?.data?.images[0];
    const { productName, description, price, stock, } = item?.data || {};


    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between">
                    <div className="flex-1" >
                        <Image src={img} alt='banner subject image' width={686} height={657} priority />
                    </div>

                    <div className="">
                        <span className='text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md'>About us</span>
                        <h2 className='text-3xl md:text-5xl font-bold text-[#212337] py-4 '>{productName}</h2>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-[#FF6A1A] text-lg">★★★★★</span>
                            <span className="text-gray-600 text-sm">5.0 (1 review)</span>
                        </div>
                        <h3 className='text-3xl font-bold text-[#FF6A1A] py-4'>${price}/kg</h3>
                        <p className="text-[#4A4A52]  leading-6 mb-8 md:pr-48">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
