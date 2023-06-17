import Image from '/church.jpg'

export default function About() {
    return (
        <section
            id="about"
            className="bg-[#F5F5DC] w-full px-12 lg:px-36 py-16 md:py-24 lg:py-28 grid lg:grid-cols-2 gap-8 md:gap-4"
        >
            <div className="flex items-center justify-start flex-col text-center md:text-left">
                <p className="text-left">Welcome</p>
                <p className="text-[#483C32] text-4xl md:text-6xl lg:text-7xl font-extrabold font-rubik -tracking-wider">
                    We Are Glad You're Here.
                </p>
                <p className="text-[#483C32] text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi
                    Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
                    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
                    reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident
                    adipisicing id nulla nisi laboris ex in.
                </p>
            </div>
            <div className="flex items-center justify-center border-red-900 h-56 md:h-64 lg:h-auto">
                <div
                    style={{ backgroundImage: `url(${Image})` }}
                    className="w-full lg:w-5/6 h-full bg-cover bg-no-repeat bg-center rounded-lg shadow-2xl"
                ></div>
            </div>
        </section>
    )
}
