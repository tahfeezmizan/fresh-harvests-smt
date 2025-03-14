import Image from 'next/image'
import React from 'react'

export default function Testimonial() {
    return (
        <div className='py-24'>
            <div className="container  mx-auto px-4 md:px-72">
                <div className="testimonial-header text-center">
                    <span className='text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md'>Testimonial</span>
                    <h2 className='text-3xl md:text-5xl font-bold text-[#212337] py-4 pb-8'>What Our Customers Say</h2>
                    <p className="font-normal text-[#4A4A52] px-0 md:px-52">Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:</p>
                </div>

                <div className="grid grid-cols-6 items-center justify-around gap-10">
                    <div className="col-span-2">
                        <Image src='/assets/client-image.png' alt='banner subject image' width={335} height={454} priority />
                    </div>

                    <div className="col-span-4 ">
                        <div className="bg-gray-100 rounded-4xl p-10 text-black">
                            <p className="text-xl font-light leading-5">"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>

                            <h3 className='text-lg leading-6 mt-8'><span className='font-medium'>Jane Doe</span> - Professional chef</h3>
                        </div>
                    </div>

                    <div className="controler flex items-center gap-4 justify-center">
                        <div className="w-4 h-4 bg-[#749B3F] rounded-4xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
