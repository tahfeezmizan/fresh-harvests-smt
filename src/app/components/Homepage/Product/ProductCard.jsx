"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductCard({ product }) {
    const { images, stock, price, description, productName } = product
    console.log(product);

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-white rounded-2xl p-5 flex flex-col items-center shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-full h-56 flex items-center rounded-lg justify-center relative bg-[#F4F6F6]">
                <Image
                    src={images[0]}
                    alt={productName}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-3">
                {productName}
            </h3>
            <p className="text-gray-600">${price}/kg</p>

            <button
                className={`mt-4 w-full py-2 rounded-lg transition-all duration-300 font-medium ${isHovered ? "bg-orange-500 text-white" : "border border-[#D9D9D9] text-[#212337]"
                    }`}
            >
                Add to cart
            </button>
        </div>


    );
};

