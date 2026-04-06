"use client";

import React from 'react';

const HeroContent = () => {
    return (
        <div className='max-w-5xl text-center mt-20 md:mt-32 xl:mt-52 mx-auto w-full px-4'>
            <div className="inline-flex items-center gap-2 bg-base-200 border border-blue-500/30 px-3 py-1 rounded-full mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-base-content opacity-70">
                    30% off until 4d : 2h : 41m : 17s
                </span>
            </div>

            <h2 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-base-content leading-tight tracking-tight'>
                Master Focus & Get <br className="hidden sm:block" />
                More Done in Less Time
            </h2>

            <p className='text-base-content opacity-60 mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium'>
                A step-by-step system to eliminate procrastination, train your <br className="hidden md:block" /> 
                brain for deep work, and boost productivity effortlessly.
            </p>

            <div className='mt-10 flex  flex-row mx-8 md:mx-0 items-center justify-center  gap-1 md:gap-4'>
                <button className='btn-primary w-full sm:w-auto px-10 py-3.5 text-lg font-bold shadow-lg active:scale-95 transition-all'>
                    Enroll now
                </button>
                <button className='w-full sm:w-auto py-3.5 px-10 border border-base-content/20 rounded-lg text-base-content font-semibold hover:bg-base-200 transition-colors'>
                    Curriculum
                </button>
            </div>
        </div>
    );
};

export default HeroContent;