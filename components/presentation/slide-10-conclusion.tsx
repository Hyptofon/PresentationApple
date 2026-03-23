"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionTag } from "./section-tag"
import { Apple } from "lucide-react"

export function Slide10Conclusion() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      data-slide="9"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden"
    >
      <style>{`
        @keyframes shine-sweep {
          0% { transform: translateX(-150%) skewX(-15deg); }
          50%, 100% { transform: translateX(250%) skewX(-15deg); }
        }
        .animate-shine {
          animation: shine-sweep 6s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }
      `}</style>

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Tag */}
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionTag number="10" label="Conclusion" />
        </div>

        {/* The Monolith Core Message */}
        <div
          className={`glass-card relative overflow-hidden p-10 md:p-16 w-full max-w-4xl mx-auto mb-20 border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] transition-all duration-[1500ms] delay-[400ms] ease-out ${
            isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-16"
          }`}
        >
          {/* Sweeping Light Animation */}
          <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine pointer-events-none" />
          
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] pointer-events-none" />

          <p className="relative z-10 text-2xl md:text-4xl font-light text-white/80 leading-relaxed mb-10 tracking-wide">
            Apple&apos;s marketing works because they build a <span className="font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">comfortable system</span> for the user.
          </p>

          <h3 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-200 to-purple-400 leading-tight pb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            They sell <span className="text-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">emotions</span> and <span className="text-gradient drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">simplicity</span>,<br/>
            <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-white/40 mt-6 block tracking-wide">not just metal and glass.</span>
          </h3>
        </div>

        {/* Thank you */}
        <div
          className={`flex flex-col items-center transition-all duration-[2000ms] delay-[1000ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.15)] relative overflow-hidden mb-8">
             <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none rounded-3xl" />
             <Apple className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          </div>

          <h3 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Thank you!
          </h3>
          <p className="text-xl md:text-2xl font-light text-secondary uppercase tracking-[0.2em]">
            For your attention
          </p>
        </div>

      </div>
    </section>
  )
}
