import React from 'react';

import { CodeIcon } from '@heroicons/react/outline';
import {DesktopComputerIcon, CogIcon} from '@heroicons/react/solid'

import ImgC from '../assets/Web.png'

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
              <div className='bg-white rounded-xl shadow-xl overflow-hidden hover:scale-110 duration-300 cursor-pointer'>
                  <div className='p-8'>
                      <CodeIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Front-end</h3>
                      <ol className='list-disc'>
                        <li className='text-black text-xl'>HTML</li>
                        <li className='text-black text-xl'>css</li>
                        <li className='text-black text-xl'>TypeScript</li>
                        <li className='text-black text-xl'> JavaScript</li>
                        <li className='text-black text-xl'> ReactJs</li>
                      </ol>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-xl overflow-hidden hover:scale-110 duration-300 cursor-pointer'>
                  <div className='p-8'>
                      <CogIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Back-end</h3>
                      <ol className='list-disc'>
                        <li className='text-black text-xl'>Language C</li>
                        <li className='text-black text-xl'>MySQL</li>
                        <li className='text-black text-xl'>PHP</li>
                        <li className='text-black text-xl'> Python</li>
                      </ol>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-xl overflow-hidden hover:scale-110 duration-300 cursor-pointer'>
                  <div className='p-8'>
                      <DesktopComputerIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Systèmes d'exploitation et Logiciels</h3>
                      <ol className='list-disc'>
                        <li className='text-black text-xl'>Mac OS, Windows</li>
                        <li className='text-black text-xl'>Git, Visual StudioCode, Word, Excel, et Powerpoint.</li>
                      </ol>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Comp;
