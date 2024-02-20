import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-rose-50 text-slate-500 title-font ">
      <div className="text-2xl font-bold">Talha Imtiaz</div>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-800 transition">Home</a></li>
        <li><a href="#" className="hover:text-gray-800 transition">About</a></li>
        <li><a href="#" className="hover:text-gray-800 transition">Services</a></li>
        <li><a href="#" className="hover:text-gray-800 transition">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
