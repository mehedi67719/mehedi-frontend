import React from 'react';
import { BiSolidBrain } from 'react-icons/bi';
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import { TbRoute } from 'react-icons/tb';

const Benifits = () => {
    return (
        <div>


            <div className='max-w-[800px] mx-auto my-60 '>


                <div className='text-center mb-40'>
                    <p className="inline-flex  items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-950 to-blue-900 border border-blue-600/50 text-blue-200 text-sm font-medium">
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                        The Deep Work Blueprint
                    </p>
                    <h2 className='text-5xl'>A self-paced, results-driven course designed to help you</h2>
                </div>




                <div className="max-w-[380px] mx-auto">

                    <div className='flex items-center gap-8'>
                        <div className='flex flex-col items-center justify-center '>
                            <div className='w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50'></div>
                            <div className='w-1 h-48 bg-gradient-to-b from-via-blue-200 via-blue-600 to-via-blue-200'></div>
                        </div>



                        <div className="max-w-[300px] flex flex-col gap-4">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-gray-200 dark:bg-[#171B21] 
                    text-gray-700 dark:text-white">
                                <HiLightBulb className="text-xl" />
                            </div>
                            <p >
                                Develop laser-sharp focus & eliminate distractions.
                            </p>
                        </div>
                    </div>





                    <div className='flex items-center gap-8'>


                        <div className='flex flex-col items-center justify-center '>
                            <div className='w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50'></div>
                            <div className='w-1 h-48 bg-gradient-to-b from-via-blue-200 via-blue-600 to-via-blue-200'></div>
                        </div>


                        <div className="max-w-[300px] flex flex-col gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-gray-200 dark:bg-[#171B21] 
                    text-gray-700 dark:text-white">
                                <BiSolidBrain className="text-xl" />
                            </div>
                            <p >
                               Overcome procrastination & get more done.
                            </p>
                        </div>
                    </div>




                    <div className='flex items-center gap-8'>



                        <div className='flex flex-col items-center justify-center '>
                            <div className='w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50'></div>
                            <div className='w-1 h-48 bg-gradient-to-b from-via-blue-200 via-blue-600 to-via-blue-200'></div>
                        </div>


                        <div className="max-w-[300px] flex flex-col gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-gray-200 dark:bg-[#171B21] 
                    text-gray-700 dark:text-white">
                                <MdVerified className="text-xl" />
                            </div>
                            <p >
                                Develop laser-sharp focus & eliminate distractions.
                            </p>
                        </div>

                    </div>



                    <div className='flex items-center gap-8' >
                        <div className='flex flex-col items-center justify-center '>
                            <div className='w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50'></div>
                            <div className='w-1 h-48 bg-gradient-to-b from-via-blue-200 via-blue-600 to-via-blue-200'></div>
                        </div>



                        <div className="max-w-[300px] flex flex-col gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-gray-200 dark:bg-[#171B21] 
                    text-gray-700 dark:text-white">
                                <TbRoute className="text-xl" />
                            </div>
                            <p className="">
                                Build lasting habits for long-term success.
                            </p>
                        </div>


                    </div>
                </div>




            </div>



        </div>
    );
};

export default Benifits;