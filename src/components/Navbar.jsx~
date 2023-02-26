import {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'

const Link = ({page , selectedPage , setSelectedPage}) => {
    const lowercasePage = page.toLowerCase()

    return(
        <AnchorLink
            className={`${selectedPage === lowercasePage ? "text-yellow": "" } 
              hover:text-yellow transition duration-500  `}
        href = {`#${lowercasePage}`}
        onClick = {() => setSelectedPage(lowercasePage)}
        >
        {page}
        </AnchorLink>
    )
}

function Navbar({selectedPage , setSelectedPage}) {
    const [isMenuToggled , setIsMenuToggled] = useState(false)
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)")

  return (
      <nav className={`z-40 w-full fixed top-0 py-6`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
            <h4 className='font-sans text-3xl font-bold m-0 '>FourSquare</h4> 
            
            {isAboveSmallScreens ? 
                (
                    <div className='flex justify-between gap-16 font-sans text-sm font-semibold'>
                        <Link page = "Home" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} />    
                        <Link page = "Events" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} />    
                        <Link page = "About" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} />    
                        <Link page = "Gallery" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} />    
                        <Link page = "Contact" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} />    
                    </div>
                )
                :
                (
                    <button
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        className = ""
                    >
                        <img alt='menu'  src="../../public/menu.svg" />
                    </button>
                )}
            
            {/* NOTE: Menu pop up*/}
            {!isAboveSmallScreens && isMenuToggled && (
                <div className='fixed right-0 bottom-0 h-full bg-black w-[300px]'>
                    {/* NOTE: close icon */}
                    <div className = "flex justify-end p-10">
                    <button
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        className = ""
                    >
                        <img alt='menu'  src="../../public/menu.svg" />
                    </button>
                    </div>
                    
                </div>
            )}

        </div>
      </nav>
  )
}

export default Navbar
