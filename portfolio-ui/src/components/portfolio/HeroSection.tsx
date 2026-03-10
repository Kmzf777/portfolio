"use client"

import { motion } from "framer-motion"
import { TextRevealByWord } from "@/components/ui/text-reveal"

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24 px-6">


            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
                <div className="relative w-full flex flex-col items-center">
                    {/* Typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center z-10 relative flex flex-col items-center w-full"
                    >
                        <h2 className="text-4xl md:text-7xl font-serif italic font-light tracking-tight text-white mb-4 z-20 drop-shadow-lg">
                            Eu construo sistemas que
                        </h2>
                        <h1 className="text-[12.5vw] sm:text-[13vw] md:text-[220px] font-black tracking-[-0.05em] leading-[0.85] text-primary uppercase z-10 relative mb-4 md:mb-8 font-[family-name:var(--font-inter)] w-full flex flex-col items-center whitespace-nowrap drop-shadow-xl">
                            <span>FUNCIONAM</span>
                            <span className="text-[14.2vw] sm:text-[14.7vw] md:text-[250px]">SOZINHOS</span>
                        </h1>
                    </motion.div>

                    {/* Overlapping User Photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative z-30 mt-[-15vw] md:mt-[-150px] w-[85vw] max-w-[650px] mx-auto pointer-events-none"
                    >
                        <img
                            src="/rafael.png"
                            alt="Rafael Reis Silva"
                            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(44,255,5,0.15)] transition-all duration-700 pointer-events-auto"
                        />
                    </motion.div>
                </div>

                {/* Bottom Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="max-w-2xl mt-8"
                >
                    <TextRevealByWord
                        text="Agentes de IA, automações e produtos digitais que trabalham enquanto você dorme. 20 anos. 1 ano de mercado. Resultados reais."
                        className="mb-8"
                        textClassName="text-lg md:text-xl text-zinc-400 font-mono leading-relaxed justify-center"
                    />

                    <div className="flex gap-6 justify-center">
                        <a href="mailto:seuemail@email.com" className="bg-primary text-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-primary/80 transition-colors">
                            Iniciar Projeto
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
