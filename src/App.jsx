import React from "react"
import Die from "./Die"
import { useState } from "react"
import { nanoid } from "nanoid"



export default function App() {
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random()*6),
        isHeld: true,
        id: nanoid()
      }))
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id} 
      value={dieObj.value}
      isHeld = {dieObj.isHeld}
     />
  ))

  function rollDice(){
    setDice(generateAllNewDice())
  }


  return (
    <main className="h-screen flex flex-col items-center justify-centre w-screen m-auto bg-gray-100  overflow-hidden p-6 ">
      <div className="grid grid-cols-5 gap-4 p-4 rounded-lg items-center max-h-96 ">
       {diceElements}
       
      </div>
      <button
        className="m-4 bg-blue-700/100 py-4 px-10 text-lg font-bold text-white rounded-md cursor-pointer hover:opacity-75"
        onClick={rollDice}
      >
        Roll
      </button>
      
      
      
      
    </main>    
  )
}