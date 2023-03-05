import React from 'react'
import useMediaQuery from "../hooks/useMediaQuery.jsx"
import {motion} from "framer-motion"

function About() {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")


  return (
      <section id='about' className='pt-20 pb-20'>

      {/*NOTE: Header*/}

        <div className='md:flex md:justify-between md:gap-16 mt-20'>
            <motion.div
                initial = "hidden"
                whileInView="visible"
                viewport={{once : true, amount:0.5}}
                transition = {{duration : 0.5}}
                variants = {{
                    hidden:{opacity:0 , x:-50},
                    visible:{opacity:1 , x:0}
                }}
            >
            
                <p className='font-robotoSlab font-semibold text-4xl mb-3 mt-5'>
                    About Foursquare?
                </p>
                <p className='mt-4 mb-3'>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem.
                </p>
            </motion.div>
        </div>


      {/*NOTE: Services */}
        <div className = "md:flex md:justify-between mt-8 gap-32">

            <motion.div
                initial = "hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition = {{duration : 0.5}}
                variants = {{
                    hidden:{opacity:0 , y:50},
                    visible:{opacity:1 , y:0}
                }}
            >
                <div className = "relative h-32 mt-4">
                    <div className='z-10'>
                        <p className='font-robotoSlab font-semibold text-5xl'>01</p>
                        <p className='font-robotoSlab font-semibold text-3xl'>Sundays</p>
                    </div>
                    <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
                </div>
                <p className='mt-2'>
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
            </motion.div>
            
            <motion.div
                initial = "hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition = {{delay:0.2 , duration : 0.5}}
                variants = {{
                    hidden:{opacity:0 , y:50},
                    visible:{opacity:1 , y:0}
                }}
            >
                <div className = "relative h-32 mt-4">
                    <div className='z-10'>
                        <p className='font-robotoSlab font-semibold text-5xl'>02</p>
                        <p className='font-robotoSlab font-semibold text-3xl'>Wednesdays</p>
                    </div>
                    <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
                </div>
                <p className='mt-2'>
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
            </motion.div>

            <motion.div
                initial = "hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition = {{delay:0.4 ,duration : 0.5}}
                variants = {{
                    hidden:{opacity:0 , y:50},
                    visible:{opacity:1 , y:0}
                }}
                >
                <div className = "relative h-32 mt-4">
                    <div className='z-1'>
                        <p className='font-robotoSlab font-semibold text-5xl'>03</p>
                        <p className='font-robotoSlab font-semibold text-3xl z-14 '>Fridays</p>
                    </div>
                    <div className='w-1/2 md:w-3/4 h-36 bg-black absolute right-0 top-0 z-[-1]'/ >
                </div>
                <p className='mt-2'>
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
            </motion.div>
        </div>
      </section>
  )
}

export default About
