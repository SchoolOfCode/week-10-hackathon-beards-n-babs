'use client';

import FortuneCookie from '../../components/FortuneCookie';
import { useEffect } from 'react';

const malevolentFortunes = [
  'Your code will have a bug. Good luck finding it!',
  "You'll step on a LEGO brick today. Ouch!",
  'Your coffee will be lukewarm. All day.',
  "You'll forget to save your work. Again.",
  'Your favourite show will be cancelled. Sorry not sorry.',
  'You will develop an allergy to fortune cookies.',
  "Your boss will email you about a promotion, but it's theirs, not yours.",
  'You will lose a stare-out with that evil cat on your street.',
  "You've just lost The Game",
  'You will regret not feeding that pigeon. You know the one.',
];

export default function MalevolentCookie() {
  useEffect(() => {
    console.log('Woohoo');
    const timer = setTimeout(() => {
      throw new Error('An error occurred malevolent Holly');
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, []);

  return (
    <main>
      <h1>Malevolent Fortune Cookie</h1>
      <FortuneCookie
        fortunes={malevolentFortunes}
        cookieType="malevolent"
      />
    </main>
  );
}
