import React from 'react'
import Navbar from './Navbar'
import menu from '../assets/menu-icon.png'
const Header = () => {
  return (
    <div className='container-fluid flex justify-center items-center absolute top-0 left-0 right-0'>
        <img src={menu} alt="menu" width={30} height={30} className='absolute top-5 right-5 bg-red-400' />
      <Navbar/>
      
    </div>
  )
}

export default Header