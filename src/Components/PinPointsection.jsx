import Image from 'next/image';
import React from 'react';

const PinPointsection = () => {
    return (
        <div>
            <div className="py-20 px-4 md:px-10 lg:px-20">

                <div className="text-center mb-12">
                    <p className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-950 to-blue-900 border border-blue-600/50 text-blue-200 text-sm font-medium">
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                        Are Distractions Holding You Back?
                    </p>

                    <h2 className="text-3xl md:text-5xl max-w-[70%] mx-auto font-semibold leading-snug">
                        If you struggle to focus, feel
                        overwhelmed by <span className="opacity-30">endless tasks, or
                            procrastinate instead of making  progress, you’re not alone.</span>
                    </h2>
                </div>


                <div className="flex max-w-[40%] mx-auto justify-center items-center gap-6">

                    <Image
                        src="/pain imag 1.png"
                        alt="Pain Image 1"
                        width={220}
                        height={140}
                        className="w-full h-auto object-contain"
                    />


                    <Image
                        src="/pain imag 2.png"
                        alt="Pain Image 2"
                        width={220}
                        height={140}
                        className="w-full h-auto object-contain"
                    />


                    <Image
                        src="/pain image 3.png"
                        alt="Pain Image 3"
                        width={220}
                        height={140}
                        className="w-full h-auto object-contain"
                    />

                </div>
            </div>

            <div className='flex items-center gap-10 w-full justify-between'>
                <div className="w-[80%]">
                    <Image
                        src="/painpoint lg image.png"
                        alt="Pain Image"
                        width={526}
                        height={642}
                        className="w-full "
                    />
                </div>


                <div className='flex flex-col gap-28 h-full w-full'>



                    <div className='flex  items-center justify-between'>
                        <p className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-950 to-blue-900 border border-blue-600/50 text-blue-200 text-sm font-medium">
                            <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                            No worries
                        </p>


                        <div >
                            <div className="flex items-center">
                                <Image
                                    src="/student1.png"
                                    alt="student1"
                                    width={40}
                                    height={40}

                                />

                                <Image
                                    src="/student2.png"
                                    alt="student2"
                                    width={40}
                                    height={40}
                                    className="-ml-4 "
                                />

                                <Image
                                    src="/student3.png"
                                    alt="student3"
                                    width={40}
                                    height={40}
                                    className="-ml-4 "
                                />
                            </div>
                            {/* <p className='text-[#D0D5D9]'>Join with 5K other students</p> */}
                        </div>



                    </div>


                    <div className='flex  justify-between items-center'>


                        <div className='flex flex-col gap-9 justify-center max-w-[240px]'>
                            <p className='text-[#AAAEB2]'>The ability to concentrate deeply is the ultimate productivity hack</p>
                            <h2 className='text-2xl'>And fortunately it’s a skill you can train & develop.</h2>
                        </div>


                        <div className='flex flex-col justify-center '>
                            <Image
                                src="/wrapper1.png"
                                alt="Pain Image 1"
                                width={220}
                                height={140}
                                className="w-full h-auto object-contain"
                            />
                            <Image
                                src="/wrapper2.png"
                                alt="Pain Image 1"
                                width={220}
                                height={140}
                                className="w-full h-auto object-contain"
                            />
                            <Image
                                src="/wrapper3.png"
                                alt="Pain Image 1"
                                width={220}
                                height={140}
                                className="w-full h-auto object-contain"
                            />
                        </div>


                    </div>



                </div>
            </div>
        </div>
    );
};

export default PinPointsection;