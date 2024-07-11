import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const params = useParams();

  return (
    <nav className="bg-navColor text-navText w-full p-4 lg:p-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl lg:text-[35px] font-bold">EverTrend</h1>
        <div className="hidden lg:flex space-x-5 text-xl">
          <a href={`/#${params.section || "new-item"}`} className="font-bold">
            Product
          </a>

          <a href={`/#${params.section || "new-item"}`}>Shop</a>
          <a href={`/#${params.section || "featured"}`}>Categories</a>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/">Home</Link>
          <Link to="/cart">
            <FaShoppingCart className="bg-navText text-black rounded-xl text-2xl" />
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
          <a
            href={`/#${params.section || "new-item"}`}
            className="block font-bold"
          >
            Product
          </a>

          <a href={`/#${params.section || "new-item"}`} className="block">
            Shop
          </a>
          <a href={`/#${params.section || "featured"}`} className="block">
            Categories
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
