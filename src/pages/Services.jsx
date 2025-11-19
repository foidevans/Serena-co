import React from 'react'

const Services = () => {
  const designCards = [
    {
    id:1, name:"Design Project", description:"Full design package with plans, moodboards, and drawing - crafted for your lifestyle and spatial identity"
  }, {
    id:2, name:"Sourcing", description:"Curating the essential materials, finishes, and foundational concepts that define your project's unique character."
  }, {
    id: 3, name:"Styling", description:"Shaping the aesthetic narrative through deliberate choices in color, texture, and form to create a cohesive visual language."
  }, {
    id:4, name:"Supervison", description:"Meticulous oversight and project management to ensure flawless execution from initial concept to final installation."
  }
]
  return (
    <>
        <section data-scroll-section className="cover-section relative min-h-screen bg-white">
      
      <div 
        data-scroll 
        data-scroll-sticky 
      
        className="cover-slide-fast min-h-screen bg-pink-500 z-50 flex flex-col"
      >
         <div className="px-8 lg:px-20 pt-15">
          <h2 className="text-sm tracking-[0.2em] text-gray-500 uppercase">
            ABOUT US
          </h2>
        </div>

        <div className='flex items-end justify-between gap-12 flex-1  max-w-6xl pb-20 px-8 lg:px-20'>
          
          <div className="flex flex-col gap-6 flex-1 max-w-[50%]">
            <h1 className="text-4xl md:text-6xl font-serif text-[#2b1d12] leading-tight">
              DESIGN THAT RESONATES
            </h1>
            
            <p className="text-gray-600 text-base leading-relaxed">
              At Serena & co, we believe that interior design is not just about how a
              space looks – it's about how it makes you feel. We approach each
              project as a layered composition of light, form, and purpose, where
              clarity meets quiet beauty.
            </p>

            <button className="mt-4 w-fit border-b border-[#2b1d12] text-[#2b1d12] font-medium tracking-wide hover:text-[#a67b5b] hover:border-[#a67b5b] transition-all duration-300">
              LEARN MORE →
            </button>
          </div>
   
      </div>
      </div>
           </section>
    </>
  )
}

export default Services
