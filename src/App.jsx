 import Header from "./component/Header";
 import Hero from "./component/Hero";
 import Program from "./component/Program";
 import About from "./component/About";
 import Campus from "./component/Campus";
 import Testmonials from "./component/Testmonials";
 import Contact from "./Contact";
 import Footer from "./component/Footer";
 
 function App() {
  return (
    <div className="min-h-screen  min-w-full flex flex-col ">
 
      <Header />
      <Hero />
      <br />
      <Program />
      <About />
      <div className="w-full container-fluid flex justify-center items-center flex-col relative" >
      <strong className=" text-3xl font-bold hover:text-blue-500 cursor-pointer self-center justify-self-center items-center bg-amber-300 w-full text-center hover:bg-amber-500 rounded-2xl p-2 text-amber-500 transition duration-300 ease-in-out" style={{ marginBottom: "20px" }}>gallery</strong>
      <italic className="text-center text-3xl font-bold hover:text-indigo-500 cursor-pointer self-center justify-self-center items-center decoration-amber-500 underline underline-offset-4 ">campus photos</italic>
      </div>
      <Campus/>
    
      <div className="w-full container-fluid flex justify-center items-center flex-col h-[200px] relative   top-10" style={{ marginTop: "50px" }}>
      <strong className="text-3xl font-bold hover:text-blue-500 cursor-pointer self-center justify-self-center items-center bg-amber-300 w-full text-center hover:bg-amber-500 rounded-2xl p-2 text-amber-500 transition duration-300 ease-in-out" style={{ marginTop: "10px" }}>testimonials</strong>
      <italic className="text-3xl font-bold hover:text-indigo-500 cursor-pointer self-center justify-self-center items-center decoration-amber-500 underline underline-offset-4 h-1" style={{ marginTop: "20px" }}>what our students say</italic>
      </div>
    <Testmonials/>
    <div className="w-full container-fluid flex justify-center items-center flex-col h-[200px] relative top-10" style={{ marginTop: "50px" }}>
      <strong className="text-3xl font-bold hover:text-blue-500 cursor-pointer self-center justify-self-center items-center bg-amber-300 w-full text-center hover:bg-amber-500 rounded-2xl p-2 text-amber-500 transition duration-300 ease-in-out" style={{ marginTop: "0px" }}>contact us</strong>
      <italic className="text-3xl font-bold hover:text-indigo-500 cursor-pointer self-center justify-self-center items-center decoration-amber-500 underline underline-offset-4 h-10" style={{ marginTop: "20px" }}>get in touch</italic>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
 }
 export default App;