import Image from 'next/image'

const Banner = () => {
  return (
    <div className="relative w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/assets/bg-banner.svg')" }}>
      {/* Overlay for content */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto flex items-center justify-between gap-20 relative z-10 px-10 h-full">
        {/* Text Section */}
        <div className="max-w-lg text-white">
          <h1 className="text-4xl font-bold mb-4">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-lg mb-8">
            At Fresh Harvest, we are passionate about providing you with the freshest and most flavorful fruits and vegetables.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
            Shop Now
          </button>

          {/* Special Offer Section */}
          <div className="mt-6 bg-green-100 p-4 rounded-lg shadow-lg">
            <p className="text-center font-bold">Special Offer</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-3">
                {/* Special Offer Image */}
                <Image
                  src="/special-offer-image.jpg" 
                  alt="Fresh Salad" 
                  width={50} 
                  height={50} 
                />
                <span className="font-medium text-gray-900">Fresh Salad</span>
              </div>
              <div className="text-green-600 font-bold text-lg">Up to 70% off</div>
            </div>
            <div className="mt-2 text-center">
              <input
                type="text"
                placeholder="CODE: FRESH25"
                className="w-full p-2 mt-2 border rounded-md border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Banner Image Section (Optional Image) */}
        <div className="relative w-1/2">
          <Image
            src="/path-to-your-banner-image.jpg" // Optional banner image inside the content section
            alt="Fresh Harvest Banner"
            width={600}
            height={600}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

    
      
    </div>
  )
}

export default Banner
