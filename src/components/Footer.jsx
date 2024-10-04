import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-4">
      <div>
        <h3 className="text-2xl text-black font-medium">Helpful Links</h3>
        <ul className="">
          <li>
            <a href="#" className=" text-white hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className=" text-white hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#models" className=" text-white hover:text-blue-600">
              Models
            </a>
          </li>
          <li>
            <a href="#contact" className=" text-white hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="container mx-auto text-center">
        <p>&copy; 2024 Kantanka Automobile. Made in Ghana, Built for Africa.</p>
      </div>
    </footer>
  );
};

export default Footer;
