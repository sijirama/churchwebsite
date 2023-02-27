import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function DotGroup({selectedPage , setSelectedPage}) {

    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`

    const hovereffect = `hover:bg-yellow transition duration-500`

  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
      
        <AnchorLink
            className={`${selectedPage === "home" ? selectedStyles : `bg-darkgreen ${hovereffect}` } w-3 h-3 rounded-full`}
            href = "#home"
            onClick = {() => setSelectedPage("home")}
        />

        <AnchorLink
            className={`${selectedPage === "events" ? selectedStyles : `bg-darkgreen ${hovereffect}` } w-3 h-3 rounded-full`}
            href = "#events"
            onClick = {() => setSelectedPage("events")}
        />

        <AnchorLink
            className={`${selectedPage === "about" ? selectedStyles : `bg-darkgreen ${hovereffect}`} w-3 h-3 rounded-full`}
            href = "#about"
            onClick = {() => setSelectedPage("about")}
        />

        <AnchorLink
            className={`${selectedPage === "gallery" ? selectedStyles : `bg-darkgreen ${hovereffect}` } w-3 h-3 rounded-full`}
            href = "#gallery"
            onClick = {() => setSelectedPage("gallery")}
        />

        <AnchorLink
            className={`${selectedPage === "contact" ? selectedStyles : `bg-darkgreen ${hovereffect}` } w-3 h-3 rounded-full`}
            href = "#contact"
            onClick = {() => setSelectedPage("contact")}
        />

    </div>
  )
}

export default DotGroup
