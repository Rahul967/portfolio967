import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import photo from "../folder/photo.png";

export default function Frontpage() {
  return (
    <div className=" text-center pt-10 ">
      <h2 className="lg:text-5xl lg:py-2 md:py-2 text-teal-600 font-medium  text-3xl ">
        Rahul Kumar Singh
      </h2>
      <h3 className=" lg:text-2xl  md:text-2xl py-2 text-xl">Web Developer</h3>
      <p className=" lg:text-md  md:text-md leading-6 text-sm  py-2 text-gray-800 lg:mx-80">
        My name is Rahul kumar Singh, I'm a Full Stack developer based in
        Kolkata,India. <br /> I have developed many types of web applications
      </p>

      <div className=" text-4xl flex justify-center gap-14 py-3 text-gray-600">
        <a href="https://twitter.com/Rahul_kr_singh8">
          <AiFillTwitterCircle className=" hover:scale-75 duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/rahul-kumar-singh31/">
          <AiFillLinkedin className=" hover:scale-75 duration-300" />
        </a>

        <a href="https://github.com/Rahul967">
          {" "}
          <AiFillGithub className=" hover:scale-75 duration-300" />
        </a>
      </div>
      <div className=" relative bg-gradient-to-b from-teal-500 rounded-full lg:w-64 lg:h-64 md:w-64 md:h-64 w-40 h-40 mt-10 mx-auto overflow-hidden">
        <img src={photo} />
      </div>
    </div>
  );
}
