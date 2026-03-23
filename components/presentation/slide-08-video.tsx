"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionTag } from "./section-tag"
import { MonitorPlay, MonitorOff } from "lucide-react"

export function Slide08Video() {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const [theaterMode, setTheaterMode] = useState(false)

  return (
    <section
      data-slide="7"
      className="relative min-h-screen py-24 px-4 md:px-8 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Theater Dimming */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-1000 z-0 pointer-events-none ${theaterMode ? "opacity-90" : "opacity-0"}`} 
      />

      {/* Default Background glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[150px] transition-opacity duration-1000 ${theaterMode ? "opacity-0" : "opacity-100"}`} />

      <div ref={ref} className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Toggle Theater Mode Button */}
        <div
          className={`absolute top-0 right-0 z-50 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <button 
            onClick={() => setTheaterMode(!theaterMode)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full glass border transition-all duration-500 hover:scale-105 active:scale-95 ${theaterMode ? "border-red-500/50 text-red-400 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.2)]" : "border-white/10 text-white hover:bg-white/10"}`}
          >
             {theaterMode ? <MonitorOff className="w-5 h-5" /> : <MonitorPlay className="w-5 h-5" />}
             <span className="text-sm font-semibold tracking-wide uppercase hidden md:block">{theaterMode ? "Exit Theater" : "Theater Mode"}</span>
          </button>
        </div>

        {/* Header Elements (fade out and collapse in theater mode) */}
        <div className={`text-center transition-all duration-1000 ease-in-out origin-top ${theaterMode ? "opacity-0 h-0 overflow-hidden scale-95" : "opacity-100 h-auto mb-16 scale-100"}`}>
            <div
              className={`mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <SectionTag number="08" label="Cinematic" />
            </div>

            <h2
              className={`text-4xl md:text-6xl font-bold tracking-tight mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              The <span className="text-gradient drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">Underdogs</span>
            </h2>

            <p
              className={`text-xl md:text-2xl text-secondary max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Mac. iPad. iPhone. <span className="text-white">Working together in 2 days.</span>
            </p>
        </div>

        {/* Video Hardware Frame */}
        <div
          className={`relative w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-40 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          } ${
            theaterMode ? "max-w-6xl scale-100 md:scale-105 mt-10 md:mt-16" : "max-w-4xl scale-100"
          }`}
        >
          {/* Animated Ambient Glow Behind Screen (Activates in Theater Mode) */}
          <div className={`absolute -inset-4 md:-inset-16 rounded-[3rem] blur-2xl md:blur-3xl transition-all duration-1000 ${theaterMode ? "opacity-40 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-[gradient-shine_8s_linear_infinite]" : "opacity-0 bg-transparent"}`} />

          {/* The Display Hardware Mockup */}
          <div className={`relative rounded-2xl md:rounded-[2rem] bg-black border-[6px] md:border-[12px] border-zinc-900 overflow-hidden transition-all duration-1000 ${theaterMode ? "shadow-[0_0_100px_rgba(0,0,0,1)]" : "shadow-[0_20px_50px_rgba(0,0,0,0.5)]"}`}>
             
            {/* Display Top Bezel Camera Dot */}
            <div className={`absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/10 z-20 transition-opacity duration-500 hidden md:block ${theaterMode ? 'opacity-0' : 'opacity-100'}`} />

            {/* Video Container */}
            <div className="aspect-video relative z-10 bg-[#0a0a0a]">
              <iframe
                src="https://www.youtube.com/embed/iX-KpCq-R4Q?rel=0&modestbranding=1"
                title="Apple The Underdogs Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Screen shine reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>
          
          {/* Stand (Mockup) - fades out in theater mode */}
          <div className={`mx-auto w-24 md:w-32 h-10 md:h-14 bg-gradient-to-b from-zinc-800 to-zinc-900 transition-all duration-700 ${theaterMode ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`} />
          <div className={`mx-auto w-40 md:w-56 h-3 md:h-4 bg-zinc-800 rounded-full blur-[1px] transition-all duration-700 ${theaterMode ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`} />
          
        </div>
      </div>
    </section>
  )
}
