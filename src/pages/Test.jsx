import React from "react";
import demon from "./../assets/demon.jpg"; // Replace with your actual image path.
import Slider from "react-slick"; // Import the carousel component
import "slick-carousel/slick/slick.css"; // Import the slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import the slick carousel theme styles


const Test = () => {
  return (
    <div className="bg-gray-900 text-white p-6">
      {/* Header Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex mb-12">
        {/* Image Section */}
        <img
          src={demon}
          alt="Tanjiro Kamado"
          className="h-72 w-48 object-cover rounded-md shadow-md mb-5 mr-6 border-l-4 border-red-600"
        />

        {/* Text Section */}
        <div className="text-gray-100 flex-1 px-4 md:px-8 lg:px-12 py-6">
          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold mb-6 text-center md:text-left text-red-500">
            Tanjiro Kamado (竈門炭治郎)
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-lg leading-relaxed">
            Tanjiro is a boy of kind nature with a strong sense of justice. He is the
            main protagonist of <em>Kimetsu no Yaiba (Demon Slayer)</em>. Sporting ruffled
            black hair with a tinge of burgundy at the end and a prominent scar on the
            left side of his forehead.
          </p>

          {/* Background Paragraph */}
          <p className="mt-4 text-lg leading-relaxed">
            His father, Tanjuro Kamado, passed away due to illness, leaving behind his
            wife and six children. As the eldest son of the Kamado family, Tanjiro took
            on the responsibility of caring for his younger siblings and mother.
          </p>
        </div>
      </div>

      {/* Key Highlights Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-red-400">Key Highlights</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-300">
          <li>
            Wields the <strong>Water Breathing</strong> technique and later masters the
            <strong>Hinokami Kagura</strong> (Dance of the Fire God).
          </li>
          <li>
            Always carries his sister Nezuko in a special wooden box during the day to
            shield her from sunlight.
          </li>
          <li>
            Known for his exceptional sense of smell, which helps him track demons and
            identify their weaknesses.
          </li>
          <li>
            His kindness extends even to demons, often showing compassion and
            understanding their tragic pasts.
          </li>
        </ul>
      </div>

      {/* Quote Section */}
      <div className="mt-8 bg-red-600 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-white mb-4">Inspirational Quote</h2>
        <p className="italic text-gray-100 text-lg leading-relaxed">
          "I can do it. I know I can do it. I'm the one who has to do it. I will
          never give up. I will never give up. Never. Never."
        </p>
      </div>

      {/* Fun Facts Section */}
      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-red-400">Fun Facts About Tanjiro</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fact 1 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="font-bold text-white mb-2">Signature Earrings</h3>
            <p className="text-gray-300 text-sm">
              Tanjiro's hanafuda earrings are a family heirloom and play a significant
              role in the story. Their unique design symbolizes his connection to his
              father and the Hinokami Kagura.
            </p>
          </div>
          {/* Fact 2 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="font-bold text-white mb-2">Favorite Food</h3>
            <p className="text-gray-300 text-sm">
              Tanjiro's favorite food is udon noodles, and he is often seen enjoying
              a hearty bowl during his journey.
            </p>
          </div>
          {/* Fact 3 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="font-bold text-white mb-2">Training Journey</h3>
            <p className="text-gray-300 text-sm">
              Tanjiro underwent rigorous training under Sakonji Urokodaki to master
              the Water Breathing technique, overcoming numerous obstacles to
              graduate as a Demon Slayer.
            </p>
          </div>
          {/* Fact 4 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="font-bold text-white mb-2">Sense of Smell</h3>
            <p className="text-gray-300 text-sm">
              His extraordinary sense of smell allows him to detect the emotions of
              people and demons, often giving him a tactical advantage in battles.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src={demon}
            alt="Tanjiro Kamado"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-white mb-2">
            Early Life
          </h3>
          <p className="text-gray-300">
            Tanjiro's peaceful life was upended after the tragic loss of his
            family.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src={demon}
            alt="Tanjiro Kamado"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-white mb-2">
            Hanafuda Earrings
          </h3>
          <p className="text-gray-300">
            Tanjiro's hanafuda earrings are a treasured memento from his father.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src={demon}
            alt="Tanjiro Kamado"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-white mb-2">
            Demon Slayer Journey
          </h3>
          <p className="text-gray-300">
            Tanjiro embarks on a perilous journey to save his sister Nezuko and
            avenge his family.
          </p>
        </div>
      </div>

      {/* Additional Images Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-red-400 mb-4">
          Additional Images
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            src={demon}
            alt="Additional Image"
            className="w-full h-48 object-cover rounded-md shadow-md"
          />
          <img
            src={demon}
            alt="Additional Image"
            className="w-full h-48 object-cover rounded-md shadow-md"
          />
          <img
            src={demon}
            alt="Additional Image"
            className="w-full h-48 object-cover rounded-md shadow-md"
          />
          <img
            src={demon}
            alt="Additional Image"
            className="w-full h-48 object-cover rounded-md shadow-md"
          />
        </div>
      </div>


      {/* Horizontal Image Section */}
      <div className="my-8">
        <img
          src="https://via.placeholder.com/1200x300?text=Kimetsu+No+Yaiba"
          alt="Kimetsu No Yaiba Demon Slayer"
          className="w-full h-60 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white p-6 rounded-lg shadow-lg text-center">
        <p>&copy; 2024 Tanjiro Kamado Fanpage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Test;
