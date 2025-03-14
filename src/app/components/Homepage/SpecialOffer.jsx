import Image from 'next/image'
import React from 'react'

export default function SpecialOffer() {
    return (
        <div className='py-24 overflow-hidden relative' style={{
            backgroundImage: "url('/assets/bg-wal.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <Image src='/assets/top-art.png' alt='fruits image' className='absolute right-0 top-0' width={
                827} height={480} priority />
            <Image src='/assets/bottom-art.png' alt='fruits image' className='absolute bottom-0 left-0' width={
                827} height={480} priority />

            <div className="container mx-auto px-4">
                <div className="">
                    <div className="flex-1">
                        <span className='text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md'>Special Offer</span>
                        <h2 className='text-5xl md:text-8xl font-bold text-[#212337] py-4 pr-10 md:pr-0 leading-16 md:leading-28'>Seasonal Fruit Bundle</h2>
                        <h3 className='text-3xl md:text-5xl font-bold text-[#212337] py-4 pb-8'>Discount up to <span className='text-[#FF6A1A]'>80% OFF</span></h3>

                        <div className="offer-counter flex items-center gap-6">
                            <div className="counter-box shadow-2xl rounded-md bg-white text-black flex flex-col items-center justify-between p-6">
                                <h3 className='text-4xl leading-12'>03</h3>
                                <p className="text-lg leading-6">Days</p>
                            </div>
                            <div className="counter-box shadow-2xl rounded-md bg-white text-black flex flex-col items-center justify-between p-6">
                                <h3 className='text-4xl leading-12'>24</h3>
                                <p className="text-lg leading-6">Hour</p>
                            </div>
                            <div className="counter-box shadow-2xl rounded-md bg-white text-black flex flex-col items-center justify-between p-6">
                                <h3 className='text-4xl leading-12'>54</h3>
                                <p className="text-lg leading-6">Min</p>
                            </div>
                            <div className="counter-box shadow-2xl rounded-md bg-white text-black flex flex-col items-center justify-between p-6">
                                <h3 className='text-4xl leading-12'>21</h3>
                                <p className="text-lg leading-6">Second</p>
                            </div>
                        </div>
                    </div>

                    <div className="float-right" >
                        <Image src='/assets/fruits.png' alt='fruits image' width={686} height={657} priority />
                    </div>
                </div>
            </div>
        </div>

    )
}
