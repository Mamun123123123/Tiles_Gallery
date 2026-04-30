"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import TileCart from "./TileCart";
import { useEffect, useState } from "react";

const TopGeneration = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://tiles-gallery-hda2.vercel.app/data.json");
      const data = await res.json();
      setTiles(data.slice(0, 4));
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text-green-700 font-bold my-4">
        Top Tiles
      </h1>

      <div className="w-full max-w-5xl">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {tiles.map((tile) => (
            <SwiperSlide key={tile.id}>
              <TileCart tile={tile} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopGeneration;