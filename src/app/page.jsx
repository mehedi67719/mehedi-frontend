import Benifits from "@/Components/Benifits";
import DeepWorkCurriculum from "@/Components/DeepWorkCurriculum";
import HeroContent from "@/Components/HeroContent";
import PinPointsection from "@/Components/PinPointsection";
import Videocontent from "@/Components/Videocontent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen max-w-[95%] mx-auto">
      <HeroContent/>
      <Videocontent/>
      <PinPointsection/>
      <Benifits/>
      <DeepWorkCurriculum/>
    </div>
  );
}
