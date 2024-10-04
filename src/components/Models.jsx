import React from "react";

const models = [
  {
    name: "Kantanka Omama 4x4",
    description:
      "This powerful 4x4 SUV is engineered for both rugged terrains and urban driving, symbolizing strength and versatility.",
    image: "src/assets/images/kantanka.jpg",
  },
  {
    name: "Kantanka Onantefo",
    description:
      "Elegance meets innovation in this sleek sedan. Designed for comfort and efficiency, the Onantefo is perfect for the modern African driver.",
    image: "src/assets/images/Onantefo-suv.jpg",
  },
  {
    name: "Kantanka Otumfo Electric",
    description:
      "Our latest electric vehicle, combining eco-friendly design with cutting-edge technology to power Africa's future.",
    image: "src/assets/images/amourCar.jpeg",
  },
];

const Models = () => {
  return (
    <section id="models" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className=" font-bold text-blue-600 text-4xl">
          Our Featured Models
        </h2>
        <p className="text-gray-600 mt-2 text-2xl">
          Built to meet the needs of African roads and lifestyles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {models.map((model, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-blue-600 mt-4">
                {model.name}
              </h3>
              <p className="text-gray-600 mt-2">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
