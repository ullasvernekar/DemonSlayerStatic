import React from "react";

const TechCard = ({ name, image, desc }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden  transition-transform transform hover:scale-105 ">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default TechCard;
