'use client'

import { useState, useEffect } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface BackgroundToggleProps {
  onToggle: (isAnimated: boolean) => void;
}

// export default function BackgroundToggle() {
//   const [isAnimated, setIsAnimated] = useState(true)

//   useEffect(() => {
//     document.body.classList.toggle('animated-bg-off', !isAnimated)
//   }, [isAnimated])

export default function BackgroundToggle({ onToggle }: BackgroundToggleProps) {
  const [isAnimated, setIsAnimated] = useState(true)

  useEffect(() => {
    onToggle(isAnimated)
  }, [isAnimated, onToggle])

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1">
      <Switch
        id="animated-bg"
        checked={isAnimated}
        onCheckedChange={setIsAnimated}
        className="data-[state=checked]:bg-white/25 data-[state=unchecked]:bg-teal-600"
      />
      <Label className="text-white font-zen font-light" htmlFor="animated-bg">
        { isAnimated ? 'BG On' : 'BG Off' }
      </Label>
    </div>
  )
}