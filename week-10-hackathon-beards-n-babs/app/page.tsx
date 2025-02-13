import FortuneCookie from '../components/FortuneCookie';



const normalFortunes = [
  'You will have a great day!',
  'Good fortune will be yours.',
  'A pleasant surprise is waiting for you.',
  'Your hard work will pay off soon.',
  'Adventure awaits around the corner!',
  'The weekend is almost upon us!',
  'You have earned that treat you were thinking about.',
  'Success manifests itself in many forms.',
  'Look for things to make you laugh. If you see nothing worth laughing at, pretend you do, then laugh.',
  "Add some lavender to milk. Leave town with an orange. Pretend you're laughing at it.",
];

export default function Home() {
  return (
    <main>
      <h1>Normal Fortune Cookie</h1>
      <FortuneCookie fortunes={normalFortunes} cookieType="normal" />
    </main>
  );
}
