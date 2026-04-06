import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Footercontent = () => {
    return (
        <div className="  flex items-center my-28 justify-center min-h-[300px]">
            <div className=" w-full flex flex-col md:flex-row items-center justify-between gap-10">

              
                <div className="flex-1">
                    <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                        The Deep Work <br /> Blueprint
                    </h1>
                    <p className="text-gray-500 mt-4 text-lg">
                        Master Focus & Get More Done in Less Time
                    </p>
                </div>

            
                <div className="bg-blue-600 w-full md:w-80 h-48 rounded-[32px] p-6 flex flex-col justify-between relative shadow-lg shadow-blue-900/20">

                    <div className="flex justify-between items-start">
                   
                        <div className="flex -space-x-3">
                            <img
                                className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                                src="/student1.png"
                                alt="student"
                            />
                            <img
                                className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                                src="/student2.png"
                                alt="student"
                            />
                            <img
                                className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                                src="/student3.png"
                                alt="student"
                            />
                        </div>

                   
                        <div className="bg-white p-2.5 rounded-full text-blue-600 cursor-pointer hover:scale-110 transition-transform">
                            <HiArrowRight size={20} />
                        </div>
                    </div>

                 
                    <div>
                        <p className="text-white font-medium text-[15px]">
                            Join with 5K other students
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footercontent;