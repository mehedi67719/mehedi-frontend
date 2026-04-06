"use client";

import React from 'react';
import Image from 'next/image';
import { HiPlay } from 'react-icons/hi';

const Videocontent = () => {
    return (
        <div className="relative py-12 mt-10 md:py-24 xl:py-32 flex justify-center items-center w-full">
            
            <div
                className="absolute inset-0 py-3 bg-cover bg-center -z-10"
                style={{ backgroundImage: `url('/hero image.png')` }}
            >
                <div className="absolute inset-0 w-full h-full bg-blue-600/40 blur-[120px] rounded-full pointer-events-none"></div>
            </div>

            <div className="relative group cursor-pointer w-full max-w-[95%] mx-auto z-10">
                <div className="relative bg-base-200 rounded-[20px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src="/video image.png"
                        alt="Video Thumbnail"
                        className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
                        priority
                        width={1920}
                        height={1080}
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors">
                        <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] transform group-hover:scale-110 transition-all duration-300">
                            <HiPlay className="text-blue-600 text-3xl md:text-5xl ml-1" />
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default Videocontent;