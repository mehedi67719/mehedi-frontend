"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <nav className="relative w-full z-[100]">
            <div className="absolute w-[95%] mx-auto -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            
            <div className="max-w-[95%] mx-auto py-5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src='/logo.svg' alt="Logo" width={30} height={31} />
                    <h2 className="text-2xl font-bold tracking-tighter">PPA</h2>
                </div>

                <div className="hidden xl:flex items-center gap-10 font-medium text-sm">
                    <Link href='/' className="hover:text-blue-500 transition-colors">Overview</Link>
                    <Link href='/' className="hover:text-blue-500 transition-colors">Curriculum</Link>
                    <Link href='/' className="hover:text-blue-500 transition-colors">Testimonials</Link>
                    <Link href='/' className="hover:text-blue-500 transition-colors">Pricing</Link>
                </div>

                <div className="flex items-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-1 p-1 rounded-full bg-base-200 border border-base-300">
                        <button 
                            onClick={toggleTheme}
                            className={`p-1.5 rounded-full transition-all ${theme === "dark" ? "bg-gray-900 text-white shadow-inner" : "text-gray-400 hover:text-gray-600"}`}
                        >
                            <MdNightlight className="text-lg" />
                        </button>
                        <button 
                            onClick={toggleTheme}
                            className={`p-1.5 rounded-full transition-all ${theme === "light" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-300"}`}
                        >
                            <MdLightMode className="text-lg" />
                        </button>
                    </div>

                    <button className="btn-primary hidden xl:block font-semibold">
                        Enroll now
                    </button>

                    <button 
                        className="xl:hidden text-3xl p-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="xl:hidden absolute top-[100%] left-0 w-full bg-base-100 border-b border-base-300 z-50 py-8 px-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col gap-6 text-center text-lg font-semibold italic">
                        <Link href='/' onClick={() => setIsOpen(false)}>Overview</Link>
                        <Link href='/' onClick={() => setIsOpen(false)}>Curriculum</Link>
                        <Link href='/' onClick={() => setIsOpen(false)}>Testimonials</Link>
                        <Link href='/' onClick={() => setIsOpen(false)}>Pricing</Link>
                        <button className="btn-primary w-full py-4 mt-2">Enroll now</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;