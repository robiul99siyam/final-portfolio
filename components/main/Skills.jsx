import { Backend_skill, Frontend_skill, Skill_data } from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-96 py-96"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      {/* fontend data */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      {/* backend data */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      {/* other skills */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
            className="relative top-28 left-0 z-[1] w-full h-full object-cover opacity-80 "
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
