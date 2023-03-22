import React from 'react';

import ImgG from '../assets/Gaming.png';
import webImg from '../assets/website.png';
import etnaImg from '../assets/etna.png';
import em from '../assets/QR.png';

const Projets = () => {
  return (
    <div name='Projets' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-2 '>
        <div className='text-center py-4 text-slate-300'>
          <h2 className='text-3xl uppercase'>Projets</h2>
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
        <a href="#" className="flex flex-col items-center bg-white border rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-md md:flex-row md:max-w-xl">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={webImg} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
            <ol className='list-disc'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">API : Développement d'un site E-commerce</h5>
                <li className="mb-2 font-normal text-gray-700 dark:text-gray-400">Apprenez à développer une API avec NodeJS, TypeScript et ExpressJS.</li>
                <li className="mb-2 font-normal text-gray-700 dark:text-gray-400">Séquelisation Création de schémas de base de données avec MySQL</li>
              </ol>
            </div>
          </a>
          <a href="#" className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={etnaImg} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <ol className='list-disc'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Pôle Suivi : Effectuer des mêlées de suivi pédagogique avec les étudiants.</h5>
                <li className="mb-2 font-normal text-gray-700 dark:text-gray-400">Création d'un backend (API) et d'un frontend (web) en utilisant les technologies suivantes:</li>
                <li className="mb-2 font-normal text-gray-700 dark:text-gray-400">Pour le backend : MySQL, NodeJS, TypeScript et ExpressJS.<br /> Pour le frontend : JavaScript, ReactJs, CSS</li>

              </ol>
            </div>
          </a>
          <a href="#" className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={ImgG} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
            <ol className='list-disc'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Hyrule Castle: Développement de jeux en TypeScript</h5>
                <li className="mb-2 font-normal text-gray-700 dark:text-gray-400">Gérer les entrées utilisateur et leur gestion des erreurs</li>
                <li className="mb-2 font-normal text-gray-700 dark:text-gray-400">Créer un gameplay autour de fonctions algorithmiques et mathématiques</li>
              </ol>
            </div>
          </a>
          <a href="#" className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-md h-96 md:h-auto md:w-48 md:rounded-none md:rounded-md" src={em} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
            <ol className='list-disc'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Défi ETNA: App mobile en React Native, Expo,
                NodeJs, Typescript</h5>
                <li className="mb-2 font-normal text-gray-700 dark:text-gray-400">Réalisation d'une application mobile pour rendre le système d'émargement à l'école semi automatique.</li> 
                <li className="mb-2 font-normal text-gray-700 dark:text-gray-400">Gestion des codes QR présents sur les cartes étudiantes</li>
              </ol>
            </div>
          </a>
          

        </div>
      </div>
    </div>
  );
};

export default Projets;
