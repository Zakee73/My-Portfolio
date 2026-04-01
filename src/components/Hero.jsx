import React from 'react'
import { assets } from '../assets/assets'
import { a } from 'framer-motion/client';
import AOS from "aos";
import { DownloadIcon,Mail } from 'lucide-react';



const Hero = ({darkMode}) => {
const socialIcons = [
  {icon:assets.Insta,alt:'Instagram', url : "https://instagram.com/choudharyzakee"},
  {icon:assets.github,alt:'Github' , url: "https://github.com/Zakee73"},
  {icon:assets.linkedIn,alt:'LinkedIn', url : "https://www.linkedin.com/in/mohd-zakee-726738347"},
  {icon:assets.Leetcode,alt:'Leetcode' , url : "https://leetcode.com/Mohd_Zakee73" },
  {icon:assets.Fb,alt:'facebook' , url: 'https://www.facebook.com/share/1DW6ZJ3N8K/'},

];

const darkTheme = {
  textPrimary : 'text-white',
  textSecondary : 'text-gray-900',
  buttonSecondary : 'text-white border-2 border-orange-500 hover:bg-orange-500',
  decorativeCircle :'bg-orange-500 opacity-10',
};

const lightTheme = {

  textPrimary : 'text-gray-900',
  textSecondary : 'text-gray-300',
  buttonSecondary : 'text-gray-900 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
  decorativeCircle :'bg-orange-400 opacity-20',
};

const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col pl-20' id='about'>
     <section
     id='home'
     data-aos = 'fade-up'
     data-aos-delat = '250'
     className='body-font z-10'>
      <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14'>
      <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start lg:text-left mb-12 lg:mb-0 '>
        <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full space-x-2'>
        {socialIcons.map((social,index) =>(
          <a 
          href = {social.url}
          target='_blank'
          key={index}
          data-aos-delay = {`${400 + index * 100}`}
          className='transform hover:scale-110 transition-transform  duration-300'
          
          >
            <img src={social.icon}
             alt={social.alt}
             className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? 'brightness-120' : 'filter brightness-100'}`}
             />
          </a>
        ))}
       </div>
       <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme} `}
       data-aos = 'fade-up'
       data-aos-delay = '500'
       >Hi, I'm Mohd Zakee</h1>
       <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme} space-x-2`}
       data-aos = 'fade-up'
       data-aos-delay = '600' > A passionate MERN Stack Developer skilled in building responsive and scalable web applications using MongoDB, Express.js, React, and Node.js. I enjoy solving real-world problems and continuously improving my development skills.</p>
       {/* Buttons */}
       <div className='w-full pt-4 sm:pt-6'>
         <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 '
         data-aos = 'fade-up'
         data-aos-delay = '700'
         >
     <a href={""} download className='w-full sm:w-auto '>
      <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform'>
        <DownloadIcon className='w-4 h-4  sm:h-5 sm:w-5 mr-2'/>
        Download CV
      </button>
     </a>
     <a href="#contact" className='w-full sm:w-auto '>
      <button className={`w-full sm:w-auto inline-flex items-center justify-center text-black ${theme.buttonSecondary} border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}><Mail className='w-4 h-4  sm:h-5 sm:w-5 mr-2'/>Contact Me</button>
     </a>
         </div>
       </div> 
      </div>
      {/* Image Section */}
      <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start lg:text-left mb-12 lg:mb-0'
      
      data-aos = 'data-left'
      data-aos-delay = '400'>
        <div className='relative sm:w-3/4 lg:w-full '>
           <div className='relative overflow-hidden'>
            <img src={assets.Avtar1} alt="" className='h-110 w-95' />
           </div>
        </div>
      </div>
      </div>
     </section>
    </div>
  )
}

export default Hero
