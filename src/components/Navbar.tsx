'use client'
import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from 'react-icons/hi';
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full left-0 z-50 p-4 fixed transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-800'}`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section (AliAkbar) */}
                <div className="text-white">
                    <Link href="/">
                        <h1 className="font-semibold text-2xl"><span className="text-gray-400">A</span>liAkbar<span className="text-gray-400">.</span></h1>
                    </Link>
                </div>

                {/* Mobile View: Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-gray-700 text-2xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <HiMenu className="text-white text-3xl" />
                    </button>
                </div>

                {/* Center Section (Nav Links) */}
                <div className="hidden md:flex space-x-8">
                    <a href="#about" className="text-white hover:text-gray-400 transition duration-200">About</a>
                    <a href="#services" className="text-white hover:text-gray-400 transition duration-200">Services</a>
                    <a href="#projects" className="text-white hover:text-gray-400 transition duration-200">Projects</a>
                    <a href="#testimonials" className="text-white hover:text-gray-400 transition duration-200">Testimonials</a>
                </div>

                {/* Right Section (Button) */}
                <div className="hidden md:block">
                    <button className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                        <a href="#contact">Contact Me</a>
                    </button>
                </div>
            </div>

            {/* Sliding Menu for Mobile */}
            <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 shadow-lg z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                {/* Close Button on Left Side */}
                <button
                    className="absolute top-4 right-4 text-white text-3xl"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <HiX />
                </button>
                <ul className="mt-16 space-y-6 px-6">
                    <li className="text-white hover:text-gray-300 cursor-pointer">
                        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                    </li>
                    <li className="text-white hover:text-gray-300 cursor-pointer">
                        <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                    </li>
                    <li className="text-white hover:text-gray-300 cursor-pointer">
                        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    </li>
                    <li className="text-white hover:text-gray-300 cursor-pointer">
                        <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
                    </li>
                    <li className="text-white hover:text-gray-300 cursor-pointer">
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
