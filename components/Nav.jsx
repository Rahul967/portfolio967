import React from "react";
import Resume from "../folder/Resume.pdf";
export default function Nav() {
  return (
    <div>
      <div className=" py-10 mb-12 flex justify-between lg:mx-20">
        <h1 className="font-burtons md:text-xl lg:text-xl text-sm">
          developed by rahul
        </h1>
        <ul className="flex items-center">
          <li>
            <a
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
              href={Resume}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
