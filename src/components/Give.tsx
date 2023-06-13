import Picture from '/sunset.jpg'

export default function Give() {
    return (
        <section
            style={{ backgroundImage: `url(${Picture})` }}
            className="py-14 md:py-16 lg:py-20 px-14 flex flex-col gap-1 md:gap-3 items-center justify-center text-white bg-cover bg-top bg-fixed"
        >
            <p className="font-bold font-rubik text-lg md:text-xl lg:text-2xl">JOIN US FOR SERVICE</p>
            <p className="font-semibold font-rubik">SUNDAYS - 8:00AM & 10:30AM</p>
            <div className="max-w-xl text-center text-sm lg:text-sm">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </div>
        </section>
    )
}
