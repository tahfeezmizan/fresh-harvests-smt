'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const testimonials = [
  {
    image: '/assets/client-image.png',
    quote: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    name: 'Jane Doe',
    profession: 'Professional Chef',
  },
  {
    image: '/assets/client-image.png',
    quote: "Fresh Harvest provides the best organic produce. Their attention to quality and freshness is unmatched. Highly recommend!",
    name: 'John Smith',
    profession: 'Nutritionist',
  },
  {
    image: '/assets/client-image.png',
    quote: "The best place for fresh and organic food. Their delivery is always on time, and the quality is top-notch!",
    name: 'Emily Johnson',
    profession: 'Food Blogger',
  },
];

export default function TestimonialSlider() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-6 items-center gap-6 md:gap-10">
              <div className="md:col-span-2 flex justify-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={280}
                  height={380}
                  priority
                />
              </div>

              <div className="md:col-span-4">
                <div className="bg-gray-100 rounded-4xl p-6 md:p-10 text-black">
                  <p className="text-lg md:text-xl font-light leading-6">"{testimonial.quote}"</p>
                  <h3 className='text-base md:text-lg leading-6 mt-6 md:mt-8'>
                    <span className='font-medium'>{testimonial.name}</span> - {testimonial.profession}
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
