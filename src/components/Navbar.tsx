import React from "react";

const Navbar = () => {
  return (
    <div className="sticky w-screen flex flex-wrap items-center justify-between py-1 px-36 bg-white shadow-md">
      <div className="flex space-x-2 lg:space-x-6 items-center justify-center cursor-pointer">
        <img
          src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
          alt="arab logo"
          className="w-36 h-16 object-contain"
        />
      </div>

      <div className="flex items-center justify-center space-x-2 lg:space-x-6"></div>
    </div>
  );
};

export default Navbar;
