    import React from 'react';
    import './Hero.css';
    import dark_arrow from '../assets/dark-arrow.png';
    function Hero() {
        return (
            <>
       <div className="hero min-h-screen min-w-full bg-cover bg-center" >
<div className="max-h-full hero-content text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-5">
    <h1 className="text-5xl font-bold text-white">We ensure better education for better future</h1>
    <h5 className="text-white mb-10">our mission is to provide quality education to all  children
        mission letter example and experience in education which i have gained 
    </h5>
    <div className="flex justify-center items-center py-10  min-w-full">
        <button className="bg-white text-black flex justify-center items-center gap-5 py-6 px-10 rounded-lg hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out h-[40px] w-[200px]">explore more
            <img src={dark_arrow} alt="" width={50} height={50} /></button>    
    
    </div>
</div>

       </div>
            </>
        );
    }
    export default Hero;