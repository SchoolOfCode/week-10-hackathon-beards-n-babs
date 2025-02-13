"use client"

import { useState } from "react"
import styles from "./FortuneCookie.module.css"
import TrackedClicks from "./ClickTracker"

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
      <TrackedClicks onClick={revealFortune}>
        <div
          className={`${styles.cookie} ${cookieType === "malevolent" ? styles.malevolent : ""}`}
        >
          {fortune ? fortune : "Click to reveal your fortune"}
        </div>
      </TrackedClicks>
    </div>
  );
}