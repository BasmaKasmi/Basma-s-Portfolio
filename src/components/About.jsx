import React from 'react'
import c from '../assets/c.png'

const cardData = [
    {
      title: 'Mon histoire',
      content: 'Autodidacte depuis mon plus jeune âge, j\'aime apprendre de nouvelles choses pour améliorer mes compétences. De nature très curieuse, j\'adore le monde du web et des nouvelles technologies, j\'aurai le plaisir de me consacrer pleinement au développement de vos idées afin d\'en faire de grands projets.'
    },
    {
      title: 'Education',
      content: 'Pour ce qui est de ma formation, j\'ai commencé en dernière année universitaire avec python et j\'ai adoré, la façon de penser, d\'afficher les choses avec des lignes de codes m\'a tout fasciné. J\'ai donc décidé d\'aller à l\'ETNA. Ce qui est bien, c\'est qu\'il y a l\'alternance et l\'autonomie. On apprend en réalisant des projets passionnants qui stimulent notre envie d\'apprendre.'
    },
    {
      title: 'Experience',
      content: 'Mon cursus d’apprentissage à l’ETNA se fait avec la pédagogie par projet. Le développement de compétences essentielles à un architecte en informatique est par ailleurs favorisé par cette pédagogie professionnalisante : rigueur, organisation, communication et management de projet. J’ai donc eu l’occasion de faire plusieurs projets'
    }
  ];

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-2 max-w-[1240px] my-8 mx-8'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='text-4xl font-bold text-indigo-600 mb-6'>À propos de moi</h1>
                <p className='text-gray-700 text-lg leading-relaxed animate-fadeIn'>
                La technologie, c'est un peu comme de la magie, non ? Salut, je suis <span className='text-indigo-600 font-semibold'>Basma KASMI</span>.
                Mon truc à moi, c'est de coder avec passion pour donner vie à des applications web qui, je l'espère, rendront votre quotidien un peu plus sympa. 
                J'aime penser que chaque projet est une aventure, une chance de résoudre des énigmes, d'apprendre et de grandir.
            </p>
            </div>
            <div className='mx-8 px-8'>
                <img className='w-8/12 rounded-lg md:w-3/5 mr-4 hover:scale-110 duration-300 cursor-pointer"' src={c} alt="/" />
            </div>
        </div>

        <div className='grid md:grid-cols-3 gap-6 px-4 text-center'>
      {cardData.map((card, index) => (
        <div key={index} className='flex flex-col items-center justify-center border h-96 w-full py-8 rounded-xl shadow-xl overflow-hidden hover:scale-110 duration-300 cursor-pointer px-6'>
          <p className='text-2xl font-bold text-indigo-600'>{card.title}</p>
          <p className='text-black mt-2 text-center'>{card.content}</p>
        </div>
      ))}
    </div>
    
        </div>
    </div>
  )
}

export default About