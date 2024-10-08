import React from "react";
import companyLogo from "../assets/images/kantanka-logo.png";

const Navbar = () => {
  return (
    <>
      <header className="bg-none shadow fixed w-full">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className=" flex items-center">
            <img src={companyLogo} alt="logo" />
            <h1 className="text-3xl font-bold text-blue-600 mx-3">
              Kantanka AutoMobile
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-2xl text-gray-600 hover:text-blue-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-2xl text-gray-600 hover:text-blue-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#models"
                  className="text-2xl text-gray-600 hover:text-blue-600"
                >
                  Models
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-2xl text-gray-600 hover:text-blue-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
