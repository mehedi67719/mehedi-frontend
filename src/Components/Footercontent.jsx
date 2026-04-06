import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Footercontent = () => {
    return (
        <section className="py-20 md:py-28 ">
            <div className="max-w-[95%] mx-auto">
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-10">

               
                    <div className="text-center lg:text-left flex-1">
                        <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                            The Deep Work <br className="hidden md:block" /> Blueprint
                        </h1>
                        <p className="text-gray-500 mt-6 text-lg md:text-xl font-medium">
                            Master Focus & Get More Done in Less Time
                        </p>
                    </div>

                   
                    <div className="bg-blue-600 w-full max-w-[400px] lg:w-[380px] h-[180px] md:h-[200px] rounded-[32px] md:rounded-[40px] p-8 flex flex-col justify-between relative shadow-2xl shadow-blue-600/20 group cursor-pointer transition-transform active:scale-[0.98]">
                        
                        <div className="flex justify-between items-start">
                         
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((num) => (
                                    <img
                                        key={num}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-600 object-cover bg-gray-200"
                                        src={`/student${num}.png`}
                                        alt={`student-${num}`}
                                    />
                                ))}
                            </div>

                            <div className="bg-white p-3 rounded-full text-blue-600 group-hover:translate-x-1 transition-transform shadow-lg">
                                <HiArrowRight size={22} />
                            </div>
                        </div>

                
                        <div>
                            <p className="text-white font-semibold text-base md:text-lg">
                                Join with 5K other students
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Footercontent;