import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import  {motion} from 'framer-motion'
import SocialMediaIcons from "./SocialMediaIcons.jsx"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Landing({setSelectedPage}) {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const bordertosee = "border-solid border-4 md:border-8"
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
      <div className ={`z-30 basis-2/5 mt-12 md:mt-32`}>
        {/*NOTE: this is the HEADER*/}
        
        <motion.div
            initial = "hidden"
            whileInView="visible"
            viewport={{once:true , amount:0.5}}
            transition = {{ duration:0.8 }}
            variants = {{
                hidden : {opacity:0, x:-50},
                visible: {opacity:1 , x: 0}
            }} 
        >

            <p className = "text-2xl md:text-3xl font-robotoSlab z-10 text-center md:text-start">
                Welcome to
            </p>
            

            <p className = "text-5xl font-black font-robotoSlab z-10 text-center md:text-start">
                Foursquare Chapel
            </p>


            <p className = "text-sm font-extralight font-robotoSlab z-10 text-center md:text-start my-3">
                branch 1004, Victoria island, Lagos. 
            </p>
            
        </motion.div>

        <motion.div
            className = "flex flex-row mt-3 justify-center md:justify-start"
            initial = "hidden"
            whileInView="visible"
            viewport={{once:true , amount:0.5}}
            transition = {{ delay : 1 , duration:0.8 }}
            variants = {{
                hidden : {opacity:0, x:-50},
                visible: {opacity:1 , x: 0}
            }}
        >
            <img alt="logo" className='md:max-h-16 max-h-14 w-auto' src="/src/assets/mixrl.png" />
            
            <button type="">
                <a target="_blank" href='https://www.youtube.com' className='font-robotoSlab text-light'>
                    Join us on Mixrl
                </a>
            </button>

        </motion.div>

        {/*WARN: unused motion div*/}
        <motion.div
            className = "flex flex-row mt-2 justify-center md:justify-start"
            initial = "hidden"
            whileInView="visible"
            viewport={{once:true , amount:0.5}}
            transition = {{ delay : 0.3 , duration:0.8 }}
            variants = {{
                hidden : {opacity:0, x:-50},
                visible: {opacity:1 , x: 0}
            }}
        >
        </motion.div>

      </div>

    </section>
  )
}

export default Landing
