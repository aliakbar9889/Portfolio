import React from "react";
import { Meteors } from "./ui/meteor";


export function Page4() {
  return (
    <section id="services">
    <div className="bg-gray-700 w-full h-full flex flex-col items-center justify-center min-h-screen py-20">
      {/* Heading */}
      <h1 className="p-5 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-500">
      SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* First Card */}
        <div className="w-full relative max-w-sm h-72 transition-transform duration-300 hover:shadow-xl hover:scale-105 cursor-pointer flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
          <div className="relative bg-gray-900 border border-gray-800 px-6 py-8 w-full h-full rounded-2xl flex flex-col justify-center items-center text-center overflow-hidden">
            <h1 className="font-bold text-xl text-white mb-4">Frontend Development</h1>
            <p className="font-normal text-base text-slate-500">
            ✅ Custom websites using Next.js, React, and TypeScript <br />
            ✅ Mobile-first responsive designs <br />
            ✅ Performance-optimized fast-loading websites
            </p>
            <div className="absolute inset-0 overflow-hidden">
              <Meteors number={10} />
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full relative max-w-sm h-72 transition-transform duration-300 hover:shadow-xl hover:scale-105 cursor-pointer flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 transform scale-[0.80] rounded-full blur-3xl" />
          <div className="relative bg-gray-900 border border-gray-800 px-6 py-8 w-full h-full rounded-2xl flex flex-col justify-center items-center text-center overflow-hidden">
            <h1 className="font-bold text-xl text-white mb-4">Backend Development</h1>
            <p className="font-normal text-base text-slate-500">
            ✅ Secure APIs & CMS (Node.js, Sanity) <br />
            ✅ Authentication (JWT, OAuth) <br />
            ✅ Scalable & optimized backend solutions
            </p>
            <div className="absolute inset-0 overflow-hidden">
              <Meteors number={10} />
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="w-full relative max-w-sm h-72 transition-transform duration-300 hover:shadow-xl hover:scale-105 cursor-pointer flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-green-500 to-yellow-500 transform scale-[0.80] rounded-full blur-3xl" />
          <div className="relative bg-gray-900 border border-gray-800 px-6 py-8 w-full h-full rounded-2xl flex flex-col justify-center items-center text-center overflow-hidden">
            <h1 className="font-bold text-xl text-white mb-4">Fast Delivery & Clean UI </h1>
            <p className="font-normal text-base text-slate-500">
            ✅ Fast project delivery with optimized performance <br />
            ✅ Minimalist & modern UI design <br />
            ✅ Bug-free & scalable code
            </p>
            <div className="absolute inset-0 overflow-hidden">
              <Meteors number={10} />
            </div>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="w-full relative max-w-sm h-72 transition-transform duration-300 hover:shadow-xl hover:scale-105 cursor-pointer flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
          <div className="relative bg-gray-900 border border-gray-800 px-6 py-8 w-full h-full rounded-2xl flex flex-col justify-center items-center text-center overflow-hidden">
            <h1 className="font-bold text-xl text-white mb-4"> Deployment & Maintenance</h1>
            <p className="font-normal text-base text-slate-500">
            ✅ Hosting & deployment on Vercel, Netlify <br />
            ✅ Regular updates & bug fixes <br />
            ✅ Website security audits
            </p>
            <div className="absolute inset-0 overflow-hidden">
              <Meteors number={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
