import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

function BackToTop() {
  const { scrollYProgress } = useScroll();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setShowButton(latest > 0.05);
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    // Cara alternatif menggunakan requestAnimationFrame
    const scrollStep = -window.scrollY / 15;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 text-primary bg-transparent p-3 rounded-full shadow-lg transition-colors z-[140] flex items-center justify-center"
          aria-label="scroll to top"
          style={{ width: "50px", height: "50px" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ transform: "rotate(-90deg)" }}
          >
            <svg width={50} height={50} viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#FFC107"
                strokeWidth={2}
              />
              <motion.path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="black"
                strokeWidth={2}
                strokeDasharray={"100 100"}
                strokeDashoffset={100}
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </motion.div>
          <span className="text-xl relative z-[150]">↑</span>
        </button>
      )}
    </>
  );
}

export default BackToTop;
