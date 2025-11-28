import React, { useState } from "react";
import Footer from '../components/Footer'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
  <>
   <section data-scroll-section id="contact" className="cover-section relative  bg-white">
      
      <div 
        data-scroll 
        data-scroll-sticky 
      
        className="cover-slide-fast min-h-screen z-50 flex flex-col px-8 lg:px-15 "
      >
        <div className="pt-15">
          <h2 className=" lg:text-sm md:text-sm text-[11px] tracking-[0.2em] text-gray-500 uppercase">
            Contact us
          </h2>
        </div>

        <div className='contact-container flex-col lg:flex items-start gap-15 flex-1  pb-20'>
          
          <div className=" contact-container-div flex flex-col gap-6 flex-1 min-w-[50%] ">
            <h1 className=" lg:text-[5rem] md:text-[4rem] text-[2.8rem] text-[#2b1d12] leading-tight uppercase" 
              style={{
              fontFamily: "'Cormorant Garamond', serif",
              // fontSize: "5rem",
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

            <button className="my-4 w-fit border-b border-[#2b1d12] text-[#2b1d12] font-medium tracking-wide hover:text-[#a67b5b] hover:border-[#a67b5b] transition-all duration-300">
              LEARN MORE →
            </button>
          </div>

        <div className="formContainer  lg:w-[50%]">
          <form noValidate onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5'>
            <div className='border-b-2 border-b-black-500 border-b-solid pb-2'>
               <input type="text" name="name" id="name" required  value={name} onChange={(e) => setName(e.targetvalue)} placeholder='Name'/>
            </div>
            <div className='lg:flex md:flex gap-4'>
           <div className='border-b-2 border-b-black-500 border-b-solid w-full pb-2'>
            <input type="number" name="phone" id="phone" required  value={phone} onChange={(e) => setPhone(e.targetvalue)} placeholder='Phone'/>
            </div>
             <div className='border-b-2 border-b-black-500 border-b-solid w-full pb-2'>
            <input type="email" name="email" id="email" required  value={email} onChange={(e) => setEmail(e.targetvalue)} placeholder='Email' />
            </div>
            </div>
              <div className='border-2 border-black-500 border-solid pb-2'>
    <textarea name="message" id="message" required  value={message} onChange={(e) => setMessage(e.targetvalue)} placeholder='message'  className='p-3 w-full min-h-[120px] resize-y'></textarea>
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

