import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { HiBadgeCheck } from 'react-icons/hi';

const FeatureItem = ({ text }) => (
    <div className="flex items-start gap-4">
        <div className="mt-1 flex items-center justify-center">
            <HiBadgeCheck className="text-white text-xl" />
        </div>
        <p className="text-white text-sm md:text-base leading-snug">{text}</p>
    </div>
);

const CTASection = () => {
    return (
        <section className="py-20">
            <div className="max-w-[95%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

                    <div className="bg-[#0D0D0F] rounded-[40px] p-8 md:p-14 flex flex-col justify-center border border-white/5">
                        <div className="inline-flex items-center gap-2 bg-[#1A1B1E] border px-4 py-1.5 rounded-full w-fit mb-8">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]"></span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">Introducing</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
                            The Deep Work <br /> Blueprint
                        </h2>
                        
                        <p className="mb-10 text-lg md:text-xl font-medium text-white">
                            What extra you will get if you enroll now
                        </p>

                        <div className="space-y-5">
                            <div className="flex items-center gap-4 group">
                                <BsPlusCircleFill className="text-white text-2xl group-hover:scale-110 transition-transform" />
                                <p className="font-medium md:text-lg text-white">Bonus: 1:1 coaching session to boost focus.</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <BsPlusCircleFill className="text-white text-2xl group-hover:scale-110 transition-transform" />
                                <p className="font-medium md:text-lg text-white">Discount: Save 30% when you enroll now!</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0D0D0F] border border-white/5 rounded-[40px] p-8 md:p-14 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full"></div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-baseline gap-4">
                                <span className="text-5xl md:text-6xl font-bold tracking-tighter text-white">$349</span>
                                <span className="text-2xl md:text-3xl line-through decoration-red-500/80 decoration-2 font-medium text-white">$500</span>
                            </div>
                            <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                                30% off
                            </div>
                        </div>

                        <p className="text-sm md:text-base font-medium mb-12 text-white">
                            30% off until 4d : 2h : 41m : 17s
                        </p>

                        <div className="space-y-7 mb-14 flex-grow">
                            <FeatureItem text="6h of videos - Step-by-step deep work strategies." />
                            <FeatureItem text="Templates & Trackers - Stay on track effortlessly." />
                            <FeatureItem text="Live Q&As - Expert guidance & accountability." />
                            <FeatureItem text="Exclusive Community - Connect with others." />
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all text-white font-bold py-5 rounded-2xl text-lg md:text-xl shadow-[0_8px_30px_rgb(37,99,235,0.2)]">
                            Enroll now
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTASection;