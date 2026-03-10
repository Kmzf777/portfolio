import { Code2, Cpu, Wrench, Layout } from "lucide-react"

export function TechStack() {
    const categories = [
        {
            title: "AI & LLMs",
            icon: <Cpu className="w-5 h-5 mb-4 opacity-70" />,
            items: ["Claude (Anthropic)", "Gemini", "OpenAI", "Prompt Engineering"],
        },
        {
            title: "Automação",
            icon: <Wrench className="w-5 h-5 mb-4 opacity-70" />,
            items: ["n8n", "SynkraAI / aiox", "Claude Code", "Zapier"],
        },
        {
            title: "Frontend",
            icon: <Layout className="w-5 h-5 mb-4 opacity-70" />,
            items: ["React", "Next.js", "Tailwind", "Mobile-first CSS"],
        },
        {
            title: "Backend & Dados",
            icon: <Code2 className="w-5 h-5 mb-4 opacity-70" />,
            items: ["Node.js", "Python", "REST APIs", "BI & Analytics"],
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
                <div key={category.title} className="p-6 border border-current/10 hover:bg-current/5 transition-colors group">
                    {category.icon}
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-current/10 pb-2">
                        {category.title}
                    </h4>
                    <ul className="space-y-2">
                        {category.items.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground font-mono flex items-center before:content-['>'] before:mr-2 before:opacity-50">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
