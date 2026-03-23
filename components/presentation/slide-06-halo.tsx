"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionTag } from "./section-tag"
import { Smartphone, Watch, Headphones, ArrowRight } from "lucide-react"

export function Slide06Halo() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      data-slide="5"
      className="relative min-h-screen flex items-center justify-center py-24 px-6"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Tag */}
        <div className="text-center mb-16">
          <div
            className={`mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <SectionTag number="06" label="Halo Effect" />
          </div>

          {/* Title */}
          <h2
            className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            The <span className="text-gradient drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">&ldquo;Halo&rdquo;</span> Effect
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: The Literal Halo Visual */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-400 relative h-[450px] md:h-[550px] w-full ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
             {/* Central iPhone - The Core */}
             <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 z-20">
                {/* The Halo Rings (Expanding outward) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-yellow-500/80 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-yellow-400/40 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-yellow-300/20 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '2s' }} />
                
                {/* iPhone Icon Box */}
                <div className="w-24 h-40 md:w-32 md:h-52 glass-card rounded-[2rem] flex flex-col items-center justify-center border-2 border-yellow-500/50 shadow-[0_0_50px_rgba(234,179,8,0.3)] bg-gradient-to-br from-yellow-500/20 to-black/80 backdrop-blur-xl relative z-20">
                   <Smartphone className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]" />
                   <div className="absolute bottom-6 text-[10px] md:text-xs font-bold text-yellow-500 tracking-widest uppercase">The Core</div>
                </div>
             </div>

             {/* Affected Products (Bathed in Halo on the right side) */}
             <div className="absolute right-[15%] top-[15%] z-30 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-20 h-20 md:w-24 md:h-24 glass-card rounded-2xl flex items-center justify-center border border-white/10 border-l-yellow-400/30 shadow-[0_0_30px_rgba(250,204,21,0.15)] bg-gradient-to-l from-white/5 to-yellow-500/10 backdrop-blur-md">
                   <Watch className="w-10 h-10 md:w-12 md:h-12 text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                </div>
             </div>
             
             <div className="absolute right-[15%] bottom-[15%] z-30 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-20 h-20 md:w-24 md:h-24 glass-card rounded-2xl flex items-center justify-center border border-white/10 border-l-yellow-400/30 shadow-[0_0_30px_rgba(250,204,21,0.15)] bg-gradient-to-l from-white/5 to-yellow-500/10 backdrop-blur-md">
                   <Headphones className="w-10 h-10 md:w-12 md:h-12 text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                </div>
             </div>
             
             {/* Glowing light rays sweeping from phone to accessories */}
             <div className="absolute top-1/2 left-[30%] w-[350px] h-[3px] bg-gradient-to-r from-yellow-500/60 via-yellow-400/30 to-transparent -translate-y-1/2 rotate-[-25deg] blur-md origin-left animate-pulse-glow" style={{ animationDuration: '3s' }} />
             <div className="absolute top-1/2 left-[30%] w-[350px] h-[3px] bg-gradient-to-r from-yellow-500/60 via-yellow-400/30 to-transparent -translate-y-1/2 rotate-[25deg] blur-md origin-left animate-pulse-glow" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center">
            
            <h3
              className={`text-3xl md:text-5xl text-white font-medium mb-12 leading-tight transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              A Smart <span className="text-yellow-400 font-bold drop-shadow-[0_0_30px_rgba(250,204,21,0.4)]">Psychological</span> Trick.
            </h3>

            {/* The Trick Flow */}
            <div
              className={`flex flex-col gap-6 relative transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Vertical connecting line */}
              <div className="absolute left-8 top-10 bottom-10 w-1 bg-gradient-to-b from-yellow-500/60 via-white/10 to-transparent rounded-full" />
              
              <div 
                className="glass-card p-6 md:p-8 rounded-3xl border-l-[3px] border-l-transparent relative z-10 flex gap-6 items-center bg-black/40 backdrop-blur-xl transition-all duration-500"
                style={{ animation: 'highlight-point-yellow 8s ease-in-out infinite', animationDelay: '0s' }}
              >
                 <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center shrink-0 border border-yellow-500/30 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                    <Smartphone className="w-8 h-8 text-yellow-400" />
                 </div>
                 <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">Buy a Great iPhone</h4>
                    <p className="text-secondary text-base leading-relaxed">Experience true premium quality and flawless ecosystem integration.</p>
                 </div>
              </div>

              <div 
                className="glass-card p-6 md:p-8 rounded-3xl border-l-[3px] border-l-transparent relative z-10 flex gap-6 items-center bg-black/40 backdrop-blur-xl transition-all duration-500 mt-2"
                style={{ animation: 'highlight-point-yellow 8s ease-in-out infinite', animationDelay: '4s' }}
              >
                 <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <Watch className="w-8 h-8 text-white/70" />
                 </div>
                 <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">Desire the Rest</h4>
                    <p className="text-secondary text-base leading-relaxed">You naturally want an Apple Watch or AirPods to pair with it perfectly.</p>
                 </div>
              </div>
            </div>
            
            <p
              className={`mt-12 text-xl md:text-2xl text-white/90 leading-relaxed font-medium pl-6 border-l-2 border-yellow-500/50 transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              One masterpiece <span className="text-yellow-400 font-bold">sells</span> the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
