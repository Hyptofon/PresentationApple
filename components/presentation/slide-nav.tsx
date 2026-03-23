"use client"

import { useActiveSection } from "@/hooks/use-scroll-animation"

const slides = [
  "Title",
  "Ecosystem",
  "UX",
  "Design",
  "Privacy",
  "Halo",
  "Show",
  "Video",
  "Discuss",
  "Conclusion",
]

export function SlideNav() {
  const activeSection = useActiveSection()

  const scrollToSection = (index: number) => {
    const section = document.querySelector(`section[data-slide="${index}"]`)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {slides.map((slide, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className="group relative flex items-center justify-end"
          aria-label={`Go to slide ${index + 1}: ${slide}`}
        >
          <span className="absolute right-6 px-2 py-1 rounded text-xs font-mono bg-white/10 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {String(index + 1).padStart(2, "0")} — {slide}
          </span>
          <span
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index
                ? "bg-primary scale-150 shadow-[0_0_10px_rgba(0,113,227,0.5)]"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        </button>
      ))}
    </nav>
  )
}
