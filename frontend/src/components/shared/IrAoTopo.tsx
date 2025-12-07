"use client"

import { IconChevronCompactUp } from "@tabler/icons-react"
import { useEffect, useState } from "react"

export default function IrAoTopo() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 64)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 bg-zinc-700 text-white p-2 rounded-full shadow-lg
        hover:bg-zinc-600 hover:cursor-pointer
        transition-all duration-300

        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <IconChevronCompactUp size={20} />
    </button>
  )
}
