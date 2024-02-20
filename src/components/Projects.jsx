import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef,useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  return (
    <div className="flex w-1/2 mx-auto mt-80">
      <div className="gallery">
        <div className="w-[400px] h-64 bg-red-400 m-10">#1</div>
        <div className="w-[400px] h-64 bg-green-400 m-10">#2</div>
        <div className="w-[400px] h-64 bg-blue-400 m-10">#3</div>
        <div className="w-[400px] h-64 bg-yellow-400 m-10">#4</div>
      </div>
      <div className="w-52 h-52 bg-slate-400 my-10"></div>
    </div>
  );
};

export default Projects;
