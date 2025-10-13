"use client";

import { useEffect, useState } from "react";

const core = { name: "React", icon: "⚛️", color: "#61DAFB" };

const orbiters = [
  {
    name: "JavaScript",
    icon: "JS",
    color: "#F7DF1E",
    orbit: 120,
    duration: 18,
  },
  {
    name: "Next.js",
    icon: "▲",
    color: "#000000",
    lineColor: "#888888",
    orbit: 160,
    duration: 22,
  },
  {
    name: "TypeScript",
    icon: "TS",
    color: "#3178C6",
    orbit: 200,
    duration: 26,
  },
];

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[620px]">
      {/* Texto original */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          <span className="text-balance">Jesus Daniel Gonzalez Ochoa</span>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
          Desarrollador Frontend
        </h2>
        <p className="mt-4 max-w-md leading-normal text-muted-foreground">
          Construyo experiencias digitales accesibles y modernas para la web.
        </p>
      </div>

      {/* Sistema planetario al estilo original pero reducido */}
      <div className="absolute right-8 top-56 w-[400px] h-[400px] pointer-events-none">
        <div className="relative w-full h-full">
          {/* Núcleo React */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 ${
                isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{
                background: "radial-gradient(circle, #61DAFB, #21D4FD)",
                boxShadow:
                  "0 0 24px rgba(97, 218, 251, 0.8), 0 0 48px rgba(97, 218, 251, 0.4)",
                animation: isVisible
                  ? "sun-pulse 3s ease-in-out infinite"
                  : "none",
              }}
            >
              <span className="text-3xl">⚛️</span>
            </div>
          </div>

          {/* Órbitas punteadas (una por planeta) */}
          {orbiters.map((tech, index) => (
            <div
              key={`orbit-${index}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed opacity-30"
              style={{
                width: `${tech.orbit * 2}px`,
                height: `${tech.orbit * 2}px`,
                borderColor: tech.lineColor || tech.color,
                animation: isVisible
                  ? `orbit-glow 4s ease-in-out infinite ${index * 0.3}s`
                  : "none",
              }}
            />
          ))}

          {/* Planetas: cada uno gira en su propia órbita */}
          {orbiters.map((tech, index) => (
            <div key={tech.name}>
              {/* Rotación de la órbita */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transformOrigin: "center",
                  animation: isVisible
                    ? `orbit-spin-${index} ${tech.duration}s linear infinite`
                    : "none",
                }}
              >
                {/* Planeta (con hover) */}
                <div
                  className="absolute w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-700 cursor-pointer group pointer-events-auto"
                  style={{
                    background: `linear-gradient(135deg, ${tech.color}, ${tech.color}99)`,
                    border: `2px solid ${tech.color}`,
                    color: tech.color === "#000000" ? "#fff" : "#000",
                    boxShadow: `0 0 12px ${tech.color}60, inset 0 0 6px ${tech.color}30`,
                    transform: `translateX(${tech.orbit}px)`,
                  }}
                >
                  {tech.icon}

                  {/* Tooltip: aparece SOLO al pasar cursor */}
                  <div
                    className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 whitespace-nowrap text-xs font-semibold"
                    style={{
                      background: tech.color,
                      color: tech.color === "#000000" ? "#fff" : "#000",
                      boxShadow: `0 4px 12px ${tech.color}50`,
                    }}
                  >
                    {tech.name}
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                      style={{ borderTopColor: tech.color }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes sun-pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        @keyframes orbit-glow {
          0%,
          100% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.4;
          }
        }
        /* Cada planeta gira en su propia órbita */
        @keyframes orbit-spin-0 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-spin-1 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-spin-2 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
