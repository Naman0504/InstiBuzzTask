import React from "react";
import { GiSewingMachine } from "react-icons/gi";

function Services() {
  return (
    <>
      <div className="w-full  mb-2 hidden md:block ">
        <div className="flex flex-col gap-4  justify-center pb-4 items-center w-full px-10  ">
          <h1 className="text-3xl font-bold text-brown1">What we Offer?</h1>
          <div className=" border-b-2 border-greyborder flex gap-2 w-fit justify-center items-center  ">
            <div className="max-w-64 p-8 bg-pink1 -gray-200 rounded-lg shadow flex flex-col justify-center items-center gap-2 ">
              <div className="flex flex-col  align-middle  justify-center items-center gap-2">
                <div className=" relative   h-12 w-12 bg-blue1">
                  <GiSewingMachine
                    size={55}
                    className="absolute -top-2 -left-4"
                  />
                </div>
                <h5 className="    text-xl font-bold w-full">Manufacturing</h5>
              </div>
              <p className="font-semibold text-center text-xs  mt-8  ">
                The second aspect in Design. At InstiBuzz, our products go
                beyond more fashion-they embody the vibrant essence...
              </p>
            </div>
            {/* --- */}
            <div className="max-w-4xl mb-36 flex flex-col   py-2 px-4 justify-center items-center gap-10">
              <div className="flex justify-center items-center gap-10">
                <div className="max-w-64 p-8 bg-pink2 -gray-200 rounded-lg shadow flex flex-col justify-center items-center gap-2 ">
                  <div className="flex flex-col  align-middle  justify-center items-center gap-2">
                    <div className=" relative   h-12 w-12 bg-blue1">
                      <GiSewingMachine
                        size={55}
                        className="absolute -top-2 -left-4"
                      />
                    </div>
                    <h5 className="    text-xl font-bold w-full">Design</h5>
                  </div>
                  <p className="font-semibold text-center text-xs mt-8  ">
                    The second aspect in Design. At InstiBuzz, our products go
                    beyond more fashion-they embody the vibrant essence...
                  </p>
                </div>
                <div className="max-w-64 p-8 bg-pink1 -gray-200 rounded-lg shadow flex flex-col justify-center items-center gap-2 ">
                  <div className="flex flex-col  align-middle  justify-center items-center gap-2">
                    <div className=" relative   h-12 w-12 bg-blue1">
                      <GiSewingMachine
                        size={55}
                        className="absolute -top-2 -left-4"
                      />
                    </div>
                    <h5 className="    text-xl font-bold w-full">Sales</h5>
                  </div>
                  <p className="font-semibold text-center text-xs mt-8  ">
                    The second aspect in Design. At InstiBuzz, our products go
                    beyond more fashion-they embody the vibrant essence...
                  </p>
                </div>
              </div>
              <button className="m-auto bg-yellow1 textbase py-2 px-14 outline-none rounded-md">
                Know More
              </button>
            </div>

            {/* --- */}
            <div className="max-w-64 p-8 bg-pink1 -gray-200 rounded-lg shadow flex flex-col justify-center items-center gap-2 ">
              <div className="flex flex-col  align-middle  justify-center items-center gap-2">
                <div className=" relative   h-12 w-12 bg-blue1">
                  <GiSewingMachine
                    size={55}
                    className="absolute -top-2 -left-4"
                  />
                </div>
                <h5 className="    text-xl font-bold w-full">Visibility</h5>
              </div>
              <p className="font-semibold text-center text-xs mt-8  ">
                The second aspect in Design. At InstiBuzz, our products go
                beyond more fashion-they embody the vibrant essence...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
