"use client";

import { useEffect, useState } from "react";
import TileCart from "@/components/TileCart";

const AllTiles = () => {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTiles, setFilteredTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://tiles-gallery-hda2.vercel.app/data.json"
        );
        const data = await res.json();
        setTiles(data);
        setFilteredTiles(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const result = tiles.filter((tile) =>
      tile.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTiles(result);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen px-4">
        <p className="text-lg sm:text-xl font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 py-6">

      <div className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          All Tiles Gallery
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">
          <input
            type="text"
            placeholder="Search tiles by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border p-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={handleSearch}
            className="bg-green-500 hover:bg-green-600 transition text-white px-5 py-3 rounded-lg w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredTiles.length > 0 ? (
          filteredTiles.map((tile) => (
            <TileCart key={tile.id} tile={tile} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No tiles found
          </p>
        )}
      </div>

    </div>
  );
};

export default AllTiles;