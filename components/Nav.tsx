import React from "react";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-8 font-light">
      {/* Logo */}
      <p className="text-xl tracking-wide cursor-pointer hover:opacity-70 transition-opacity">
        X
      </p>

      {/* Navigation */}
      <ul className="flex space-x-8 text-sm tracking-wide">
        {["Home", "About", "Work", "Contact"].map((item) => (
          <li
            key={item}
            className="cursor-pointer relative group"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
