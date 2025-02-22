"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const SkillDataProvider = ({ src, width, height, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * animationDelay }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
        placeholder="blur"
        blurDataURL="data:image/png;base64,..."
      />
    </motion.div>
  );
};

export default SkillDataProvider;
