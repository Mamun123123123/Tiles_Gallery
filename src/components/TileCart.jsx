import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TileCart = ({ tile }) => {
  return (
    <Card className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-indigo-50 hover:via-white hover:to-pink-50">

      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={tile.image}
          fill
          alt={tile.title}
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

        {/* Category */}
        <Chip className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
          {tile.category}
        </Chip>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-base text-gray-800 line-clamp-1 group-hover:text-indigo-600 transition">
          {tile.title}
        </h2>

        <p className="text-xs text-gray-500 line-clamp-2">
          {tile.description}
        </p>

        {/* Button */}
        <Link href={`/all-tiles/${tile.id}`}>
          <button className="w-full mt-2 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-indigo-600 transition">
            View Details
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default TileCart;