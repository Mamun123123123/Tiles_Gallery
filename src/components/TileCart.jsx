import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TileCart = ({ tile }) => {
  return (
    <Card className="rounded-2xl overflow-hidden border hover:shadow-xl transition duration-300">
      <div className="relative w-full aspect-square">
        <Image
          src={tile.image}
          fill
          className="object-cover h-32 w-full"
          alt={tile.title}
        />

        <Chip className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
          {tile.category}
        </Chip>
      </div>

      <div className="p-3 flex flex-col gap-2">
        <h2 className="font-semibold text-base line-clamp-1">
          {tile.title}
        </h2>

        <Link href={`/all-tiles/${tile.id}`}>
          <button className="w-full py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition">
            View Details
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default TileCart;