import React from 'react';
import './Navbar.css';
import asset from '../assets/logo.png';
function Navbar() {
    
  return(   
        <>
        <div className="mt-5">
   <nav className="mx-5 font-bold z-10 flex justify-center items-center text-white  fixed top-5 left-0 right-0 lg:min-w-screen">
    <ul className="container mx-5 px-5 flex space-x-6 min-w-full justify-center items-center gap-4 lg:gap-10 lg:w-[1500px] lg:justify-around ">
      <li className="flex justify-center items-center "><img src={asset} alt="logo" width={200} height={200} className="text-lg mx-5" /></li>
      <li className="flex justify-center items-center "><a href="#home" className="lg:text-xl    hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out">Home</a></li>
      <li className="flex justify-center items-center "><a href="#programs" className="lg:text-xl   hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out">programs</a></li>
      <li className="flex justify-center items-center "><a href="#about" className="lg:text-xl   hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out">About us</a></li>
      <li className="flex justify-center items-center "><a href="#campus" className="lg:text-xl   hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out">campus</a></li>
      <li className="flex justify-center items-center "><a href="#testimonials" className="lg:text-xl   hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out">testimonials</a></li>
      <li className="flex justify-center items-center"> <button className="lg:text-xl   rounded-lg border border-white bg-amber-400 hover:bg-white hover:text-black py-6 px-10 w-[110px] lg:w-[150px]" >Contact us</button></li>
    </ul>
   </nav>
        </div>
        </>
  );
}
export default Navbar;