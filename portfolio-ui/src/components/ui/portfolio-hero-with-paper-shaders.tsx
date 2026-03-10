"use client"

import { Dithering } from "@paper-design/shaders-react"
import { useState, useEffect } from "react"
import { Moon, Sun, Github, Mail, Smartphone, ExternalLink, Sparkles, Rocket } from "lucide-react"
import HomeContent from "@/components/portfolio/HomeContent"

export default function PortfolioHeroWithPaperShaders() {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch for theme toggle
    useEffect(() => {
        setMounted(true)
        // Check system preference or local storage here if needed, for now default to true
    }, [])

    if (!mounted) return null

    return (
        <div className={`relative min-h-screen overflow-hidden flex flex-col md:flex-row ${isDarkMode ? 'dark' : ''}`}>
            {/* LEFT PANEL - CONTENT */}
            <div
                className={`w-full md:w-1/2 p-6 md:p-12 font-mono relative z-10 h-screen overflow-y-auto ${isDarkMode ? "bg-black text-white" : "bg-zinc-50 text-black"
                    }`}
            >
                {/* Theme toggle button */}
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`absolute top-6 right-6 md:top-8 md:right-8 p-3 rounded-full transition-all z-50 border ${isDarkMode
                        ? "border-white/20 hover:bg-white/10 hover:border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        : "border-black/20 hover:bg-black/10 hover:border-black/40 text-black shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                        }`}
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <div className="max-w-xl mx-auto md:mx-0 pt-12 md:pt-0">
                    {/* Header */}
                    <header className="mb-24 mt-8 md:mt-0">
                        <h1 className="text-xl font-normal mb-8 tracking-tight flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                            Rafael.cv
                        </h1>
                        <div className="mb-8 relative">
                            <div className="absolute -left-6 top-2 bottom-2 w-1 bg-current opacity-20 hidden md:block" />
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-none">RAFAEL REIS SILVA</h2>
                            <h3 className="text-xl text-muted-foreground font-medium uppercase tracking-widest bg-current/5 inline-block px-3 py-1">AI PRODUCT BUILDER</h3>
                        </div>
                        <p className="text-base md:text-lg leading-relaxed mb-8 font-serif italic text-muted-foreground opacity-90">
                            "Eu construo sistemas que funcionam sozinhos. Agentes de IA, automações e produtos digitais que trabalham
                            enquanto você dorme."
                        </p>
                        <div className="flex flex-wrap gap-8 text-sm mt-12 bg-current/5 p-6 rounded-lg border border-current/10 shadow-sm">
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-3xl tracking-tighter">1.600+</span>
                                <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-widest flex items-center gap-1"><Sparkles className="w-3 h-3" /> Leads via IA</span>
                            </div>
                            <div className="w-px bg-current/10" />
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-3xl tracking-tighter">10m</span>
                                <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-widest flex items-center gap-1"><Smartphone className="w-3 h-3" /> Sem falhas</span>
                            </div>
                            <div className="w-px bg-current/10 hidden sm:block" />
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-3xl tracking-tighter">6+</span>
                                <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-widest flex items-center gap-1"><Rocket className="w-3 h-3" /> Sistemas rodando</span>
                            </div>
                        </div>
                    </header>

                    {/* Posicionamento */}
                    <section className="mb-24 relative">
                        <div className="absolute -right-6 -top-6 -bottom-6 w-px bg-gradient-to-b from-transparent via-current/20 to-transparent hidden xl:block" />

                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-current opacity-50" />
                            O que eu faço
                        </h3>
                        <p className="text-base leading-relaxed mb-12 text-muted-foreground bg-current/5 p-6 border-l-2 border-current">
                            Construo produtos e automações que combinam <strong className="text-current font-bold">IA generativa</strong>, agentes inteligentes e interfaces funcionais.
                            Não desenvolvo apenas código — <strong className="text-current font-bold">entrego sistemas que geram resultado mensurável</strong> para o negócio.
                        </p>

                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-current opacity-50" />
                            Diferenciais
                        </h3>
                        <ul className="text-sm space-y-4 list-none">
                            {[
                                "Visão de produto + execução técnica no mesmo profissional",
                                "Ferramentas de ponta: Claude Code, SynkraAI/aiox, n8n, Gemini",
                                "Projetos reais em produção — não só demos e protótipos",
                                "Velocidade: de briefing a sistema funcional em semanas",
                                "Ambição e hipercriatividade com visão de marketing e mercado"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <span className="block w-4 h-4 mt-0.5 border border-current flex-shrink-0 group-hover:bg-current transition-colors" />
                                    <span className="opacity-80 group-hover:opacity-100 transition-opacity font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Inject Dynamic Content from Portfolio.md here */}
                    <div className="mt-32">
                        <HomeContent />
                    </div>

                    {/* Footer Links (moves to bottom of scroll area) */}
                    <footer className="mt-32 pt-12 pb-12 border-t-2 border-current/20">
                        <div className="flex flex-col md:flex-row gap-8 text-sm font-mono items-center md:items-start justify-between">
                            <span className="font-bold uppercase tracking-widest opacity-50">Contato //</span>
                            <div className="flex flex-wrap justify-center gap-6">
                                <a href="mailto:seuemail@email.com" className="hover:underline flex items-center gap-2 group p-2 border border-transparent hover:border-current/20 transition-all">
                                    <Mail className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /> <span className="hidden sm:inline">E-mail</span>
                                </a>
                                <a href="https://wa.me/55000000000" className="hover:underline flex items-center gap-2 group p-2 border border-transparent hover:border-current/20 transition-all">
                                    <Smartphone className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /> <span className="hidden sm:inline">WhatsApp</span>
                                </a>
                                <a href="https://github.com/Kmzf777" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-2 group p-2 border border-transparent hover:border-current/20 transition-all">
                                    <Github className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /> <span className="hidden sm:inline">GitHub</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center mt-12 text-xs opacity-40 font-bold uppercase tracking-widest">
                            Rafael Reis Silva · AI Product Builder · 2025
                        </div>
                    </footer>
                </div>
            </div>

            {/* RIGHT PANEL - SHADER (Fixed on desktop, hidden or smaller on mobile) */}
            <div className="hidden md:block w-1/2 relative h-screen bg-black overflow-hidden border-l border-white/10 shadow-2xl">
                <div className="absolute inset-0 mix-blend-screen opacity-90 transition-opacity duration-1000">
                    <Dithering
                        style={{ height: "100%", width: "100%" }}
                        colorBack={isDarkMode ? "hsl(0, 0%, 5%)" : "hsl(0, 0%, 95%)"}
                        colorFront={isDarkMode ? "hsl(210, 100%, 70%)" : "hsl(240, 10%, 30%)"}
                        shape="wave"
                        type="4x4"
                        pxSize={isDarkMode ? 3 : 4}
                        offsetX={0}
                        offsetY={0}
                        scale={0.8}
                        rotation={isDarkMode ? 0 : 5}
                        speed={0.15}
                    />
                </div>

                {/* Overlay gradient to blend edge */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${isDarkMode ? 'black' : 'white'} via-transparent to-transparent opacity-30 pointer-events-none transition-colors duration-1000`}></div>
                {/* Vignette effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
            </div>
        </div>
    )
}
