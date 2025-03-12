import Image from "next/image"; // Ensure you have next/image for optimization

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-400 to-green-500 text-white">
      <div className="max-w-screen-xl mx-auto py-16 px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight leading-tight">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-lg font-medium opacity-80">
            At Fresh Harvest, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <button className="bg-orange-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition">
            Shop Now
          </button>

          {/* Special Offer Section */}
          <div className="bg-white text-black rounded-lg p-4 shadow-lg mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src="/path-to-your-salad-image.png"
                  alt="Fresh Salad"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <p className="font-bold">Fresh Salad</p>
              </div>
              <p className="font-semibold text-green-600">Up to 70% off</p>
            </div>
          </div>
        </div>

        {/* Right Section: Image with Overlay */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/path-to-your-banner-image.png" // Replace with actual image path
            alt="Fresh Harvest Banner"
            width={600}
            height={500}
            layout="intrinsic"
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>

      {/* Bottom Fixed Download Section */}
      <div className="absolute bottom-6 left-8 flex items-center space-x-4">
        <p className="text-lg font-medium">Download App:</p>
        <div className="flex space-x-2">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
            App Store
          </button>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all">
            Google Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
