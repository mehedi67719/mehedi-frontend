import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { HiBadgeCheck } from 'react-icons/hi'; // এটি ইমপোর্ট করতে হবে

const FeatureItem = ({ text }) => (
    <div className="flex items-start gap-4">
        <div className="mt-1 bg-gray-800 p-0.5 rounded-full flex items-center justify-center">
            <HiBadgeCheck className="text-gray-200 text-lg" />
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-tight">{text}</p>
    </div>
);

const CTASection = () => {
    return (
        <div className=" flex items-center justify-center">
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4">

             
                <div className="bg-[#111214] rounded-3xl p-10 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-blue-500/30 px-3 py-1 rounded-full w-fit mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-medium text-gray-300">Introducing</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        The Deep Work Blueprint
                    </h1>
                    <p className="text-gray-400 mb-8 text-lg">
                        What extra you will get if you enroll now
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 group">
                            <BsPlusCircleFill className="text-blue-500 text-xl group-hover:scale-110 transition-transform" />
                            <p className="text-gray-300">Bonus: 1:1 coaching session to boost focus.</p>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <BsPlusCircleFill className="text-blue-500 text-xl group-hover:scale-110 transition-transform" />
                            <p className="text-gray-300">Discount: Save 30% when you enroll now!</p>
                        </div>
                    </div>
                </div>

            
                <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-10 flex flex-col relative overflow-hidden">
                 
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[80px]"></div>

                    <div className="flex items-baseline justify-between mb-2">
                        <div className="flex items-baseline gap-3">
                            <span className="text-5xl font-bold">$349</span>
                            <span className="text-2xl text-gray-500 line-through decoration-red-500">$500</span>
                        </div>
                        <span className="bg-blue-600 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                            30% off
                        </span>
                    </div>

                    <p className="text-gray-400 text-sm mb-10">
                        30% off until 4d : 2h : 41m : 17s
                    </p>

                    <div className="space-y-6 mb-12 flex-grow">
                        <FeatureItem text="6h of videos - Step-by-step deep work strategies." />
                        <FeatureItem text="Templates & Trackers - Stay on track effortlessly." />
                        <FeatureItem text="Live Q&As - Expert guidance & accountability." />
                        <FeatureItem text="Exclusive Community - Connect with others." />
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-4 rounded-xl text-lg shadow-[0_4px_20px_rgba(37,99,235,0.3)]">
                        Enroll now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CTASection;