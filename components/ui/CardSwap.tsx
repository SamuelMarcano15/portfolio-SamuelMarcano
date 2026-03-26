"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CardSwapProps {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  scaleDistance?: number;
  verticalDistance?: number;
  horizontalDistance?: number;
  delay?: number;
}

export default function CardSwap({
  children,
  width = 560,
  height = 360,
  scaleDistance = 20,
  verticalDistance = 40,
  horizontalDistance = 40,
  delay = 3500,
}: CardSwapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    setCards(React.Children.toArray(children));
  }, [children]);

  useEffect(() => {
    if (!containerRef.current || cards.length === 0) return;

    const elements = containerRef.current.children;
    const totalCards = elements.length;

    gsap.set(elements, {
      x: (i) => i * horizontalDistance,
      y: (i) => -i * verticalDistance,
      scale: (i) => 1 - i * (scaleDistance / 1000), // Reduce size towards back
      zIndex: (i) => totalCards - i, // Front has highest z-index
      opacity: (i) => (i < 3 ? 1 - i * 0.2 : 0),
    });

    const ctx = gsap.context(() => {
      let currentIndex = 0;

      const swap = () => {
        const currentElement = elements[currentIndex];

        // Animate main card out (down and left slightly) and fade
        gsap.to(currentElement, {
          y: 150,
          x: -50,
          opacity: 0,
          scale: 1.05,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
             // Send card to the back of the stack
            gsap.set(currentElement, {
              x: (totalCards - 1) * horizontalDistance,
              y: -(totalCards - 1) * verticalDistance,
              scale: 1 - (totalCards - 1) * (scaleDistance / 1000),
              zIndex: 0,
            });

            // Move all other cards forward
            for (let i = 0; i < totalCards; i++) {
              if (i !== currentIndex) {
                const newPos = (i - currentIndex - 1 + totalCards) % totalCards;
                gsap.to(elements[i], {
                  x: newPos * horizontalDistance,
                  y: -newPos * verticalDistance,
                  scale: 1 - newPos * (scaleDistance / 1000),
                  zIndex: totalCards - newPos,
                  opacity: newPos < 3 ? 1 - newPos * 0.2 : 0,
                  duration: 0.6,
                  ease: "power2.out",
                });
              }
            }
            // Update currentIndex
            currentIndex = (currentIndex + 1) % totalCards;
          },
        });
      };

      const interval = setInterval(swap, delay);
      return () => clearInterval(interval);
    }, containerRef);

    return () => ctx.revert();
  }, [cards.length, verticalDistance, horizontalDistance, scaleDistance, delay]);

  return (
    <div 
      style={{ width, height, position: "relative" }} 
      className="card-swap-container"
    >
      <div ref={containerRef} className="w-full h-full relative">
        {cards.map((child, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full origin-top will-change-transform"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
