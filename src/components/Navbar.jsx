import {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'

function Navbar({selectedPage , setSelectedPage}) {
    const [isMenuToggled , setIsMenuToggled] = useState(false)
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)")

  return (
      <nav className={`z-40 w-full fixed top-0 py-6`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
            <h4 className='font-sans text-3xl font-bold m-0 '>FourSquare</h4> 
            
            {isAboveSmallScreens ? 
                (
                    <div className='flex justify-center'>
                        
                    </div>
                )
                :
                (
                    <div>
                        
                    </div>
                )}

        </div>
      </nav>
  )
}

export default Navbar
