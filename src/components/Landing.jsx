import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import  {motion} from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Landing({setSelectedPage}) {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const bordertosee = "border-solid border-8"
    //const bordertosee = ""


  return (
    <section id="home" className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>
    
      {/* NOTE: image div, planning on adding more complex styles where isAboveMediumScreens is true */}
      <div className = {`md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-13 ${bordertosee}`}>
        {isAboveMediumScreens ? (
            <div className=''>
                {/* WARN: you removed the md:max-w-[600px]*/}
                <img className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[650px]" 
                     alt='Landing Image' src='/src/assets/churchlandingimg.png' />
            </div>
        ):(
            <div>
                <img className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" 
                     alt='Landing Image' src='/src/assets/churchlandingimg.png' />
            </div>
        )}
      </div>

      {/* NOTE: main section */}
      <div className = "z-30 basis-2/5 mt-12 md:mt-32">
        {/*NOTE: this is the HEADER*/}
        
        <motion.div
            initial = "hidden"
            whileInView="visible"
            viewport={{once:true , amount:0.5}}
            transition = {{ transition:0.5 }}
            variants = {{
                hidden : {opacity:0, x:-50},
                visible: {opacity:1 , x: 0}
            }} 
        >

            <p className = "text-6xl">
                Welcome
            </p>
            
        </motion.div>
        
      </div>

    </section>
  )
}

export default Landing
