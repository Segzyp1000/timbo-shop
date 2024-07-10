import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext";
import Smart from "../asset/Smart watch 1.png";
import Headphone from "../asset/Beautiful gaming headphone -5 1.png";
import Laptop from "../asset/laptop.png";

const FeaturedItem = ({ id, image, title, price, oldPrice }) => {
  const cart = useContext(CartContext);
  const quantity = cart.getProductQuantity(id);

  return (
    <div className="bg-slate-400 p-4 rounded-lg">
      <img src={image} alt={title} className="w-full h-auto mb-4" />
      <p className="text-xl text-white font-semibold mb-2">{title}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white">{price}</p>
          <p className="line-through text-white text-sm">{oldPrice}</p>
        </div>
        {quantity === 0 ? (
          <button
            onClick={() => cart.addOneToCart(id)}
            className="bg-red-600 text-white p-2 rounded-xl flex items-center gap-2"
          >
            Add to Cart <FaShoppingCart />
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-white">{quantity}</span>
            <Link
              to="/cart"
              onClick={() => cart.addOneToCart(id)}
              className="bg-green-500 text-white p-2 rounded-xl"
            >
              Buy Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const Featured = () => {
  const cart = useContext(CartContext);
  const featuredProducts = [
    {
      id: 10,
      image: Smart,
      title: "Smart watch wireless",
      price: "N300,000",
      oldPrice: "N500,000",
    },
    {
      id: 11,
      image: Headphone,
      title: "Gaming Headset",
      price: "N50,000",
      oldPrice: "N80,000",
    },
    {
      id: 12,
      image: Laptop,
      title: "Core i7 Laptop",
      price: "N150,000",
      oldPrice: "N200,000",
    },
  ];

  const getTotalCost = () => {
    return featuredProducts.reduce((total, product) => {
      const quantity = cart.getProductQuantity(product.id);
      const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
      return total + price * quantity;
    }, 0);
  };

  return (
    <div className="bg-navColor py-12 lg:py-24 mt-32">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl lg:text-[45px] font-semibold text-navText mb-8 text-center lg:text-left">
          Featured Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <FeaturedItem key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-8 text-right">
          <h2 className="text-2xl font-semibold text-navText"></h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
