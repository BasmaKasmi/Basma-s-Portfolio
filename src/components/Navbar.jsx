import React, {useState} from 'react';
import { Link } from 'react-scroll'


import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../assets/logo.png'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='place-items-stretch w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='pr-10 flex justify-between items-center w-full h-full'>
        <div className='ml-4 space-x-4 space-x-reverse flex items-center'>
        <img alt="logo" src={logo} width="75px" />
        </div>
        <div className='pr-10 space-x-4 space-x-reverse flex items-center'>
          <ul className='hidden md:flex p-4'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duration={500}>A propos</Link></li>
          <li><Link to="Comp" smooth={true} offset={-50} duration={500}>Compétences</Link></li>
          <li><Link to="Projets" smooth={true} offset={-100} duration={500}>Projets</Link></li>
          </ul>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 '}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Compétences" smooth={true} offset={-50} duration={500}>Compétences</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Projets" smooth={true} offset={-100} duration={500}>Projets</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
