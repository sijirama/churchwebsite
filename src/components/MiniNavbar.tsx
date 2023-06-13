import { Link } from 'react-router-dom'

export const MiniNavbar = () => {
    return (
        <nav className="text-xs md:text-sm lg:text-base font-manrope md:font-semibold lg:font-semibold flex items-center justify-center py-3 gap-7 text-black">
            <Link to="/">About</Link>
            <Link to="/">Events</Link>
            <Link to="/">Find us</Link>
        </nav>
    )
}
