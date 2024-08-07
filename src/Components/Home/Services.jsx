import React from "react";
import { GiSewingMachine } from "react-icons/gi";

function Services() {
  return (
    <>
      <div className="md:w-full md:hidden hidden lg:block ">
        <div className="flex flex-col gap-4  justify-center pb-4 items-center w-full   ">
          <h1 className="text-3xl font-Tenor font-bold text-brown1">
            What we Offer?
          </h1>
          <div className=" flex gap-2 w-full justify-center items-center  ">
            <div className="max-w-72 min-h-80 p-8 bg-pink1 hover:bg-pink2 duration-500  -gray-200 rounded-lg shadow flex flex-col justify-center items-center gap-2 ">
              <div className="flex flex-col  align-middle  justify-center items-center gap-2">
                <div className=" relative   h-12 w-12 bg-blue1">
                  <GiSewingMachine
                    size={55}
                    className="absolute -top-2 -left-4"
                  />
                </div>
                <h5 className="font-Tenor  text-xl font-bold w-full">
                  Manufacturing
                </h5>
              </div>
              <p className="font-semibold font-lato text-center text-xs  mt-8  ">
                Manufacturing, we uphold our unwavering dedication to quality.
              </p>
            </div>
            {/* --- */}
            <div className="max-w-4xl mb-36 mx-4 flex flex-col   py-2  justify-center items-center gap-8">
              <div className="flex justify-center items-center gap-10">
                <div className="max-w-72 min-h-80 p-8 bg-pink1 hover:bg-pink2 duration-500 -gray-200 rounded-lg shadow flex flex-col justify-center items-center gap-2 ">
                  <div className="flex flex-col  align-middle  justify-center items-center gap-2">
                    <div className=" relative   h-12 w-12 bg-blue1">
                      <GiSewingMachine
                        size={55}
                        className="absolute -top-2 -left-4"
                      />
                    </div>
                    <h5 className="font-Tenor text-xl font-bold w-full">
                      Design
                    </h5>
                  </div>
                  <p className="font-lato font-semibold text-center text-xs mt-8  ">
                    The second aspect in Design. At InstiBuzz, our products go
                    beyond more fashion-they embody the vibrant essence...
                  </p>
                </div>
                <div className="max-w-72 min-h-80 p-8 bg-pink1 hover:bg-pink2 duration-500 -gray-200 rounded-lg shadow flex flex-col justify-center items-center gap-2 ">
                  <div className="flex flex-col  align-middle  justify-center items-center gap-2">
                    <div className=" relative   h-12 w-12 bg-blue1">
                      <GiSewingMachine
                        size={55}
                        className="absolute -top-2 -left-4"
                      />
                    </div>
                    <h5 className="font-Tenor text-xl font-bold w-full">
                      Sales
                    </h5>
                  </div>
                  <p className="font-lato font-semibold text-center text-xs mt-8  ">
                    we provide a space for them to showcase and sell their tees
                    to the entire Insti audience.
                  </p>
                </div>
              </div>
              <button className="m-auto font-lato bg-yellow1 textbase py-2 px-14 outline-none rounded-md">
                Know More
              </button>
            </div>

            {/* --- */}
            <div className="max-w-72 min-h-80 p-8 bg-pink1 hover:bg-pink2 duration-500 -gray-200 rounded-lg shadow flex flex-col justify-center items-center gap-2 ">
              <div className="flex flex-col  align-middle  justify-center items-center gap-2">
                <div className=" relative   h-12 w-12 bg-blue1">
                  <GiSewingMachine
                    size={55}
                    className="absolute -top-2 -left-4"
                  />
                </div>
                <h5 className="font-Tenor text-xl font-bold w-full">
                  Visibility
                </h5>
              </div>
              <p className="font-lato font-semibold text-center text-xs mt-8  ">
                We actively support Insti clubs and societies by helping them
                market their events.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="mx-8 border-b md:hidden hidden lg:block border-greyborder"></p>
    </>
  );
}

export default Services;
