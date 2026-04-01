
import { div } from 'framer-motion/m'
import React from 'react'
import { assets } from '../assets/assets'
import { ExternalLinkIcon } from 'lucide-react'


const Projects = ({darkMode}) => {

    const projects = [
        {
            id:1,
            title: 'Real Estate Website',
            desc: 'A full featured real estate platform showcasing dynamic property listings with functionality',
            image: assets.Realesate,
            giturl: "https://github.com/Zakee73/Real-Estate-Project.git",
            demourl : " https://real-estate-self-chi.vercel.app/",
            tags:['React' , 'Tailwind CSS' , 'Framer-motion']
        },
            {
            id:2,
            title: 'Weather App',
            desc: 'A real time weather application that delivers current conditions forecast using third-party API',
            image: assets.Weather,
            giturl : " https://github.com/Zakee73/Weather_App.git",
            demourl : " https://weatherapp-eight-tawny.vercel.app/",
            tags:['React' , 'Tailwind CSS' , 'Framer-motion']
        },

            {
            id:3,
            title: 'Simon-Says-Game Website',
            desc: 'An interactive memory challenge that test cognitive recall through an escalating sequence of lights',
            image: assets.SimonSays,
            giturl : " ",
            demourl : " ",
            tags:['React' , 'Tailwind CSS' , 'Framer-motion']
        },
    ]
  return (
    <section
    id='projects'
    style={{backgroundColor: darkMode ? '#111827' : ' #f9fafb'}}
    className='relative'
    >
<div className='container mx-auto px-4 '>
    <div className='text-center mb-10 ' data-aos = 'fade-up'>
<h2 style={{color: darkMode ? "white " : "#1f2937"}}
className='text-3xl sm:text-4xl font-bold mb-3'>My 
<span style={{background : `linear-gradient(to right, #f97316 , #f59e0b)`,
    WebkitBackgroundClip : 'text',
    color:'transparent'
}} className='ml-3'>Projects</span>
</h2> 
<p className='max-w-xl mx-auto' style={{color: darkMode? "#d1d5db" :'#6b7280'}}>A Showcase of my Skills</p>
    </div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12  '>
    {projects.map((project,index)=>(
        <div key={project.id}
        style={{
              background: darkMode ? 'linear-gradient(to bottom right, #1f2937 , #111827)'
              : 'linear-gradient(to bottom right, #ffffff,#f3f4f6)',
              borderColor : darkMode ? '#374151' : '#e5e7eb'

             }}
             className='group rounded-xl border duration hover:border-orange-500/50 transition-all'
             data-aos = 'fade-up'
             data-aos-delay = {index*100}
             >
            <div className='h-36 overflow-hidden rounded-t-xl '>
                <img src={project.image} alt={project.title}
                className='w-full  h-48  group-hover:scale-110 transition-transform duration-500' />

            </div>
            <div className='p-4'>
                 <h3 className='text-lg font-bold mb-2 '
                 style={{ color:darkMode? "white" : "#6b7280"}}>
                {project.title}
                 </h3>
                 <p className='text-sm mb-3 dark:text-white text-black ' >{project.desc}</p>
                   </div>
                   <div className='flex mb-4 gap-8 pl-10'
                   data-aos = 'fade-up'
                   data-aos-delay = '100'>
                    <a href={project.giturl}>
            <div className='text-center  h-10 w-fit m-auto rounded-xl bg-gray-700 px-10 justify-center items-center flex ' ><button className='flex gap-2'><img src={assets.github} className='h-5 w-5 ' /> Code</button> </div> </a>
            <a href={project.demourl}>
                <div className='text-center  h-10 w-fit m-auto rounded-xl bg-orange-400 px-10 justify-center items-center flex '><button className='flex gap-2'><span className=''><ExternalLinkIcon/></span>
               Demo</button> </div> </a>
           
            </div>
         
        </div>
        
    ))}

  </div>
</div>
    </section>
  )
}

export default Projects
