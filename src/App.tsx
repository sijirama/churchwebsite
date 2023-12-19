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
export const maintimline = gsap.timeline({})

function App() {
    // register TextPlugin
    gsap.registerPlugin(TextPlugin)

    // lenis smooth scrolling config
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

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
