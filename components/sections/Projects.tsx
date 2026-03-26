"use client";

import ScrollStack from '@/components/ui/ScrollStack';

const projects = [
  { title: "Plataforma web Bekka", image: "/Bekka.png", link: "https://bekkacorporation.com/" },
  { title: "Sistema de aprendizaje Elara", image: "/Elara.png", link: "" },
  { title: "LadingPage Fender", image: "/fender.png", link: "https://fendermedical.com/" },
  { title: "LadingPage Netgen", image: "/netgen.png", link: "https://netgenteam.com/" },
  { title: "Plataforma de pagos ASAP", image: "/pagoasap_logo.jfif", link: "" },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-[#031522] relative z-20">
      <div className="container mx-auto px-4 mb-2">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white text-center tracking-tight">
          Proyectos
        </h2>
      </div>

      {/* El componente ScrollStack envuelve las cards */}
      <div className="relative">
        <ScrollStack
          items={projects}
          stackOverlap={25} // Ajuste de cuanto se solapan
          scaleFactor={0.04} // Efecto de alejamiento de la card anterior
        />
      </div>
    </section>
  );
}
