import Image from 'next/image'
import React from 'react'
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider'

export default function Testimonial() {
    return (
        <div className='py-24'>
            <div className="container  mx-auto px-4 md:px-72">
                <div className="testimonial-header text-center">
                    <span className='text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md'>Testimonial</span>
                    <h2 className='text-3xl md:text-5xl font-bold text-[#212337] py-4 pb-8'>What Our Customers Say</h2>
                    <p className="font-normal text-[#4A4A52] px-0 md:px-52">Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:</p>
                </div>

                <TestimonialSlider />
            </div>
        </div>
    )
}
