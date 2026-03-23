"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionTag } from "./section-tag"
import { Users, Tv, Sparkles } from "lucide-react"

export function Slide07Show() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      data-slide="6"
      className="relative min-h-screen flex items-center justify-center py-24 px-6"
    >
      {/* Background glow */}
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Tag */}
        <div className="text-center mb-10 md:mb-16">
          <div
            className={`mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <SectionTag number="07" label="Events" />
          </div>

          {/* Title */}
          <h2
            className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            The Big <span className="text-gradient">Show</span>
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Cinematic Keynote Image Mockup */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-400 relative w-full ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
             <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.1)] border border-white/10 group bg-black">
                {/* Real User Image */}
                <img 
                   src="/keynote-bg.jpg" 
                   alt="Apple Keynote Presentation" 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-[1.05]" 
                />
                
                {/* Gradient overlay for text legibility at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* "LIVE" badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-red-600/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-red-500/50 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">Live Event</span>
                </div>

                {/* Event overlay info */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <div>
                        <p className="text-white text-base md:text-xl font-bold tracking-wide">Special Event</p>
                        <p className="text-white/60 text-xs md:text-sm mt-1 flex items-center gap-2">
                           <Users className="w-4 h-4" />
                           24,592,103 watching now
                        </p>
                    </div>
                </div>
             </div>
          </div>

          {/* Right: Text and Stats */}
          <div className="flex flex-col justify-center">
            
            <h3
              className={`text-3xl md:text-5xl text-white font-medium mb-12 leading-tight transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              Not an advertisement.<br/>
              <span className="text-gradient font-bold drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">An Epic Event.</span>
            </h3>

            {/* Interaction Stats */}
            <div
              className={`flex flex-col gap-6 relative transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
                <div 
                   className="glass-card p-6 md:p-8 rounded-3xl border-l-[3px] border-l-transparent relative z-10 flex gap-6 items-center bg-black/40 backdrop-blur-xl transition-all duration-500 group hover:border-l-blue-400 hover:bg-white/5"
                   style={{ animation: 'highlight-point 8s ease-in-out infinite', animationDelay: '0s' }}
                >
                   <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                      <Tv className="w-8 h-8 text-blue-400" />
                   </div>
                   <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">Millions of Viewers</h4>
                      <p className="text-secondary text-base leading-relaxed">People tune in worldwide exactly as if it were a major cultural broadcast.</p>
                   </div>
                </div>

                <div 
                   className="glass-card p-6 md:p-8 rounded-3xl border-l-[3px] border-l-transparent relative z-10 flex gap-6 items-center bg-black/40 backdrop-blur-xl transition-all duration-500 mt-2 group hover:border-l-purple-400 hover:bg-white/5"
                   style={{ animation: 'highlight-point 8s ease-in-out infinite', animationDelay: '4s' }}
                >
                   <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
                      <Sparkles className="w-8 h-8 text-purple-400" />
                   </div>
                   <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">The Grand Spectacle</h4>
                      <p className="text-secondary text-base leading-relaxed">They turn a standard product release into an awe-inspiring show.</p>
                   </div>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
