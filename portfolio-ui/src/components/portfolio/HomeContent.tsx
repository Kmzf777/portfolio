"use client"

import { ProjectCardRedesigned } from "@/components/portfolio/ProjectCardRedesigned"
import { HeroSection } from "@/components/portfolio/HeroSection"
import { AboutMeSection } from "@/components/portfolio/AboutMeSection"
import { CafeCanastraCaseStudy } from "@/components/portfolio/CafeCanastraCaseStudy"
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation"
import { motion } from "framer-motion"

export default function HomeContent() {
    return (
        <div className="bg-black min-h-screen w-full overflow-x-hidden text-white font-mono selection:bg-primary selection:text-black relative">

            {/* Animated Fixed Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
                <SmokeBackground smokeColor="#2cff05" className="w-full h-full" />
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <HeroSection />

                {/* About Me Section */}
                <AboutMeSection />

                {/* Projects Section */}
                <section className="py-24 max-w-7xl mx-auto bg-black">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="mb-24 text-center md:text-left px-6"
                    >
                        <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white">
                            Casos de <span className="text-primary italic font-serif font-light lowercase">Sucesso</span>
                        </h2>
                        <p className="max-w-2xl mt-4 text-lg text-zinc-400 md:ml-0 mx-auto">
                            De automações de processos internos a SaaS baseados em Inteligência Artificial Generativa.
                        </p>
                    </motion.div>

                    {/* Cafe Canastra Case Study (includes Parallax & Copy) */}
                    <div className="w-full border-t border-primary/20">
                        <CafeCanastraCaseStudy />
                    </div>
                </section>

                {/* Final CTA / Footer */}
                <footer className="py-32 px-6 border-t border-zinc-900 bg-[radial-gradient(ellipse_at_top,rgba(44,255,5,0.08)_0%,transparent_70%)]">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-none text-white mb-8">
                            Vamos <span className="text-primary italic font-serif font-light lowercase">Escalar</span>
                        </h2>
                        <p className="mb-12 text-xl text-zinc-400 font-serif italic justify-center text-center">
                            Em 24h tenho uma arquitetura desenhada para o seu problema. Sem calls longas. Direto ao resultado.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="mailto:seuemail@email.com" className="bg-primary hover:bg-white text-black px-12 py-6 font-black uppercase tracking-widest text-sm transition-colors w-full sm:w-auto text-center">
                                Enviar E-mail
                            </a>
                            <a href="https://wa.me/55000000000" className="border-2 border-zinc-800 hover:border-primary text-white hover:text-primary px-12 py-6 font-black uppercase tracking-widest text-sm transition-colors w-full sm:w-auto text-center">
                                Falar no WhatsApp
                            </a>
                        </div>

                        <div className="mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-bold uppercase tracking-widest gap-4">
                            <span>© 2025 Rafael Reis Silva</span>
                            <a href="https://github.com/Kmzf777" className="hover:text-primary transition-colors">GitHub Profile</a>
                        </div>
                    </motion.div>
                </footer>
            </div>
        </div>
    )
}
