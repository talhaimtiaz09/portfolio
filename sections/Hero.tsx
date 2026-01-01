"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowUpRight, FileText, Send } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen grid grid-cols-4 bg-white overflow-hidden  p-10">
{/* <div className="grid-cols-4 px-32 w-full absolute">

      <div className="col-span-1  w-[1px] h-screen bg-gray-200"></div>
      <div className="col  w-[1px] h-screen bg-gray-200"></div>
      <div className="  w-[1px] h-screen bg-gray-200"></div>
      <div className="  w-[1px] h-screen bg-gray-200"></div>

</div> */}
<div className="col-span-3">

      <div className="text-9xl">


<h1 className="text-7xl">CREATIVE</h1>
  <h1 className="font-bold">SOFTWARE
    <br/> 
    ENGINEER</h1>
      </div>
      <div className="flex gap-4 my-10">

<button className="px-4 py-1 border-[1px] border-black hover:bg-black hover:text-white tranistion">RESUME</button>
<button className="px-4 py-1 border-[1px] border-black hover:bg-black hover:text-white tranistion"> HIRE</button>
      </div>
<h1 className="absolute bottom-40 text-4xl">TALHA IMTIAZ</h1>
</div>


<img src="hero-mountains-img-2.jpeg" alt="" className="absolute right-40 rounded-xl bottom-40 w-[500px]"/>
    </section>
  );
};

export default Hero;