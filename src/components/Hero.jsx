import React, { useState, useEffect } from 'react';

import {
    DatabaseIcon,
    CodeIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/hero-image.png'
import Cv from '../assets/cv.pdf'

const Hero = () => {
    const [animation, setAnimation] = useState('opacity-0');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimation('animate-fadeInUp');
    }, 100); // commence l'animation après 100 ms

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className={`text-xl sm:text-2xl font-bold ${animation} text-gray-700`}>Bonjour, je m'appelle</p>
            <h1 className={`py-3 text-4xl sm:text-6xl md:text-7xl font-bold ${animation} delay-200 text-violet-800`}>Basma KASMI,</h1>
            <h2 className={`text-xl sm:text-2xl font-bold ${animation} delay-400 text-gray-700`}>Développeuse Full Stack,</h2>
            <a  target="_blank" rel="noopener noreferrer" download="" href={Cv} className='btn font-sans inline-block mt-4 py-2 px-8 rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1'>Télécharger CV</a>
        </div>

            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p className='flex justify-center font-semibold text-2xl'>Développement web</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <a  target="_blank" rel="noopener noreferrer" className='flex px-4 py-2 text-slate-500' href="https://www.wildcodeschool.com/fr-FR/blog/differences-backend-frontend-developpement-web"><DatabaseIcon className='h-6 text-indigo-600' />Back-end</a>
                    <a  target="_blank" rel="noopener noreferrer" className='flex px-4 py-2 text-slate-500' href="https://www.wildcodeschool.com/fr-FR/blog/differences-backend-frontend-developpement-web"><CodeIcon className='h-6 text-indigo-600' />Front-end</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero