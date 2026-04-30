import Image from 'next/image'
import React from 'react'

const SigleTileDetailsPage = async({params}) => {
    const {id} = await params
    const res = await fetch("https://tiles-gallery-hda2.vercel.app/data.json")
    const datas = await res.json()
    
    const data = datas.find(item => item.id == id)
    
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-white rounded-2xl shadow-lg p-4 md:p-6">

      
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl">
          <Image
          
            src={data.image}
            alt={data.title}
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />

          <span className="absolute top-3 right-3 text-white text-xs px-3 py-1 rounded-full bg-black/70 backdrop-blur">
            {data.category}
          </span>
        </div>

        <div className="space-y-4 flex flex-col justify-between">

          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {data.title}
            </h1>

            <p className="text-gray-600 text-sm md:text-base">
              {data.description}
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm mt-3">
              <p><strong>Category:</strong> {data.category}</p>
              <p><strong>Material:</strong> {data.material}</p>
              <p><strong>Dimensions:</strong> {data.dimensions}</p>
              <p><strong>Price:</strong> {data.price} {data.currency}</p>
              <p className="col-span-2">
                <strong>Status:</strong>{" "}
                <span className={`${data.inStock ? "text-green-600" : "text-red-500"}`}>
                  {data.inStock ? "In Stock " : "Out of Stock "}
                </span>
              </p>
            </div>

            <div className="flex gap-2 flex-wrap mt-4">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                {data.category}
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                {data.material}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SigleTileDetailsPage