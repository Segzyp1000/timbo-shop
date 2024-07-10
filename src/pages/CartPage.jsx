import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import Micro from "../asset/Rectangle 11 (2).png";
import Pc from "../asset/10706486 1.png";
import smarter from "../asset/Smart@4x 1.png";
import lappy from "../asset/Rectangle 11 (1).png";
import earpod from "../asset/earpod 1.png";
import Assess from "../asset/Asset 2@4x.png";
import Dispenser from "../asset/Despenser 1.png";
import Blender from "../asset/Blender@4x 1.png";
import Iron from "../asset/Iron@4x 1.png";
import Smart from "../asset/Smart watch 1.png";
import Headphone from "../asset/Beautiful gaming headphone -5 1.png";
import Laptop from "../asset/laptop.png";

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
  {
    id: 10,
    image: Smart,
    category: "Wristwaatch",
    name: "Smart wireless watch",
    price: "N300,000",
  },
  {
    id: 11,
    image: Headphone,
    category: "Headset",
    name: "Gaming Headset",
    price: "₦50,000",
  },
  {
    id: 12,
    image: Laptop,
    category: "Laptop",
    name: "Core i7 Laptop",
    price: "₦150,000",
  },
];

const CartPage = () => {
  const cart = useContext(CartContext);

  const renderCartItem = (item) => {
    const product = products.find((p) => p.id === item.id);
    return (
      <div
        key={item.id}
        className="flex justify-between items-center border-b py-4"
      >
        <div className="flex items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">
              Price: ₦{product.price.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => cart.removeOneFromCart(item.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            onClick={() => cart.addOneToCart(item.id)}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            +
          </button>
          <button
            onClick={() => cart.deleteFromCart(item.id)}
            className="bg-red-700 text-white px-2 py-1 rounded ml-4"
          >
            Remove
          </button>
        </div>
      </div>
    );
  };

  const getTotalCost = () => {
    return cart.items.reduce((total, item) => {
      const product = products.find((p) => p.id === item.id);
      const price = parseFloat(product.price.replace(/[^0-9.-]+/g, "")); // This removes non-numeric characters and converts to a number
      return total + price * item.quantity;
    }, 0);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.items.map(renderCartItem)}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">
              Total: ₦{getTotalCost().toLocaleString()}
            </h2>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
