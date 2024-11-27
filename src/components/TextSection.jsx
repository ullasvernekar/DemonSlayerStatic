const TextSection = ({ title, content, additionalText }) => {
    return (
      <div className="text-white bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-extrabold text-emerald-400">{title}</h2>
        <p className="text-lg mt-4">{content}</p>
        <p className="text-gray-300 mt-4">{additionalText}</p>
      </div>
    );
  };
  
  export default TextSection;
  