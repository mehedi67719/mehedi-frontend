"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Curriculumresult = () => {
    return (
        <section className="py-20 w-full overflow-hidden transition-colors duration-300">
            <div className="max-w-[95%] mx-auto ">
                
             
                <div className="text-center mb-16 md:mb-24">
                    <span className="bg-slate-100 dark:bg-[#0f172a] text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-6 border border-blue-500/20">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                        Testimonials
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Real Results from Real People
                    </h2>
                </div>

             
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 px-2">
                    <h3 className="text-xl sm:text-2xl font-medium">
                        Join with 5K other students
                    </h3>
                    
                    
                    <div className="flex gap-4">
                        <button className="testimonial-prev w-10 h-10 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 transition-all active:scale-90">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="testimonial-next w-10 h-10 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 transition-all active:scale-90">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

              
                <div className="w-full relative px-2">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={1}
                        spaceBetween={24}
                        loop={true}
                        speed={800}
                        grabCursor={true} 
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".testimonial-next",
                            prevEl: ".testimonial-prev",
                        }}
                        breakpoints={{
                            681: { slidesPerView: 2 }, 
                            981: { slidesPerView: 3 }, 
                        }}
                        className="w-full !overflow-visible"
                    >
                        
                           <SwiperSlide>
                            <div className="h-[490px] bg-slate-50 dark:bg-[#0d1117] rounded-[32px] p-8 border border-slate-200 dark:border-white/5 flex flex-col justify-between shadow-xl dark:shadow-2xl text-white">
                                <div>
                                    <img src="/student1.png" alt="user" className="w-14 h-14 rounded-full mb-6 object-cover border border-slate-300 dark:border-white/10" />
                                    <p className="leading-relaxed italic">
                                        "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity."
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Alex Carter</h4>
                                    <p className="text-sm">Freelance Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    
                        <SwiperSlide>
                            <div className="relative h-[490px] rounded-[32px] overflow-hidden group border border-slate-200 dark:border-white/5 shadow-xl text-white">
                                <Image 
                                    src="/Testimonial-1.png" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                    alt="testimonial" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                                        <Play fill="white" size={24} className="ml-1" />
                                    </div>
                                </div>

                                <div className="absolute bottom-8 left-8">
                                    <h4 className="font-semibold">Daniel Foster</h4>
                                    <p className="text-sm">Content Creator</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    
                        <SwiperSlide>
                            <div className="h-[490px] bg-slate-50 dark:bg-[#0d1117] rounded-[32px] p-8 border border-slate-200 dark:border-white/5 flex flex-col justify-between shadow-xl dark:shadow-2xl text-white">
                                <div>
                                    <img src="/student2.png" alt="user" className="w-14 h-14 rounded-full mb-6 object-cover border border-slate-300 dark:border-white/10" />
                                    <p className="leading-relaxed italic">
                                        "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!"
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Mark Davidson</h4>
                                    <p className="text-sm">Software Developer</p>
                                </div>
                            </div>
                        </SwiperSlide>


                          <SwiperSlide>
                            <div className="relative h-[490px] rounded-[32px] overflow-hidden group border border-slate-200 dark:border-white/5 shadow-xl text-white">
                                <Image 
                                    src="/Testimonial-1.png" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                    alt="testimonial" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                                        <Play fill="white" size={24} className="ml-1" />
                                    </div>
                                </div>

                                <div className="absolute bottom-8 left-8">
                                    <h4 className="font-semibold">Daniel Foster</h4>
                                    <p className="text-sm">Content Creator</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Curriculumresult;