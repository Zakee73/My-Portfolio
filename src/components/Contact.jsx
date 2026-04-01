
import React from 'react'

const Contact = ({darkMode}) => {
  return (
   <section 
   id='contact'
   style={{backgroundColor : darkMode ? "#111827" : "#f9fafb"}}
   className='py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden '
   >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 '>
        <div className='text-center mb-8 sm:mb-10 md:mb-12' data-aos = 'fade-up'>
           <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3'
           style={{color:darkMode ? "white" : "#1f2937"}}
           >Get In Touch</h2>

           <form action="
           " style={{background:darkMode
            ? "linear gradient(to right , #1f2937 , #111827)"
            : "linear gradient(to right , #ffffff , #f9fafb)",
            borderColor : darkMode ? '#374151' :  '#e5e7eb'
           }} className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2' data-aos = 'fade-left'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 selection:gap-4 mb-3 sm:mb-4'>
             <input 
             type="text"
             placeholder='Your Name'
             className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text sm:text-base dark:bg-gray-700 transition-all border ' required
             />

              <input 
             type="email"
             placeholder=' Email Address'
             className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text sm:text-base dark:bg-gray-700 transition-all border  ' required
             />

              <textarea
              rows={4}
              placeholder='Your Message'
              className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text sm:text-base dark:bg-gray-700 transition-all border  ' required
             />
             <button className='bg-orange-400 rounded-2xl h-10'>Send Message</button>
            </div>
           </form>
        </div>
         <div className=' text-lg sm:text-xl text-center border-t pt-10 border-gray-600'>
            Made by Mohd Zakee
         </div>
      </div>



   </section>
  )
}

export default Contact
