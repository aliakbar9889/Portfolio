"use client";

import Image from "next/image";

export default function SkillsSection() {
  return (
    <div className="w-full bg-gray-800 text-white py-16 md:py-32 min-h-screen overflow-hidden">
      {/* Top Section */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="p-5 text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-500">
          Essential Tools I Use
        </h2>
        <p className="text-lg text-gray-300 italic">
          Discover the powerful tools and technologies I use to build
          high-performing web applications.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Card Component */}
        {cardData.map(({ src, alt, title, description }, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md 
            hover:bg-gray-700 hover:border-gray-500 hover:cursor-pointer transition-all duration-300"
          >
            <Image
              src={src}
              alt={alt}
              width={64} // Adjust width as needed
              height={64} // Adjust height as needed
              className="mr-4 object-contain"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
              <p className="text-gray-400 text-sm mt-1">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Card Data Array
const cardData = [
  {
    src: "/react.png",
    alt: "React",
    title: "React.js",
    description: "A powerful JavaScript library for building interactive UIs.",
  },
  {
    src: "/nextjs.png",
    alt: "Next.js",
    title: "Next.js",
    description: "A React framework for optimized server-side rendering and SEO.",
  },
  {
    src: "/talwind.png",
    alt: "Tailwind CSS",
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for modern, responsive designs.",
  },
  {
    src: "/nodejs.png",
    alt: "Node.js",
    title: "Node.js",
    description: "JavaScript runtime for scalable backend development.",
  },
  {
    src: "/figma.png",
    alt: "Figma",
    title: "Figma",
    description: "A collaborative UI/UX design tool for high-fidelity prototypes.",
  },
  {
    src: "/vercel.png",
    alt: "Vercel",
    title: "Vercel",
    description: "A platform for deploying fast and optimized web applications.",
  },
];
