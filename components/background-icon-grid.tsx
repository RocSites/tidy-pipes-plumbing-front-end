"use client"

import { useMemo } from "react"
import { Bath, ShowerHead, Droplets, Wrench } from "lucide-react"

/**
 * Decorative plumbing icon grid — shuffled once on mount.
 */
export function BackgroundIconGrid({
  className = "",
  total = 48,
}: {
  className?: string
  total?: number
}) {
  const icons = [Bath, ShowerHead, Droplets, Wrench]

  // Shuffle icons once (stable after initial render)
  const shuffledIcons = useMemo(() => {
    const result = []
    for (let i = 0; i < total; i++) {
      const randomIndex = Math.floor(Math.random() * icons.length)
      result.push(icons[randomIndex])
    }
    return result
  }, [total]) // only recomputes if total changes

  return (
    <div className={`absolute inset-0 pointer-events-none z-10 ${className}`}>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-10 sm:gap-16 opacity-20">
        {shuffledIcons.map((Icon, i) => (
          <div key={i} className="flex items-center justify-center">
            <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  )
}
