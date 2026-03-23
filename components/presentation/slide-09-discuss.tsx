"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionTag } from "./section-tag"
import { ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react"

export function Slide09Discuss() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      data-slide="8"
      className="relative min-h-screen flex items-center justify-center py-24 px-6"
    >
      {/* Background glow biases */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Tag */}
        <div className="text-center">
          <div
            className={`mb-6 flex justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <SectionTag number="09" label="Audience Interaction" />
          </div>

          {/* Title */}
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Let&apos;s <span className="text-gradient">Discuss</span>
          </h2>
        </div>

        {/* The Giant Question */}
        <h3
          className={`text-3xl md:text-5xl font-bold text-white text-center mt-8 mb-16 leading-tight transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          Does it make life <span className="text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]">Easier</span><br/>
          or just take more <span className="text-red-400 drop-shadow-[0_0_20px_rgba(248,113,113,0.5)]">Money</span>?
        </h3>

        {/* The Standoff Visual */}
        <div
          className={`flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12 max-w-5xl mx-auto relative transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Custom Animations for Non-Hover Interactive Auto-Play */}
          <style>{`
            @keyframes standoffLeft {
              0%, 50%, 100% { transform: scale(1) translateY(0); border-top-color: rgba(74, 222, 128, 0.3); box-shadow: none; }
              25% { transform: scale(1.05) translateY(-10px); border-top-color: rgba(74, 222, 128, 1); box-shadow: 0 30px 60px -15px rgba(74, 222, 128, 0.2); }
            }
            @keyframes standoffRight {
              0%, 50%, 100% { transform: scale(1) translateY(0); border-top-color: rgba(248, 113, 113, 0.3); box-shadow: none; }
              75% { transform: scale(1.05) translateY(-10px); border-top-color: rgba(248, 113, 113, 1); box-shadow: 0 30px 60px -15px rgba(248, 113, 113, 0.2); }
            }
            @keyframes standoffGlowLeft {
              0%, 50%, 100% { opacity: 0; }
              25% { opacity: 1; }
            }
            @keyframes standoffGlowRight {
              0%, 50%, 100% { opacity: 0; }
              75% { opacity: 1; }
            }
            @keyframes standoffIconLeft {
              0%, 50%, 100% { transform: rotate(0deg) scale(1); box-shadow: 0 0 30px rgba(74,222,128,0.2); }
              25% { transform: rotate(-12deg) scale(1.1); box-shadow: 0 0 50px rgba(74,222,128,0.6); }
            }
            @keyframes standoffIconRight {
              0%, 50%, 100% { transform: rotate(0deg) scale(1); box-shadow: 0 0 30px rgba(248,113,113,0.2); }
              75% { transform: rotate(12deg) scale(1.1); box-shadow: 0 0 50px rgba(248,113,113,0.6); }
            }
          `}</style>

          {/* VS Badge */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full glass-card border flex-col items-center justify-center z-20 shadow-[0_0_30px_rgba(255,255,255,0.1)] bg-black/60 backdrop-blur-3xl">
             <span className="text-xl font-black text-white italic drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">VS</span>
          </div>

          {/* Left: Convenience */}
          <div 
            className="flex-1 glass-card p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center text-center border-t-2 relative overflow-hidden bg-gradient-to-b from-green-900/10 to-transparent"
            style={{ animation: 'standoffLeft 8s ease-in-out infinite' }}
          >
             {/* Background pulse */}
             <div 
               className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-green-500/20 rounded-full blur-[80px] pointer-events-none" 
               style={{ animation: 'standoffGlowLeft 8s ease-in-out infinite' }}
             />
             
             <div 
               className="relative z-10 w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20"
               style={{ animation: 'standoffIconLeft 8s ease-in-out infinite' }}
             >
                <ThumbsUp className="w-10 h-10 text-green-400" />
             </div>
             <h4 className="relative z-10 text-3xl font-bold text-white mb-4">Pure Magic</h4>
             <p className="relative z-10 text-secondary text-lg leading-relaxed font-medium">
               &ldquo;Everything just works.&rdquo; Seamless integration, zero setup, and perfect harmony between devices saves endless time and frustration.
             </p>
          </div>

          {/* Right: Money Trap */}
          <div 
             className="flex-1 glass-card p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center text-center border-t-2 relative overflow-hidden bg-gradient-to-b from-red-900/10 to-transparent"
             style={{ animation: 'standoffRight 8s ease-in-out infinite' }}
          >
             {/* Background pulse */}
             <div 
               className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-500/20 rounded-full blur-[80px] pointer-events-none" 
               style={{ animation: 'standoffGlowRight 8s ease-in-out infinite' }}
             />
             
             <div 
               className="relative z-10 w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20"
               style={{ animation: 'standoffIconRight 8s ease-in-out infinite' }}
             >
                <ThumbsDown className="w-10 h-10 text-red-400" />
             </div>
             <h4 className="relative z-10 text-3xl font-bold text-white mb-4">Golden Handcuffs</h4>
             <p className="relative z-10 text-secondary text-lg leading-relaxed font-medium">
               &ldquo;You&apos;re trapped.&rdquo; Forced upgrades, overpriced accessories, and complete vendor lock-in perfectly designed to drain your wallet.
             </p>
          </div>
        </div>

        {/* Presenter Note / Audience Prompt */}
        <div
          className={`mt-16 flex justify-center transition-all duration-1000 delay-[1000ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] animate-pulse">
             <MessageCircle className="w-5 h-5 text-white/70" />
             <p className="text-lg text-white/90 font-medium tracking-wide">Tell me what you think...</p>
          </div>
        </div>
      </div>
    </section>
  )
}
