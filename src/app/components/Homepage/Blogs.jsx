import React from 'react'
import BlogsCard from '../BlogCard/BlogCard'

export default function Blogs() {
    return (
        <div className='py-24'>
            <div className="container mx-auto px-4">
                <div className="blog-header text-center mb-10">
                    <span className='text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md'>Our Blog</span>
                    <h2 className='text-3xl md:text-5xl font-bold text-[#212337] py-4 pb-8'>Fresh Harvest Blog</h2>
                    <p className="font-normal text-[#4A4A52] px-0 md:px-[500px]">Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.</p>
                </div>

                <BlogsCard />
            </div>
        </div>
    )
}
