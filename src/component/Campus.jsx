import campus1 from '../assets/gallery-1.png';
import campus2 from '../assets/gallery-2.png';
import campus3 from '../assets/gallery-3.png';
import campus4 from '../assets/gallery-4.png';
import arrow from '../assets/white-arrow.png';

function Campus() {
    return (
        <>
        <div id="campus" className='max-h-[800px] min-w-screen w-full p-10 mx-10 lg:h-[500px]' style={{ marginBottom: "80px" }}>
        <div className='container-fluid flex justify-center items-center gap-10 flex-wrap' style={{ margin: "100px 0" }}>
            <img src={campus1} alt="" className='w-1/5 lg:w-1/6 md:w-2/6 sm:max-w-[400px] flex justify-center items-center shadow-lg rounded-lg cursor-pointer hover:scale-110 transition hover:duration-300 ease-in-out' />
            <img src={campus2} alt="" className='w-1/5 lg:w-1/6 md:w-2/6 sm:max-w-[400px] flex justify-center items-center shadow-lg rounded-lg cursor-pointer hover:scale-110 transition hover:duration-300 ease-in-out' />
            <img src={campus3} alt="" className='w-1/5 lg:w-1/6 md:w-2/6 sm:max-w-[400px] flex justify-center items-center shadow-lg rounded-lg cursor-pointer hover:scale-110 transition hover:duration-300 ease-in-out' />
            <img src={campus4} alt="" className='w-1/5 lg:w-1/6 md:w-2/6 sm:max-w-[400px] flex justify-center items-center shadow-lg rounded-lg cursor-pointer hover:scale-110 transition hover:duration-300 ease-in-out' />
        </div>
        <div className='container-fluid flex justify-center items-center gap-10 w-full' style={{ margin: "100px 0" }}>
        <button className='bg-amber-500 text-white p-2  rounded-lg hover:bg-blue-600 transition hover:duration-300 ease-in-out text-3xl text-center justify-self-center items-center flex gap-2' style={{ padding: "15px 40px"}}>view  <span className='text-amber-500'>more</span> <img src={arrow} alt="" className='w-full h-full' /></button>
        </div>
        </div>
        </>
    )
}
export default Campus
