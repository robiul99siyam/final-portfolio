"use client";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import { motion } from "framer-motion";
import Image from "next/image";
import { IoSparklesOutline } from "react-icons/io5";
export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full h-full flex flex-row items-center justify-center px-20 mt-40 z-[20]"
    >
      <div className="flex flex-col  gap-5 justify-center text-start m-auto w-full h-full">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[16px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
        >
          <IoSparklesOutline className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Web Developer</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Better{" "}
            </span>
            Web Experiences
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a web developer skilled in Python, Django, and Next.js. I
          build fast, user-friendly websites and web applications. Check out my
          projects and skills! 🚀
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          property="true"
        />
      </motion.div>
    </motion.div>
  );
}
