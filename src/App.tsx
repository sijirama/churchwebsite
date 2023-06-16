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

function App() {
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
