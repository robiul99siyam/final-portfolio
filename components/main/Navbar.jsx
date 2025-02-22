import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="#" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/siyam.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Robiul Islam
          </span>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="#about-me" className="cursor-pointer">
              About me
            </Link>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <Link href="#projects" className="cursor-pointer">
              Projects
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <>
              <Link target="_blank" href={`${social.id}`}>
                <div key={social.id}>
                  <Image
                    src={social.src}
                    alt={social.name}
                    // key={social.id}
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
