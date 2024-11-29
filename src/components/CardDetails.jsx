// src/components/CardDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  const { id } = useParams();

  // You can define your character data here or fetch it from an API
  const characterData = {
    tanjiro: {
      name: "Tanjiro Kamado",
      description: "Tanjiro is a kind-hearted boy with a strong sense of justice.",
      // Add more details as needed
    },
    giyu: {
      name: "Giyu Tomiyoka",
      description: "Giyu is the Water Hashira.",
      // Add more details as needed
    },
    // Add other character data as needed
  };

  const character = characterData[id];

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold">{character.name}</h2>
      <p>{character.description}</p>
      {/* Display more character details here */}
    </div>
  );
};

export default CardDetails;
