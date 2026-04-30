import TileCart from "./TileCart"


const TopGeneration = async() => {
    const res = await fetch("https://tiles-gallery-hda2.vercel.app/data.json")
    const tiles = await res.json()
    // console.log(tiles);
    const toptiles = tiles.slice(0,4)
    // console.log(toptiles);
    
    
  return (
    <div className="items-center flex flex-col justify-center">
      <h1 className="text-4xl text-green-700 font-bold my-4 ">Top Tiles</h1>
      <div className='grid grid-cols-4 gap-5'>
        {toptiles.map(tile => <TileCart key={tile.id} tile ={tile}/> )}
      </div>
    </div>
  )
}

export default TopGeneration
