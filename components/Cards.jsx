import React from "react";
import design from "../folder/design.png";
import code from "../folder/code.png";
import consulting from "../folder/consulting.png";
export default function Cards() {
  return (
    <div className=" lg:mx-20 md:mx-10">
      <div className=" lg:flex md:flex gap-10">
        <div className=" hover:scale-95 duration-500 text-center shadow-lg p-10 rounded-xl my-10">
          <img
            className=" mx-auto w-32 h-32 object-center"
            src={design}
            alt=""
          />
          <h3 className=" text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
          <p className=" py-2">
            Creating elegant designs suited for your needs design theory and{" "}
            <br /> enhance your project
          </p>
          <h4 className=" py-4 text-teal-600">Design tools I use</h4>
          <p className=" text-gray-800 py-1">Photoshop</p>
          <p className=" text-gray-800 py-1">Illustrator</p>
          <p className=" text-gray-800 py-1">Figma</p>
        </div>

        <div className=" hover:scale-95 duration-500  text-center shadow-lg p-10 rounded-xl my-10">
          <img
            className=" mx-auto w-32 h-32 object-center"
            src={consulting}
            alt=""
          />
          <h3 className=" text-lg font-medium pt-8 pb-2">Consulting</h3>
          <p className=" py-2">
            I can give you feedback,tips and tricks to level up your current
            project.
          </p>
          <h4 className=" py-4 text-teal-600">Design tools I use</h4>
          <p className=" text-gray-800 py-1">Photoshop</p>
          <p className=" text-gray-800 py-1">Illustrator</p>
          <p className=" text-gray-800 py-1">Figma</p>
        </div>

        <div className=" hover:scale-95 duration-500  text-center shadow-lg p-10 rounded-xl my-10">
          <img className=" mx-auto w-32 h-32 object-center" src={code} alt="" />
          <h3 className=" text-lg font-medium pt-8 pb-2">
            Code your dream project
          </h3>
          <p className=" py-2">
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
          <h4 className=" py-4 text-teal-600">Design tools I use</h4>
          <p className=" text-gray-800 py-1">Photoshop</p>
          <p className=" text-gray-800 py-1">Illustrator</p>
          <p className=" text-gray-800 py-1">Figma</p>
        </div>
      </div>
    </div>
  );
}
