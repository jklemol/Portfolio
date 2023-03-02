import React from "react";
import { motion } from "framer-motion";

type Props = {};
export default function ({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden justify-between">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://www.ravintolaplatta.fi/media/filer_public/77/8d/778d8220-992d-49e7-b859-2161bb984dbe/platta-plated-just-for-you.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Pianistibaarimestari</h4>
        <p className="font-bold text-2xl mt-1">Compass Group</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
          />
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
          />
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work.... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg text-center">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
