import Image from '/church.jpg'

export default function About() {
    return (
        <section
            id="about"
            className="bg-[#F5F5DC] w-full px-12 lg:px-36 py-16 md:py-24 lg:py-28 grid lg:grid-cols-2 gap-8 md:gap-4"
        >
            <div className="flex items-center justify-start flex-col text-center md:text-left">
                <p className="text-[#483C32] text-4xl md:text-6xl lg:text-7xl font-extrabold font-kanit -tracking-wider">
                    We Are Glad You're Here.
                </p>
                <p className="text-[#483C32] text-xs lg:text-sm">
                    Greetings and a warm welcome to The Foursquare Gospel Church, an inclusive and vibrant community of
                    faith. We are thrilled to have you join us in the digital space where we gather to worship, connect,
                    and grow together. Whether you are a longtime member or a newcomer, you are a cherished part of our
                    church family. At The Foursquare Gospel Church, we embrace the richness of diversity and unity in
                    Christ, creating an environment where everyone feels valued and accepted. Our mission is to journey
                    together in faith, offering a range of spiritual experiences, engaging worship services, and
                    opportunities for fellowship. As you explore our virtual home, we encourage you to participate in
                    the various activities that resonate with your spiritual journey. Join us in vibrant worship,
                    connect with fellow believers, and discover the many ways you can actively contribute to our shared
                    mission. Your presence adds depth to our community, and we look forward to building meaningful
                    relationships with you. Thank you for being a part of The Foursquare Gospel Church, where all are
                    welcome, and we journey together in faith, hope, and the love of Christ.
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
