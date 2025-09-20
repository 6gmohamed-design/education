import React from 'react';
import person1 from '../assets/program-1.png';
import person2 from '../assets/program-2.png';
import person3 from '../assets/program-3.png';
import icon1 from '../assets/program-icon-1.png';
import icon2 from '../assets/program-icon-2.png';
import icon3 from '../assets/program-icon-3.png';
import './Navbar.css';

function Program() {
    return (
        <>
        <div className='min-h-screen min-w-screen'>
        <p className='text-3xl text-center font-bold text-amber-800'>Our Program</p>
        <h1 className='text-5xl text-center font-bold h-[100px] leading-[100px] text-amber-400 underline decoration-4'>what we offer</h1>
        <div className='container min-h-screen min-w-screen'>
        <div className='flex justify-evenly items-center gap-4 min-w-full relative'>
            <div className='relative w-1/4'>
           <img src={person1} alt="" className='min-w-full rounded-lg max-h-[300px]  hover:opacity-75 object-cover' />
           <div className='flex justify-center items-center absolute top-0.5 left-0.5  w-full h-full rounded-lg' style={{backgroundColor:'rgba(0,15,152,0.3)'}}>
            <img src={icon1} alt="" className='text-white  opacity-0 hover:opacity-100'  id='icon1'/>   </div></div>
            <div className='relative w-1/4'>
           <img src={person2} alt="" className='min-w-full rounded-lg max-h-[300px] hover:opacity-75 object-cover' />
           <div className='flex justify-center items-center absolute top-0.5 left-0.5  w-full h-full rounded-lg' style={{backgroundColor:'rgba(0,15,152,0.3)'}}>
            <img src={icon2} alt="" className='text-white  opacity-0 hover:opacity-100' id='icon2'/> </div></div>
            <div className='relative w-1/4'>
           <img src={person3} alt="" className='min-w-full rounded-lg max-h-[300px] hover:opacity-75 object-cover' />
           <div className='flex justify-center items-center absolute top-0.5 left-0.5  w-full h-full rounded-lg' style={{backgroundColor:'rgba(0,15,152,0.3)'}}>
            <img src={icon3} alt="" className='text-white  opacity-0 hover:opacity-100' id='icon3'/> </div></div>
        </div>
        </div>
        </div>
        </>
    );
}
export default Program;