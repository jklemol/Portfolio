import React from "react";
import { motion } from "framer-motion";
type Props = {};
import ExperienceCard from "./ExperienceCard";

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full ox-10 justify-evenly mx-auto items-center h-screen"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="pt-20 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        {/* CARD */}
        {/* CARD */}
        {/* CARD */}
      </div>
    </motion.div>
  );
}
