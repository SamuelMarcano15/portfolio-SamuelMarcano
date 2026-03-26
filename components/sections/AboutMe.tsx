'use client'

import { motion, type Variants } from 'framer-motion'
import LightCard from '@/components/ui/LightCard'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { FaEnvelope } from 'react-icons/fa'
import { Icon } from '@iconify/react'

// ── Animated Globe SVG ──────────────────────────────────────
function AnimatedSphere() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="w-full max-w-[200px] mx-auto h-auto"
    >
      <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" style={{ background: 'transparent', width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <radialGradient id="sphereGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
            <stop offset="0%" stopColor="#2F404F" />
            <stop offset="70%" stopColor="#031522" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur">
              <animate attributeName="stdDeviation" values="3;5;3" dur="4s" repeatCount="indefinite" />
            </feGaussianBlur>
            <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.22  0 0 0 0 0.58  0 0 0 0 0.63  0 0 0 1 0" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="sphereClip">
            <circle cx="400" cy="400" r="300" />
          </clipPath>
          <style>{`
            .continent-group { animation: rotateGlobe 30s linear infinite; }
            @keyframes rotateGlobe { from { transform: translateX(-1600px); } to { transform: translateX(0px); } }
            .city-light { fill: #A1F1F1; filter: drop-shadow(0 0 2px #3894A1); }
            .land { fill: #2F404F; fill-opacity: 0.4; stroke: #3894A1; stroke-width: 1.5; filter: url(#neon-glow); }
          `}</style>
        </defs>
        <circle cx="400" cy="400" r="300" fill="url(#sphereGradient)" stroke="#031522" strokeWidth="1" />
        <g clipPath="url(#sphereClip)">
          <g className="continent-group">
            <g id="full-map-segment">
              <path className="land" d="M100,200 L150,180 L220,220 L200,300 L240,350 L210,450 L230,550 L190,600 L150,550 L160,450 L120,380 L80,300 Z" />
              <circle className="city-light" cx="150" cy="250" r="1.5" />
              <circle className="city-light" cx="180" cy="320" r="1" />
              <circle className="city-light" cx="200" cy="480" r="1.2" />
              <path className="land" d="M450,220 L470,200 L510,210 L530,250 L520,320 L550,380 L520,480 L480,550 L420,530 L380,480 L350,380 L370,300 L410,240 Z" />
              <path className="land" d="M420,150 L460,130 L500,140 L520,180 L480,210 L440,200 Z" />
              <circle className="city-light" cx="460" cy="240" r="1.5" />
              <circle className="city-light" cx="480" cy="450" r="1.5" />
              <path className="land" d="M580,250 L650,220 L750,240 L780,350 L720,450 L650,420 L600,350 Z" />
              <path className="land" d="M540,280 L580,270 L610,300 L600,350 L560,340 Z" />
              <circle className="city-light" cx="650" cy="280" r="1.8" />
              <circle className="city-light" cx="710" cy="340" r="1.2" />
              <path className="land" d="M730,500 L780,480 L800,530 L760,560 Z" />
              <circle className="city-light" cx="760" cy="520" r="1.5" />
            </g>
            <use href="#full-map-segment" x="1600" />
          </g>
        </g>
        <circle cx="400" cy="400" r="300" fill="none" stroke="#3894A1" strokeWidth="1" opacity="0.2" />
      </svg>
    </motion.div>
  )
}

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function AboutMe() {
  return (
    <section id="acerca-de" className="py-24 px-6">
      {/* Section title */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="text-5xl md:text-6xl font-black uppercase text-center text-foreground mb-14 tracking-tight"
      >
        Acerca De Mí
      </motion.h2>

      {/* Bento grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5"
      >
        {/* ── 1. Bio Card (light, tall) ───────────────────── */}
        <motion.div variants={fadeUp} className="md:col-span-5 md:row-span-2">
          <LightCard className="h-full min-h-[420px] flex flex-col gap-5">
            {/* Badge */}
            <span className="self-start flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-primary/15 text-primary border border-primary/30">
              <span className='rounded-full bg-primary w-2 h-2'></span> Ingeniero de Sistemas
            </span>

            {/* Name */}
            <div className="mb-5">
              <p className="text-6xl font-black uppercase leading-tight text-background">
                Hola,{' '}
              </p>
              <p className="text-6xl font-black uppercase leading-tight text-primary">
                Soy
                <br />
                Samuel
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-10 text-sm  leading-relaxed">
              <p className='font-medium text-lg'>
                Ingeniero de Sistemas experto en Next.js, TypeScript y Tailwind CSS, con un
                enfoque implacable en el rendimiento, la experiencia de usuario y la integración
                de IA (Gemini API).
              </p>
              <p className='text-base text-gray-500'>
                Diseño arquitecturas que no solo se ven excepcionales, sino que están optimizadas
                para escalar y perdurar bajo demanda empresarial.
              </p>
            </div>
          </LightCard>
        </motion.div>

        {/* ── 2. Philosophy quote (teal/primary card) ─────── */}
        <motion.div variants={fadeUp} className="md:col-span-7">
          <div
            className="relative h-full min-h-[200px] flex flex-col justify-between gap-6 p-8 rounded-[2rem] overflow-hidden"
            style={{ backgroundColor: '#3894A1' }}
          >
            {/* Watermark icon — top right */}
            <div className="absolute -top-4 -right-4 pointer-events-none select-none opacity-[0.08]">
              <Icon icon="mdi:account-cog" width={220} height={220} color="white" />
            </div>

            {/* Label */}
            <div className="relative flex items-center gap-2">
              <Icon icon="ph:sliders-horizontal" width={18} height={18} color="rgba(255,255,255,0.8)" />
              <span className="text-sm font-bold tracking-widest uppercase text-white/80">
                Filosofía de Desarrollo
              </span>
            </div>

            {/* Quote */}
            <blockquote className="relative text-4xl md:text-5xl font-bold text-white leading-tight">
              &ldquo;La ingeniería es la arquitectura de la lógica{' '}
              <span style={{ color: '#031522' }}>invisible.&rdquo;</span>
            </blockquote>

            {/* Tech pills */}
            <div className="relative flex flex-wrap gap-3">
              {['SOLID', 'CLEAN CODE', 'ESCALABILIDAD', 'IA READY'].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-white"
                  style={{ backgroundColor: '#031522' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Bottom row: Remote + CTA ─────────────────────── */}
        <motion.div variants={fadeUp} className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Remote/Global */}
          <div
            className="flex flex-col justify-between min-h-[200px] gap-4 p-6 rounded-3xl"
            style={{ backgroundColor: '#2F404F' }}
          >
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#3894A1' }}>
                Alcance
              </p>
              <h3 className="text-2xl font-black text-white leading-tight">
                Remote / Global
              </h3>
              <p className="text-xs mt-1 uppercase tracking-wider text-white/60">
                Disponibilidad Síncrona Para<br />Zonas UTC-4 A UTC+2
              </p>
            </div>
            <AnimatedSphere />
          </div>

          {/* CTA card */}
          <Card className="flex flex-col min-h-[350px] gap-4 p-8">
            {/* Top Anchor: Subtitle */}
            <p className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#3894A1' }}>
              Conexión
            </p>

            {/* Bottom Anchor: Title + Button (Pushed down by mt-auto) */}
            <div className="mt-auto flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl font-black text-foreground leading-tight">
                ¿Impulsamos<br />tu visión?
              </h3>

              <Button
                size="lg"
                className="w-full flex-col sm:flex items-center justify-center px-2 gap-2 text-white text-xs md:whitespace-nowrap"
                onClick={() =>
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Icon icon="mdi:email-outline" width={22} height={22} />
                Enviar Mensaje
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
