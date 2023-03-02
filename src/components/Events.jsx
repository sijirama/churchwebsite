import React from 'react'
import {motion} from "framer-motion"
import useMediaQuery from '../hooks/useMediaQuery.jsx'

function Events() {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")




  return (
      <section id="events" className='pt-10 pb-24'>  
        <div className='md:flex md:justify-between md:gap-16 mt-32'>
        
        
        <motion.div
            className = "w-1/3"
            initial = "hidden"
            whileInView="visible"
            viewport={{once:true , amount:0.5}}
            transition = {{ duration:0.8 }}
            variants = {{
                hidden : {opacity:0, x:-50},
                visible: {opacity:1 , x: 0}
            }} 
        >
            <p className = "text-2xl md:text-3xl font-robotoSlab z-10 text-center md:text-start ">
                Meet Pastor
            </p>
        

        </motion.div>


        </div> 
      </section>
  )
}

export default Events
