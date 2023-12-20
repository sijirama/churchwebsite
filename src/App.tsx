import About from './components/About'
import Footer from './components/Footer'
import Give from './components/Give'
import Hero from './components/Hero'
import Location from './components/Location'
import { MiniNavbar } from './components/MiniNavbar'
import Navbar from './components/Navbar'
import Pastor from './components/Pastor'
import Prompt from './components/Prompt'
import Services from './components/Services'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import Lenis from '@studio-freight/lenis'
import { useState, useEffect } from 'react'
//import { Loader } from './components/Loader'

export const maintimline = gsap.timeline({})

function App() {
    //handle asset laoding
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const handleLoad = () => {
            // All assets have loaded, update the loading state
            setIsLoading(false)
            //setIsLoading(true)
        }

        // Attach the event listener
        window.addEventListener('load', handleLoad)

        // Cleanup the event listener to avoid memory leaks
        return () => {
            window.removeEventListener('load', handleLoad)
        }
    }, [])

    // register TextPlugin
    gsap.registerPlugin(TextPlugin)

    // lenis smooth scrolling config
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    if (isLoading) {
        //return <Loader />
        console.log(isLoading)
    }

    return (
        <main>
            <Navbar />
            <MiniNavbar />
            <Hero />
            <About />
            <Prompt />
            <Services />
            <Pastor />
            <Give />
            <div id="locate">
                <Location />
            </div>
            <Footer />
        </main>
    )
}

export default App
