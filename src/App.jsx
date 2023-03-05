import {useEffect, useState} from 'react'
import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx'
import Pastor from './components/Pastor.jsx'
import About from './components/About.jsx'
import DotGroup from './components/DotGroup.jsx'
import  useMediaQuery  from './hooks/useMediaQuery.jsx'

function App() {
    const [selectedPage , setSelectedPage] = useState("home")
    const [isTopOfPage , setIsTopOfPage] = useState(true)
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0 ) setIsTopOfPage(true)
            if (window.scrollY !== 0 ) setIsTopOfPage(false)
        }
        window.addEventListener("scroll" , handleScroll)
        return () => window.addEventListener('scroll' , handleScroll)
    } , [])

    useEffect(() => {
        setSelectedPage("home")
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [])

  return (
    <div className="app bg-deepblue">

      <Navbar isTopOfPage={isTopOfPage}  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && ( <DotGroup selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} /> )}
        <Landing setSelectedPage = {setSelectedPage} />
      </div>

      <div className='w-full bg-deepblue h-full'>
        <div className='w-5/6 mx-auto md:h-full '>
            <Pastor />
        </div>
      </div>

      <div className='w-full bg-deepblue'>
        <div className='w-5/6 mx-auto md:h-full '>
            <About/>
        </div>
      </div>

    </div>
  )
}

export default App
