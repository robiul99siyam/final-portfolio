import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-4">
      <div className="flex flex-col items-center m-auto">
        <div className="w-full flex flex-wrap justify-around">
          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <h2 className="font-bold text-lg">Community</h2>
            <p className="flex items-center my-3 cursor-pointer">
              <FaYoutube />
              <span className="ml-2 text-sm">YouTube</span>
            </p>
            <p className="flex items-center my-3 cursor-pointer">
              <FaGithub />
              <span className="ml-2 text-sm">GitHub</span>
            </p>
            <p className="flex items-center my-3 cursor-pointer">
              <FaDiscord />
              <span className="ml-2 text-sm">Discord</span>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <h2 className="font-bold text-lg">Social Media</h2>
            <p className="flex items-center my-3 cursor-pointer">
              <FaInstagram />
              <span className="ml-2 text-sm">Instagram</span>
            </p>
            <p className="flex items-center my-3 cursor-pointer">
              <FaTwitter />
              <span className="ml-2 text-sm">Twitter</span>
            </p>
            <p className="flex items-center my-3 cursor-pointer">
              <FaLinkedin />
              <span className="ml-2 text-sm">LinkedIn</span>
            </p>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <h2 className="font-bold text-lg">About</h2>
            <p className="flex items-center my-3 cursor-pointer">
              <span className="ml-2 text-sm">Become a Sponsor</span>
            </p>
            <p className="flex items-center my-3 cursor-pointer">
              <span className="ml-2 text-sm">Learn About Me</span>
            </p>
            <p className="flex items-center my-3 cursor-pointer">
              <span className="ml-2 text-sm">siyamrobiulislam@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-6 text-sm text-center">
          &copy; web Dev 2025 Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
