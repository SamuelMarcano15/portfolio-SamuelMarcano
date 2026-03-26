import Hero from '@/components/sections/Hero'
import AboutMe from '@/components/sections/AboutMe'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  )
}