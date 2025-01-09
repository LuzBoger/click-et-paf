import React from "react";
import NavBar from "./NavBar";

const Header = ({ title, subtitle }) => {
  return (
    <header className="bg-gray-800 text-white relative">
      <div className="text-center py-16">
        <div className="relative z-10">
          {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
          {subtitle && <p className="text-lg mb-8">{subtitle}</p>}
        </div>
      </div>
    </header>
  );
};

export default Header;
