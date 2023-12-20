import Image from '/church.jpg'

export default function Pastor() {
    return (
        <section
            id="about"
            className="bg-[#483C32] w-full px-12 lg:px-36 py-16 md:py-24 lg:py-28 grid lg:grid-cols-2 gap-8 md:gap-4"
        >
            <div className="flex items-center justify-center flex-col order-last text-center md:text-left ">
                <p className="text-[#F5F5DC] text-4xl md:text-6xl lg:text-7xl font-extrabold font-kanit -tracking-wider w-full">
                    Meet Our Pastor.
                </p>
                <p className="text-[#F5F5DC] text-xs lg:text-sm">
                    Step into the presence of Pastor Lawal, a remarkable spiritual leader handpicked by the divine to
                    shepherd The Foursquare Gospel Church. Pastor Lawal embodies a profound sense of devotion and
                    purpose as he guides our congregation on a collective journey of faith. Rooted in a deep connection
                    to God's calling, he stands as a beacon of wisdom, compassion, and unwavering commitment. Pastor
                    Lawal's leadership is characterized by a genuine love for each member of our church family,
                    fostering an environment where everyone feels seen, valued, and supported. His vision extends beyond
                    the pulpit, encompassing a desire to see individuals flourish in their spiritual lives and personal
                    well-being. Join us in the transformative experience of Pastor Lawal's teachings, where his
                    insightful guidance encourages us to navigate life's challenges with grace and fortitude. As we
                    gather under his leadership, we find inspiration in the profound connection he shares with the
                    divine, making The Foursquare Gospel Church a place where faith thrives and community flourishes.
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
