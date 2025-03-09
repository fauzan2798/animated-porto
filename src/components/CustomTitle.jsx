// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function CustomTitle({ title }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.5 });

  return (
    <motion.h1
      ref={ref}
      initial={{ y: "150%" }}
      animate={isInView ? { y: 0 } : {}}
      transition={{ ease: [0.42, 0, 0.58, 1], duration: 1 }}
      className="font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center mt-32"
    >
      {title}
    </motion.h1>
  );
}

export default CustomTitle;
