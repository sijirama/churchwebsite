import AnchorLink from 'react-anchor-link-smooth-scroll'

export const MiniNavbar = () => {
    return (
        <nav className="text-xs md:text-sm lg:text-base font-manrope md:font-semibold lg:font-semibold flex items-center justify-center py-3 gap-7 text-black bg-mylightgray">
            <AnchorLink
                offset="50"
                href="#about"
                className="focus:text-black hover:text-black active:no-underline focus:no-underline hover:no-underline"
            >
                About
            </AnchorLink>
            <AnchorLink
                href="#service"
                className="focus:text-black hover:text-black active:no-underline focus:no-underline hover:no-underline"
            >
                Join Us
            </AnchorLink>
            <AnchorLink
                href="#locate"
                className="focus:text-black hover:text-black active:no-underline focus:no-underline hover:no-underline"
            >
                Find Us
            </AnchorLink>
            <AnchorLink
                href="#give"
                className="focus:text-black hover:text-black active:no-underline focus:no-underline hover:no-underline"
            >
                Give
            </AnchorLink>
        </nav>
    )
}
