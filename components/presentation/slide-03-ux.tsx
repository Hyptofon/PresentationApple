"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionTag } from "./section-tag"
import { Heart, User, Sparkles } from "lucide-react"

export function Slide03UX() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      data-slide="2"
      className="relative min-h-screen flex items-center justify-center py-24 px-6"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Tag */}
        <div
          className={`mb-8 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <SectionTag number="03" label="User Experience" />
        </div>

        {/* Title */}
        <h2
          className={`text-4xl md:text-6xl font-bold tracking-tight mb-16 text-center transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          User Experience <span className="text-gradient">First</span>
        </h2>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mt-12">
          
          {/* Visual Concept: Specs vs Experience */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-300 relative h-[450px] w-full max-w-md mx-auto ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Background: Boring Specs (Blurred & Faded) */}
            <div className="absolute top-[0%] right-[15%] w-[85%] h-[75%] border border-white/5 rounded-3xl p-6 opacity-30 transform rotate-[-8deg] -translate-x-4 blur-[3px] overflow-hidden flex flex-col gap-4 bg-black/80 shadow-inner z-0">
              <h5 className="text-gray-400 font-mono text-sm border-b border-white/10 pb-2">Technical Specifications</h5>
              <div className="text-[11px] font-mono text-gray-500 flex flex-col gap-3 mt-2">
                <span className="flex justify-between"><span>Architecture</span><span>ARMv9 64-bit</span></span>
                <span className="flex justify-between"><span>Transistors</span><span>16 Billion</span></span>
                <span className="flex justify-between"><span>Clock Speed</span><span>3.46 GHz</span></span>
                <div className="h-px w-full bg-gray-800 mt-1" />
                <span className="flex justify-between mt-1"><span>Neural Engine</span><span>16-Core</span></span>
                <span className="flex justify-between"><span>Memory Bandwidth</span><span>100 GB/s</span></span>
                <div className="h-px w-full bg-gray-800 mt-1" />
                <span className="flex justify-between mt-1"><span>Fabrication</span><span>5nm Process</span></span>
                <span className="flex justify-between"><span>TDP</span><span>5.0W</span></span>
              </div>
            </div>

            {/* Foreground: The User Experience (Pulsing, Clear, Premium) */}
            <div className="absolute bottom-[5%] left-[5%] right-[20%] w-[90%] h-[75%] glass-card rounded-3xl p-8 flex border border-white/20 transform transition-all duration-500 shadow-[0_0_50px_rgba(59,130,246,0.2)] z-10 flex-col items-center justify-center gap-6 overflow-hidden">
               
               {/* AI Generated Abstract Graphic */}
               <div className="absolute inset-0 w-full h-full z-0">
                 <img src="/ux-bg.png" alt="Premium UX" className="w-full h-full object-cover opacity-70 mix-blend-screen scale-125 animate-pulse-glow" style={{ animationDuration: '8s' }} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
               </div>
               
               {/* Label */}
               <div className="text-center relative z-10 mt-auto pt-24">
                 <h4 className="text-white font-bold text-3xl mb-1 tracking-wide drop-shadow-md">Human First</h4>
                 <p className="text-cyan-200/90 text-sm font-medium drop-shadow-md">Technology that empowers</p>
               </div>

                {/* Floating Micro-elements tightly orbiting */}
                <div className="absolute top-6 left-6 w-12 h-12 rounded-full glass flex items-center justify-center animate-float shadow-[0_0_20px_rgba(236,72,153,0.3)] border border-pink-500/30">
                  <Heart className="w-5 h-5 text-pink-400" />
                </div>
                <div className="absolute top-12 right-6 w-10 h-10 rounded-full glass flex items-center justify-center animate-float border border-yellow-500/30" style={{ animationDelay: '1.5s' }}>
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </div>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Focus on the <span className="text-gradient">Experience</span>
            </h3>
            
            <div className="pl-4 border-l-4 border-primary/50 mb-10">
              <p className="text-xl md:text-2xl text-secondary leading-relaxed">
                Sell what the user can <span className="text-white font-semibold">do</span>,<br/>
                not the technical specs.
              </p>
            </div>
            
            {/* Key premium points list - Auto Animated Sequence */}
            <div className="flex flex-col gap-4">
              {[
                { title: 'Simple', desc: 'No manuals needed.' },
                { title: 'Intuitive', desc: 'Works exactly as expected.' },
                { title: 'Human-centered', desc: 'Designed for people, not engineers.' }
              ].map((point, i) => (
                <div 
                  key={point.title}
                  className="glass-card p-4 px-6 rounded-2xl flex items-center justify-between transition-all duration-300 border-l-2 border-l-transparent"
                  style={{ 
                    animation: `highlight-point 9s ease-in-out infinite`, 
                    animationDelay: `${i * 3}s` 
                  }}
                >
                  <span className="text-white font-semibold text-lg">{point.title}</span>
                  <span className="text-secondary text-sm transition-colors duration-300">{point.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
