import React from 'react'
import {motion} from "framer-motion"
import useMediaQuery from '../hooks/useMediaQuery.jsx'

function Events() {

    const bordertosee = "border-solid border-4 md:border-8"
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
      <section id="events" className='pt-10 pb-24 h-full '>  
        <div className='md:flex md:flex-row-reverse md:justify-between md:gap-16 '>



        {/*NOTE: TEXT*/}
        <motion.div
            className = "md:w-1/2 flex text-center md:text-left flex-col justify-center"
            initial = "hidden"
            whileInView="visible"
            viewport={{once:true , amount:0.5}}
            transition = {{ duration:0.8 }}
            variants = {{
                hidden : {opacity:0, x:-50},
                visible: {opacity:1 , x: 0}
            }} 
        >
            <p className = "text-2xl md:text-3xl font-robotoSlab z-10 text-center md:text-start mt-16 md:mt-14">
                Meet Pastor
            </p>
        

            <p className = "mt-6 mb-7 md:">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. 
            </p>
        </motion.div>



        {/*NOTE:IMAGE*/}

            <div className='mt-16 md:mt-0'>
                {isAboveMediumScreens ? (
                    <div className = {`md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-13 ${bordertosee}`}>
                    <img className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[650px]" 
                             alt='Landing Image' src='/src/assets/churchlandingimg.png' />
                    </div>
                ):(
                    <div className = {`md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-13 ${bordertosee}`}>
                        <img src="/src/assets/churchlandingimg.png" alt="pastors picture" />
                    </div>
                )}
            </div>

        </div> 
      </section>
  )
}

export default Events
