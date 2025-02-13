import FortuneCookie from "../../components/FortuneCookie"

const malevolentFortunes = [
  "Your code will have a bug. Good luck finding it!",
  "You'll step on a LEGO brick today. Ouch!",
  "Your coffee will be lukewarm. All day.",
  "You'll forget to save your work. Again.",
  "Your favourite show will be canceled. Sorry not sorry.",
  "You will develop an allergy to fortune cookies.",
  "Your boss will email you about a promotion, but it's theirs, not yours.",
  "You will lose a stare-out with that evil cat on your street.",
  "You've just lost The Game",
  "You will regret not feeding that pigeon. You know the one."
]

export default function MalevolentCookie() {
  return (
    <main>
      <h1>Malevolent Fortune Cookie</h1>
      <FortuneCookie fortunes={malevolentFortunes} cookieType="malevolent" />
    </main>
  )
}

