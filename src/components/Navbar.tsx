import useScreenSize from '../hooks/useScreenSize'

export default function Navbar() {
    const screen = useScreenSize()
    return (
        <nav className=" w-full p-4 bg-transparent flex justify-center items-center">
            <div className="w-1/4 md:w-1/6 lg:w-1/12">
                {screen === 'small' ? <img src="/fstitlestackedblack.png" /> : <img src="fstitlestackedblack.png" />}
            </div>
        </nav>
    )
}
