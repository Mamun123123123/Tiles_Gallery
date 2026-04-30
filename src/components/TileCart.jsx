import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const TileCart = ({tile}) => {
    console.log(tile);
    
  return (
    <Card className='border rounded-xl'>
      <div className='relative w-full aspect-square'>
        <Image src={tile.image}
        
        fill className='object-cover rounded-xl' alt={tile.title}/>
      <Chip className="absolute right-2 top-2 text-white border rounded-full p-1 bg-black">{tile.category}</Chip></div>
      <div>
        <h2 className='font-medium'>{tile.title}</h2>
      </div>
   
     <Link href={`/all-tiles/${tile.id}`}>
     <button variant='outline' className=' border  rounded-3xl p-1 w-full'>View</button>
     </Link>
    </Card>
  )
}

export default TileCart
