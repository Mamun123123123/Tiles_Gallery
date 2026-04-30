import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import TopGeneration from "@/components/TopGeneration";
import Image from "next/image";

export default function Home() {
  return (
    <div >
     <Banner/>
     <Marquee />
     <TopGeneration />
    </div>
  );
}
