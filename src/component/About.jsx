import about from "../assets/about.png";
import play from "../assets/play-icon.png"
import "../index.css"
function About() {
    return (
        <>
        <div>
        <div className="flex justify-center items-center max-w-full mx-10 sm:flex-row flex-col gap-10" id="about" style={{ marginBottom: "20vh" }}>
         <div className="relative w-[50%] mx-auto md:max-h-[600px] lg:max-h-[40%]">
         <img src={about} alt="" className="w-full min-h-full object-cover content-center rounded-2xl overflow-hidden shadow-2xl md:min-h-[600px] lg:min-h-[20%]"/>   
           <img src={play} alt="" className="w-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>     
            
            </div>   
          <div className="w-[40%] flex justify-center items-center gap-5 flex-col md:max-h-[600px] lg:min-h-[800px]">
             <h6 className="text-[#2432ee] font-bold w-full text-3xl h-auto sm:text-2xl ">About University</h6>   
            <h1 className="text-[#1C1C1C] font-bold w-full text-3xl h-auto sm:text-2xl">nutring tomorrow's leaders today</h1>
            <p className="text-[#808080] sm:text-xl lg:leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tempora vero adipisci mollitia recusandae esse iusto cum iure ullam, soluta nostrum. Inventore quisquam explicabo veniam doloribus illum, sint beatae voluptatum.</p>
            <p className="text-[#808080] sm:text-xl lg:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit eius esse et odio laudantium! Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, ipsum!.</p>
      
      <p className="text-[#808080] sm:text-xl lg:leading-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus vitae delectus temporibus, reiciendis numquam consequuntur beatae cumque in expedita?</p> 
      </div>  
            
      </div> 
        </div>
        </>
    );
}
export default About;
