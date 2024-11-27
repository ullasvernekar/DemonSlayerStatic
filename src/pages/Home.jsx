import React from "react";
import TechCard from "../components/TechCard";
import tanjiro from "../assets/tanjiro.jpg";
import giyu from "../assets/giyu.jpg";
import rengoku from "../assets/rengoku.jpg";
import shinobu from "../assets/shinobu.jpg";
import zenitsu from "../assets/zenitsu.jpg";
import nezuko from "../assets/nezuko.jpg";
import gyomei from "../assets/gyomei.jpg";
import yorichi from "../assets/yorichi.jpg";
import muichiro from "../assets/muichiro.jpg";
import obanai from "../assets/obanai.jpg";

const Home = () => {
  const tech = [
    {
      name: "Tanjiro Kamado",
      image: tanjiro,
      desc: "Demon Slayer",
    },
    {
      name: "Muichiro Tokito",
      image: muichiro,
      desc: "Demon Slayer",
    },
    {
      name: "Gyomei Himejima",
      image: gyomei,
      desc: "Demon Slayer",
    },
    {
      name: "Rengoku",
      image: rengoku,
      desc: "Demon Slayer",
    },
    {
      name: "Giyu Tomiyoka",
      image: giyu,
      desc: "Demon Slayer",
    },
    {
      name: "Zenitsu Agatsuma",
      image: zenitsu,
      desc: "Demon Slayer",
    },
    {
      name: "Yorichi Yagami",
      image: yorichi,
      desc: "Demon Slayer",
    },
    {
      name: "Nezuko",
      image: nezuko,
      desc: "Demon Slayer",
    },
    {
      name: "Obanai",
      image: obanai,
      desc: "Demon Slayer",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-6">


      {/* Horizontal Text Section */}
      <div className="bg-gradient-to-r from-red-700 to-yellow-500 p-6 text-center text-white rounded-lg shadow-lg my-8">
        <h2 className="text-3xl font-bold mb-4">The Pillars of Demon Slayer</h2>
        <p>
          The Hashira are the strongest fighters in the Demon Slayer Corps. They each specialize in a unique combat style and possess the strength and skill to face the most dangerous demons.
        </p>
      </div>

      {/* Text Content */}
      <div className="text-white my-6 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-emerald-400">Yorichi Yagami  (竈門炭治郎)</h2>
        <p className="text-lg mt-4">
          Tanjiro is a kind-hearted boy with a strong sense of justice. He is the main protagonist of <em>Kimetsu no Yaiba (Demon Slayer)</em>. Sporting ruffled black hair with a tinge of burgundy and a prominent scar on his forehead.
        </p>
        <p className="mt-4 text-gray-300">
          His father, Tanjuro Kamado, passed away, leaving behind his wife and children. As the eldest son of the Kamado family, Tanjiro took on the responsibility of caring for his younger siblings and mother.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
        {tech.map((tech, index) => {
          return (
            <TechCard
              key={index}
              name={tech.name}
              image={tech.image}
              desc={tech.desc}
            />
          );
        })}
      </div>


      {/* Carousel Section */}
      <div className="my-8">
        {/* Here you can add your carousel */}
      </div>

      

 {/* Horizontal Image Section */}
 <div className="my-8">
        <img
          src="https://via.placeholder.com/1200x300?text=Kimetsu+No+Yaiba"
          alt="Kimetsu No Yaiba Demon Slayer"
          className="w-full h-60 object-cover rounded-lg shadow-lg"
        />
      </div>

      

    </div>
  );
};

export default Home;
