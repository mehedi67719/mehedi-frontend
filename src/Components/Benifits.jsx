import React from 'react';
import { FaBrain } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import { TbRouteSquare } from 'react-icons/tb';

const Benifits = () => {
    const steps = [
        {
            icon: <HiLightBulb className="w-5 h-5 text-white" />,
            title: "Develop laser-sharp focus & eliminate distractions.",
        },
        {
            icon: <FaBrain className="w-5 h-5 text-white" />,
            title: "Master deep work techniques for smarter productivity.",
        },
        {
            icon: <MdVerified className="w-5 h-5 text-white" />,
            title: "Overcome procrastination & get more done.",
        },
        {
            icon: <TbRouteSquare className="w-5 h-5 text-white" />,
            title: "Build lasting habits for long-term success.",
        },
    ];

    return (
        <section className="py-20 w-full max-w-[95%] mx-auto overflow-hidden">
            <div className="px-4 sm:px-10">

                <div className="flex flex-col items-center text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f172a] border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        The Deep Work Blueprint
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight max-w-2xl">
                        A self-paced, results-driven course designed to help you
                    </h2>
                </div>

                <div className="max-w-md mx-auto relative">

                    
                    <div className="absolute left-[14px] top-0 bottom-0 w-[2px]">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-800 to-transparent"></div>
                    

                   
                    </div>

                    <div className="flex flex-col gap-16">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex items-start">

                                
                                <div className="absolute left-[6px] top-0">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 shadow-[0_0_25px_rgba(59,130,246,1)]"></div>
                                </div>

                                <div className="ml-14 flex flex-col">

                                    <div className="w-12 h-12 rounded-full bg-[#0d1117] border border-white/10 flex items-center justify-center mb-4">
                                        {step.icon}
                                    </div>

                                    <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                                        {step.title}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benifits;