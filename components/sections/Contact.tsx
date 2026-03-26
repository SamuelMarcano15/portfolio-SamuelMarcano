'use client'

import { motion, type Variants } from 'framer-motion'
import Button from '@/components/ui/Button'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { siteConfig } from '@/config/site'

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function Contact() {
  return (
    <footer id="contacto" className="py-24 px-6 border-t border-white/8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8"
      >
        <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.3em] uppercase text-primary">
          ¿Listo Para Llevar Tu Proyecto Al Siguiente Nivel?
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-black uppercase text-foreground leading-tight">
          Ingeniería de Calidad,<br />Experiencia Web Premium.
        </motion.h2>

        <motion.div variants={fadeUp}>
          <a href={`https://cal.com/samuel-marcano-kvahd4/secret?overlayCalendar=true`} target='_blank'>
            <Button size="lg" className="shadow-xl shadow-primary/20">
              <FaEnvelope />
              Contáctame Hoy
            </Button>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={fadeUp} className="flex items-center gap-6 text-2xl text-foreground/40 mt-4">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={siteConfig.social.email}
            className="hover:text-primary transition-colors duration-200"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        <motion.p variants={fadeUp} className="text-xs text-foreground/30 mt-4">
          © 2026 Samuel Marcano · Ingeniero de Sistemas
        </motion.p>
      </motion.div>
    </footer>
  )
}
