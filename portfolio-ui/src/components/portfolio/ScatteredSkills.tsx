"use client"

import { motion, Variants } from "framer-motion"

export function ScatteredSkills() {
    const skills = [
        { text: "IA Agents", style: "top-[10%] left-[20%] rotate-[-6deg]" },
        { text: "n8n Automation", style: "top-[25%] right-[15%] rotate-[8deg]" },
        { text: "Claude Code", style: "top-[40%] left-[10%] rotate-[-3deg]" },
        { text: "Python & Node", style: "top-[55%] right-[25%] rotate-[4deg]" },
        { text: "React/Next.js", style: "top-[70%] left-[30%] rotate-[-8deg]" },
        { text: "WhatsApp API", style: "top-[80%] right-[10%] rotate-[6deg]" },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            } as const
        },
    }

    return (
        <section className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center py-24 my-24 overflow-hidden bg-zinc-950 border-y border-primary/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,255,5,0.05)_0%,transparent_100%)]"></div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="relative w-full max-w-5xl mx-auto h-full min-h-[400px]"
            >
                <div className="text-center mb-16 relative z-20">
                    <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mix-blend-difference">
                        All Your <span className="text-primary italic font-serif font-light lowercase">Automation Needs</span>
                    </h2>
                </div>

                {/* Scattered Pills */}
                <div className="relative w-full h-[400px]">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                            className={`absolute px-8 py-4 bg-white text-black font-serif italic text-xl md:text-3xl rounded-full shadow-2xl shadow-primary/20 cursor-crosshair border-2 border-transparent hover:border-primary transition-colors ${skill.style}`}
                        >
                            {skill.text}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
