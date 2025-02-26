'use client'
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-auto min-h-screen py-20 bg-gray-700 flex justify-center items-center px-4 relative"
    >
      <div className="w-full max-w-2xl text-center">
        <h1 className="mt-2 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-500">
          ABOUT ME 
        </h1>
        <p className="text-white leading-relaxed text-center mt-4 text-xl ">
          I am a passionate <span className="text-yellow-500">Full Stack Developer</span> with expertise in{" "}
          <span className="text-yellow-500">Next.js, React</span> & <span className="text-yellow-500">Tailwind CSS</span>. My journey in web
          development has been fueled by a deep curiosity for crafting high-performance and visually appealing
          applications.  
          <br />  
          With hands-on experience in <span className="text-yellow-500">Next.js</span>, I specialize in developing fast, scalable, and
          SEO-friendly applications. My strong command over React and TypeScript allows me to build modular and
          maintainable codebases, while Tailwind CSS helps me create stunning, responsive designs efficiently. <br />
          Beyond coding, I am always eager to explore new technologies and push the boundaries of what&apos;s possible with AI-driven web applications. My goal is to continuously improve, innovate, and deliver impactful solutions that meet modern development standards.
        </p>

        {/* Button to Download Resume */}
        <div className="mt-6 flex justify-center">
          <a
            href="/resume.pdf" // Apni resume.pdf ka path yahan set karein
            download="/resume.pdf" // User ke system mein is naam se save hoga
            className="px-8 py-3 rounded-md bg-gray-800 text-white transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;