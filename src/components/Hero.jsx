import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen"
      // style={{ backgroundImage: "url('src/assets/images/kantanka.jpg')" }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center items-center  text-center">
        <div className="overlay px-16 py-12">
        <h2 className="text-6xl font-bold  text-white">
          Innovating for Africa, by Africa
        </h2>
        <p className="text-white text-2xl mt-5">
          Pioneers in Ghana’s automotive industry, built for the future.
        </p>
        </div>
        <a
          href="#models"
          className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500"
        >
          Explore Our Cars
        </a>
      </div>
    </section>
  );
};

export default Hero;
