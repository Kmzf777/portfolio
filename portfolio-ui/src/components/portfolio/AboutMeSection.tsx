"use client"

import { motion } from "framer-motion"

const tools = [
    {
        name: "Claude Code",
        icon: "⌨️",
        description:
            "Agente de código autônomo com acesso direto ao terminal, filesystem e capacidade de executar comandos complexos. Opera como um desenvolvedor sênior que entende o contexto inteiro do projeto.",
    },
    {
        name: "Google Antigravity",
        icon: "🚀",
        description:
            "IA agêntica avançada com controle de browser, geração de imagens, pesquisa web e execução de código. Amplia as capacidades de desenvolvimento com visão computacional e automação.",
    },
    {
        name: "AIOX",
        icon: "🧠",
        description:
            "Framework open-source de orquestração de IA com 12 agentes especializados — analyst, architect, dev, QA, devops e mais. Transforma requisitos em código funcional através do Autonomous Development Engine.",
        link: "https://github.com/SynkraAI/aiox-core",
    },
]

const metrics = [
    { value: "10x", label: "Mais rápido" },
    { value: "0", label: "Erros em produção" },
    { value: "100%", label: "Código funcional" },
    { value: "24h", label: "Entrega média" },
]

export function AboutMeSection() {
    return (
        <section
            id="sobre-mim"
            className="relative py-32 px-6 overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(44,255,5,0.06)_0%,transparent_70%)]" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white">
                        Sobre{" "}
                        <span className="text-primary italic font-serif font-light lowercase">
                            Mim
                        </span>
                    </h2>
                </motion.div>

                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="max-w-3xl mx-auto mb-24"
                >
                    <div className="border-l-2 border-primary/40 pl-8">
                        <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6 font-serif italic">
                            Eu sou Rafael — 20 anos, AI Builder. Não sigo o
                            processo tradicional de desenvolvimento. Eu orquestro
                            inteligências artificiais para construir projetos
                            inteiros com uma precisão e velocidade que equipes
                            convencionais não alcançam.
                        </p>
                        <p className="text-base md:text-lg text-zinc-500 leading-relaxed">
                            Meu método combina três ferramentas de ponta em um
                            workflow único: cada IA assume um papel especializado
                            no processo, desde o planejamento arquitetural até a
                            entrega final com testes e QA completos.
                        </p>
                    </div>
                </motion.div>

                {/* Section Title - Method */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60">
                        Método de trabalho
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mt-3">
                        O Arsenal
                    </h3>
                </motion.div>

                {/* Tools Grid */}
                <div className="grid md:grid-cols-3 gap-0 border border-primary/20 mb-24">
                    {tools.map((tool, idx) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.6,
                                delay: idx * 0.15,
                            }}
                            className={`p-8 md:p-10 ${idx < tools.length - 1
                                    ? "border-b md:border-b-0 md:border-r border-primary/20"
                                    : ""
                                } group hover:bg-primary/5 transition-colors duration-500`}
                        >
                            <div className="text-4xl mb-6">{tool.icon}</div>
                            <h4 className="text-xl font-black uppercase tracking-wider text-white mb-4 group-hover:text-primary transition-colors">
                                {tool.name}
                            </h4>
                            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                                {tool.description}
                            </p>
                            {tool.link && (
                                <a
                                    href={tool.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors"
                                >
                                    Ver no GitHub
                                    <span className="text-base">→</span>
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* AIOX Workflow Explanation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-24"
                >
                    <div className="border border-primary/20 p-8 md:p-12 bg-zinc-950/50">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                            <div className="flex-1">
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60">
                                    Como funciona
                                </span>
                                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mt-3 mb-6">
                                    Orquestração{" "}
                                    <span className="text-primary italic font-serif font-light lowercase">
                                        Inteligente
                                    </span>
                                </h3>
                                <div className="space-y-4 text-zinc-400 text-sm md:text-base leading-relaxed">
                                    <p>
                                        O AIOX conecta todos os agentes em um pipeline
                                        unificado. O <strong className="text-zinc-200">Analyst</strong> pesquisa
                                        e documenta requisitos. O{" "}
                                        <strong className="text-zinc-200">Architect</strong> desenha a
                                        estrutura técnica. O{" "}
                                        <strong className="text-zinc-200">Dev</strong> implementa cada
                                        subtarefa com contexto completo do projeto.
                                    </p>
                                    <p>
                                        O <strong className="text-zinc-200">QA</strong> revisa cada build
                                        automaticamente, o{" "}
                                        <strong className="text-zinc-200">DevOps</strong> gerencia
                                        infraestrutura e deployments, e o{" "}
                                        <strong className="text-zinc-200">Scrum Master</strong> coordena
                                        todo o fluxo de desenvolvimento em sprints
                                        organizadas.
                                    </p>
                                    <p>
                                        Com o Claude Code e o Antigravity integrados ao
                                        AIOX, eu tenho um{" "}
                                        <strong className="text-white">
                                            time completo de desenvolvimento
                                        </strong>{" "}
                                        operando simultaneamente — 12 agentes
                                        especializados que trabalham em sincronia para
                                        entregar projetos com{" "}
                                        <strong className="text-primary">
                                            zero erros e velocidade recorde
                                        </strong>
                                        .
                                    </p>
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-auto">
                                <div className="flex flex-col gap-3 font-mono text-xs">
                                    {[
                                        "analyst → pesquisa & PRD",
                                        "pm → priorização",
                                        "architect → design técnico",
                                        "sm → sprints & histórias",
                                        "dev → implementação",
                                        "qa → testes & review",
                                        "devops → deploy & CI/CD",
                                    ].map((agent, i) => (
                                        <motion.div
                                            key={agent}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.3 + i * 0.08,
                                            }}
                                            className="flex items-center gap-3 text-zinc-600 hover:text-primary transition-colors"
                                        >
                                            <span className="w-2 h-2 bg-primary/40 rounded-full flex-shrink-0" />
                                            <span>{agent}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-primary/20">
                        {metrics.map((metric, idx) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: idx * 0.1,
                                }}
                                className={`p-8 md:p-10 text-center ${idx < metrics.length - 1
                                        ? "border-b md:border-b-0 md:border-r border-primary/20"
                                        : ""
                                    } ${idx < 2 ? "border-b md:border-b-0" : ""}`}
                            >
                                <div className="text-3xl md:text-5xl font-black text-primary mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-zinc-600">
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
