import About from './components/About'
import Hero from './components/Hero'
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
            <About />
        </main>
    )
}

export default App
