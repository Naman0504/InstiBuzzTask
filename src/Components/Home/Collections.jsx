import React, { useEffect, useState } from "react";

function Collections() {
  const normalProducts = [
    "https://www.instibuzz.com/static/media/boy%20front%20white%20iitm-min-min.818a59e5088460844eb8.jpg",
    "https://www.instibuzz.com/static/media/boy%20back%20green%20iitm-min-min.d3300b256d061ccdbea9.jpg",
    "https://www.instibuzz.com/static/media/girl%20front-min-min.11ecbaf7cc4e7ea6707e.jpg",
  ];

  const overSizedProducts = [
    "https://www.instibuzz.com/static/media/girl%20back%20final-min-min.9ec9dc41cd230de439b5.jpg",

    "https://www.instibuzz.com/static/media/boy%20back%20on%20tree-portrait-min-min.3f217ea2abb635079670.jpg",

    "https://www.instibuzz.com/static/media/rutika%20side%20look-min-min.63c818b94b21a9f3e090.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % normalProducts.length);
    }, 4000); // Change image every 3 seconds

    const interval2 = setInterval(() => {
      setCurrentIndex2(
        (prevIndex) => (prevIndex + 1) % overSizedProducts.length
      );
    }, 6000); // Change image every 3 seconds

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);
  return (
    <div className="md:w-full my-4  md:flex flex-col gap-6  h-fit md:p-8 md:my-0">
      {/* <div className="m-8 border flex flex-col justify-center items-center border-black w-full"> */}
      <h1 className=" hidden  md:block text-4xl border-b pb-3 font-Tenor border-greyborder w-full  font-bold">
        New Collections
      </h1>
      <div className="px-2 flex justify-center items-center w-full md:hidden">
        <h1 className="text-2xl font-Tenor drop-shadow-2xl  w-full px-2 font-bold">
          BestSellers
        </h1>
        <a
          href="http://"
          className="w-full font-lato text-right drop-shadow-md text-md font-semibold px-4  "
        >
          View all
        </a>
      </div>

      <div className=" w-full grid gap-4 md:gap-8 place-items-center lg:w-[90%] md:w-full lg:gap-0  px-4 m-auto py-4 md:px-4 md:py-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {/* 1st card */}
        <div className=" shadow-lg  h-48 md:h-64  lg:h-[26rem]  max-w-xs w-full ">
          <div className="relative w-full h-full  overflow-hidden ">
            {normalProducts.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-md md:rounded-none transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
        {/* 2nd card    */}
        <div className=" shadow-lg h-48 md:h-64 lg:h-[26rem]  max-w-xs w-full ">
          <div className="relative w-full h-full overflow-hidden ">
            {overSizedProducts.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full rounded-md md:rounded-none object-cover transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
        {/* 3rd card */}
        <div className="  hidden shadow-lg h-48 md:h-64 lg:h-[26rem]  max-w-xs w-full  md:block">
          <div className="relative w-full h-full overflow-hidden ">
            {normalProducts.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="border-b border-greyborder px-8 hidden md:block"></p>
      {/* </div> */}

      <div className="w-full px-4 md:hidden">
        <div className="w-full border  border-black p-4 rounded-xl flex justify-center items-center gap-4 ">
          <p className="text-md font-lato font-semibold">BuZz Sale Ends In:</p>
          <p className="text-md font-lato font-semibold">04d:16hrs:32mins</p>
        </div>
      </div>
    </div>
  );
}

export default Collections;
