import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import asset from '../assets/logo.png';
import menu from '../assets/menu-icon.png';
function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {

      window.addEventListener('scroll',function() {
        if(window.pageYOffset > 700) {
          
          document.querySelector('#navbar').style.backgroundColor = 'rgba(10,10,150,0.8)';
        } else {
          document.querySelector('#navbar').style.backgroundColor = 'transparent';
        }
      });
    }, []);
  return(   
        <>
        <div className="container-fluid overflow-hidden  " >
   <nav className=" mx-5 container font-bold z-10 flex justify-center items-center rounded-lg overflow-hidden  text-white  fixed top-0 p-1 left-0 right-0 lg:min-w-screen" id="navbar" style={{ backgroundColor: 'transparent' ,padding:"10px"}}>
    <ul className="container flex space-x-6 min-w-full justify-center items-center gap-4 lg:gap-10 lg:w-[1500px] lg:justify-around ">
      <li className="flex justify-center items-center"><img src={asset} alt="logo" width={200} height={200} className="text-lg mx-5 sm:relative top-0 left-[-200px]" /></li>
      <li className="flex justify-center items-center sm:hidden lg:block "><a href="#home" className="lg:text-xl    hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out">Home</a></li>
      <li className="flex justify-center items-center sm:hidden lg:block "><a href="#programs" className="lg:text-xl   hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out">programs</a></li>
      <li className="flex justify-center items-center sm:hidden lg:block "><a href="#about" className="lg:text-xl   hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out">About us</a></li>
      <li className="flex justify-center items-center sm:hidden lg:block "><a href="#campus" className="lg:text-xl   hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out">campus</a></li>
      <li className="flex justify-center items-center sm:hidden lg:block "><a href="#testmonials" className="lg:text-xl   hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out">testimonials</a></li>
      <li className="flex justify-center items-center sm:hidden lg:block "> <button className="lg:text-xl   rounded-lg border border-white bg-amber-400 hover:bg-white hover:text-black py-6 px-10 w-[110px] lg:w-[150px]" >
        <a href="#contact">Contact us</a></button></li>
    </ul>
    <div className="absolute top-5 right-5 cursor-pointer ">
    <img src={menu} alt="menu" width={25} height={20} onClick={() => setShow(!show)} style={{ cursor: "pointer" }}/>
    </div>
 <div className="fixed top-0 left-0">
  {show && <ul className="fixed top-0 left-0 flex flex-col items-center
  justify-around space-y-4 bg-rose-500 text-white h-[100vh] w-[100vw] mask-linear-to-stone-50 rounded-lg z-500">
    <li><a href="#home" className="lg:text-xl hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out" onClick={() => setShow(!show)}>Home</a></li>
    <li><a href="#programs" className="lg:text-xl hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out" onClick={() => setShow(!show)}>Programs</a></li>
    <li><a href="#about" className="lg:text-xl hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out" onClick={() => setShow(!show)}>About us</a></li>
    <li><a href="#campus" className="lg:text-xl hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out" onClick={() => setShow(!show)}>Campus</a></li>
    <li><a href="#testmonials" className="lg:text-xl hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out" onClick={() => setShow(!show)}>Testimonials</a></li>
    <li><a href="#contact" className="lg:text-xl hover:text-amber-400 decoration-2 underline-offset-2 hover:underline transition duration-300 ease-in-out" onClick={() => setShow(!show)}>Contact us</a></li>
  </ul>}
 </div>
   </nav>
        </div>
        </>
  );
}
export default Navbar;