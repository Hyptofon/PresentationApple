"use client"

import { useEffect, useState } from "react"

// Увеличено количество частиц для хаотичности
const BACKGROUND_PARTICLES = Array.from({ length: 60 }).map((_, i) => ({
    width: (i % 4) * 2 + 1.5 + "px",
    left: (i * 13.7) % 100 + "%",
    top: (i * 17.3) % 100 + "%",
    animationDuration: (i % 5) * 8 + 15 + "s",
    animationDelay: `-${(i % 15) * 3}s`,
    driftType: i % 3 // 3 разных траектории движения
}))

export function AnimatedBackground() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-background text-foreground">
            {/* Advanced CSS Animations with more chaos */}
            <style>{`
        @keyframes float-particle-0 {
          0% { transform: translate(0, 10vh) scale(0.5); opacity: 0; }
          25% { transform: translate(2vw, 0vh) scale(1); opacity: 0.6; }
          50% { transform: translate(-2vw, -10vh) scale(1.2); opacity: 0.8; }
          75% { transform: translate(3vw, -20vh) scale(0.8); opacity: 0.4; }
          100% { transform: translate(-1vw, -30vh) scale(0.5); opacity: 0; }
        }
        @keyframes float-particle-1 {
          0% { transform: translate(0, 15vh) scale(0.3); opacity: 0; }
          30% { transform: translate(-4vw, 5vh) scale(0.8); opacity: 0.5; }
          60% { transform: translate(4vw, -15vh) scale(1.5); opacity: 0.9; }
          100% { transform: translate(-2vw, -35vh) scale(0.4); opacity: 0; }
        }
        @keyframes float-particle-2 {
          0% { transform: translate(2vw, 5vh) scale(0.6); opacity: 0; }
          40% { transform: translate(-5vw, -5vh) scale(1.1); opacity: 0.7; }
          80% { transform: translate(1vw, -25vh) scale(0.9); opacity: 0.5; }
          100% { transform: translate(-3vw, -45vh) scale(0.2); opacity: 0; }
        }
        @keyframes wave-move {
          0% { transform: translateX(0) scaleY(1) rotate(0deg); opacity: 0.2; }
          50% { transform: translateX(-5%) scaleY(1.15) rotate(2deg); opacity: 0.5; }
          100% { transform: translateX(0) scaleY(1) rotate(0deg); opacity: 0.2; }
        }
      `}</style>

            {/* Elegant 3D-like Glowing Waves / Ribbons with richer colors and chaotic intersections */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-25">
                <svg
                    className="absolute w-[200%] h-[200%] -left-[50%] -top-[50%] animate-[spin_100s_linear_infinite]"
                    viewBox="0 0 1000 1000"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.05)" />
                            <stop offset="30%" stopColor="rgba(59, 130, 246, 0.5)" />
                            <stop offset="70%" stopColor="rgba(147, 51, 234, 0.5)" />
                            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                        </linearGradient>
                        <linearGradient id="wave-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.05)" />
                            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" />
                            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                        </linearGradient>
                        <linearGradient id="wave-grad-3" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.05)" />
                            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.6)" />
                            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                        </linearGradient>
                        <filter id="glow-heavy" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="25" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <filter id="glow-light" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="10" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Original Style Ribbons (Thick) */}
                    <path
                        d="M -200,500 C 200,100 800,900 1200,500"
                        stroke="url(#wave-grad-1)"
                        strokeWidth="60"
                        filter="url(#glow-heavy)"
                        style={{ animation: "wave-move 14s ease-in-out infinite" }}
                    />
                    <path
                        d="M -100,300 C 400,800 600,200 1100,600"
                        stroke="url(#wave-grad-1)"
                        strokeWidth="40"
                        filter="url(#glow-heavy)"
                        style={{ animation: "wave-move 22s ease-in-out infinite reverse" }}
                    />
                    <path
                        d="M 100,800 C 500,200 600,900 1300,400"
                        stroke="url(#wave-grad-1)"
                        strokeWidth="50"
                        filter="url(#glow-heavy)"
                        style={{ animation: "wave-move 18s ease-in-out infinite" }}
                    />
                    
                    {/* Chaotic Accent Ribbons */}
                    <path
                        d="M -300,700 C 100,200 800,900 1400,300"
                        stroke="url(#wave-grad-2)"
                        strokeWidth="25"
                        filter="url(#glow-light)"
                        style={{ animation: "wave-move 19s ease-in-out infinite -2s" }}
                    />
                    <path
                        d="M 50,150 C 600,800 900,100 1100,950"
                        stroke="url(#wave-grad-3)"
                        strokeWidth="20"
                        filter="url(#glow-heavy)"
                        style={{ animation: "wave-move 25s ease-in-out infinite reverse -11s" }}
                    />
                    <path
                        d="M 200,-100 C 500,400 300,800 800,1200"
                        stroke="url(#wave-grad-3)"
                        strokeWidth="15"
                        filter="url(#glow-light)"
                        style={{ animation: "wave-move 15s ease-in-out infinite -7s" }}
                    />
                </svg>
            </div>

            {/* Chaotic Floating Particles with Multiple Colors */}
            <div className="absolute inset-0 pointer-events-none">
                {BACKGROUND_PARTICLES.map((p, i) => {
                    const colorClasses = [
                        "bg-blue-400/70 drop-shadow-[0_0_6px_rgba(59,130,246,0.4)]",
                        "bg-purple-400/70 drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]",
                        "bg-cyan-300/70 drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]",
                        "bg-white/70 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    ]
                    const colorClass = colorClasses[i % colorClasses.length]
                    
                    return (
                        <div
                            key={i}
                            className={`absolute rounded-full ${colorClass}`}
                            style={{
                                width: p.width,
                                height: p.width,
                                left: p.left,
                                top: p.top,
                                animation: `float-particle-${p.driftType} ${p.animationDuration} ease-in-out infinite`,
                                animationDelay: p.animationDelay,
                            }}
                        />
                    )
                })}
            </div>
            
            {/* Ambient vignette to make centers pop */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.3)_150%)]" />
        </div>
    )
}
