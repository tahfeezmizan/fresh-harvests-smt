import Image from 'next/image'

const Banner = () => {
  return (
    <div
      className="h-10/12 pt-36 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/assets/banner-bg.png'), linear-gradient(to right, transparent 0%, transparent 35%, transparent 35%, transparent 65%, #749B3F 65%, #749B3F 100%)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1 banner-content relative -mt-36" >
            <span className='text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md'>Welcome to Fresh Harvest</span>
            <h2 className='text-8xl md:text-5xl font-bold text-[#212337] py-4 pr-40 leading-16'>Fresh Fruits and Vegetables</h2>
            <p className="text-[#4A4A52] pr-56 leading-6 mb-8">At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables</p>
            <button className='py-4 px-8 text-lg font-medium rounded-md text-white bg-[#FF6A1A]'>Shop Now</button>

            <div className="">
              <Image
                src="/assets/clip-path-group.png"
                alt='banner subject image'
                className='absolute left-32'
                width={55}
                height={38}
                priority />
              <Image
                src="/assets/leaves.png"
                alt='banner subject image'
                className='absolute -bottom-40 -left-14'
                width={67}
                height={51}
                priority />
              <Image
                src="/assets/special-offer.png"
                alt='banner subject image'
                className='absolute right-14'
                width={331}
                height={157}
                priority />

            </div>

            <div className="absolute -bottom-64">
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


          <div className="flex-1">
            <Image src='/assets/banner-img.png' alt='banner subject image' width={695} height={758} priority />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
