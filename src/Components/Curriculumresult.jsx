"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

const Curriculumresult = () => {
    return (
        <div className="py-20">
            <div className="text-center my-50 max-w-[500px] mx-auto">
                <span className="bg-[#0f172a] text-white text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    Testimonials
                </span>

                <h2 className="text-4xl md:text-5xl font-bold">
                    Real Results from Real People
                </h2>
            </div>


            <div>

                <h2 className="text-4xl my-5">Join with 5K other students</h2>

                <div className="w-full ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={15}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        <SwiperSlide className="flex h-full">
                            <div className="w-full h-[490px] bg-[#0d1117] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                                <div>
                                    <img
                                        src="/student1.png"
                                        alt="user"
                                        className="w-16 h-16 rounded-full mb-4 object-cover"
                                    />
                                    <p className="text-gray-300 text-base leading-relaxed">
                                        As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-semibold">
                                        Alex Carter
                                    </h3>
                                    <p className="text-gray-500 text-sm">Freelance Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="flex h-full">
                            <div className="w-full h-[490px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/Testimonial-1.png"
                                    width={400}
                                    height={590}
                                    alt="testimonial"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="flex h-full">
                            <div className="w-full h-[490px] bg-[#0d1117] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                                <div>
                                    <img
                                        src="/student2.png"
                                        alt="user"
                                        className="w-16 h-16 rounded-full mb-4 object-cover"
                                    />
                                    <p className="text-gray-300 text-base leading-relaxed">
                                        I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-semibold">Mark Davidson</h3>
                                    <p className="text-gray-500 text-sm">Software Developer</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="flex h-full">
                            <div className="w-full h-[490px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/Testimonial-2.png"
                                    width={400}
                                    height={590}
                                    alt="testimonial"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default Curriculumresult;