"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ChevronDown } from "lucide-react"

export function Slide01Title() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section
      data-slide="0"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Gradient glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <div
          className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono tracking-[0.2em] uppercase text-primary">
            Marketing Strategy · 2026
          </span>
        </div>

        {/* Title */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="animate-gradient-shine bg-[linear-gradient(270deg,#3b82f6,#8b5cf6,#ec4899,#8b5cf6,#3b82f6)] bg-clip-text text-transparent bg-[length:200%_auto]">
            The Apple Formula:
          </span>
          <br />
          <span className="text-white">Selling an Ecosystem</span>
        </h1>

        {/* Name */}
        <p
          className={`text-xl md:text-2xl text-secondary mt-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          Nazarii Voitiuk
        </p>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="flex flex-col items-center gap-2 text-secondary">
            <ChevronDown className="w-5 h-5 animate-bounce-subtle" />
          </div>
        </div>
      </div>
    </section>
  )
}
