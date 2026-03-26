'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const leftNav = [
  { label: 'ACERCA DE', href: '#acerca-de', icon: 'mdi:account-outline' },
  { label: 'TECH STACK', href: '#tech-stack', icon: 'mdi:layers-outline' },
]

const rightNav = [
  { label: 'PROYECTOS', href: '#proyectos', icon: 'mdi:briefcase-outline' },
  { label: 'CONTACTO', href: '#contacto', icon: 'mdi:email-outline' },
]

const allNav = [...leftNav, ...rightNav]

export default function Header() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <motion.nav
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className={`pointer-events-auto flex md:grid md:grid-cols-3 items-center justify-between md:justify-center w-full transition-all duration-300 rounded-full ${
            isScrolled 
              ? 'max-w-4xl px-6 md:px-8 py-3 bg-[#2F404F]/70 backdrop-blur-md shadow-lg shadow-black/20' 
              : 'max-w-7xl px-8 md:px-10 py-5 md:py-6 bg-[#2F404F]'
          }`}
        >
          {/* Left nav (Desktop) */}
          <div className="hidden md:flex items-center justify-end gap-8 pl-2">
            {leftNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center gap-2.5 px-2 py-1 text-xs font-bold text-white/70 hover:text-white tracking-widest uppercase transition-colors duration-300"
              >
                <Icon 
                  icon={item.icon} 
                  className="w-5 h-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:text-[#3894A1]" 
                />
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#3894A1] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </span>
              </Link>
            ))}
          </div>

          {/* Center — Brand name */}
          <div className="flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm font-bold tracking-[0.22em] text-white uppercase whitespace-nowrap hover:text-white/80 transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              SAMUEL MARCANO
            </button>
          </div>

          {/* Right nav (Desktop) */}
          <div className="hidden md:flex items-center justify-start gap-8 pr-2">
            {rightNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center gap-2.5 px-2 py-1 text-xs font-bold text-white/70 hover:text-white tracking-widest uppercase transition-colors duration-300"
              >
                <Icon 
                  icon={item.icon} 
                  className="w-5 h-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:text-[#3894A1]" 
                />
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#3894A1] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center p-1 text-white hover:text-white/80 transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Icon icon="mdi:menu" className="w-7 h-7" />
          </button>
        </motion.nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
               onClick={() => setIsMenuOpen(false)}
               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
               initial={{ x: '100%' }}
               animate={{ x: 0 }}
               exit={{ x: '100%' }}
               transition={{ type: 'spring', damping: 25, stiffness: 200 }}
               className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#031522] z-[70] p-8 shadow-2xl flex flex-col border-l border-white/5"
            >
               <div className="flex justify-end mb-12">
                 <button 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label="Cerrar menú"
                 >
                   <Icon icon="mdi:close" className="w-8 h-8" />
                 </button>
               </div>
               <nav className="flex flex-col gap-8">
                 {allNav.map((item) => (
                   <Link
                     key={item.label}
                     href={item.href}
                     onClick={() => setIsMenuOpen(false)}
                     className="group flex items-center gap-4 text-sm font-bold text-white/70 hover:text-white tracking-widest uppercase transition-colors duration-300"
                   >
                     <Icon 
                       icon={item.icon} 
                       className="w-6 h-6 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:text-[#3894A1]" 
                     />
                     <span>{item.label}</span>
                   </Link>
                 ))}
               </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
