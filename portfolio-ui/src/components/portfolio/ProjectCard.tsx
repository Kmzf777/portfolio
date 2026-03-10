import { ExternalLink, Github, Folder } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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

export function ProjectCard({
    title,
    subtitle,
    tags,
    description,
    metrics,
    technicalDetails,
    stack,
    links,
}: ProjectProps) {
    return (
        <div className="group relative border border-current/10 p-6 md:p-8 hover:border-current/30 transition-colors">
            {/* Header section with tags */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Folder className="w-5 h-5 opacity-50" />
                        {title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-mono text-xs rounded-none border border-current/20 bg-transparent">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-6">{description}</p>

            {/* Optional Metrics */}
            {metrics && metrics.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 border border-current/10 bg-current/5">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col">
                            <span className="font-bold text-lg md:text-xl">{metric.value}</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest leading-tight mt-1">
                                {metric.label}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Technical Details */}
            {technicalDetails && (
                <div className="mb-6 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest opacity-50">Detalhe Técnico</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-current/20 pl-4 py-1">
                        {technicalDetails}
                    </p>
                </div>
            )}

            {/* Tech Stack */}
            <div className="mb-8">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-muted-foreground">
                    <span className="font-bold opacity-70 uppercase tracking-widest mr-2">Stack:</span>
                    {stack.map((item, i) => (
                        <span key={item} className="flex items-center">
                            {item}
                            {i < stack.length - 1 && <span className="mx-2 opacity-30">·</span>}
                        </span>
                    ))}
                </div>
            </div>

            {/* Links Footer */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-current/10">
                {links.live && (
                    <a
                        href={links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-mono flex items-center gap-2 hover:underline decoration-1 underline-offset-4"
                    >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                )}
                {links.github && (
                    <a
                        href={links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-mono flex items-center gap-2 hover:underline decoration-1 underline-offset-4"
                    >
                        <Github className="w-4 h-4" /> Repository
                    </a>
                )}
            </div>
        </div>
    )
}
