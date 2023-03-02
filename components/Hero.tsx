import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};
import Link from "next/link";

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Juho Klemola",
      "Piano and Cocktails were my life before",
      "<ThenFellInLoveWithCoding/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/59719105_10216506994881357_2667455920979574784_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LJiwKAPoN94AX_JOI1S&_nc_ht=scontent-hel3-1.xx&oh=00_AfCPoJX_eNYD49rgJpLtuge8NM6zNl7f2OqrbNB6vVtcvA&oe=6426570F"
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
