import { Modal } from 'rsuite'
import React from 'react'

import { RiHandHeartLine } from 'react-icons/ri'
export default function Give() {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <section
            id="give"
            className="py-14 md:py-16 lg:py-20 px-14 flex flex-col gap-1 md:gap-3 items-center justify-center "
        >
            <div>
                <RiHandHeartLine size={80} className="text-gray-600" />
            </div>
            <div className="max-w-xl font-extrabold font-rubik text-center text-3xl md:text-4xl lg:text-5xl text-gray-600">
                "Give, and it will be given to you. A good measure, pressed down, shaken together, and running over will
                be poured into your lap."
            </div>
            <p className="text-gray-600 font-manrope text-sm md:text-base lg:text-lg my-2">Luke 6:38</p>
            <button
                onClick={handleOpen}
                className="px-5 py-2 text-gray-600 border border-b-4 border-r-4 border-gray-600  shadow-lg active:shadow-sm active:border-b-2 active:border-r-2 tracking-widest font-bold"
            >
                GIVE NOW
            </button>

            <Modal open={open} onClose={handleClose} className="" backdrop={true}>
                <Modal.Header>
                    <Modal.Title className="font-manrope font-bold">Thank You</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="font-manrope font-semibold">
                        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
                        cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
                        cillum sint consectetur cupidatat.
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={handleClose}
                        className="px-5 py-2 text-gray-600 border border-b-4 border-r-4 border-gray-600  shadow-lg active:shadow-sm active:border-b-2 active:border-r-2 tracking-widest font-bold"
                    >
                        Thank you!
                    </button>
                </Modal.Footer>
            </Modal>
        </section>
    )
}
