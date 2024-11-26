import React, { useState } from "react";
import { Utensils, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Utensils className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-2xl font-semibold text-rose-300">
              Fusion
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-rose-300 transition">
              HOME
            </a>
            <a href="#" className="text-white hover:text-rose-300 transition">
              ABOUT
            </a>
            <a href="#" className="text-white hover:text-rose-300 transition">
              SERVICE
            </a>
            <a href="#" className="text-white hover:text-rose-300 transition">
              MENU
            </a>
            <a href="#" className="text-white hover:text-rose-300 transition">
              CONTACT
            </a>
            <ShoppingCart className="h-6 w-6 text-white hover:text-rose-300 cursor-pointer transition" />
            <button className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-full transition">
              Book a Table
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-rose-300 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-rose-300 transition"
              >
                HOME
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-rose-300 transition"
              >
                ABOUT
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-rose-300 transition"
              >
                SERVICE
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-rose-300 transition"
              >
                MENU
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-rose-300 transition"
              >
                CONTACT
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <ShoppingCart className="h-6 w-6 text-white" />
                <button className="bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded-full transition">
                  Book a Table
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
