import {useState} from 'react'
import Navbar from './components/Navbar.jsx'
import  useMediaQuery  from './hooks/useMediaQuery.jsx'

function App() {
  const [selectedPage , setSelectedPage] = useState("home")
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <div className="app bg-deepblue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
