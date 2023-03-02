import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png"
        alt=""
        className="rounded-full border border-gray-500 object-cover w-24 h-24  filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out group-hover:bg-red-300 h-24 w-24  rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
