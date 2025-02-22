import HeroContent from "../sub/HeroContent";

export default function Hero() {
  return (
    <div className="relative w-full h-full flex flex-col">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
}
