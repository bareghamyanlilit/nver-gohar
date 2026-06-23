import { anim, program } from "@/data/data";
import { motion } from "framer-motion";
import Image from "next/image";

export function Program() {
  return (
    <section className="px-5 py-12">
      <motion.h2
        {...anim}
        className=" tracking-widest FontMassis relative z-0 text-center text-4xl mb-10 "
      >
        Ժամանակացույց
        <p className="FontMassis w-max  absolute -z-1 text-5xl top-2 left-1/2 -translate-x-1/2 text-hetevi">
          Ժամանակացույց
        </p>
      </motion.h2>
      <div className=" relative flex flex-col gap-[7vw]">
        <Image
          src="/icon.png"
          alt="map"
          width={500}
          height={500}
          className="absolute w-[45vw] top-15 left-1/2 -translate-x-1/2  "
        />
        {program.map((item, i) => (
          <ProgramItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
}

const getImage = (title) => {
  if (title === "Պսակադրություն") return "/ekexeci.jpg";
  if (title === "Հարսանյաց հանդիսություն") return "/restoran.jpg";
  return null;
};

const ProgramItem = ({ time, title, address }) => {
  const img = getImage(title);

  return (
    <div
      className={`text-vrayi  tracking-widest FontMassis my-8 flex items-center  gap-6 ${title == "Հարսնացուի տուն" || title == "Հարսանյաց սրահ" ? "justify-start" : "justify-end"}`}
    >
      <motion.p {...anim} className={`bg-[#fafafa] z-0  absolute opacity-10 text-[66px] text-[#d1d1d1] ${title == "Հարսնացուի տուն" || title == "Հարսանյաց սրահ" ? "right-0" : "left-0"}`}>
        {time}
      </motion.p>
      <div
        className={` static z-1 text-2xl ${title == "Հարսնացուի տուն" || title == "Հարսանյաց սրահ" ? "text-start" : "text-end"}`}
      >
        <motion.h3 {...anim} className="w-max">
          {title}
        </motion.h3>

        <motion.a
          {...anim}
          href={`https://www.google.com/maps/search/${address}`}
          target="_blank"
          className="inline-flex items-center gap-2"
        >
          Հասցե
          <Image src="/loc.png" alt="map" width={20} height={20} />
        </motion.a>
      </div>
    </div>
  );
};
