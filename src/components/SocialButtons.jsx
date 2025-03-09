// eslint-disable-next-line no-unused-vars
import { motion, transform } from "framer-motion";
import { socialIcon } from "./data/config";

function SocialButtons() {
  const animationDuration = 4;
  const variants = {
    initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
    animate: {
      pathLength: 1,
      strokeOpacity: 0,
      fillOpacity: 1,
      transition: {
        duration: animationDuration,
        ease: "easeInOut",
        strokeOpacity: {
          delay: animationDuration,
        },
        fillOpacity: {
          delay: animationDuration,
        },
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="md:flex flex-col items-center justify-center border border-primary bg-[#ffffff29] rounded-3xl space-y-11 p-3 max-h-[506px] md:max-h-[386px] hidden">
      {socialIcon.map((icon) => (
        <button key={icon.id}>
          <svg viewBox={icon.viewBox} width={40} height={40}>
            <motion.path
              d={icon.path}
              fill={"#FFC107"}
              stroke={"#FFC107"}
              strokeWidth={1}
              variants={variants}
              initial="initial"
              animate="animate"
              hover="hover"
            />
          </svg>
        </button>
      ))}
    </div>
  );
}

export default SocialButtons;
