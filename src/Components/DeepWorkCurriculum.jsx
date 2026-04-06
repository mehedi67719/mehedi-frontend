import React, { useState } from 'react';
import { PlayCircle, CheckCircle2, ChevronDown } from 'lucide-react';

const DeepWorkCurriculum = () => {
    const [openModule, setOpenModule] = useState(0);

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
        <section className="py-16 md:py-24 xl:py-32 bg-base-100 overflow-hidden w-full">
            <div className="max-w-[95%] w-full px-4 lg:px-10 xl:px-20">
                <div className="text-center mb-12 md:mb-20">
                    <span className="bg-[#0f172a] text-white px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-6 border border-blue-500/20">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                        Course Curriculum
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight max-w-[900px] mx-auto">
                        Mastering Deep Work: A Structured <br className="hidden md:block" /> Path to Peak Productivity
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 items-start justify-between">
                    
                    <div className="w-full lg:w-[60%] space-y-4">
                        {modules.map((module, idx) => (
                            <div key={idx} className="border-b border-white/10 pb-4">
                                <button 
                                    onClick={() => setOpenModule(openModule === idx ? -1 : idx)}
                                    className="w-full flex items-center justify-between py-4 text-left"
                                >
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-base sm:text-lg font-medium">{module.title}</h3>
                                        <p className="text-xs">{module.duration}</p>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openModule === idx ? 'rotate-180' : ''}`} />
                                </button>
                                
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openModule === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="space-y-3 py-4">
                                        {module.lessons ? module.lessons.map((lesson, lIdx) => (
                                            <div key={lIdx} className="flex items-center justify-between cursor-pointer py-2 px-2 hover:bg-white/5 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <PlayCircle className="w-5 h-5 text-white" />
                                                    <span className="text-sm sm:text-base">{lesson.name}</span>
                                                    {lesson.preview && (
                                                        <span className="bg-blue-600/10 text-blue-400 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border border-blue-500/20 font-bold">
                                                            Preview
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="text-xs sm:text-sm font-mono">{lesson.time}</span>
                                            </div>
                                        )) : (
                                            <p className="text-sm italic px-4">Lesson details coming soon...</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-[40%] lg:sticky lg:top-24">
                        <div className="bg-[#0f1115] border border-white/5 rounded-[32px] p-6 sm:p-10 shadow-2xl relative overflow-hidden text-white">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[80px] rounded-full"></div>
                            
                            <h2 className="text-xl sm:text-2xl font-semibold mb-8 relative">Not only video lessons!</h2>
                            
                            <div className="space-y-6 mb-10 relative">
                                {[
                                    "6h of videos - Step-by-step deep work strategies.",
                                    "Templates & Trackers - Stay on track effortlessly.",
                                    "Live Q&As - Expert guidance & accountability.",
                                    "Exclusive Community - Connect with others."
                                ].map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-4">
                                        <div className="mt-1 bg-white/10 rounded-full p-0.5">
                                            <CheckCircle2 size={16} className="text-white" />
                                        </div>
                                        <p className="text-sm sm:text-base leading-relaxed text-white">{feature}</p>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-[0.98] text-white">
                                Enroll now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DeepWorkCurriculum;