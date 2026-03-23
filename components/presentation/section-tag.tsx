"use client"

interface SectionTagProps {
  number: string
  label: string
}

export function SectionTag({ number, label }: SectionTagProps) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono tracking-[0.2em] uppercase text-primary">
      {number} — {label}
    </span>
  )
}
