"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionTag } from "./section-tag"
import { Check } from "lucide-react"

export function Slide04Architecture() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  const principles = [
    "White background",
    "Large photos",
    "Short text",
    "Simple & logical",
  ]

  return (
    <section
      data-slide="3"
      className="relative min-h-screen flex items-center justify-center py-24 px-6"
    >
      {/* Background glow */}
      <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Title Group */}
        <div className="text-center mb-16 px-4">
          <div
            className={`mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <SectionTag number="04" label="Design" />
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Clean <span className="text-gradient">Architecture</span>
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full px-4 md:px-8">
          {/* Left: Browser mockup */}
          <div
            className={`relative w-full transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Browser frame */}
            <div className="glass-card overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/10">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5 backdrop-blur-md">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-black/30 rounded-lg px-4 py-1.5 text-xs text-secondary text-center font-mono">
                    apple.com/iphone
                  </div>
                </div>
              </div>

              {/* Website content mockup simulating Apple's clean aesthetic */}
              <div className="bg-[#111] relative min-h-[350px] md:min-h-[500px] overflow-hidden group flex items-center justify-center">
                <img 
                  src="/apple-ad.png" 
                  alt="Apple Ad Banner" 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[20s] ease-linear group-hover:scale-110 opacity-100" 
                />
                {/* No text overlay here anymore, let the pristine image speak for itself */}
              </div>
            </div>
          </div>

          {/* Right: Text and Principles */}
          <div className="flex flex-col justify-center">
            <h3
              className={`text-3xl md:text-5xl text-white font-medium mb-12 leading-tight transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Remove the Noise.<br/>
              <span className="text-gradient font-bold drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Amplify the Message.</span>
            </h3>

            {/* Principles checklist with Sequential Auto-Highlight */}
            <div
              className={`flex flex-col gap-4 transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl glass transition-all duration-500 border border-white/5 border-l-2 border-l-transparent bg-white/5 backdrop-blur-md"
                  style={{ 
                    animation: `highlight-point 12s ease-in-out infinite`, 
                    animationDelay: `${index * 3}s` 
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shrink-0">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-lg md:text-xl font-semibold text-white tracking-wide">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
