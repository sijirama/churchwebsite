import AnchorLink from 'react-anchor-link-smooth-scroll'
import { maintimline as tl } from '../App'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export const MiniNavbar = () => {
    const nav = useRef<any>(null)
    useGSAP(
        () => {
            const cont = nav.current
            tl.from(
                cont.querySelectorAll('a'),
                {
                    //y: -100,
                    opacity: 0,
                    duration: 1.5
                },
                '>'
            )
        },
        { scope: nav }
    )

    return (
        <nav
            ref={nav}
            className="text-xs md:text-sm lg:text-base font-manrope md:font-semibold lg:font-semibold flex items-center justify-center py-3 gap-7 text-black bg-mylightgray"
        >
            <AnchorLink
                offset="50"
                href="#about"
                className="focus:text-black hover:text-black active:no-underline focus:no-underline hover:no-underline link"
            >
                About
            </AnchorLink>
            <AnchorLink
                href="#service"
                className="focus:text-black hover:text-black active:no-underline focus:no-underline hover:no-underline link"
            >
                Join Us
            </AnchorLink>
            <AnchorLink
                href="#locate"
                className="focus:text-black hover:text-black active:no-underline focus:no-underline hover:no-underline link"
            >
                Find Us
            </AnchorLink>
            <AnchorLink
                href="#give"
                className="focus:text-black hover:text-black active:no-underline focus:no-underline hover:no-underline link"
            >
                Give
            </AnchorLink>
        </nav>
    )
}
