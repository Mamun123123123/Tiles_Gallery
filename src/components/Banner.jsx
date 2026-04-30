import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div
      className="h-[50vh] sm:h-[60vh] md:h-[70vh] w-full bg-cover bg-center bg-no-repeat rounded-lg shadow-2xl"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/d-seamless-ceramic-wall-tiles-design-texture-wallpaper-design-pattern-graphics-design-art-background-ceramic-floor-tiles-366053902.jpg')",
      }}
    >
      <div className="w-full h-full bg-black/60 rounded-lg flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 max-w-2xl mx-auto md:mx-0">
            Discover Your Perfect Aesthetic Tiles
          </h1>

          <p className="text-sm sm:text-base md:text-xl mb-6 max-w-xl text-gray-200 mx-auto md:mx-0">
            Explore premium tile designs and transform your interior spaces with elegance.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link href="/all-tiles">
              <button className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 transition">
                Browse Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner