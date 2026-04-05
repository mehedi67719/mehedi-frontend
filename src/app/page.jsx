import HeroContent from "@/Components/HeroContent";
import Videocontent from "@/Components/Videocontent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroContent/>
      <Videocontent/>
    </div>
  );
}
