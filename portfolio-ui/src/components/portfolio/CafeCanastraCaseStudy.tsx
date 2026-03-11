"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import React, { useRef, useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import { ZoomParallax } from "@/components/ui/zoom-parallax"

export function CafeCanastraCaseStudy() {
    React.useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    const countRef = useRef(null)
    const isInView = useInView(countRef, { once: true, margin: "-100px" })
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) =>
        latest.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    )

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, 800000, {
                duration: 2.5,
                ease: "easeOut"
            })
            return controls.stop
        }
    }, [isInView, count])

    const images = [
        {
            // Center Image - Main representation
            src: "/WhatsApp Image 2026-03-10 at 23.34.37.jpeg",
            alt: "Café Canastra Preview 1",
        },
        {
            // Top Left
            src: "/WhatsApp Image 2026-03-10 at 23.35.01.jpeg",
            alt: "Café Canastra Preview 2",
        },
        {
            // Center Left
            src: "/WhatsApp Image 2026-03-10 at 23.39.53 (1).jpeg",
            alt: "Café Canastra Preview 3",
        },
        {
            // Bottom Right
            src: "/WhatsApp Image 2026-03-10 at 23.39.53 (2).jpeg",
            alt: "Café Canastra Preview 4",
        },
        {
            // Bottom Left
            src: "/WhatsApp Image 2026-03-10 at 23.39.53.jpeg",
            alt: "Café Canastra Preview 5",
        },
        {
            // Top Right
            src: "/WhatsApp Image 2026-03-10 at 23.39.54 (1).jpeg",
            alt: "Café Canastra Preview 6",
        },
        {
            // Bottom Center
            src: "/WhatsApp Image 2026-03-10 at 23.39.54.jpeg",
            alt: "Café Canastra Preview 7",
        },
    ]

    return (
        <div className="w-full flex flex-col pt-12">

            {/* Header / Logo Section */}
            <div className="flex flex-col items-center justify-center mb-16 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-48 h-auto md:w-64 flex items-center justify-center mb-8 relative"
                >
                    <img
                        src="/logo-cafe-canastra.png"
                        alt="Logo Café Canastra"
                        className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(44,255,5,0.15)]"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        Case de Sucesso
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white max-w-2xl mx-auto leading-tight">
                        Do Grão ao Digital: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary/80 to-primary italic font-serif font-light lowercase">
                            Uma revolução em vendas
                        </span>
                    </h3>
                </motion.div>
            </div>

            {/* Parallax Effect */}
            <div className="w-full overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

                {/* The Zoom Parallax itself spans naturally in the document flow */}
                <ZoomParallax images={images} />
            </div>

            {/* High Converting Copy & CTA */}
            <div className="max-w-4xl mx-auto px-6 pb-32 pt-0 text-center -mt-[45vh] lg:-mt-[55vh] relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 text-lg md:text-2xl text-zinc-300 leading-relaxed font-serif"
                >
                    <p>
                        Desenvolvi <strong className="text-white font-sans uppercase font-black tracking-tight">todo o ecossistema web</strong> da Café Canastra.
                    </p>
                    <p>
                        Desde o site principal, integrado a um blog com IA para criação de conteúdo automático, até Landing Pages de vendas de <span className="text-primary italic">altíssima conversão</span> e a estruturação completa de roteiros para Video Marketing.
                    </p>
                    <p className="border-l-2 border-primary/40 pl-6 text-left text-zinc-400 italic font-mono text-base md:text-lg">
                        "Por incrível que pareça, as IAs não pararam no código."
                    </p>
                    <p>
                        Desenvolvi agentes autônomos para atendimento e qualificação de leads que, trabalhando incansavelmente nos bastidores, venderam indiretamente mais de
                        <strong ref={countRef} className="text-primary font-sans font-black text-[11vw] md:text-7xl whitespace-nowrap block my-8 drop-shadow-[0_0_25px_rgba(44,255,5,0.3)]">
                            R$ <motion.span>{rounded}</motion.span>
                        </strong>
                        em apenas 10 meses.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-24 p-8 md:p-12 border border-primary/20 bg-zinc-900 flex flex-col items-center justify-center relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-8 relative z-10">
                        Quer ver e interagir com os<br />
                        <span className="text-primary italic font-serif font-light lowercase">trabalhos feitos para o Café Canastra?</span>
                    </h4>

                    <Link
                        href="/cafecanastra"
                        className="relative z-10 inline-flex items-center justify-center gap-3 bg-primary text-zinc-950 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] transition-colors duration-300 w-full sm:w-auto overflow-hidden group/btn"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Clique Aqui <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                    </Link>
                </motion.div>
            </div>

        </div>
    )
}
