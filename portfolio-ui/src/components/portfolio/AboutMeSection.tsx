"use client"

import { motion } from "framer-motion"

const tools = [
    {
        name: "Claude Code",
        logo: "/claude-code-logo.png",
        description:
            "Agente de código autônomo da Anthropic. Escreve, testa e corrige código com acesso completo ao projeto.",
    },
    {
        name: "Google Antigravity",
        logo: "/antigravity-logo.png",
        description:
            "IA agêntica do Google DeepMind. Pesquisa, navega na web, gera imagens e executa tarefas complexas de desenvolvimento.",
    },
    {
        name: "AIOX",
        logo: "/aiox-logo.png",
        description:
            "Framework open-source da SynkraAI. Orquestra 12 agentes especializados para planejar, desenvolver e testar projetos inteiros.",
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
                            Eu sou o Rafael, tenho 20 anos e me considero um AI Builder.
                            Não codifico linha por linha como no processo tradicional.
                            Eu orquestro inteligências artificiais para construir projetos
                            inteiros com uma precisão e velocidade que equipes
                            convencionais simplesmente não conseguem acompanhar.
                        </p>
                        <p className="text-base md:text-lg text-zinc-500 leading-relaxed">
                            Meu método junta três ferramentas de ponta em um único
                            workflow. Cada IA tem seu papel no processo, do
                            planejamento até a entrega final com testes e revisão completa.
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
                            className={`p-8 md:p-10 bg-zinc-900 ${idx < tools.length - 1
                                ? "border-b md:border-b-0 md:border-r border-primary/20"
                                : ""
                                } group hover:bg-primary/5 transition-colors duration-500`}
                        >
                            <img src={tool.logo} alt={tool.name} className="w-10 h-10 object-contain mb-6 rounded-[5px]" />
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
                    <div className="border border-primary/20 p-8 md:p-12 bg-zinc-900">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60">
                            Como funciona
                        </span>
                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mt-3 mb-6">
                            Um time inteiro.{" "}
                            <span className="text-primary italic font-serif font-light lowercase">
                                Uma pessoa.
                            </span>
                        </h3>
                        <div className="space-y-4 text-zinc-400 text-sm md:text-base leading-relaxed max-w-3xl">
                            <p>
                                Cada projeto que chega, e cada atualização, passa por um{" "}
                                <strong className="text-white">workflow completo de agentes de IA</strong> que eu
                                controlo pessoalmente. Juntando Claude Code, Antigravity e AIOX,
                                eu consigo colocar{" "}
                                <strong className="text-white">vários agentes trabalhando ao mesmo tempo</strong>,
                                cada um cuidando de uma parte diferente da implementação
                                sem que um atrapalhe o código do outro.
                            </p>
                            <p>
                                Enquanto um agente desenvolve o frontend, outro monta o backend,
                                outro escreve testes e outro revisa tudo. O resultado? Um projeto
                                que levaria semanas fica{" "}
                                <strong className="text-primary">pronto em dias</strong>, já com
                                testes passando, bugs corrigidos e código pronto pra produção.
                            </p>
                            <p className="text-zinc-500">
                                Não é automação genérica. É meu método de trabalho real. Eu
                                controlo cada etapa e cada agente. A diferença é que, onde outros
                                profissionais precisam de uma equipe inteira, eu entrego o mesmo
                                resultado sozinho, mais rápido e com mais consistência.
                            </p>
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
                                className={`p-8 md:p-10 text-center bg-zinc-900 ${idx < metrics.length - 1
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
