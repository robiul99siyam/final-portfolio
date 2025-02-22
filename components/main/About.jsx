import Image from "next/image";
import Link from "next/link";
import { IoSparklesOutline } from "react-icons/io5";

export default function About() {
  return (
    <div
      id="about-me"
      className="grid grid-cols-12 gap-10 justify-center items-start px-20"
    >
      {/* cols-6 part here  */}
      <div className="col-span-6">
        <p className="text-5xl text-white font-extrabold leading-[80px]">
          {" "}
          I’m Robiul Islam
        </p>
        <p className="text-5xl font-bold text-white  leading-[50px]">
          {" "}
          a backend{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            developer
          </span>{" "}
          from Bangladesh.
        </p>
        shaping the future with code
        <p className="text-white  leading-[36px]">
          I specialize in Python and Django, building scalable, secure, and
          reliable web applications. Passionate about problem-solving, best
          practices, and continuous learning, I strive to write clean,
          high-quality code while embracing new challenges to grow as a
          developer.
        </p>
        <Link
          href="https://drive.google.com/file/d/1ad9iu3LRcMXFocgZFyM1I9WJNGgIxZqv/view"
          target="_blank"
          className=" flex justify-center items-center w-1/2 rounded-lg py-[16px] px-[50px]  border border-[#7042f88b] opacity-[0.9] mt-5 "
        >
          <IoSparklesOutline className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Resmue</h1>
        </Link>
      </div>

      <div className="col-span-6">
        <Image
          src="/siyam.png"
          alt="my image in portfolio"
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
        />
      </div>
    </div>
  );
}
