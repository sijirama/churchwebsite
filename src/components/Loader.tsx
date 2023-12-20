import { useRef } from 'react'

export function Loader() {
    const element = useRef<HTMLDivElement>(null)
    return (
        <div id="loader" className="min-w-full min-h-screen flex items-center justify-center">
            <div className="w-1/3 md:w-1/6 lg:w-1/12" ref={element}>
                {<img id="loaderitem" src="fstitlestackedblack.png" />}
            </div>
        </div>
    )
}
