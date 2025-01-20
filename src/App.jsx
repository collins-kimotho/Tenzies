import React from "react"
import Die from "./Die"
import { useState } from "react"



export default function App() {
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random()*6)
      newDice.push(randomNumber)
    }
    return newDice
  }

  const diceElements = dice.map((num) => (
    <Die value={num} />
  ))

  function rollDice(){
    setDice(generateAllNewDice())
  }


  return (
    <main className="h-screen flex flex-col items-center justify-center w-screen m-auto bg-slate-800 overflow-hidden p-6 ">
      <div className="grid grid-cols-5 gap-4 bg-gray-100 p-4 rounded-lg items-center max-h-96 ">
       {diceElements}
      </div>
      <button
        className="m-4 bg-blue-700/100 py-4 px-10 text-lg font-bold text-white rounded-md"
        onClick={rollDice}
      >
        Roll
      </button>
      
      
      
    </main>    
  )
}