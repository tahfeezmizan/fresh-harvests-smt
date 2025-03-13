"use client";
import { useState } from "react";
import { useAllCategoryQuery, useAllProductsQuery } from "@/app/redux/api/auth/authApi";
import ProductCard from "./Product/ProductCard";

export default function Product() {
    const { data: productsData, error, isLoading } = useAllProductsQuery();
    const { data: categoryData, error: categoryError, isLoading: categoryLoading } = useAllCategoryQuery();

    const [selectedCategory, setSelectedCategory] = useState("ALL");

    if (isLoading || categoryLoading) return <p>Loading...</p>;
    if (error || categoryError) return <p>Error loading data.</p>;

    const categories = categoryData?.data || [];
    const products = productsData?.data || [];

    const filteredProducts = selectedCategory === "ALL"
        ? products
        : products.filter(product => product.categoryId === selectedCategory);


    return (
        <div className='py-24'>
            <div className="container mx-auto">
                <div className="section-header text-center">
                    <span className='text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md'>Our Products</span>
                    <h2 className='text-5xl font-bold text-[#212337] py-4'>Our Fresh Products</h2>
                    <p className=" font-normal text-[#4A4A52] px-[500px]">We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
                </div>

                <div className="flex gap-4 justify-center my-6">
                    <button
                        className={`px-4 py-2 border rounded-md ${selectedCategory === "ALL" ? "bg-[#749B3F] text-lg capitalize" : "border border-[#D9D9D9] text-[#A6A6A6]"}`}
                        onClick={() => setSelectedCategory("ALL")}
                    >
                        ALL
                    </button>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`px-4 py-2 border rounded-md ${selectedCategory === category.id ? "bg-[#749B3F] " : "border border-[#D9D9D9] text-[#A6A6A6]"}`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            {category.categoryName}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.slice(0, 8)?.map(product => (
                            <ProductCard product={product} key={product.id}></ProductCard>
                        ))
                    ) : (
                        <p className="col-span-full text-gray-500">No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
