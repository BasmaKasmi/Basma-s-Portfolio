import React from 'react';
import pImg from '../assets/Python.png';
import wImg from '../assets/WebDevelopment.png';

const Form = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>Formations</h2>
        <div className='grid grid-cols-2 gap-4 place-items-center pt-6'>
          <div className='justify-center w-80 ml-8'>
            <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src={pImg} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">UNIVERSITÉ PARIS-EST-CRÉTEIL VAL-DE-MARNE 2020-2022</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Licence mention sciences pour ingénieur</p>
              </div>
            </div>
          </div>
          <div className='justify-center w-80 ml-8'>
            <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src={wImg} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ETNA, ECOLE DES TECHNOLOGIES NUMÉRIQUES AVANCÉES 2022 à aujourd'hui</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Niveau Bac +2, Ingénierie informatique</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
};

export default Form;
