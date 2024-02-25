import React from "react";

const Navbar = () => {
  return (
    <header className="bg-[#f4f4f8] sticky top-0 z-50 ">
      <nav className="flex items-center justify-between px-12 h-16 lg:gap-20">
        <a href="/" className="text-2xl font-bold cursor-pointer">
          Travel
        </a>
        <div className="absolute top-full left-0 max-lg:bg-[#f4f4f8] w-full flex flex-col gap-6 items-center py-2 text-lg lg:static lg:flex-row lg:justify-between content-center">
          <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
            <li className="hover:text-green-400 cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <a href="/place">Place</a>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <a href="/offer">Offer</a>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xl text-white px-2.5 py-1.5 rounded-3xl">
              BOOK NOW
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <i className="fa-solid fa-bars fa-lg" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
