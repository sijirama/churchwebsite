import Image from '/church.jpg'

export default function Pastor() {
    return (
        <section
            id="about"
            className="bg-[#483C32] w-full px-20 lg:px-36 py-16 md:py-24 lg:py-28 grid lg:grid-cols-2 gap-8 md:gap-4"
        >
            <div className="flex items-center justify-center flex-col order-last">
                <p className="text-[#F5F5DC] text-4xl md:text-6xl lg:text-7xl font-extrabold font-rubik -tracking-wider">
                    Meet Our Pastor.
                </p>
                <p className="text-[#F5F5DC] text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi
                    Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
                    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
                    reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident
                    adipisicing id nulla nisi laboris ex in.
                </p>
            </div>
            <div className="flex items-center justify-center border-red-900 h-56 md:h-64 lg:h-80">
                <div
                    style={{ backgroundImage: `url(${Image})` }}
                    className="w-full lg:w-5/6 h-full bg-cover bg-no-repeat bg-center rounded-lg shadow-2xl"
                ></div>
            </div>
        </section>
    )
}
