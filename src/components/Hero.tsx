import { useRef } from 'react'
import Church from '/church.jpg'
import { useGSAP } from '@gsap/react'
//import { maintimline } from '../App'
import { BsArrowDown } from 'react-icons/bs'

export default function Hero() {
    const word = useRef(null)
    useGSAP()
    return (
        <section
            id="hero"
            style={{ backgroundImage: `url(${Church})` }}
            className="w-full text-white py-32 md:py-36 lg:py-40 3xl:py-56 flex flex-col items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat"
        >
            <p className="font-normal md:font-semibold font-manrope text-lg md:text-xl text-center">
                Welcome to{' '}
                <span
                    ref={word}
                    className="block my-1 font-extrabold text-4xl md:text-5xl lg:text-7xl lg:max-w-3xl -tracking-wider"
                >
                    {' '}
                    The Foursquare Gospel Church
                </span>
            </p>
            <p className="md:my-2 lg:my-3 font-manrope font-bold text-lg md:text-xl lg:text-2xl">
                1004, Victoria Island, Lagos.
            </p>
            <div className="flex gap-1 md:gap-0 items-center justify-center my-5 md:my-4 bg-black">
                <div className="w-1/12">
                    <img src="/mxlr.png" className=" w-2/3 " />
                </div>
                <p className="font-semibold md:font-semibold font-manrope text-red-900 text-base lg:text-lg">
                    Join us on <span className="font-semibold underline">Mixlr</span>
                </p>
            </div>
            <div className="flex items-center flex-col gap-2 mt-4">
                <div id="scroll" className="p-1 rounded-full border-white border-2">
                    <BsArrowDown className="text-xl font-extrabold" />
                </div>
            </div>
        </section>
    )
}
