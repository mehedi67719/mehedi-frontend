"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

const Navbar = () => {
    const [theme, setTheme] = useState("light");

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
        <div className="relative">
          
            <div className="absolute  max-w-[60%] mx-auto -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-to-via-blue-300   blue-[#2466F2] via-blue-300 to-transparent"></div>
            
            <div className="max-w-[60%] mx-auto flex justify-between items-center">

                <div className="flex items-center gap-2">
                    <Image src='/logo.svg' alt="Logo" width={30} height={31} />
                    <h2 className="text-3xl">PPA</h2>
                </div>

                <div className="flex items-center gap-8">
                    <Link href='/'>Overview</Link>
                    <Link href='/'>Curriculum</Link>
                    <Link href='/'>Testimonials</Link>
                    <Link href='/'>Pricing</Link>
                </div>

                <div className="flex items-center gap-8">
                    <button onClick={toggleTheme} className="flex items-center gap-2 p-1 rounded-full bg-base-200">
                        <MdNightlight
                            className={`text-3xl p-2 rounded-full ${theme === "light" ? "bg-gray-300" : ""}`}
                        />
                        <MdLightMode
                            className={`text-3xl p-1 rounded-full ${theme === "dark" ? "bg-gray-950" : ""}`}
                        />
                    </button>

                    <button className="btn-primary">Enroll now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;