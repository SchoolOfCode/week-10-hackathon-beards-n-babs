'use client';

import { useState } from 'react';
import styles from './FortuneCookie.module.css';
import TrackedClicks from './ClickTracker';
import React from 'react';

interface FortuneCookieProps {
  fortunes: string[];
  cookieType: 'normal' | 'malevolent';
}

export default function FortuneCookie({
  fortunes,
  cookieType,
}: FortuneCookieProps) {
  const [fortune, setFortune] = useState<string | null>(null);

  const revealFortune = () => {
    if (fortunes.length === 0) return;

    let newFortune;
    do {
      newFortune =
        fortunes[Math.floor(Math.random() * fortunes.length)];
    } while (newFortune === fortune);

    setFortune(newFortune);
  };

  return (
    <div className={styles.container}>
      <TrackedClicks onClick={revealFortune}>
        <div
          className={`${styles.cookie} ${
            cookieType === 'malevolent' ? styles.malevolent : ''
          } prevent-select`}
        >
          {fortune ? fortune : 'Click to reveal your fortune'}
        </div>
      </TrackedClicks>
    </div>
  );
}
