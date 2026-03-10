import { ProjectCardRedesigned } from "@/components/portfolio/ProjectCardRedesigned"
import { HeroSection } from "@/components/portfolio/HeroSection"
import { AboutMeSection } from "@/components/portfolio/AboutMeSection"
import { ScatteredSkills } from "@/components/portfolio/ScatteredSkills"
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation"
import { motion } from "framer-motion"

export default function HomeContent() {
    const clientProjects = [
        {
            title: "Café Canastra",
            subtitle: "Ecossistema Digital Premium",
            tags: ["IA Agent", "WhatsApp API", "n8n", "Produção"],
            description: "Agente de atendimento no WhatsApp construído em n8n. Qualifica leads, identifica o setor e transfere para o vendedor correto de forma completamente humanizada — indistinguível de um atendente humano.",
            metrics: [
                { label: "Leads via IA", value: "1.600+" },
                { label: "Uptime", value: "10m" },
                { label: "Pico/Mês", value: "312" },
            ],
            technicalDetails: "A humanização opera por variação de tempo de resposta, linguagem adaptativa por perfil do lead e memória de curto prazo para evitar repetições algorítmicas.",
            stack: ["n8n", "Claude/Gemini", "WhatsApp API"],
            links: {}
        },
        {
            title: "BeeInside",
            subtitle: "BI Financeiro & ERP Integrado",
            tags: ["Node.js", "Bling API", "Data Analytics"],
            description: "Sistema financeiro proprietário que conecta múltiplos ERPs para gerar análises de rentabilidade em tempo real. Elimina planilhas manuais ao cruzar notas fiscais, custos e margens de duas operações distintas.",
            technicalDetails: "Arquitetura de dados customizada para normalizar estruturas divergentes em uma visão financeira consolidada de margens de lucro.",
            stack: ["Node.js", "Bling ERP", "Data Normalization"],
            links: {}
        }
    ]

    const personalProjects = [
        {
            title: "ShadowFeed",
            subtitle: "Automação Multiagente para Instagram",
            tags: ["SaaS Beta", "Pipeline IA", "Geração de Imagens"],
            description: "Sistema avançado de automação de posts carrossel. A IA realiza pesquisa de conteúdo, cria a narrativa, gera as imagens mantendo a identidade visual e entrega os slides prontos para publicação.",
            metrics: [
                { label: "Pipeline", value: "100% Autônomo" },
                { label: "User", value: "@vistra.ia" }
            ],
            technicalDetails: "Pipeline com 3 agentes especializados (Pesquisa, Roteiro, Imagem) gerenciados por um orquestrador central para outputs zero-touch.",
            stack: ["Python", "Claude", "Gemini", "Image Generation"],
            links: {
                github: "https://github.com/Kmzf777/shadowfeed-beta"
            }
        },
        {
            title: "JobAI",
            subtitle: "Máquina de Vendas no WhatsApp",
            tags: ["Engenharia de Prompt", "Vendas", "n8n"],
            description: "Agente de vendas com engenharia de prompt avançada. O funil de vendas é embutido na conversa de forma natural, adaptando a linguagem ao usuário em tempo real.",
            stack: ["WhatsApp API", "LLM", "Prompt Engineering"],
            links: {
                github: "https://github.com/Kmzf777/jobai"
            }
        }
    ]

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

                {/* Floating Skills / Needs */}
                <ScatteredSkills />

                {/* Projects Section */}
                <section className="py-24 px-6 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="mb-24 text-center md:text-left"
                    >
                        <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white">
                            Casos de <span className="text-primary italic font-serif font-light lowercase">Sucesso</span>
                        </h2>
                        <p className="max-w-2xl mt-4 text-lg text-zinc-400 md:ml-0 mx-auto">
                            De automações de processos internos a SaaS baseados em Inteligência Artificial Generativa.
                        </p>
                    </motion.div>

                    <div className="grid gap-0 border-b border-primary/20">
                        {[...clientProjects, ...personalProjects].map((project, idx) => (
                            <ProjectCardRedesigned key={idx} {...project} />
                        ))}
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
