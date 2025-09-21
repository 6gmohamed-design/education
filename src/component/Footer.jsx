import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-black text-white" style={{borderTop:"2px dotted #ccc", padding:"40px auto"}}> 
    <div className="flex flex-col items-center justify-center w-[80%] mx-auto " style={{margin:"20px auto",padding:"20px auto"}}>
        
      <div className="min-w-full flex justify-between items-center"  >
        <p className="text-center sm:text-sm md:text-base lg:text-lg hover:text-amber-300 cursor-pointer" >@copyright {new Date().getFullYear()} Educity. All rights reserved.</p>
        <span className="text-center sm:text-sm md:text-base lg:text-lg hover:text-red-500 cursor-pointer" >terms of services <span style={{marginLeft:"10px"}}>privacy privacy</span> </span>
        
      </div>  
        
    </div>
    </div>
  )
}

export default Footer