import useScreenSize from '../hooks/useScreenSize'

export default function Navbar() {
    const screen = useScreenSize()
    return (
        <nav className=" w-full p-4 lg:p-3 flex justify-center items-center bg-mylightgray ">
            <div className="w-1/3 md:w-1/6 lg:w-1/12">
                {screen === 'small' ? <img src="/fstitleblack.png" /> : <img src="fstitlestackedblack.png" />}
            </div>
        </nav>
    )
}
