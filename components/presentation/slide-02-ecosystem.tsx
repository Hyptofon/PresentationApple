"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionTag } from "./section-tag"
import { Smartphone, Laptop, Headphones } from "lucide-react"

export function Slide02Ecosystem() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      data-slide="1"
      className="relative min-h-screen flex items-center justify-center py-24 px-6"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Tag */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <SectionTag number="02" label="Ecosystem" />
        </div>

        {/* Title */}
        <h2
          className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          The Apple <span className="text-gradient">Ecosystem</span>
        </h2>

        {/* High-End Ecosystem Diagram */}
        {/* High-End Ecosystem Diagram */}
        <div
          className={`relative my-20 h-[500px] w-full max-w-4xl mx-auto flex items-center justify-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {/* Ambient Glows under devices */}
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-[80%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-[80%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

          {/* Central Connecting Data Streams (Triangle) */}
          <style>{`
            @keyframes data-stream {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -80; }
            }
          `}</style>
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
            <defs>
              {/* Gradients for connections */}
              <linearGradient id="link-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.8)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.8)" />
              </linearGradient>
              <linearGradient id="link-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.8)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0.8)" />
              </linearGradient>
              <linearGradient id="link-3" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.8)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.8)" />
              </linearGradient>
              
              <filter id="intense-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Base faded lines connecting them all */}
            <line x1="50%" y1="20%" x2="25%" y2="80%" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            <line x1="25%" y1="80%" x2="75%" y2="80.1%" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            <line x1="75%" y1="80.1%" x2="50%" y2="20%" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />

            {/* Glowing animated data transferring from Mac to iPhone */}
            <line
              x1="50%" y1="20%" x2="25%" y2="80%"
              stroke="url(#link-1)"
              strokeWidth="4"
              strokeDasharray="15 25"
              filter="url(#intense-glow)"
              style={{ animation: "data-stream 1.5s linear infinite" }}
            />
            {/* Glowing animated data transferring from iPhone to AirPods */}
            <line
              x1="25%" y1="80%" x2="75%" y2="80.1%"
              stroke="url(#link-2)"
              strokeWidth="4"
              strokeDasharray="15 25"
              filter="url(#intense-glow)"
              style={{ animation: "data-stream 1.5s linear infinite reverse" }}
            />
            {/* Glowing animated data transferring from AirPods to Mac */}
            <line
              x1="75%" y1="80.1%" x2="50%" y2="20%"
              stroke="url(#link-3)"
              strokeWidth="4"
              strokeDasharray="15 25"
              filter="url(#intense-glow)"
              style={{ animation: "data-stream 1.5s linear infinite" }}
            />
          </svg>

          {/* Top Center: Mac */}
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer animate-float">
            <div className="absolute inset-0 bg-indigo-500/40 rounded-3xl blur-xl group-hover:bg-indigo-500/60 transition-all duration-500" />
            <div className="glass-card p-6 md:p-8 flex flex-col items-center gap-3 w-32 md:w-40 transform group-hover:scale-110 transition-all duration-500 border border-white/20 relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                <Laptop className="w-8 h-8 text-white" />
              </div>
              <span className="font-bold tracking-wide text-lg text-white">Mac</span>
            </div>
          </div>

          {/* Bottom Left: iPhone */}
          <div className="absolute top-[80%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="absolute inset-0 bg-purple-500/40 rounded-3xl blur-xl group-hover:bg-purple-500/60 transition-all duration-500" />
            <div className="glass-card p-4 md:p-6 flex flex-col items-center gap-2 md:gap-3 w-28 md:w-36 transform group-hover:scale-110 transition-all duration-500 border border-white/20 relative">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <span className="font-bold tracking-wide text-white text-base">iPhone</span>
            </div>
          </div>

          {/* Bottom Right: AirPods */}
          <div className="absolute top-[80%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 bg-cyan-500/40 rounded-3xl blur-xl group-hover:bg-cyan-500/60 transition-all duration-500" />
            <div className="glass-card p-4 md:p-6 flex flex-col items-center gap-2 md:gap-3 w-28 md:w-36 transform group-hover:scale-110 transition-all duration-500 border border-white/20 relative">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                <Headphones className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <span className="font-bold tracking-wide text-white text-base">AirPods</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div
          className={`flex flex-col gap-2 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-2xl md:text-3xl text-white font-medium">
            Not just a device. A <span className="text-gradient font-semibold">System</span>.
          </p>
          <p className="text-xl md:text-2xl text-secondary">Seamlessly Connected</p>
        </div>
      </div>
    </section>
  )
}
