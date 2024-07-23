import React from "react";

function BestSellers() {
  return (
    <>
      <div className="w-full flex flex-col gap-4  h-screen p-4 my-2 md:hidden">
        <div className="flex justify-center items-center w-full">
          <h1 className="text-2xl drop-shadow-2xl  w-full px-2 font-bold">
            BestSellers
          </h1>
          <a
            href="http://"
            className="w-full text-right drop-shadow-md text-md font-semibold px-2  "
          >
            View all
          </a>
        </div>

        <div className="container mx-auto p-2">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

const Cards = () => {
  return (
    <div className="bg-white max-w-md rounded-lg shadow-lg overflow-hidden">
      <img
        src="https://via.placeholder.com/300"
        alt="Card Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BestSellers;
