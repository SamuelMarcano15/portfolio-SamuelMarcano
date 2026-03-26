"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ProjectItem {
  title: string;
  image: string;
  link?: string;
}

interface ScrollStackProps {
  items: ProjectItem[];
  stackOverlap?: number;
  scaleFactor?: number;
}

const Card = ({
  project,
  i,
  progress,
  range,
  targetScale,
  overlap,
}: {
  project: ProjectItem;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  overlap: number;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center sticky top-0 overflow-hidden">
      <motion.div
        style={{
          scale,
          top: `calc(${i * overlap}px)`, // Offset incremental
        }}
        className="relative overflow-hidden rounded-[2.5rem] w-[95%] max-w-5xl h-[500px] md:h-[600px] shadow-2xl origin-top border border-white/10"
      >
        {/* Imagen de fondo */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 object-cover w-full h-full"
        />

        {/* Overlay desvanecido (Tu requerimiento) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

        {/* Contenido */}
        <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-2xl leading-tight uppercase tracking-tight">
            {project.title}
          </h3>
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-gray-200 transition-colors"
            >
              Visitar Proyecto
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default function ScrollStack({
  items,
  stackOverlap = 20,
  scaleFactor = 0.05,
}: ScrollStackProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative w-full" style={{ paddingBottom: '10vh' }}>
      {items.map((project, i) => {
        const targetScale = 1 - (items.length - i) * scaleFactor;
        const range = [i * (1 / items.length), 1];

        return (
          <Card
            key={i}
            i={i}
            project={project}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
            overlap={stackOverlap}
          />
        );
      })}
    </div>
  );
}
