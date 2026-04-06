import Image from 'next/image';
import React from 'react';

const PinPointsection = () => {
    return (
        <section className="w-full max-w-[95%] mx-auto overflow-hidden">
            
            <div className="py-10 md:py-16 xl:py-20 ">
                <div className="text-center mb-8 md:mb-12">
                    <p className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-950 to-blue-900 border border-blue-600/50 text-blue-200 text-xs sm:text-sm font-medium">
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                        Are Distractions Holding You Back?
                    </p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight md:leading-snug text-base-content max-w-4xl mx-auto">
                        If you struggle to focus, feel 
                        overwhelmed by <span className="opacity-30">endless tasks, or 
                        procrastinate instead of making progress, you’re not alone.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-3 gap-4 md:gap-6 md:max-w-2xl w-full mx-auto">
                    {['pain imag 1', 'pain imag 2', 'pain image 3'].map((img, idx) => (
                        <Image
                            key={idx}
                            src={`/${img}.png`}
                            alt={img}
                            width={220}
                            height={140}
                            className="w-full h-auto object-contain rounded-xl"
                        />
                    ))}
                </div>
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-10 xl:gap-16  pb-20'>
                
                <div className="hidden xl:flex xl:w-[45%]">
                    <Image
                        src="/painpoint lg image.png"
                        alt="Pain Point Detailed"
                        width={526}
                        height={642}
                        className="w-full h-auto rounded-3xl"
                        priority
                    />
                </div>

                <div className='flex flex-col gap-10 md:gap-16 xl:gap-20 w-full lg:w-[55%]'>
                    
                    <div className='flex flex-row items-center justify-between gap-4'>
                        <p className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-gradient-to-r from-blue-950 to-blue-900 border border-blue-600/50 text-blue-200 text-xs sm:text-sm font-medium whitespace-nowrap">
                            <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                            No worries
                        </p>

                        <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center">
                                {[1, 2, 3].map((i) => (
                                    <Image
                                        key={i}
                                        src={`/student${i}.png`}
                                        alt={`student${i}`}
                                        width={40}
                                        height={40}
                                        className={`${i > 1 ? "-ml-3" : ""} w-8 h-8 sm:w-10 sm:h-10 border-2 border-base-100 rounded-full object-cover`}
                                    />
                                ))}
                            </div>
                            <p className='text-[10px] sm:text-xs text-base-content/60 font-medium'>Join with 5K other students</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-between items-center gap-8'>
                        <div className='flex flex-col gap-4 md:gap-6 w-full md:max-w-[300px]'>
                            <p className='text-base-content/60 text-sm sm:text-base leading-relaxed'>
                                The ability to concentrate deeply is the ultimate productivity hack
                            </p>
                            <h2 className='text-xl sm:text-2xl xl:text-3xl font-bold text-base-content leading-tight'>
                                And fortunately it’s a skill you can train & develop.
                            </h2>
                        </div>

                        <div className='flex flex-col gap-3 w-full md:w-auto'>
                            {['wrapper1', 'wrapper2', 'wrapper3'].map((img) => (
                                <div key={img} className="w-full  md:w-[150px] xl:w-[180px]">
                                    <Image
                                        src={`/${img}.png`}
                                        alt={img}
                                        width={220}
                                        height={140}
                                        className="w-full h-auto object-contain rounded-lg shadow-sm"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PinPointsection;