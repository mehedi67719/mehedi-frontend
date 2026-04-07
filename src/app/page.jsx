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
    <div className="min-h-screen">
      <div id="overview">
        <HeroContent />
        <Videocontent />
        <PinPointsection />
        <Benifits />
      </div>
      <div id="curriculum">
        <DeepWorkCurriculum />
      </div>

      <div id="testimonials">
        <Curriculumresult />
      </div>


      <div id="pricing">
        <CTASection />
      </div>
      <Footercontent />
    </div>
  );
}
