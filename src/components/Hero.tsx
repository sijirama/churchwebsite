import Church from '/church.jpg'

export default function Hero() {
    return (
        <section
            style={{ backgroundImage: `url(${Church})` }}
            className="w-full text-white py-32 md:py-36 lg:py-40 flex flex-col items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat"
        >
            <p className="font-normal md:font-semibold font-manrope text-lg md:text-xl text-center">
                Welcome to{' '}
                <span className="block my-1 font-extrabold text-4xl md:text-5xl lg:text-6xl lg:max-w-3xl -tracking-wider">
                    {' '}
                    The Foursquare Gospel Church
                </span>
            </p>
            <p className="md:my-2 lg:my-3 font-manrope text-sm md:text-base lg:text-xl">
                1004, Victoria Island, Lagos.
            </p>
            <div className="flex gap-1 md:gap-2 lg:gap-1 items-center justify-center my-5 md:my-4">
                <div className="w-1/12">
                    <img src="/mxlr.png" className=" w-5/6 " />
                </div>
                <p className="font-semibold md:font-light font-manrope text-red-900 text-base lg:text-lg">
                    Join us on <span className="font-semibold underline">Mixlr</span>
                </p>
            </div>
        </section>
    )
}
