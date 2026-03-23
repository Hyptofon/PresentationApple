"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionTag } from "./section-tag"
import { Shield } from "lucide-react"

export function Slide05Privacy() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      data-slide="4"
      className="relative min-h-screen flex items-center justify-center py-24 px-6"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Tag */}
        <div className="text-center mb-16">
          <div
            className={`mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <SectionTag number="05" label="Secret Weapon" />
          </div>

          {/* Title */}
          <h2
            className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Privacy as <span className="text-gradient">Marketing</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Visual (The Vault iPhone) */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-400 relative ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* The iPhone Frame */}
            <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[640px] rounded-[3.5rem] border-[12px] border-zinc-900 bg-black overflow-hidden shadow-[0_0_80px_rgba(34,197,94,0.15)] group flex flex-col items-center justify-center">
              
              {/* Dynamic Data Particles Trapped Inside */}
              <div className="absolute inset-0 opacity-80 mix-blend-screen">
                <div className="absolute top-[10%] left-[20%] w-3 h-3 bg-green-400 rounded-full animate-float blur-[1px]" />
                <div className="absolute top-[30%] right-[15%] w-4 h-4 bg-emerald-300 rounded-full animate-float blur-[2px]" style={{ animationDelay: '1s', animationDuration: '5s' }} />
                <div className="absolute bottom-[25%] left-[30%] w-2 h-2 bg-green-200 rounded-full animate-float blur-[1px]" style={{ animationDelay: '2s', animationDuration: '4s' }} />
                <div className="absolute bottom-[10%] right-[25%] w-5 h-5 bg-green-500 rounded-full animate-float blur-[3px]" style={{ animationDelay: '0.5s', animationDuration: '6s' }} />
                
                {/* SVG Connecting Lines Trapped Inside */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <line x1="20%" y1="10%" x2="85%" y2="30%" stroke="rgba(52,211,118,0.5)" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite_reverse]" style={{ transformOrigin: '50% 50%' }} />
                  <line x1="85%" y1="30%" x2="30%" y2="75%" stroke="rgba(52,211,118,0.5)" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: '50% 50%' }} />
                </svg>
              </div>

              {/* Core Lock Graphic */}
              <div className="relative z-10 w-32 h-32 rounded-[2rem] glass-card flex items-center justify-center border border-green-500/30 group-hover:border-green-400/60 transition-colors duration-500 shadow-[0_0_40px_rgba(34,197,94,0.2)] group-hover:shadow-[0_0_60px_rgba(34,197,94,0.4)]">
                <Shield className="w-16 h-16 text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
                
                {/* Scanner line going up and down */}
                <div className="absolute left-0 right-0 h-[2px] bg-green-400 shadow-[0_0_15px_rgba(74,222,128,1)] top-1/2 -translate-y-1/2 animate-[pulse-glow_2s_ease-in-out_infinite]" />
              </div>

              {/* Text inside phone */}
              <p className="absolute bottom-12 text-green-400/80 font-mono text-sm tracking-widest uppercase">Encrypted</p>
              
              {/* Outer Glow restricted to phone border */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(34,197,94,0.15)] pointer-events-none" />
            </div>
            
            {/* Deflecting particles (Data bouncing OFF the phone from the outside) */}
            <div className="absolute -top-10 -right-10 w-4 h-4 bg-red-500/50 rounded-full blur-[2px] animate-float" />
            <div className="absolute top-1/2 -left-12 w-3 h-3 bg-red-400/40 rounded-full blur-[1px] animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute -bottom-8 -right-4 w-5 h-5 bg-red-600/50 rounded-full blur-[3px] animate-float" style={{ animationDelay: '2s' }} />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center">
            
            <h3
              className={`text-3xl md:text-5xl text-white font-medium mb-10 leading-tight transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              Selling <span className="text-green-400 font-bold drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">Trust.</span>
            </h3>

            {/* Classic Apple Quote */}
            <div
              className={`glass-card p-8 md:p-10 rounded-3xl border-l-4 border-l-green-500 transition-all duration-1000 delay-800 relative overflow-hidden group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Subtle green sweeping highlight */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-green-500/10 to-transparent -translate-x-full animate-[gradient-shine_4s_ease-in-out_infinite]" />
              
              <blockquote className="text-xl md:text-3xl font-medium italic text-white leading-relaxed relative z-10">
                &ldquo;What happens on your iPhone,<br/>stays on your iPhone.&rdquo;
              </blockquote>
              <p className="mt-6 text-green-400/80 font-mono text-sm tracking-widest uppercase relative z-10">
                — Disrupted The Industry
              </p>
            </div>
            
            {/* Impact statement */}
            <p
              className={`mt-10 text-xl text-secondary leading-relaxed pl-4 border-l-2 border-white/10 transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Apple turned a boring technical requirement <span className="text-white/70">(Data Protection)</span> into their most powerful marketing weapon.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
