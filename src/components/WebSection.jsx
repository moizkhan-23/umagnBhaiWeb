import React from 'react'
import BackImg from '../assets/back1.webp'

function WebSection() {
  return (
    <>
  <section className="relative">
  <div className="relative">
    <img 
      src={BackImg} 
      alt="Background" 
      className="w-full h-[550px] object-cover" 
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 ">
       
      <h1 className="text-white text-3xl font-bold mb-4 hover:text-orange-300 transition duration-300">Welcome To My Blog</h1>
      <p className="text-white text-lg mb-4 hover:text-orange-300 transition duration-300">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque harum repellat nobis dolor?
      </p>
      <button className="inline-block rounded-sm border border-white bg-transparent text-white  py-2 px-4 hover:bg-black hover:text-orange-600 hover:scale-90 transition hover:border-orange-300">
        Contact Me
      </button>
      </div>
    </div>
   
</section>

    
    
    </>
  )
}

export default WebSection