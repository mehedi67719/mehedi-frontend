"use client"
import Benifits from "@/Components/Benifits";
import CTASection from "@/Components/CTASection";
import Curriculumresult from "@/Components/Curriculumresult";
import DeepWorkCurriculum from "@/Components/DeepWorkCurriculum";
import Footercontent from "@/Components/Footercontent";
import HeroContent from "@/Components/HeroContent";
import PinPointsection from "@/Components/PinPointsection";
import Videocontent from "@/Components/Videocontent";


export default function Home() {

  return (
    <div className="min-h-screen max-w-[60%] mx-auto">
      <HeroContent />
      <Videocontent />
      <PinPointsection />
      <Benifits />
      <DeepWorkCurriculum />
      <Curriculumresult/>
      <CTASection/>
      <Footercontent/>
    </div>
  );
}
