"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface SplitTextProps {
  text: string;
  delay?: number;
  className?: string;
  animationFrom?: { opacity: number; y: number };
  animationTo?: { opacity: number; y: number };
}

export default function SplitText({
  text,
  className = "",
  delay = 40,
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  {/* Divide el string en un arreglo de caracteres, incluyendo espacios */}
  const letters = text.split("");

  return (
    <span ref={ref} className={`inline-block origin-bottom ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={animationFrom}
          animate={hasAnimated ? animationTo : animationFrom}
          transition={{ duration: 0.6, delay: index * (delay / 1000), ease: [0.22, 1, 0.36, 1] }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
