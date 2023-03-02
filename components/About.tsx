import React from "react";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className=" flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src="https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/118652953_10220591800878954_7713444378966953949_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=YoHPx7V98agAX-Z9zHo&_nc_ht=scontent-hel3-1.xx&oh=00_AfCuMDDupNqbcuLA9eDEAkRNN2oLJZnVeZWJ2aYOUVDn2g&oe=64266021"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
        alt=""
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7ab0a]/50">little</span>{" "}
          backround
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          impedit, et excepturi veritatis sequi fuga possimus minus, nesciunt
          amet vero totam beatae minima soluta, praesentium corrupti dolore
          optio. Voluptate, blanditiis. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Asperiores impedit, et excepturi veritatis sequi
          fuga possimus minus, nesciunt amet vero totam beatae minima soluta,
          praesentium corrupti dolore optio. Voluptate, blanditiis. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Asperiores impedit, et
          excepturi veritatis sequi fuga possimus minus, nesciunt amet vero
          totam beatae minima soluta, praesentium corrupti dolore optio.
          Voluptate, blanditiis.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
