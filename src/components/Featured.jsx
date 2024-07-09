import React from "react";
import Smart from "../asset/Smart watch 1.png";
import Headphone from "../asset/Beautiful gaming headphone -5 1.png";
import Laptop from "../asset/laptop.png";

const FeaturedItem = ({ image, title, price, oldPrice }) => (
  <div className="bg-slate-400 p-4 rounded-lg">
    <img src={image} alt={title} className="w-full h-auto mb-4" />
    <p className="text-xl text-white font-semibold mb-2">{title}</p>
    <div className="flex justify-between items-center">
      <div>
        <p className="text-white">{price}</p>
        <p className="line-through text-white text-sm">{oldPrice}</p>
      </div>
      <button className="bg-red-600 text-white p-2 rounded-xl">Buy Now</button>
    </div>
  </div>
);

const Featured = () => {
  return (
    <div className="bg-navColor py-12 lg:py-24 mt-32">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl lg:text-[45px] font-semibold text-navText mb-8 text-center lg:text-left">
          Featured Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeaturedItem
            image={Smart}
            title="Smart watch wireless"
            price="N300,000"
            oldPrice="N500,000"
          />
          <FeaturedItem
            image={Headphone}
            title="Gaming Headset"
            price="N50,000"
            oldPrice="N80,000"
          />
          <FeaturedItem
            image={Laptop}
            title="Core i7 Laptop"
            price="N150,000"
            oldPrice="N200,000"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
