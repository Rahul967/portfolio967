import React from "react";
import site1 from "../folder/site1.png";
import site2 from "../folder/site2.png";
import site3 from "../folder/site3.png";
import site4 from "../folder/site4.png";
import web1 from "../folder/web1.png";
import web2 from "../folder/web2.png";
export default function Portfolio() {
  return (
    <div className=" lg:mx-20 md:mx-10">
      <h3 className="lg:text-3xl md:text-3xl text-2xl py-1  text-teal-500">
        Portfolio
      </h3>
      <p className="text-md py-2 leading-8 text-gray-800">
        I offer from a wide range of services, including{" "}
        <span className="text-teal-500"> web design</span>,
        <span className="text-teal-500"> programming </span> and{" "}
        <span className="text-teal-500"> teaching.</span>
      </p>
      <p className="text-md py-2 leading-8 text-gray-800">
        Recent projects that i worked on
      </p>
      <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className=" hover:scale-105 duration-500  basis-1/3 flex-1">
          <img
            className="w-[100%] h-[100%] rounded border border-gray-800"
            src={site1}
            alt=""
          />
        </div>
        <div className="hover:scale-105 duration-500  basis-1/3 flex-1">
          <img
            className="w-[100%] h-[100%] rounded border border-gray-800"
            src={site2}
            alt=""
          />
        </div>
        <div className="hover:scale-105 duration-500  basis-1/3 flex-1">
          <img
            className="w-[100%] h-[100%] rounded border border-gray-800"
            src={site3}
            alt=""
          />
        </div>
        <div className="hover:scale-105 duration-500  basis-1/3 flex-1">
          <img
            className="w-[100%] h-[100%] rounded border border-gray-800"
            src={site4}
            alt=""
          />
        </div>
        <div className="hover:scale-105 duration-500  basis-1/3 flex-1">
          <img
            className="w-[100%] h-[100%] rounded border border-gray-800"
            src={web1}
            alt=""
          />
        </div>
        <div className="hover:scale-105 duration-500  basis-1/3 flex-1">
          <img
            className="w-[100%] h-[100%] rounded border border-gray-800"
            src={web2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
