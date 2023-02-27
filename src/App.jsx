import {useEffect, useState} from 'react'
import Navbar from './components/Navbar.jsx'
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

  return (
    <div className="app bg-deepblue">
      <Navbar isTopOfPage={isTopOfPage}  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && (
            <DotGroup selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} />
        )}
      </div>
    </div>


  )
}

export default App
