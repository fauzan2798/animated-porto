import CustomTitle from "./CustomTitle";
import { services } from "./data/config";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function ServicesSection() {
  return (
    <section className="relative mt-40" id="services">
      <CustomTitle title="What I Offer?" />

      <section className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-16 mt-32">
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block "></header>
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 top-0 hidden md:block "></header>

        {services.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative w-full h-[350px] p-5 grid  place-items-center overflow-hidden rounded-[20px] shadow-lg "
          >
            <section className="text-wite absolute w-[95%] h-[95%] bg-black rounded-[20px] z-10 text-center ">
              <header className="border border-primary bg-[#ffffff29] rounded-2xl p-3 mb-6 min-h-full min-w-full flex items-center ">
                <section className="mt-4 space-y-4 px-2">
                  <h2 className="uppercase text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {item.title}
                  </h2>
                  <p className="md:text-lg text-white opacity-80">
                    {item.desc}
                  </p>
                </section>
              </header>
            </section>

            <section className="absolute h-[105%] w-full bg-gradient-to-br from-primary to-secondary animate-spil-slow opacity-60 " />
          </motion.article>
        ))}
      </section>
    </section>
  );
}

export default ServicesSection;
