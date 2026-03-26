"use client";

import React, { useEffect, useRef } from 'react';

export default function InteractiveRobot() {
  const pupilaIzqRef = useRef<SVGCircleElement>(null);
  const pupilaDerRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const pupilas = [pupilaIzqRef.current, pupilaDerRef.current];

      pupilas.forEach((pupila) => {
        if (!pupila) return;
        const rect = pupila.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const distance = 12; // Radio máximo de movimiento
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        pupila.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-full relative pointer-events-none">
      <svg viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
        <defs>
          <filter id="led-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="bodyGradient" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F0F4F8" />
            <stop offset="100%" stopColor="#D1D9E6" />
          </radialGradient>

          <radialGradient id="shadowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="200" cy="410" rx="65" ry="12" fill="url(#shadowGradient)">
          <animate attributeName="rx" values="65;50;65" dur="4s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.25;0.1;0.25" dur="4s" repeatCount="indefinite" />
        </ellipse>

        <g id="robot-float">
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -15; 0 0" dur="4s" repeatCount="indefinite" />

          {/* Arms */}
          <path d="M135,240 Q105,245 110,300" stroke="url(#bodyGradient)" strokeWidth="18" strokeLinecap="round" fill="none" opacity="0.95" />
          <path d="M265,240 Q295,245 290,300" stroke="url(#bodyGradient)" strokeWidth="18" strokeLinecap="round" fill="none" opacity="0.95" />

          {/* Body */}
          <path d="M145,230 Q145,360 200,360 Q255,360 255,230 Z" fill="url(#bodyGradient)" stroke="#E2E8F0" strokeWidth="1" />
          
          <rect x="185" y="245" width="30" height="3" rx="1.5" fill="#C5D0DC" />
          <circle cx="200" cy="270" r="7" fill="#00D1FF" filter="url(#led-glow)" opacity="0.85" />
          <circle cx="200" cy="270" r="3" fill="#FFFFFF" opacity="0.9" pointerEvents="none" />

          <g id="head-group">
            <circle cx="200" cy="130" r="75" fill="url(#bodyGradient)" stroke="#E2E8F0" strokeWidth="1.5" />
            
            <rect x="135" y="105" width="130" height="55" rx="27.5" fill="#0A0A0A" />
            <path d="M145,115 Q200,105 255,115 Q250,130 150,130 Z" fill="#FFFFFF" opacity="0.05" pointerEvents="none" />

            <g filter="url(#led-glow)">
              <g id="ojo-izquierdo">
                <circle cx="165" cy="132.5" r="16" fill="transparent" />
                <circle ref={pupilaIzqRef} id="pupila-izquierda" cx="165" cy="132.5" r="11" fill="#00D1FF" style={{ transition: 'transform 0.08s linear' }} />
              </g>

              <g id="ojo-derecha">
                <circle cx="235" cy="132.5" r="16" fill="transparent" />
                <circle ref={pupilaDerRef} id="pupila-derecha" cx="235" cy="132.5" r="11" fill="#00D1FF" style={{ transition: 'transform 0.08s linear' }} />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
