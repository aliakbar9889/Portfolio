import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 bg-gray-800 mt-16">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Left Side - Text Section */}
      <div className="w-full md:w-1/2 text-left mb-8 ml-8">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500">
          Hey! I&apos;m Ali Akbar
        </h1>
        <h2 className="text-4xl md:text-4xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Full Stack Developer
        </h2>
        <p className="mt-5 md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">
          I specialize in modern web technologies including Next.js, React, Tailwind CSS, and Node.js.
          Passionate about creating dynamic, user-friendly, and high-performing full-stack web applications.
        </p>

        {/* Left-Aligned Button & Icons */}
        <div className="mt-6 flex items-center space-x-6">
          <Button
            borderRadius="1.75rem"
            className="bg-black dark:bg-slate-900 text-white dark:text-white border-neutral-500 dark:border-slate-800 font-semibold"
          >
            <a href="#contact">
              GET IN TOUCH
            </a>
          </Button>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400 transition duration-300">
              <BsTwitterX />
            </a>
            <a href="https://www.linkedin.com/in/ali-akbar-b66ab62b6/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/aliakbar9889" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400 transition duration-300">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mt-0">
        <Image src="/hero.png" width={420} height={300} alt="Umar&apos;s Image" className="rounded-full" />
      </div>
    </div>
  );
}
