'use client';


import { useEffect } from 'react';
import FortuneCookie from '../components/FortuneCookie';

const normalFortunes = [
  'You will have a great day!',
  'Good fortune will be yours.',
  'A pleasant surprise is waiting for you.',
  'Your hard work will pay off soon.',
  'Adventure awaits around the corner!',
];

export default function Home() {
  useEffect(() => {
    console.log('Woohoo');
    const timer = setTimeout(() => {
      throw new Error('An error occurred Holly');
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, []);

  return (
    <main>
      <h1>Normal Fortune Cookie</h1>
      <FortuneCookie fortunes={normalFortunes} cookieType="normal" />
    </main>
  );
}
