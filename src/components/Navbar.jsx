import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  const cart = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productCount =
    cart.items.length > 0
      ? cart.items.reduce((sum, product) => sum + product.quantity, 0)
      : "";

  return (
    <nav className="fixed top-0 left-0 z-50 p-5 bg-navColor text-navText w-full">
      <div className="flex justify-between items-center w-full mx-auto">
        <Link to="/">
          <h1 className="text-2xl lg:text-[35px] font-bold">EverTrend</h1>
        </Link>
        <div className="hidden lg:flex space-x-5 text-xl">
          <a href="#new-item" className="font-bold">
            Product
          </a>

          <a href="#new-item">Shop</a>
          <a href="#featured">Categories</a>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <span className="flex rounded-xl bg-white hover:bg-slate-200 text-navColor px-1 mt-1">
              <FaShoppingCart className="mr-1" />
              {productCount}
            </span>
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-2">
          <a href="#new-item" className="block font-bold">
            Product
          </a>

          <a href="#new-item" className="block">
            Shop
          </a>
          <a href="#featured" className="block">
            Categories
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
