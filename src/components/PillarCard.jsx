const PillarCard = ({ name, image, desc }) => {
    return (
      <div className="bg-gradient-to-r from-red-700 to-yellow-500 rounded-lg p-6 shadow-lg">
        <img src={image} alt={name} className="w-40 h-40 rounded-full mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white text-center">{name}</h3>
        <p className="text-center text-white mt-2">{desc}</p>
      </div>
    );
  };
  
  export default PillarCard;
  