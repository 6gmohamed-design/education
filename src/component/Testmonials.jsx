import next from '../assets/next-icon.png'
import back from '../assets/back-icon.png'
import user1 from "../assets/user-1.png"
import user2 from "../assets/user-2.png"
import user3 from "../assets/user-3.png"
import user4 from "../assets/user-4.png"
import { useState,useEffect } from "react";
function Testmonials() {
    let [traselate,setTraselate]=useState(0);
    useEffect(() => {
        if(traselate < -300){
            setTraselate(0);
        }
        if(traselate > 300){
            setTraselate(0);
        }
    }, [traselate]);
    return (
        <>
        <div id="testmonials" className='container-fluid  flex justify-center items-center  flex-col min-w-screen overflow-hidden' style={{ marginBottom: "40px" ,padding: "20px"}} id="testmonials">
       <div className='flex justify-between items-center w-full' style={{ margin: "20px 60px" ,padding: "20px"}} >
        <img src={back} alt="" className='lg:w-16 lg:h-16 sm:w-10 sm:h-10 border bg-blue-800 rounded-full cursor-pointer hover:bg-amber-400 hover:text-white' onClick={() => setTraselate(traselate + 100)} style={{ padding: "-40px" }} />
        <img src={next} alt="" className='lg:w-16 lg:h-16 sm:w-10 sm:h-10 border bg-blue-800 rounded-full cursor-pointer hover:bg-amber-400 hover:text-white' onClick={() => setTraselate(traselate - 100)} style={{ padding: "-40px" }} />
       </div>
       <div className='flex justify-between flex-nowrap transition-transform duration-500 ease-in-out rounded-2xl items-center gap-4 text-center text-amber-500 w-full lg:flex-row md:flex-row sm:flex-row overflow-hidden ' style={{ margin: "20px 60px" ,padding: "20px" }} >
        <div className='rounded-2xl  flex justify-center items-center flex-col border bg-blue-800 min-w-[450px] sm:max-w-[250px] min-h-[300px] overflow-hidden scroll-behavior-smooth lg:rounded-3xl' style={{ padding: "20px", transform: `translateX(${traselate}%)`,transition: "transform 0.5s ease-in-out" ,margin: "0 auto"}}>
        <img src={user1} alt="" className='w-full h-full object-cover content-center rounded-full' />
        <h1 className='text-2xl  font-bold text-amber-200 hover:text-white'>John Doe</h1>
        <p className='text-white text-center text-xl leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
        <div className='rounded-2xl  flex justify-center items-center flex-col border bg-blue-800 min-w-[450px] sm:max-w-[250px] min-h-[300px] overflow-hidden scroll-behavior-smooth' style={{ padding: "20px", transform: `translateX(${traselate}%)`,transition: "transform 0.5s ease-in-out" ,margin: "0 auto"}}>
        <img src={user2} alt="" className='w-full h-full object-cover content-center rounded-full overflow-hidden scroll-behavior-smooth    ' />
        <h1 className='text-2xl  font-bold text-amber-200 hover:text-white'>Jane Smith</h1>
        <p className='text-white text-center text-xl leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
        <div className='rounded-2xl  flex justify-center items-center flex-col border bg-blue-800 min-w-[450px] sm:max-w-[250px] min-h-[300px] overflow-hidden scroll-behavior-smooth' style={{ padding: "20px", transform: `translateX(${traselate}%)`,transition: "transform 0.5s ease-in-out" }}>
        <img src={user3} alt="" className='w-full h-full object-cover content-center rounded-full overflow-hidden scroll-behavior-smooth' />
        <h1 className='text-2xl  font-bold text-amber-200 hover:text-white'>John Brown</h1>
        <p className='text-white text-center text-xl leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
        <div className='rounded-2xl  flex justify-center items-center flex-col border bg-blue-800 min-w-[450px] sm:max-w-[250px] min-h-[300px] overflow-hidden scroll-behavior-smooth' style={{ padding: "20px", transform: `translateX(${traselate}%)`,transition: "transform 0.5s ease-in-out" }}>
        <img src={user4} alt="" className='w-full h-full object-cover content-center rounded-full overflow-hidden scroll-behavior-smooth' />
        <h1 className='text-2xl  font-bold text-amber-200 hover:text-white'>Sarah Johnson</h1>
        <p className='text-white text-center text-xl leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
       </div>
       </div>
        </>
    )
}
export default Testmonials