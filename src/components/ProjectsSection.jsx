// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { projects } from "./data/config";
import CustomTitle from "./CustomTitle";

function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <header className="relative" id="work">
        <CustomTitle title={"My Work"} className="mt-44" />
      </header>

      <article className="relative flex h-full justify-center items-center w-full p-4 mt-32">
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 bottom-0 hidden md:block "></header>
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0 hidden md:block "></header>

        <nav>
          <button
            onClick={prevSlide}
            className="absolute left-4 z-10 hover:scale-105"
          >
            <img
              src="https://img.icons8.com/sf-black/100/FFC107/circled-chevron-left.png"
              alt="circled-chevron-left"
              width={100}
              height={100}
            />
          </button>
        </nav>

        <article className="relative w-full h-screen flex items-center justify-center">
          <AnimatePresence initial={false}>
            {projects.map(
              (project, index) =>
                index === currentIndex && (
                  <motion.article
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    style={{ perspective: 1000 }}
                    className="absolute w-[80%] h-full p-6 border border-primary bg-[#ffffff29] rounded-3xl text-white "
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-[500px] object-cover rounded-t-lg mb-4"
                    />
                    <h2 className="uppercase text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary ">
                      {project.title}
                    </h2>
                    <p className="text-md mt-2">{project.desc}</p>
                  </motion.article>
                )
            )}
          </AnimatePresence>
        </article>

        <nav>
          <button
            onClick={nextSlide}
            className="absolute right-4 z-10 hover:scale-105"
          >
            <img
              src="https://img.icons8.com/sf-black/100/FFC107/circled-chevron-right.png"
              alt="circled-chevron-right"
              width={100}
              height={100}
            />
          </button>
        </nav>
      </article>
    </>
  );
}

export default ProjectsSection;
