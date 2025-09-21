import React from 'react'
import message from "./assets/msg-icon.png";
import  phone from './assets/phone-icon.png';
import mail from './assets/mail-icon.png';
import location from './assets/location-icon.png';
import arrow from './assets/white-arrow.png';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const textAreaChange = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    }
  return (
    
    <div className='container-fluid' id='contact'>
      <div className='container-fluid w-[80%] md:grid grid-cols-2 gap-4 lg:grid-cols-2 justify-center items-center mx-auto sm:grid-cols-1 ' style={{ margin: "auto" }}>
    
        <div className="container col1 w-full sm:text-[14px]">
        <h2 className='text-left   text-3xl font-bold flex justify-start items-center gap-2 h-[120px]'>send us a message<span><img src={message} alt="" width={80} height={80} className='mx-auto flex-1'/></span></h2>
   <div className='flex justify-center items-center gap-2 flex-wrap w-full'>
<p className='text-left text-xl sm:text-[14px] text-gray-500 font-mono font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur possimus ullam sit porro, eum dicta quos architecto autem provident voluptate ea sed voluptas nostrum at labore mollitia recusandae perspiciatis earum.</p>
   </div>
   <div className='flex justify-start items-center gap-2 h-[60px]'>
    <img src={phone} alt="" width={50} height={50} className='sm:w-10 sm:h-10'/><span>+1234567890</span>
   </div>
   <div className='flex justify-start items-center gap-2 h-[60px]'>
    <img src={mail} alt="" width={50} height={50} className='sm:w-10 sm:h-10'/><span>educity@gmail.com</span>
   </div>
   <div className='flex justify-start items-center gap-2 h-[60px]'>
    <img src={location} alt="" width={50} height={50} className='sm:w-10 sm:h-10'/><span>123 Main St, City, Country</span>
   </div>
      </div>
      <div className="container col2 w-full flex justify-stretch items-center flex-col gap-4">
        <form autoComplete="off"    className='w-full flex justify-items-start items-center flex-col gap-4'  action="https://formsubmit.co/23gmohamed@gmail.com " method="POST" onSubmit={() => {toast.success("Message sent successfully!")}}>
            <label htmlFor="name" className='text-left w-[80%]  text-2xl font-bold sm:text-[20px]'>Name</label>
          <input type="text" placeholder='name' name="name" className='w-full rounded-2xl border-2 border-gray-300 h-[25%] sm:w-[80%]'style={{ backgroundColor: "#EBECFE",outline:"none",padding:"10px"}} required/>
          <label htmlFor="number" className='text-left w-[80%]  text-2xl font-bold sm:text-[20px]' >Number</label>
          <input type="number" placeholder='number' name="number" className='w-full rounded-2xl border-2 border-gray-300 h-[25%] sm:w-[80%]'     style={{ backgroundColor: "#EBECFE",outline:"none",padding:"10px"}} required/>
          <label htmlFor="message" className='text-left w-[80%]  text-2xl font-bold sm:text-[20px]'>Message</label>
          <textarea placeholder='message' name="message" className='w-full rounded-2xl border-2 border-gray-300 h-auto sm:w-[80%]' onChange={(e) => {textAreaChange(e)}} style={{ backgroundColor: "#EBECFE",outline:"none",padding:"10px",resize:"none",overflow:"hidden"}} required></textarea>
          <button type="submit" className=' mx-auto rounded-2xl bg-blue-500 sm:text-[14px] text-white hover:bg-blue-600 transition duration-300 ease-in-out h-[20%] flex justify-center items-center gap-5' style={{padding:"10px"}}>Send Message <img src={arrow} alt="" width={50} height={50} /></button>
        </form>
        <ToastContainer />
      </div>
    </div></div>
  )
}

export default Contact