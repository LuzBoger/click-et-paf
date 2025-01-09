import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white relative">
      <NavBar />
      
      <div className="text-center py-16">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Bienvenue sur Click-et-Paf</h1>
          <p className="text-lg mb-8">Faites sensation en offrant des gifles à vos proches !</p>
      
        </div>
      </div>
    </header>
  );
};

export default Header;
