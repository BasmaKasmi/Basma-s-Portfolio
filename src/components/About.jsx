import React from 'react'
import c from '../assets/c.png'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-2 max-w-[1240px] my-8 mx-8'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-2xl md:text-2xl font-bold'>A propos</h1>
                <p className='first-line:uppercase first-line:tracking-widest
                first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900
                first-letter:mr-3 first-letter:float-left'>Je suis fascinée et intéressée par tous ce qui a relation avec le domaine des sciences  généralement et l’informatique particulièrement, mon objectif est donc d’acquérir un solide socle de connaissances et de développer des compétences techniques et méthodologiques dans tous les 
                domaines de l’informatique à fin d’exercer le métier de mon rêve autant qu’une une développeuse web comme il faut. Et effectivement obtenir un diplôme reconnu et en adéquation avec mon projet professionnel.</p>
            </div>
            <div className='mx-8 px-8'>
                <img className='w-8/12 rounded-lg md:w-3/5 mr-4 hover:scale-110 duration-300 cursor-pointer"' src={c} alt="/" />
            </div>
        </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border h-96 w-96 py-8 rounded-xl shadow-xl overflow-hidden hover:scale-110 duration-300 cursor-pointer' >
                    <p className='text-2xl font-bold text-indigo-600'>Mon histoire</p>
                    <p className='text-black mt-2'>Autodidacte depuis mon plus jeune âge, j'aime apprendre de nouvelles choses pour améliorer mes compétences.
                 De nature très curieuse, j'adore le monde du web et des nouvelles technologies,
                 j'aurai le plaisir de me consacrer pleinement au développement de vos idées afin d'en faire de grands projets.</p>
                </div>
                <div className='border h-96 w-96 py-8 rounded-xl shadow-xl overflow-hidden hover:scale-110 duration-300 cursor-pointe' >
                    <p className='text-2xl font-bold text-indigo-600'>Education</p>
                    <p className='text-black mt-2'>Pour ce qui est de ma formation, j'ai commencé en dernière année universitaire avec python et j'ai adoré, la façon de penser, d'afficher les choses avec des lignes de codes m'a tout fasciné. J'ai donc décidé d'aller à l'ETNA. Ce qui est bien, c'est qu'il y a l'alternance et l'autonomie. 
                    On apprend en réalisant des projets passionnants qui stimulent notre envie d'apprendre. </p>
                </div>
                <div className='border h-96 w-96 py-8 rounded-xl shadow-xl overflow-hidden hover:scale-110 duration-300 cursor-pointe' >
                    <p className='text-2xl font-bold text-indigo-600'>Experience</p>
                    <p className='text-black mt-2'>Mon cursus d’apprentissage à l’ETNA se fait avec la pédagogie par projet.
                    Le développement de compétences essentielles à un architecte en informatique est par ailleurs favorisé par
                    cette pédagogie professionnalisante : rigueur, organisation, communication et management de projet.
                    J’ai donc eu l’occasion de faire plusieurs projets</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About