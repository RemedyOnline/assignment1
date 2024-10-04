import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('src/assets/images/benz.avif')" }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center items-start">
        <h2 className=" font-bold text-blue-600 text-4xl">
          About Kantanka Automobile
        </h2>
        <p className="text-white max-w-xl font-medium text-xl mt-12">
          Kantanka Automobile, founded by Dr. Kwadwo Safo, is the first local
          car manufacturing company in Ghana, leading innovation across Africa.
          With a strong commitment to building sustainable, durable, and
          luxurious vehicles for Ghanaians and Africans, our mission is to
          empower the continent by manufacturing top-class vehicles
          <span>by Africans, for Africans.</span>
        </p>
      </div>
    </section>
  );
};

export default About;
