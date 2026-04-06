import React from 'react';
import { PlayCircle, CheckCircle2, Clock } from 'lucide-react';

const DeepWorkCurriculum = () => {
  const modules = [
    {
      title: "Module 1: Foundations of Deep Work",
      duration: "1.7h of video",
      lessons: [
        { name: "Understanding Focus & Distraction", time: "14:23", preview: true },
        { name: "The Science Behind Deep Work", time: "22:51", preview: false },
        { name: "Identifying Your Productivity Killers", time: "34:42", preview: false },
        { name: "How to Strengthen Your Attention Span", time: "27:08", preview: false },
      ]
    },
    { title: "Module 2: Building Your Deep Work Routine", duration: "1.3h of video" },
    { title: "Module 3: Eliminating Procrastination", duration: "1.5h of video" },
    { title: "Module 4: Advanced Focus & Productivity Hacks", duration: "1.2h of video" },
  ];

  return (
    <div className="">
     
      <div className="max-w-6xl mx-auto text-center mb-20">
        <span className="bg-[#0f172a] text-white text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Course Curriculum
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-base-content">
          Mastering Deep Work: A Structured <br /> Path to Peak Productivity
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mt-24 items-start">
        
        {/* Curriculum List */}
        <div className="lg:col-span-7 space-y-8">
          {modules.map((module, idx) => (
            <div key={idx} className="border-b border-slate-100 pb-6">
              <h3 className="text-slate-400 font-medium text-lg">{module.title}</h3>
              <p className="text-slate-300 text-sm mb-6">{module.duration}</p>
              
              {module.lessons && (
                <div className="space-y-4">
                  {module.lessons.map((lesson, lIdx) => (
                    <div key={lIdx} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <PlayCircle size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                        <span className="text-slate-400 font-medium">{lesson.name}</span>
                        {lesson.preview && (
                          <span className="bg-[#0f172a] text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold">
                            Preview
                          </span>
                        )}
                      </div>
                      <span className="text-slate-400 text-sm font-mono">{lesson.time}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sticky Call to Action Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-10">
          <div className="bg-[#0f1115] rounded-[32px] p-10 text-white shadow-2xl">
            <h2 className="text-2xl font-semibold mb-8">Not only video lessons!</h2>
            
            <div className="space-y-6 mb-10">
              {[
                "6h of videos - Step-by-step deep work strategies.",
                "Templates & Trackers - Stay on track effortlessly.",
                "Live Q&As - Expert guidance & accountability.",
                "Exclusive Community - Connect with others."
              ].map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-4">
                  <CheckCircle2 size={20} className="text-white mt-1 opacity-80" />
                  <p className="text-slate-300 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            <button className="btn-primary w-full">
              Enroll now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeepWorkCurriculum;