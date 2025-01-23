import React from "react"
import Die from "./Die"
import { useState, useRef } from "react"
import { nanoid } from "nanoid"
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { useEffect } from "react"



export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice())
  const buttonRef = useRef(null)

  const gameWon = dice.every(die => die.isHeld) &&
                  dice.every(die => die.value === dice[0].value)

  useEffect(() => {
    if (gameWon) {
        buttonRef.current.focus()
    }
}, [gameWon])

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        // value: Math.ceil(Math.random()*6),
        value: 5,
        isHeld: false,
        id: nanoid()
      }))
  }
  // Update the 'hold' function to flip the 'isHeld' 
  // property on the object in the array that was clicked
  // based on the 'id' prop passed into the function.
  function hold(id) {
    
    setDice(oldDice => {
        return oldDice.map(die => {
            return die.id === id ?
                {...die, isHeld: !die.isHeld} :
                die
        })
    })
}

  function reset(){
    setDice(generateAllNewDice())
  }


  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id} 
      value={dieObj.value}
      isHeld = {dieObj.isHeld}
      hold = {hold}
      id = {dieObj.id}
      
     />
  ))

  function rollDice(){
    if (!gameWon) {
      setDice((prevDice) => prevDice.map((die) => die.isHeld ? die : {...die, value: Math.ceil(Math.random()*6)}))
    } else {
      reset( )
    }
    
  }




  return (
    
    <main className="h-screen flex flex-col items-center justify-centre w-screen m-auto bg-gray-100  overflow-hidden p-6 ">
      {gameWon && <Confetti className="w-full h-full"/>}
      <div className="flex flex-col bg-stone-300 items-center justify-center my-8 p-2 md:p-8 rounded-xl h-full">
        <h1 className="font-bold text-3xl">Tenzies</h1>
        <p className="text-xl text-center my-4">Roll untill all the dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="grid grid-cols-5 gap-4 p-4 rounded-lg items-center max-h-96 ">
        {diceElements}
        
        </div> 
        <button
          className="m-4 bg-blue-700/100 py-4 px-10 text-lg font-bold text-white rounded-md cursor-pointer hover:opacity-75"
          onClick={rollDice}
          ref={buttonRef}
        >
          {gameWon ? "New Game" : "Roll"}
        </button>
        <button className="my-4 bg-red-700/100 py-4 px-10 text-lf font-bold text-white rounded-md cursor-pointer hover:opacity-75"
          onClick={reset}
        >
          Reset
        </button>
      </div>
     
      
      
      
      
    </main>    
  )
}