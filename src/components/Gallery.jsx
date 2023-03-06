import React,{useState} from 'react'
import slides from '../utils/slider'

function Gallery() {
    
  return (
      <section id='gallery' className='pt-16 pb-20'>
        <div className='max-w-[1400px] max-h-96 w-full m-auto py-16 px-4 relative'>
            <div style={{backgroundImage: `url(${slides[0].dir})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 border-red'></div>
        </div>
      </section>
  )
}

export default Gallery
