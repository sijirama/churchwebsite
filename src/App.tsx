import About from './components/About'
import Footer from './components/Footer'
import Give from './components/Give'
import Hero from './components/Hero'
import Location from './components/Location'
import { MiniNavbar } from './components/MiniNavbar'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
    return (
        <main>
            <Navbar />
            <MiniNavbar />
            <Hero />
            <About />
            <Services />
            <div id="locate">
                <Location />
            </div>
            <Give />
            <Footer />
        </main>
    )
}

export default App
