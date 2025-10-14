"use client"

import { useEffect, useState } from "react"
import { Bath, ShowerHead, Droplets, Wrench } from "lucide-react"

/**
 * Decorative plumbing icon grid
 * - Randomized only on client (prevents hydration mismatch)
 * - Uniform icon size
 * - Slight random rotation
 */
export function BackgroundIconGrid({
  className = "",
  total = 48,
}: {
  className?: string
  total?: number
}) {
  const icons = [Bath, ShowerHead, Droplets, Wrench]
  const [randomizedIcons, setRandomizedIcons] = useState<{ Icon: any; rotation: number }[]>([])

  // Run once on client to randomize after hydration
  useEffect(() => {
    const shuffled = Array.from({ length: total }, () => {
      const Icon = icons[Math.floor(Math.random() * icons.length)]
      const rotation = Math.floor(Math.random() * 20) - 10
      return { Icon, rotation }
    })
    setRandomizedIcons(shuffled)
  }, [total])

  // Render nothing until after client mount (avoids mismatch)
  if (randomizedIcons.length === 0) return null

  return (
    <div className={`absolute inset-0 pointer-events-none z-10 ${className}`}>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-10 sm:gap-16 opacity-20">
        {randomizedIcons.map(({ Icon, rotation }, i) => (
          <div key={i} className="flex items-center justify-center">
            <Icon
              className="h-12 w-12 text-slate-400"
              style={{ transform: `rotate(${rotation}deg)` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
