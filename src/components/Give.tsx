import { RiHandHeartLine } from 'react-icons/ri'
export default function Give() {
    return (
        <section className="py-14 md:py-16 lg:py-20 px-14 flex flex-col gap-1 md:gap-3 items-center justify-center ">
            <div>
                <RiHandHeartLine size={80} className="text-gray-600" />
            </div>
            <div className="max-w-xl font-bold lg:font-extrabold font-manrope text-center text-3xl md:text-4xl lg:text-5xl text-gray-600">
                "Whoever is generous to the poor lends to the lord, and he will repay him for his deed."
            </div>
            <p className="text-gray-600 font-manrope text-sm md:text-base lg:text-lg my-2">Proverbs 19:16</p>
            <button className="px-5 py-2 text-gray-600 border border-b-4 border-r-4 border-gray-600  shadow-lg active:shadow-sm active:border-b-2 active:border-r-2 tracking-widest font-bold">
                DONATE NOW
            </button>
        </section>
    )
}
