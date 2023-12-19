import { useRef } from 'react'
import useScreenSize from '../hooks/useScreenSize'
import { useGSAP } from '@gsap/react'
import { maintimline as tl } from '../App'
export default function Navbar() {
    const screen = useScreenSize()
    const nav = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            tl.from(nav.current, {
                y: -100,
                opacity: 0,
                duration: 1
            })
        },
        { scope: nav }
    )
    return (
        <nav className=" w-full p-4 lg:p-3 flex justify-center items-center bg-mylightgray ">
            <div className="w-1/3 md:w-1/6 lg:w-1/12" ref={nav}>
                {screen === 'small' ? <img src="/fstitleblack.png" /> : <img src="fstitlestackedblack.png" />}
            </div>
        </nav>
    )
}
