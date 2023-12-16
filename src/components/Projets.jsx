import React from 'react';

import ImgG from '../assets/Gaming.png';
import webImg from '../assets/website.png';
import etnaImg from '../assets/etna.png';
import em from '../assets/QR.png';

const Projets = () => {

  const projects = [
    {
      id: 1,
      title: "API : Développement d'un site E-commerce",
      description: [
        "Séquelisation Création de schémas de base de données avec MySQL.",

        "Pour le backend : NodeJs, MySql, Sequelize, ExpressJs",
        "Pour le frontend: Typescipt, NextJs"
        
      ],
      image: webImg,
      link: "https://github.com/BasmaKasmi/my-API", 
    },
    {
      id: 2,
      title: "Pôle Suivi : Effectuer des mêlées de suivi pédagogique avec les étudiants.",
      description: [
        "Pour le backend : MySQL, NodeJS, TypeScript et ExpressJS.",
        "Pour le frontend : JavaScript, ReactJs, CSS"
      ],
      image: etnaImg,
      link: " https://github.com/BasmaKasmi/Code-Camp-etna",
    },
    {
      id: 3,
      title: "The Hyrule Castle: Développement de jeux en TypeScript",
      description: [
        "Gérer les entrées utilisateur et leur gestion des erreurs. Créer un gameplay autour de fonctions algorithmiques et mathématiques, en utilisant le langage de programmation Typescript",
      ],
      image: ImgG,
      link: "https://github.com/BasmaKasmi/The-Hyrule-castle",
    },
    {
      id: 4,
      title: "Défi ETNA code camp: App mobile en React Native, Expo, NodeJs, Typescript",
      description: [
        "Réalisation d'une application mobile pour rendre le système d'émargement à l'école semi automatique. Gestion des codes QR présents sur les cartes étudiantes",
      ],
      image: em,
      link: "https://github.com/BasmaKasmi/D-fi-ETNA",
    }
  ];

  
  return (
    <div name='Projets' className='w-full text-white my-24'>
      <div className='w-full h-[100%] absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-2 '>
        <div className='text-center py-4 text-slate-300'>
          <h2 className='text-3xl  text-black uppercase'>Projets</h2>
        </div>
        <div className='grid md:grid-cols-2 gap-4 px-4 py-12'>
        {projects.map((project) => (
  <div key={project.id} className="group bg-white border rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={project.image} alt={project.title}/>
    <div className="flex flex-col justify-between p-4 leading-normal ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{project.title}</h5>
      <div className="text-gray-700">
        {project.description.map((line, index) => (
          <p key={index} className="mb-2 font-normal">{line}</p>
        ))}
      </div>
      <div className="mt-4 self-end">
      <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-center items-center btn font-sans py-2 px-8 rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Voir le projet
      </a>
      </div>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
};

export default Projets;
