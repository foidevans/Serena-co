import React, { useState } from "react";
import Footer from '../components/Footer'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
  <>
   <section data-scroll-section id="contact" className="cover-section relative  bg-white">
      
      <div 
        data-scroll 
        data-scroll-sticky 
      
        className="cover-slide-fast min-h-screen z-50 flex flex-col px-8 lg:px-15 "
      >
        <div className="pt-15">
          <h2 className="text-sm tracking-[0.2em] text-gray-500 uppercase">
            Contact us
          </h2>
        </div>

        <div className='flex items-start gap-15 flex-1  pb-20'>
          
          <div className="flex flex-col gap-6 flex-1 max-w-[50%] ">
            <h1 className="text-4xl md:text-6xl font-serif text-[#2b1d12] leading-tight uppercase" 
              style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "5rem",
              letterSpacing: "-2px"
            }}>
            Let's begin a <span
                style={{
                  fontFamily: "'My Soul', cursive",
                
                  fontWeight: "lighter",
                }}
              >
                c
              </span>onversation
            </h1>
            
            <p className="text-gray-600 text-base leading-relaxed ">
             Tell us more about your space, your ideas, and your aspirations. We'll guide you through the next steps with care and intention
            </p>

            <button className="mt-4 w-fit border-b border-[#2b1d12] text-[#2b1d12] font-medium tracking-wide hover:text-[#a67b5b] hover:border-[#a67b5b] transition-all duration-300">
              LEARN MORE →
            </button>
          </div>

        <div className="formContainer  w-[50%]">
          <form action="" method="get">
          <div className='flex flex-col gap-5'>
            <div className='border-b-2 border-b-black-500 border-b-solid pb-2'>
                          <input type="text" name="name" id="" placeholder='Name'/>
            </div>
            <div className='flex gap-4'>
           <div className='border-b-2 border-b-black-500 border-b-solid w-full pb-2'>
            <input type="number" name="phone" id="" placeholder='Phone'/>
            </div>
             <div className='border-b-2 border-b-black-500 border-b-solid w-full pb-2'>
            <input type="email" name="email" id="" placeholder='Email' />
            </div>
            </div>
              <div className='border-2 border-black-500 border-solid pb-2'>
    <textarea name="message" id="" placeholder='message'  className='p-3 w-full min-h-[120px] resize-y'></textarea>
  </div>

            <button type="submit" className="self-start border-b-2 border-b-black-500 border-b-solid">SEND REQUEST  →</button>
            </div>
          </form>
        </div>


          </div>
          </div>

          < Footer />

          </section>

    </>
  )
}

export default Contact

