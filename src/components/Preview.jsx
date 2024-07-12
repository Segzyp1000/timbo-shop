import React from "react";
import pic from "../asset/editted 1.png";

const Preview = () => {
  return (
    <div className="bg-navColor text-navText py-12 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-[48px] font-normal tracking-widest mb-2">
            Explore Our
          </h1>
          <span className="text-4xl lg:text-[55px] font-semibold">
            DIVERSE COLLECTION
          </span>
          <div className="mt-6">
            <a
              href="#new-item"
              className="bg-navText text-navColor font-semibold p-2 rounded-lg"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={pic}
            alt="Preview"
            className="rounded-[19px] w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Preview;
