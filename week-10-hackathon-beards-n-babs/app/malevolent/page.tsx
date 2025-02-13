import FortuneCookie from "../../components/FortuneCookie"

const malevolentFortunes = [
  "Your code will have a bug. Good luck finding it!",
  "You'll step on a LEGO brick today. Ouch!",
  "Your coffee will be lukewarm. All day.",
  "You'll forget to save your work. Again.",
  "Your favorite show will be canceled. Sorry not sorry.",
]

export default function MalevolentCookie() {
  return (
    <main>
      <h1>Malevolent Fortune Cookie</h1>
      <FortuneCookie fortunes={malevolentFortunes} cookieType="malevolent" />
    </main>
  )
}

