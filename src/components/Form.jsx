import React from 'react';
import pImg from '../assets/Python.png';
import wImg from '../assets/WebDevelopment.png';

const Form = () => {

  const educationData = [
    {
      id: 1,
      title: "UNIVERSITÉ PARIS-EST-CRÉTEIL VAL-DE-MARNE 2020-2022",
      description: "Licence mention sciences pour l’ingénieur",
      image: pImg,
      link: "#", 
    },
    {
      id: 2,
      title: "ETNA, ECOLE DES TECHNOLOGIES NUMÉRIQUES AVANCÉES 2022 à aujourd'hui",
      description: "Bachelor - Conceptrice Développeuse d'Applications",
      image: wImg,
      link: "#",
    },
  ];

  return (
    <div name='Form' className='w-full text-white my-24'>
      <div className='w-full h-[800px] absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-2 '>
        <div className='text-center py-4 text-black'>
          <h2 className='text-3xl uppercase'>Formations</h2>
        </div>
        <div className='grid md:grid-cols-2 gap-4 px-4 py-12 '>
        {educationData.map((edu) => (
    <div key={edu.id} className="group bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <div className="transform transition duration-500 hover:scale-105">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={edu.image} alt={edu.title} />
        <div className="p-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">{edu.title}</h5>
          <ol className='list-none space-y-2'>
            <li className="font-normal text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">{edu.description}</li>
          </ol>
        </div>
      </div>
    </div>
  ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
