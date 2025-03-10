import { motion } from "motion/react";

function Footer() {
  const sentence = "All rights reserved.";
  const letters = sentence.split("");

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="text-white relative z-1 border-t-2 border-t-white mt-20 ">
      <div className="container p-8 flex justify-between items-center">
        <div className="text-3xl font-bold flex">LOGO</div>
        <nav className="flex ml-2">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`inline-block ${letter === " " ? "mr-4" : "mr-1"}`}
            >
              {letter}
            </motion.span>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
