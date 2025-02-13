"use client"

import { useState } from "react"
import styles from "./FortuneCookie.module.css"

interface FortuneCookieProps {
  fortunes: string[]
  cookieType: "normal" | "malevolent"
}

export default function FortuneCookie({ fortunes, cookieType }: FortuneCookieProps) {
  const [fortune, setFortune] = useState<string | null>(null)

  const revealFortune = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    setFortune(randomFortune)
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.cookie} ${cookieType === "malevolent" ? styles.malevolent : ""}`}
        onClick={revealFortune}
      >
        {fortune ? fortune : "Click to reveal your fortune"}
      </div>
    </div>
  )
}

