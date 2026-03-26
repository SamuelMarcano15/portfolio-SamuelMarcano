'use client'

import { motion, type Variants } from 'framer-motion'
import Button from '@/components/ui/Button'
import { Icon } from '@iconify/react'
import CardSwap from '@/components/ui/CardSwap'

// ── Data ─────────────────────────────────────────────────────
const techCategories = [
  {
    title: "Frontend Core",
    skills: [
      { name: "React.js", icon: "logos:react", desc: "Librería UI" },
      { name: "Next.js (SSR)", icon: "logos:nextjs-icon", desc: "Framework Full" },
      { name: "Vue.js", icon: "logos:vue", desc: "Framework UI" },
      { name: "NuxtJs", icon: "logos:nuxt", desc: "Framework SSR" },
      { name: "Flutter", icon: "devicon:flutter", desc: "Desarrollo multiplataforma" },
      { name: "TypeScript", icon: "logos:typescript-icon", desc: "Tipado Fuerte" },
    ]
  },
  {
    title: "UI & Styling",
    skills: [
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", desc: "Foco Utilitario" },
      { name: "HeroUI", icon: "simple-icons:heroui", desc: "Componentes" },
      { name: "Bootstrap", icon: "skill-icons:bootstrap", desc: "Sistema Grid" },
      { name: "CSS Modules", icon: "logos:css-3", desc: "Estilos Locales" },
    ]
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Python", icon: "logos:python", desc: "Desarrollo Ágil" },
      { name: "Django", icon: "skill-icons:django", desc: "Framework Python" },
      { name: "FastAPI", icon: "devicon:fastapi", desc: "Microservicios" },
      { name: "Node.js", icon: "logos:nodejs-icon", desc: "JS Servidor" },
      { name: "SQL (PostgreSQL)", icon: "logos:postgresql", desc: "Base Relacional" },
      { name: "Redis", icon: "logos:redis", desc: "Memoria Flash" },
      { name: "Laravel", icon: "logos:laravel", desc: "Framework PHP" },
      { name: "Celery", icon: "simple-icons:celery", desc: "Workers Async" },
    ]
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git/GitHub", icon: "skill-icons:git", desc: "Versionamiento" },
      { name: "WSL (Linux)", icon: "logos:linux-tux", desc: "Terminal Dev" },
      { name: "Vercel", icon: "logos:vercel-icon", desc: "Despliegues CI" },
    ]
  }
];
// ── Section ───────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── Left — Typography + description ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="lg:sticky lg:top-32 space-y-6"
        >
          <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.3em] uppercase text-primary">
            Engineered Tech Stack
          </motion.p>

          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none text-foreground">
            Stack<br />Excellence
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base text-foreground/60 max-w-sm leading-relaxed">
            Estructuras modulares diseñadas para la máxima eficiencia. Mi stack representa los
            pilares de la ingeniería moderna: escalabilidad, robustez e inteligencia aplicada.
          </motion.p>

          {/* Stats */}
          <motion.div variants={fadeUp} className="flex gap-10 pt-4">
            <div>
              <p className="text-5xl font-black text-foreground">15+</p>
              <p className="text-xs uppercase tracking-widest text-foreground/40 mt-1">Tecnologías Core</p>
            </div>
            <div className="border-l border-white/10 pl-10">
              <p className="text-5xl font-black text-foreground">100%</p>
              <p className="text-xs uppercase tracking-widest text-foreground/40 mt-1">Type Safe</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Proyectos
            </Button>
          </motion.div>
        </motion.div>

        {/* ── Right — Stacked interactive cards ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="w-full flex justify-end items-center min-h-[500px] pt-12">
            <CardSwap
              width={560}
              height={360}
              scaleDistance={20}
              verticalDistance={40}
              horizontalDistance={40}
              delay={3500}
            >
              {techCategories.map((category, index) => (
                <div
                  key={index}
                  className="w-full h-full bg-[#031522] border border-secondary rounded-3xl p-5 sm:p-8 flex flex-col shadow-2xl overflow-y-auto overflow-x-hidden"
                >
                  <h3 className="text-lg sm:text-xl font-black text-primary tracking-[0.15em] uppercase border-b border-secondary/50 pb-2 sm:pb-3 mb-4 sm:mb-6 shrink-0">
                    {category.title}
                  </h3>
                  <ul className="grid grid-cols-2 gap-x-2 sm:gap-x-6 gap-y-4 sm:gap-y-5 flex-1 content-start">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-4 overflow-hidden">
                        <Icon icon={skill.icon} className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="text-[11px] sm:text-sm md:text-base font-bold text-white/90 leading-tight mb-0.5 truncate">{skill.name}</span>
                          <span className="text-[8px] sm:text-[10px] text-primary/70 uppercase tracking-wider sm:tracking-widest leading-none mt-0.5 sm:mt-1 truncate">{skill.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardSwap>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
