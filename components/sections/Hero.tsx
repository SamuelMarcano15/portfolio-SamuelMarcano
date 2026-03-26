'use client'

import { motion, type Variants } from 'framer-motion'
import { Icon } from '@iconify/react'
import InteractiveRobot from '@/components/ui/InteractiveRobot'
import SplitText from '@/components/ui/SplitText'

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.65, ease: EASE },
  },
})

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] lg:h-[95vh] lg:min-h-0 flex flex-col overflow-hidden pt-32 md:pt-36 pb-40 lg:pb-0 rounded-b-[2.5rem] lg:rounded-b-[3rem]"
      style={{ backgroundColor: '#F0F1EE' }}
    >
      {/* ── Decorative background ellipse (Desktop) ────────── */}
      <div
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[560px] h-[540px] rounded-full pointer-events-none"
        style={{ backgroundColor: 'rgba(47, 64, 79, 0.3)', zIndex: 0 }}
        aria-hidden="true"
      />

      {/* ── Giant heading ─────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center mb-8 lg:mb-10 mt-2 select-none px-4 lg:px-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp(0)}
      >
        <h1
          className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-tight lg:leading-[0.92] uppercase"
          style={{ color: '#031522' }}
        >
          <SplitText text="PRECISIÓN AL CONSTRUIR." delay={40} />
          <br />
          <SplitText text="VISIÓN AL ESCALAR." delay={40} />
        </h1>
      </motion.div>

      {/* ── Middle row ────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-end justify-between flex-1 max-w-7xl mx-auto w-full pb-0 lg:pb-20 px-6 lg:px-10 gap-10 lg:gap-0 mt-4 lg:mt-0">

        {/* Left — Pipeline block */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm"
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.25)}
        >
          {/* Subtitle with icon */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-3 lg:mb-4 w-full">
            <Icon
              icon="garden:terminal-cli-fill-12"
              style={{ color: '#3894A1' }}
              className="w-5 h-5 lg:w-6 lg:h-6 shrink-0"
            />
            <span
              className="text-[10px] sm:text-xs lg:text-sm font-bold tracking-[0.15em] lg:tracking-[0.3em] uppercase"
              style={{ color: '#3894A1' }}
            >
              PIPELINE&nbsp;DE&nbsp;DESPLIEGUE.
            </span>
          </div>

          {/* Description paragraph */}
          <p
            className="text-sm lg:text-base leading-relaxed font-bold max-w-[288px]"
            style={{ color: '#031522' }}
          >
            Desde arquitecturas web de alto rendimiento hasta sistemas backend distribuidos,
            diseño infraestructuras escalables que impulsan el crecimiento. Construyamos juntos
            algo robusto y técnicamente excepcional.
          </p>

          {/* Teal underline */}
          <div
            className="mt-6 lg:mt-4 h-1 w-12 lg:w-16 rounded-full"
            style={{ backgroundColor: '#3894A1' }}
          />
        </motion.div>

        {/* Center spacer */}
        <div className="hidden lg:block flex-1" />

        {/* Right — Experience badge */}
        <motion.div
          className="flex flex-col items-center lg:items-end mt-2 lg:mt-0"
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.35)}
        >
          {/* 5 stars */}
          <div className="flex gap-1 mb-1 lg:mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                icon="line-md:star-filled"
                width={20}
                height={20}
                style={{ color: '#3894A1' }}
              />
            ))}
          </div>

          <p
            className="text-4xl lg:text-5xl font-black leading-none"
            style={{ color: '#031522' }}
          >
            2 AÑOS
          </p>
          <p
            className="text-[10px] lg:text-xs font-semibold tracking-[0.2em] uppercase mt-1"
            style={{ color: '#031522' }}
          >
            DE EXPERIENCIA
          </p>
        </motion.div>
      </div>

      {/* ── Interactive Robot ──────────────────────────────── */}
      <motion.div
        className="relative mx-auto mt-14 mb-8 lg:m-0 flex justify-center lg:absolute lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2 w-48 sm:w-56 lg:w-64 z-[5] pointer-events-none"
        initial="hidden"
        animate="visible"
        variants={fadeUp(0.45)}
      >
        {/* Mobile background circle (Hidden on Desktop) */}
        <div
          className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full z-[-1]"
          style={{ backgroundColor: 'rgba(47, 64, 79, 0.3)' }}
          aria-hidden="true"
        />

        <InteractiveRobot />
      </motion.div>

      {/* ── CTA Button ─────────────────────────────────────── */}
      <motion.div
        className="relative w-full flex justify-center pb-8 lg:p-0 lg:w-auto lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
      >
        <button
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative overflow-hidden px-8 lg:px-10 py-4 lg:py-5 rounded-full text-xs lg:text-sm font-bold tracking-widest uppercase cursor-pointer active:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#3894A1]/20 whitespace-nowrap"
          style={{ backgroundColor: '#2F404F', color: '#F0F1EE' }}
        >
          {/* Animated Background */}
          <span className="absolute inset-0 bg-[#3894A1] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>

          {/* Content */}
          <span className="relative z-10 flex items-center gap-3">
            INICIAR PROYECTO
            <Icon
              icon="mdi:rocket-launch-outline"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
        </button>
      </motion.div>
    </section>
  )
}


