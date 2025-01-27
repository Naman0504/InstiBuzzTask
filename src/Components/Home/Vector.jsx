import React from "react";
import { FaPlay } from "react-icons/fa";

function Vector() {
  return (
    <>
      <div className="md:w-full md:h-96  lg:h-[80vh] justify-center items-center hidden md:flex">
        <div className="w-full mx-7   h-full flex justify-center items-center  py-12 border-t border-t-yellow1 border-b border-b-greyborder">
          <div className="w-full h-full flex justify-center items-center bg-vg rounded-3xl mx-8 ">
            <FaPlay size={30} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Vector;
