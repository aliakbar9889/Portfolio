"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";
import Link from "next/link";


export function ThreeDCardDemo() {
  return (
    <section id="projects">
      <div className="bg-gray-800 px-4 min-h-screen flex flex-col items-center justify-center">
        {/* Heading Section */}
        <div className="text-center py-8">
          <h1 className="mt-10 p-5 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-500">
            PROJECTS
          </h1>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 - Banquee */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-700 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-white/[0.5] border-2 w-full h-auto rounded-xl p-6">
              <CardItem translateZ="50" className="text-white text-xl font-bold dark:text-white">
                Banquee
              </CardItem>
              <CardItem translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-300 mr-12">
                Build A Professional Banking Website Landing Page To Showcase My Expertise in Frontend Development.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img src="/banquee.png" className="h-60 w-full rounded-xl" ></img>
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem translateZ={20}>
                  <Link href="https://github.com/aliakbar9889/Banquee" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Source Code
                  </Link>
                </CardItem>
                <CardItem translateZ={20}>
                  <Link href="https://banquee-sigma.vercel.app/" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                    Live Demo
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Card 2 - Comforty */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-700 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-white/[0.5] border-2 w-full h-auto rounded-xl p-6">
              <CardItem translateZ="50" className="text-white text-xl font-bold dark:text-white">
                Comforty
              </CardItem>
              <CardItem translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-300 mr-10">
                Build A Professional Full Stack E-Commerce Website To Showcase My Expertise in Full Stack Development.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
              <img src="/comforty.png" className="h-60 w-full rounded-xl" ></img>
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem translateZ={20}>
                  <Link href="https://github.com/aliakbar9889/Comforty" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Source Code
                  </Link>
                </CardItem>
                <CardItem translateZ={20}>
                  <Link href="https://comforty-demo.com" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                    Live Demo
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Card 3 - QuoteLoom */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-700 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-white/[0.5] border-2 w-full h-auto rounded-xl p-6">
              <CardItem translateZ="50" className="text-white text-xl font-bold dark:text-white">
                QuoteLoom
              </CardItem>
              <CardItem translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Build A Fully Responsive Website About Quotes To Showcase My Expertise in Frontend Development.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
              <img src="/quote.png" className="h-60 w-full rounded-xl" ></img>
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem translateZ={20}>
                  <Link href="https://github.com/aliakbar9889/QuoteLoom" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Source Code
                  </Link>
                </CardItem>
                <CardItem translateZ={20}>
                  <Link href="https://quote-loom.vercel.app/" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                    Live Demo
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Card 4 - FashionHolics */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-700 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-white/[0.5] border-2 w-full h-auto rounded-xl p-6">
              <CardItem translateZ="50" className="text-white text-xl font-bold dark:text-white">
                FashionHolics
              </CardItem>
              <CardItem translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Build A Fully Responsive E-Commerce Website To Showcase My Expertise in Frontend Development.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
              <img src="/fashion.png" className="h-60 w-full rounded-xl" ></img>
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem translateZ={20}>
                  <Link href="https://github.com/aliakbar9889/FashionHolics" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Source Code
                  </Link>
                </CardItem>
                <CardItem translateZ={20}>
                  <Link href="https://fashion-holics-vnjd.vercel.app/" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                    Live Demo
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Card 5 - HilalPlay */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-700 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-white/[0.5] border-2 w-full h-auto rounded-xl p-6">
              <CardItem translateZ="50" className="text-white text-xl font-bold dark:text-white">
                HilalPlay
              </CardItem>
              <CardItem translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-300 mr-4">
                Build A Professional Entertaining Website To Showcase My Expertise in Frontend Development.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
              <img src="/hilal.png" className="h-60 w-full rounded-xl" ></img>
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem translateZ={20}>
                  <Link href="https://github.com/aliakbar9889/Series-Web" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Source Code
                  </Link>
                </CardItem>
                <CardItem translateZ={20}>
                  <Link href="https://hilalplays.vercel.app/" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                    Live Demo
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Card 6 - BlogSphere */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-700 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-white/[0.5] border-2 w-full h-auto rounded-xl p-6">
              <CardItem translateZ="50" className="text-white text-xl font-bold dark:text-white">
                BlogSphere
              </CardItem>
              <CardItem translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Build A Fully Responsive Blog Reading Website To Showcase My Expertise in Frontend Development.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
              <img src="/blogsphere.png" className="h-60 w-full rounded-xl" ></img>
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem translateZ={20}>
                  <Link href="https://github.com/aliakbar9889/BlogSphere" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Source Code
                  </Link>
                </CardItem>
                <CardItem translateZ={20}>
                  <Link href="https://blog-sphere-five.vercel.app/" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                    Live Demo
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}