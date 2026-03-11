"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface Image {
    src: string
    alt?: string
}

interface ZoomParallaxProps {
    /** Array of images to be displayed in the parallax effect max 7 images */
    images: Image[]
    className?: string
}

export function ZoomParallax({ images, className }: ZoomParallaxProps) {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9]

    const getDesktopStyles = (index: number) => {
        switch (index) {
            case 1: return "md:[&>div]:!-top-[30vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[45vh] md:[&>div]:!w-[52.5vw]"
            case 2: return "md:[&>div]:!-top-[10vh] md:[&>div]:!-left-[25vw] md:[&>div]:!h-[67.5vh] md:[&>div]:!w-[30vw]"
            case 3: return "md:[&>div]:!left-[27.5vw] md:[&>div]:!h-[37.5vh] md:[&>div]:!w-[37.5vw]"
            case 4: return "md:[&>div]:!top-[27.5vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[37.5vh] md:[&>div]:!w-[30vw]"
            case 5: return "md:[&>div]:!top-[27.5vh] md:[&>div]:!-left-[22.5vw] md:[&>div]:!h-[37.5vh] md:[&>div]:!w-[45vw]"
            case 6: return "md:[&>div]:!top-[22.5vh] md:[&>div]:!left-[25vw] md:[&>div]:!h-[22.5vh] md:[&>div]:!w-[22.5vw]"
            default: return ""
        }
    }

    const getMobileStyles = (index: number) => {
        switch (index) {
            case 1: return "[&>div]:!-top-[25vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[67.5vw]"
            case 2: return "[&>div]:!-top-[5vh] [&>div]:!-left-[25vw] [&>div]:!h-[37.5vh] [&>div]:!w-[45vw]"
            case 3: return "[&>div]:!top-[5vh] [&>div]:!left-[25vw] [&>div]:!h-[30vh] [&>div]:!w-[45vw]"
            case 4: return "[&>div]:!top-[25vh] [&>div]:!left-[10vw] [&>div]:!h-[22.5vh] [&>div]:!w-[52.5vw]"
            case 5: return "[&>div]:!top-[25vh] [&>div]:!-left-[20vw] [&>div]:!h-[30vh] [&>div]:!w-[52.5vw]"
            case 6: return "[&>div]:!-top-[20vh] [&>div]:!-left-[15vw] [&>div]:!h-[18vh] [&>div]:!w-[37.5vw]"
            default: return ""
        }
    }

    return (
        <div ref={container} className={cn("relative h-[150vh]", className)}>
            <div className="sticky top-0 h-screen overflow-hidden">
                {images.map(({ src, alt }, index) => {
                    const scale = scales[index % scales.length]

                    return (
                        <motion.div
                            key={index}
                            style={{ scale }}
                            className={`absolute top-0 flex h-full w-full items-center justify-center 
                                ${getMobileStyles(index)} 
                                ${getDesktopStyles(index)}
                            `}
                        >
                            <div className="relative h-[37.5vh] w-[90vw] md:h-[37.5vh] md:w-[37.5vw] flex items-center justify-center">
                                <img
                                    src={src || "/placeholder.svg"}
                                    alt={alt || `Parallax image ${index + 1}`}
                                    className="max-h-full max-w-full object-contain rounded-[4px] shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
