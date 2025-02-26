'use client'
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        
        <footer className="bg-gray-800 text-white py-8 px-6">
            
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                
                {/* Left Section */}
                <div className="text-center md:text-left">
                    <h1 className="font-semibold text-2xl">
                        <span className="text-gray-400">A</span>liAkbar<span className="text-gray-400">.</span>
                    </h1>
                    <p className="text-gray-400 mt-2">Copyright © 2024. All Rights Reserved.</p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-center md:items-end">
                    {/* Navigation Links */}
                    <div className="space-x-4 mb-2">
                        <a href="#" className="text-white hover:text-gray-400 transition duration-200">About</a>
                        <a href="#" className="text-white hover:text-gray-400 transition duration-200">Contact</a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mb-2">
                        <BsTwitterX className="text-2xl cursor-pointer hover:text-gray-400 transition duration-200" />
                        <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-400 transition duration-200" />
                        <FaGithub className="text-2xl cursor-pointer hover:text-gray-400 transition duration-200" />
                    </div>

                    {/* Email Address */}
                    <p className="text-gray-400">themraliakbar@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
