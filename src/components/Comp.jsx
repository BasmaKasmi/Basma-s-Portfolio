import React from 'react';

import { CodeIcon } from '@heroicons/react/outline';
import {DesktopComputerIcon, CogIcon} from '@heroicons/react/solid'

import ImgC from '../assets/Web.png'

const skills = [
  {
    category: 'Front-end',
    skills: ['HTML', 'css/ Tailwind css', 'JavaScript', 'ReactJs', 'TypeScript', 'NextJs'],
    icon: CodeIcon,
  },
  {
    category: 'Back-end',
    skills: ['Language C', 'C#', 'MySQL', 'PHP', 'Python', 'ExpressJs', 'NodeJs', 'MongoDB'],
    icon: CogIcon,
  },
  {
    category: 'Systèmes dexploitation et Logiciels',
    skills: [
      'Mac OS, Windows, Linux',
      'gestion de versions: Git, GitHub / GitLab / Bitbucket',
      'Outils de développement: Visual Studio Code, IntelliJ IDEA, Jupyter, Spyder',
      'Outils de déploiement et CI/CD: Docker, Kubernetes, Jenkins',
      'Outil pour tester des API: Postman'
    ],
    icon: DesktopComputerIcon,
  },
];


const Comp = () => {
  return (
  <div name='Comp' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={ImgC} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Compétences</h2>
              <h3 className='text-5xl font-bold py-6 text-left'>Every skill you acquire doubles your odds of success. <br />-Scott Adams</h3>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          {skills.map((skill, index) => (
            <div key={index} className='bg-white rounded-xl shadow-xl overflow-hidden hover:scale-110 duration-300 cursor-pointer'>
              <div className='px-4 py-20'>
                <skill.icon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                <h3 className='font-bold text-2xl my-6'>{skill.category}</h3>
                <ol className='list-disc space-y-2 px-6 text-gray-700'>
                  {skill.skills.map((skillDetail, index) => (
                    <li key={index} className='text-xl'>{skillDetail}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
          </div>
      </div>
  </div>
  );
};

export default Comp;
