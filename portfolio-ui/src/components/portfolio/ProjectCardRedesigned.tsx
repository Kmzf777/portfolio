"use client"

import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { TextRevealByWord } from "@/components/ui/text-reveal"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface ProjectProps {
    title: string
    subtitle: string
    tags: string[]
    description: string
    metrics?: { label: string; value: string }[]
    technicalDetails?: string
    stack: string[]
    links: {
        live?: string
        github?: string
    }
}

export function ProjectCardRedesigned({
    title,
    subtitle,
    tags,
    description,
    metrics,
    technicalDetails,
    stack,
    links,
}: ProjectProps) {

    // Dummy images for the carousel since we don't have real app screenshots yet
    const images = [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group flex flex-col lg:flex-row gap-8 lg:gap-16 border-t font-mono border-primary/20 pt-16 pb-16"
        >
            {/* Left Column: Details */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 text-white group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-xl italic font-serif text-zinc-400 mb-6">{subtitle}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs uppercase tracking-widest text-primary font-bold">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <TextRevealByWord
                        text={description}
                        className="mb-8"
                        textClassName="text-base text-zinc-300 leading-relaxed font-mono"
                    />

                    {technicalDetails && (
                        <div className="mb-8 p-4 bg-zinc-900/50 border-l-2 border-primary">
                            <span className="block text-xs uppercase text-zinc-500 font-bold tracking-widest mb-2">Technical Insight</span>
                            <p className="text-sm text-zinc-400 leading-relaxed italic">{technicalDetails}</p>
                        </div>
                    )}

                    {metrics && metrics.length > 0 && (
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8 border-y border-zinc-800 py-6">
                            {metrics.map((metric, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <span className="font-black text-2xl text-primary">{metric.value}</span>
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                                        {metric.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Links Footer */}
                <div className="flex flex-wrap gap-6 pt-6">
                    {links.live && (
                        <a
                            href={links.live}
                            target="_blank"
                            rel="noreferrer"
                            className="group/link flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-white hover:text-primary transition-colors"
                        >
                            Ver Projeto <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    )}
                    {links.github && (
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="group/link flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-zinc-500 hover:text-white transition-colors"
                        >
                            <Github className="w-4 h-4" /> Código Fonte
                        </a>
                    )}
                </div>
            </div>

            {/* Right Column: Carousel */}
            <div className="w-full lg:w-1/2 relative bg-zinc-900 aspect-video lg:aspect-square flex items-center justify-center border border-zinc-800 overflow-hidden">
                <Carousel className="w-full h-full">
                    <CarouselContent className="h-full">
                        {images.map((src, index) => (
                            <CarouselItem key={index} className="h-full">
                                <div className="w-full h-full flex items-center justify-center p-4">
                                    <img
                                        src={src}
                                        alt={`${title} preview ${index + 1}`}
                                        className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="absolute bottom-6 right-16 flex gap-2">
                        <CarouselPrevious className="static translate-y-0 bg-black border-primary text-primary hover:bg-primary hover:text-black rounded-none" />
                        <CarouselNext className="static translate-y-0 bg-black border-primary text-primary hover:bg-primary hover:text-black rounded-none" />
                    </div>
                </Carousel>
            </div>
        </motion.div>
    )
}
