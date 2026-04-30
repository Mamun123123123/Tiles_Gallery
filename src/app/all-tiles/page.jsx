import TileCart from '@/components/TileCart'
import React from 'react'

const AllTiles = async() => {
    const res = await fetch("https://tiles-gallery-seven.vercel.app/data.json")
    const tiles = await res.json()
  return (
    <div>
      <h1 className='text-2xl font-bold m-4'>All Tiles Gallery</h1>
      <div className='grid grid-cols-4 gap-4'>
        {tiles.map(tile => <TileCart key={tile.id} tile={tile} />)}
      </div>
    </div>
  )
}

export default AllTiles
