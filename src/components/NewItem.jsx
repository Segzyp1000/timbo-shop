import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Micro from "../asset/Rectangle 11 (2).png";
import Pc from "../asset/10706486 1.png";
import smarter from "../asset/Smart@4x 1.png";
import lappy from "../asset/Rectangle 11 (1).png";
import earpod from "../asset/earpod 1.png";
import Assess from "../asset/Asset 2@4x.png";
import Dispenser from "../asset/Despenser 1.png";
import Blender from "../asset/Blender@4x 1.png";
import Iron from "../asset/Iron@4x 1.png";
import { CartContext } from "../CartContext";

const ProductCard = ({ id, image, category, name, price }) => {
  const cart = useContext(CartContext);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      id="new-item"
    >
      <div className="bg-productColor h-[200px] lg:h-[300px] flex items-center justify-center">
        <img src={image} alt={name} className="max-h-full w-auto" />
      </div>
      <div className="p-4">
        <p className="text-sm text-categoryColor">{category}</p>
        <p className="font-bold text-lg mb-2">{name}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold">{price}</p>
          <Link
            to="/cart"
            onClick={() => cart.addOneToCart(id)}
            className="flex items-center gap-2 bg-buttonBackground text-white rounded-full px-4 py-2 text-sm"
          >
            Add to Cart <FaShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
};

const NewItem = () => {
  const products = [
    {
      id: 1,
      image: Micro,
      category: "Microphone",
      name: "Noise cancelation & bass",
      price: "N15,000",
    },
    {
      id: 2,
      image: Pc,
      category: "Television",
      name: "LG 14.5 inches",
      price: "₦80,000",
    },
    {
      id: 3,
      image: smarter,
      category: "WristWatch",
      name: "SmartWatch",
      price: "₦200,000",
    },
    {
      id: 4,
      image: lappy,
      category: "Laptop",
      name: "Core i7 15GB RAM",
      price: "₦20,000",
    },
    {
      id: 5,
      image: earpod,
      category: "Earpod",
      name: "noise cancelation and thick bass",
      price: "₦20,000",
    },
    {
      id: 6,
      image: Assess,
      category: "SmartWatch",
      name: "iPhone two sim card watch",
      price: "₦100,000",
    },
    {
      id: 7,
      image: Dispenser,
      category: "Dispender",
      name: "Fruit Dispenser",
      price: "₦30,000",
    },
    {
      id: 8,
      image: Blender,
      category: "Blender",
      name: "Blender Machine",
      price: "₦45,000",
    },
    {
      id: 9,
      image: Iron,
      category: "Stem Iron",
      name: "Stem Iron",
      price: "₦15,000",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-2">New arrival</h1>
        <p className="text-gray-600">
          Currently in store with no shipment fee attached
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default NewItem;
