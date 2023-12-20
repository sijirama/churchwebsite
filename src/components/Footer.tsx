//import { BsGithub, SeenBsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs'
import { BsArrowRight, BsArrowDown } from 'react-icons/bs'
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Footer() {
    //const ICON_SIZE = 30
    return (
        <main className="w-full bg-gray-50 z-10 lg:h-72 md:h-96 h-[46rem] flex flex-col">
            <section className="grid grid-cols-3 md:grid-cols-4 gap-1 h-1/3 md:h-1/2 px-5 lg:px-0">
                <div className="lg:flex items-center justify-start lg:justify-center hidden">
                    <div className="flex gap-2 items-center">
                        <p className="text-xl/5 font-normal -tracking-wider text-black">
                            Seen<span className="block">Enough?</span>{' '}
                        </p>
                        <BsArrowRight id="seenenough" size={25} />
                    </div>
                </div>
                <div className="col-span-2 font-manrope text-6xl md:text-7xl lg:text-9xl -tracking-widest font-extrabold text-black flex items-center justify-start">
                    Contact Us!
                </div>
                <div className="flex items-center justify-center lg:justify-start  ">
                    <div
                        id="contactbutton"
                        className="p-5 md:p-7 rounded-full bg-yellow-400 flex items-center justify-center"
                    >
                        <BsArrowDown size={25} />
                    </div>
                </div>
            </section>
            <section className="h-2/3 lg:h-1/2 bg-black text-white grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 px-5 md:px-3 py-1">
                <div className="order-last md:order-first flex-wrap flex items-center justify-start">
                    <p className="font-manrope text-5xl lg:text-4xl -tracking-widest font-bold ">
                        You are welcome to come worship with us!
                    </p>
                </div>
                <div className="md:hidden lg:flex"></div>
                <div className="items-center justify-start flex ">
                    <div className="h-full flex items-center justify-center flex-col gap-2 text-start lg:text-center">
                        <p className="font-semibold w-full">Lagos</p>
                        <div className=" lg:w-2/3 text-base/4">
                            <p>+234-24223231312</p>
                            <p className="text-base/5 -tracking-wide">
                                Foursquare Gospel Church, 1004 Estate, Victoria Island, Lagos, Nigeria
                            </p>
                        </div>
                        <p className="w-full font-semibold">foursquare@foursquare.com</p>
                    </div>
                </div>
                <div className="order-first lg:order-last flex items-center justify-start lg:justify-center">
                    <div className="flex flex-col gap-1">
                        <p className="font-manrope text-sm/3 font-light">Want to find us on platforms?</p>
                        <p className="font-manrope text-lg/3 font-semibold -tracking-wider">Follow us.</p>
                        <div className="flex gap-1 items-center justify-between mt-5 text-2xl">
                            <FaLinkedin className="social" />
                            <FaInstagram className="social" />
                            <FaTwitter className="social" />
                            <FaFacebook className="social" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
