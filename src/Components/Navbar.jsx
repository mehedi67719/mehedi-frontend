"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleCloseMenu = () => setIsOpen(false);

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="absolute w-[95%] mx-auto -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div className="max-w-[95%] mx-auto py-5 flex justify-between items-center">

                <div className="flex items-center gap-2">
                    <Image src='/logo.svg' alt="Logo" width={30} height={31} />
                    <h2 className="text-2xl font-bold tracking-tighter">PPA</h2>
                </div>

                <div className="hidden xl:flex items-center gap-10 font-medium text-sm">
                    <a href="#overview">Overview</a>
                    <a href="#curriculum">Curriculum</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#pricing">Pricing</a>
                </div>

                <div className="flex items-center gap-4 lg:gap-6">

                    <div className="flex items-center gap-1 p-1 rounded-full bg-base-200 border border-base-300">
                        <button
                            onClick={toggleTheme}
                            className={`p-1.5 rounded-full ${theme === "dark" ? "bg-gray-900 text-white" : "text-gray-400"}`}
                        >
                            <MdNightlight />
                        </button>
                        <button
                            onClick={toggleTheme}
                            className={`p-1.5 rounded-full ${theme === "light" ? "bg-white text-black" : "text-gray-500"}`}
                        >
                            <MdLightMode />
                        </button>
                    </div>

                    <button className="btn-primary hidden xl:block">
                        Enroll now
                    </button>

                    <button
                        className="xl:hidden text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="xl:hidden absolute top-full left-0 w-full bg-base-100 border-b shadow-xl py-6">
                    <div className="flex flex-col gap-5 text-center text-lg font-semibold">

                        <a href="#overview" onClick={handleCloseMenu}>Overview</a>
                        <a href="#curriculum" onClick={handleCloseMenu}>Curriculum</a>
                        <a href="#testimonials" onClick={handleCloseMenu}>Testimonials</a>
                        <a href="#pricing" onClick={handleCloseMenu}>Pricing</a>

                        <button className="btn-primary w-[90%] mx-auto mt-2">
                            Enroll now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;