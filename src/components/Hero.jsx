import React from 'react'
import {
    DatabaseIcon,
    CodeIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/hero-image.png'
import cvV from '../assets/cvv.pdf'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Hey! je suis développeuse fullstack junior.</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Basma KASMI</h1>
                <p className='text-2xl'>This is my portfolio.</p>
                <a download="" href={cvV} className='btn font-sans inline-block mt-4 py-2 px-8 rounded-[30px] bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white'> Télecharger CV</a>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p className='flex justify-center font-semibold text-lg'>Développement web</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <a className='flex px-4 py-2 text-slate-500' href="https://www.wildcodeschool.com/fr-FR/blog/differences-backend-frontend-developpement-web"><DatabaseIcon className='h-6 text-indigo-600' />Back-end</a>
                    <a className='flex px-4 py-2 text-slate-500' href="https://www.wildcodeschool.com/fr-FR/blog/differences-backend-frontend-developpement-web"><CodeIcon className='h-6 text-indigo-600' />Front-end</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero