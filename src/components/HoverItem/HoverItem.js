import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HoverItem({ src, top, left, width, text }) {
    const [isOpened, setIsOpened] = useState(false)

    const variantsParent = {
        initial: {
            transform: 'translateY(0rem)',
            filter: 'brightness(100%)'
        },
        hover: {
            transform: 'translateY(-0.6rem)',
            filter: 'brightness(125%)'
        }
    }

    return (
        <motion.div
            className={`absolute ${top} ${left} ${width} h-auto cursor-pointer`}
            initial="initial"
            whileHover="hover"
            variants={variantsParent}
            onClick={() => {
                setIsOpened(!isOpened)
            }}
        >
            <img src={src} />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-circle w-[9.6rem] h-[9.6rem] bg-black transition-all duration-300 ease-in-out"
                style={
                    isOpened
                        ? {
                              clipPath: 'circle(50% at 50% 50%)'
                          }
                        : {
                              clipPath: 'circle(0% at 50% 50%)'
                          }
                }
            >
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-12 max-w-full text-white leading-[1.1]">
                    {text}
                </span>
            </div>
        </motion.div>
    )
}
