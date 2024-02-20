import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  const gridStyle =
    "border-[0.01rem] border-slate-300 rounded-lg shadow-sm my-4";
  return (
    <div className="flex gap-x-10 justify-between title-font">
      <div className="w-1/3">
        <div className="relative w-[500px] mt-20">
          <img src="hero-abstract.jpg" alt="" className="w-2/3 mx-auto" />
          <p className="absolute bottom-8 right-12 ">A Duo of Designer </p>
          <p className="absolute bottom-2 right-12 ">and Developer</p>
        </div>
      </div>
      <div className="w-1/2 mx-10">
        <div className="grid grid-cols-4 gap-x-10 my-20">
          <div className={` col-span-2 p-10 ${gridStyle}`}>
            Qoute Lorem ipsum dolor sit amet consectetur, adipisicing
            elit.oluta, ratione quibusdam enim eaque architecto.
          </div>
          <div className="col-span-2 ">
            <div className={`${gridStyle} p-4 flex items-center`}>
              <FontAwesomeIcon icon="fa-regular fa-newspaper " />
              <p className="ml-4">Resume</p>
            </div>
            <div className={`${gridStyle} p-4 flex items-center`}>
              <FontAwesomeIcon icon="fa-brands fa-linkedin " />
              <p className="ml-4">LinkedIn</p>
            </div>
            <div className={`${gridStyle} p-4 flex items-center`}>
              <FontAwesomeIcon icon="fa-brands fa-github" />
              <p className="ml-4">Github</p>
            </div>
            <div className={`${gridStyle} p-4 flex items-center`}>
              <FontAwesomeIcon icon="fa-regular fa-envelope" />{" "}
              <p className="ml-4">Email</p>
            </div>
          </div>
          <div className="col-span-2 ">
          
          </div>
       
        </div>
   
      </div>
    </div>
  );
};

export default Hero;
