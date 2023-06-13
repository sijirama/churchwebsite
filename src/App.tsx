import About from './components/About'
import Hero from './components/Hero'
import { MiniNavbar } from './components/MiniNavbar'
import Navbar from './components/Navbar'

function App() {
    return (
        <main>
            <Navbar />
            <MiniNavbar />
            <Hero />
            <About />
        </main>
    )
}

export default App
