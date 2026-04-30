import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import TopGeneration from "@/components/TopGeneration";

export default async function Home() {
  const res = await fetch("https://tiles-gallery-hda2.vercel.app/data.json");
  const tiles = await res.json();

  return (
    <div>
      <Banner />
      <Marquee />
      <TopGeneration tiles={tiles} />
    </div>
  );
}