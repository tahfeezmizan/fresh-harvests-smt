"use client";
import { use } from "react";
import { useGetProductsByIdQuery } from "@/app/redux/api/auth/authApi";
import React from "react";
import Image from "next/image";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

export default function ProductsDetailspage({ params }) {
    const { id } = use(params);

    const { data: item, error, isLoading } = useGetProductsByIdQuery(id);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading product</p>;

    const img = item?.data?.images[0];
    const { productName, description, price, stock, } = item?.data || {};
    console.log("Product Img", img);



    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-around">
                    <div className="flex-1" >
                        <div className="max-w-full md:w-[566px] max-h-full md:h-[566px] mx-auto p-10 border border-[#0000001A] rounded-lg ">
                            <Image src={img} alt='banner subject image' width={686} height={657} priority />
                        </div>
                    </div>

                    <div className="flex-1">
                        <span className='text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md'>Fruits</span>
                        <h2 className='text-3xl md:text-5xl font-bold text-[#212337] py-4 '>{productName}</h2>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-[#FF6A1A] text-lg">★★★★★</span>
                            <span className="text-gray-600 text-sm">5.0 (1 review)</span>
                        </div>
                        <h3 className='text-3xl font-bold text-[#FF6A1A] py-4'>${price}/kg</h3>
                        <p className="text-[#4A4A52]  leading-6 mb-8 md:pr-48">{description}</p>

                        <div className="flex items-center gap-4 text-[#212337] mt-8">
                            <span className="text-lg font-medium text-[#212337]">Quantity</span>
                            <div className="flex items-center ">
                                <button className="text-2xl font-medium border px-3.5 py-1 border-[#D9D9D9] rounded-l-md"> - </button>
                                <span className="text-2xl font-semibold border border-x-0 px-3.5 py-1 border-[#D9D9D9] ">1</span>
                                <button className="text-2xl font-medium border px-3.5 py-1 border-[#D9D9D9] rounded-r-md"> + </button>
                            </div>
                            <span className="text-lg font-light text-[#212337]">/kg</span>
                        </div>
                        <div className="flex items-center gap-4 text-[#212337] mt-8">
                            <button className='flex items-center gap-3 py-4 px-8 text-lg font-medium rounded-md text-[#4A4A52] bg-[#F4F6F6]'>
                                <FiHeart className="text-xl" />
                                Save as favorite</button>
                            <button className='flex items-center gap-3 py-4 px-8 text-lg font-medium rounded-md text-white bg-[#FF6A1A]'>
                                <FiShoppingCart className="text-xl" />
                                Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
