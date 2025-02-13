import FortuneCookie from "../components/FortuneCookie"



const normalFortunes = [
  "You will have a great day!",
  "Good fortune will be yours.",
  "A pleasant surprise is waiting for you.",
  "Your hard work will pay off soon.",
  "Adventure awaits around the corner!",
]

export default function Home() {
  return (
    <main>
      <h1>Normal Fortune Cookie</h1>
      <FortuneCookie fortunes={normalFortunes} cookieType="normal" />
    </main>
  )
}

